// Firestore security rules test suite.
//
// Runs entirely against the local Firestore emulator, so it never touches the
// live framecipherweb project and needs no credentials.
//
//   npx firebase emulators:exec --only firestore "node --test tests/firestore-rules.test.mjs"
//
// A rules file that merely parses is worthless, so this suite asserts that the
// rules actually deny what they are meant to deny.

import test from "node:test";
import assert from "node:assert/strict";
import { initializeTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { readFileSync } from "node:fs";
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const testEnv = await initializeTestEnvironment({
  projectId: "framecipherweb-rules-test",
  firestore: { rules: readFileSync("firestore.rules", "utf8") },
});

// Note: the first argument is the uid and the second is the token claims.
const ADMIN_UID = "Io8C94PyB5QKlENIc08IGiPaLnE3";
const admin = () =>
  testEnv.authenticatedContext(ADMIN_UID, {
    email: "teamframecipher@example.com",
    email_verified: true,
    firebase: { sign_in_provider: "password" },
  }).firestore();
const attacker = () =>
  testEnv.authenticatedContext("attacker-uid", {
    email: "teamframecipher@example.com",
    email_verified: true,
    firebase: { sign_in_provider: "password" },
  }).firestore();
const anon = () => testEnv.unauthenticatedContext().firestore();

const POSTS = collection(anon(), "blog_posts");

test("blog post fixtures", async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await db.doc("blog_posts/pub-1").set({ slug: "p1", status: "published", visibility: "public" });
    await db.doc("blog_posts/draft-1").set({ slug: "d1", status: "draft", visibility: "public" });
    await db.doc("blog_posts/sched-1").set({ slug: "s1", status: "scheduled", visibility: "public" });
    await db.doc("blog_posts/pw-1").set({ slug: "w1", status: "published", visibility: "password" });
    await db.doc("blog_posts/priv-1").set({ slug: "v1", status: "published", visibility: "private" });
    // Legacy document written before `visibility` existed.
    await db.doc("blog_posts/legacy-1").set({ slug: "l1", status: "published" });
  });
});

test("only published public posts are readable by the public", async () => {
  await assertSucceeds(getDoc(doc(anon(), "blog_posts/pub-1")));

  for (const id of ["draft-1", "sched-1", "pw-1", "priv-1", "legacy-1", "missing"]) {
    await assertFails(getDoc(doc(anon(), "blog_posts/" + id)), id + " must not be public");
  }
});

test("public queries must be constrained to exactly what the rules permit", async () => {
  // No filter: could return drafts.
  await assertFails(getDocs(query(POSTS)));
  // status alone: could still return password or private posts.
  await assertFails(getDocs(query(POSTS, where("status", "==", "published"))));
  // Explicitly asking for drafts.
  await assertFails(getDocs(query(POSTS, where("status", "==", "draft"))));
  // Exactly the published + public set.
  await assertSucceeds(
    getDocs(
      query(POSTS, where("status", "==", "published"), where("visibility", "==", "public"))
    )
  );
});

test("the allowed public query returns only published public posts", async () => {
  const snap = await getDocs(
    query(POSTS, where("status", "==", "published"), where("visibility", "==", "public"))
  );
  const ids = snap.docs.map((d) => d.id);
  assert.deepEqual(ids, ["pub-1"]);
});

test("only the configured Firebase UID can read drafts and write posts", async () => {
  await assertSucceeds(getDoc(doc(admin(), "blog_posts/draft-1")));
  await assertSucceeds(
    getDocs(query(collection(admin(), "blog_posts"), where("status", "==", "draft")))
  );

  await assertFails(getDoc(doc(attacker(), "blog_posts/draft-1")));
  await assertFails(getDoc(doc(anon(), "blog_posts/draft-1")));

  await assertSucceeds(setDoc(doc(admin(), "blog_posts/new-post"), { slug: "np", status: "draft" }));
  await assertFails(setDoc(doc(attacker(), "blog_posts/evil"), { slug: "evil" }));
  await assertFails(setDoc(doc(anon(), "blog_posts/evil"), { slug: "evil" }));
});

test("admin access requires password sign-in and the matching UID", async () => {
  const google = testEnv.authenticatedContext(ADMIN_UID, {
    email: "teamframecipher@example.com",
    email_verified: true,
    firebase: { sign_in_provider: "google.com" },
  }).firestore();
  await assertFails(getDoc(doc(google, "blog_posts/draft-1")));

});

test("published authors are public but draft authors stay in the dashboard", async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await ctx.firestore().doc("author_profiles/published-author").set({ name: "Published", status: "published" });
    await ctx.firestore().doc("author_profiles/draft-author").set({ name: "Draft", status: "draft" });
  });

  await assertSucceeds(getDoc(doc(anon(), "author_profiles/published-author")));
  await assertFails(getDoc(doc(anon(), "author_profiles/draft-author")));
  await assertFails(getDocs(collection(anon(), "author_profiles")));
  const publicAuthors = await getDocs(query(collection(anon(), "author_profiles"), where("status", "==", "published")));
  assert.deepEqual(publicAuthors.docs.map((entry) => entry.id), ["published-author"]);
  await assertSucceeds(getDoc(doc(admin(), "author_profiles/draft-author")));
  await assertSucceeds(getDocs(collection(admin(), "author_profiles")));
});

test("admin-only collections reject every other caller", async () => {
  for (const path of ["admin_profiles/u1", "post_revisions/r1"]) {
    await assertSucceeds(getDoc(doc(admin(), path)));
    await assertFails(getDoc(doc(attacker(), path)));
    await assertFails(getDoc(doc(anon(), path)));
    await assertFails(setDoc(doc(attacker(), path), { x: 1 }));
  }

  await assertSucceeds(getDoc(doc(admin(), "post_analytics_daily/2026-01-01")));
  await assertFails(getDoc(doc(anon(), "post_analytics_daily/2026-01-01")));
  // Server-only aggregation output.
  await assertFails(setDoc(doc(admin(), "post_analytics_daily/2026-01-01"), { views: 1 }));
});

test("saved_inquiries cannot inject privileged fields", async () => {
  const a = anon();
  await assertSucceeds(
    addDoc(collection(a, "saved_inquiries"), { serviceSlug: "seo", createdAt: new Date() })
  );
  await assertFails(
    addDoc(collection(a, "saved_inquiries"), { serviceSlug: "seo", role: "admin" })
  );
  await assertFails(addDoc(collection(a, "saved_inquiries"), { junk: "x" }));
  // Unbounded free-text field.
  await assertFails(
    addDoc(collection(a, "saved_inquiries"), { serviceSlug: "seo", notes: "x".repeat(3000) })
  );
  // One user cannot read another user's inquiries.
  await assertFails(getDocs(query(collection(attacker(), "saved_inquiries"))));
  await assertFails(getDocs(collection(anon(), "saved_inquiries")));
});

test("analytics hits accept bounded payloads and nothing more", async () => {
  const a = anon();
  await assertSucceeds(
    addDoc(collection(a, "analytics_hits"), {
      sessionId: "s-1",
      path: "/blog",
      timestamp: new Date(),
    })
  );
  await assertSucceeds(
    addDoc(collection(a, "analytics_hits"), {
      sessionId: "s-1",
      path: "/blog",
      timestamp: new Date(),
      isHeartbeat: true,
      isCalculation: false,
    })
  );
  await assertFails(
    addDoc(collection(a, "analytics_hits"), {
      sessionId: "s-1",
      path: "/blog",
      timestamp: new Date(),
      isHeartbeat: "true",
    })
  );
  await assertFails(addDoc(collection(a, "analytics_hits"), { path: "/blog" }));
  await assertFails(
    addDoc(collection(a, "analytics_hits"), {
      sessionId: "s-2",
      path: "/blog",
      timestamp: new Date(),
      referrer: "x".repeat(5000),
    })
  );
  await assertFails(
    addDoc(collection(a, "analytics_hits"), {
      sessionId: "s-3",
      path: "/blog",
      timestamp: new Date(),
      isAdmin: true,
    })
  );
  await assertFails(getDocs(collection(a, "analytics_hits")));
  await assertFails(setDoc(doc(a, "analytics_hits/x"), { sessionId: "s" }));
});

test("contact messages and comments lock their field sets", async () => {
  const a = anon();
  await assertSucceeds(
    addDoc(collection(a, "contact_messages"), {
      name: "A",
      email: "a@example.com",
      message: "Hello",
      createdAt: new Date(),
    })
  );
  await assertFails(
    addDoc(collection(a, "contact_messages"), {
      name: "A",
      email: "a@example.com",
      message: "Hello",
      createdAt: new Date(),
      isAdmin: true,
    })
  );

  await assertSucceeds(
    addDoc(collection(a, "comments"), {
      postId: "pub-1",
      bodyHtml: "Nice post",
      createdAt: new Date(),
    })
  );
  // Self-approval must be impossible.
  await assertFails(
    addDoc(collection(a, "comments"), {
      postId: "pub-1",
      bodyHtml: "Spam",
      createdAt: new Date(),
      isApproved: true,
    })
  );
  await assertFails(
    addDoc(collection(a, "comments"), {
      postId: "pub-1",
      bodyHtml: "Spam",
      createdAt: new Date(),
      status: "approved",
    })
  );
});

test("newsletter signups cannot smuggle in extra fields", async () => {
  const a = anon();
  await assertSucceeds(
    addDoc(collection(a, "newsletter_subscribers"), {
      email: "a@example.com",
      createdAt: new Date(),
    })
  );
  await assertFails(
    addDoc(collection(a, "newsletter_subscribers"), {
      email: "a@example.com",
      createdAt: new Date(),
      role: "admin",
    })
  );
  await assertFails(getDocs(collection(a, "newsletter_subscribers")));
});

test("unmatched collections are denied outright", async () => {
  await assertFails(getDoc(doc(anon(), "secret_config/app")));
  await assertFails(getDoc(doc(admin(), "secret_config/app")));
  await assertFails(setDoc(doc(admin(), "secret_config/app"), { a: 1 }));
});

test("publishable reference data stays world-readable but admin-written", async () => {
  const a = anon();
  for (const path of ["categories/seo", "tags/technical", "redirects/r1", "media/m1"]) {
    await assertSucceeds(getDoc(doc(a, path)));
  }
  await assertFails(setDoc(doc(a, "media/m2"), { url: "x" }));
  await assertSucceeds(setDoc(doc(admin(), "media/m2"), { url: "x" }));
});

test.after(async () => {
  await testEnv.cleanup();
});
