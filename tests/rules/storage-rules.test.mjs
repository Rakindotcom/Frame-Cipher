// Cloud Storage security rules test suite.
//
//   npx firebase emulators:exec --only storage "node --test tests/storage-rules.test.mjs"
//
// These tests lock in the media upload policy: raster images only, size limits
// enforced server-side, and admin-only writes.

import test from "node:test";
import assert from "node:assert/strict";
import { initializeTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { readFileSync } from "node:fs";
import { ref, uploadBytes, getBytes, deleteObject } from "firebase/storage";

const testEnv = await initializeTestEnvironment({
  projectId: "framecipherweb-rules-test",
  storage: { rules: readFileSync("storage.rules", "utf8") },
});

const admin = () =>
  testEnv.authenticatedContext("admin-uid", {
    email: "pervesmahedi@gmail.com",
    email_verified: true,
  }).storage();
// Every admin in ADMIN_EMAILS / firestore.rules must be able to upload. A
// mismatch here silently breaks the second admin: they can sign in and save
// content, but every image upload is rejected with a permission error.
const secondAdmin = () =>
  testEnv.authenticatedContext("admin-uid-2", {
    email: "mahedihasancareerbuilders@gmail.com",
    email_verified: true,
  }).storage();
const attacker = () =>
  testEnv.authenticatedContext("attacker-uid", {
    email: "attacker@example.com",
    email_verified: true,
  }).storage();
const anon = () => testEnv.unauthenticatedContext().storage();

const KB = 1024;
const MB = 1024 * 1024;

// A buffer whose declared length is honoured by the emulator. The rules only
// inspect the declared size and content type, not the bytes themselves.
function blobOfSize(bytes) {
  return new Uint8Array(bytes);
}

test("media uploads accept raster images within the limit", async () => {
  await assertSucceeds(
    uploadBytes(ref(admin(), "media/ok.png"), blobOfSize(64 * KB), { contentType: "image/png" })
  );
  for (const type of ["image/jpeg", "image/webp", "image/avif", "image/gif"]) {
    await assertSucceeds(
      uploadBytes(ref(admin(), `media/ok.${type.split("/")[1]}`), blobOfSize(8 * KB), {
        contentType: type,
      })
    );
  }
});

test("exactly 10 MB is allowed because the client rejects only larger files", async () => {
  await assertSucceeds(
    uploadBytes(ref(admin(), "media/exact-limit.png"), blobOfSize(10 * MB), {
      contentType: "image/png",
    })
  );
  await assertFails(
    uploadBytes(ref(admin(), "media/over-limit.png"), blobOfSize(10 * MB + 1), {
      contentType: "image/png",
    })
  );
});

test("SVG uploads are rejected to prevent stored XSS", async () => {
  // Firebase Storage serves the stored content type inline, so an SVG at a
  // download URL would execute script in the site's origin.
  await assertFails(
    uploadBytes(ref(admin(), "media/evil.svg"), blobOfSize(2 * KB), {
      contentType: "image/svg+xml",
    })
  );
});

test("non-image content types are rejected", async () => {
  for (const type of ["text/html", "application/javascript", "application/pdf", "image/png; charset=utf-8"]) {
    await assertFails(
      uploadBytes(ref(admin(), `media/bad-${type.replace(/\W/g, "")}`), blobOfSize(1 * KB), {
        contentType: type,
      }),
      type + " must not be uploadable"
    );
  }
});

test("only admins can upload or delete media", async () => {
  await assertSucceeds(
    uploadBytes(ref(admin(), "media/seed.png"), blobOfSize(4 * KB), { contentType: "image/png" })
  );

  await assertFails(
    uploadBytes(ref(attacker(), "media/hack.png"), blobOfSize(4 * KB), { contentType: "image/png" })
  );
  await assertFails(
    uploadBytes(ref(anon(), "media/hack.png"), blobOfSize(4 * KB), { contentType: "image/png" })
  );
  await assertFails(deleteObject(ref(attacker(), "media/seed.png")));
  await assertFails(deleteObject(ref(anon(), "media/seed.png")));
  await assertSucceeds(deleteObject(ref(admin(), "media/seed.png")));
});

test("every admin in firestore.rules can upload", async () => {
  // storage.rules and firestore.rules keep separate hardcoded allowlists
  // because rules cannot read process.env. This test fails if the two drift.
  await assertSucceeds(
    uploadBytes(ref(secondAdmin(), "media/second-admin.png"), blobOfSize(4 * KB), {
      contentType: "image/png",
    })
  );
  await assertSucceeds(
    uploadBytes(ref(secondAdmin(), "avatars/second-admin.png"), blobOfSize(4 * KB), {
      contentType: "image/png",
    })
  );
  await assertSucceeds(deleteObject(ref(secondAdmin(), "media/second-admin.png")));
});

test("admin matching is case-insensitive and requires a verified email", async () => {
  const mixedCase = testEnv.authenticatedContext("mixed-uid", {
    email: "PervesMahedi@Gmail.com",
    email_verified: true,
  }).storage();
  await assertSucceeds(
    uploadBytes(ref(mixedCase, "media/mixed.png"), blobOfSize(4 * KB), { contentType: "image/png" })
  );

  const unverified = testEnv.authenticatedContext("unverified-uid", {
    email: "pervesmahedi@gmail.com",
    email_verified: false,
  }).storage();
  await assertFails(
    uploadBytes(ref(unverified, "media/unverified.png"), blobOfSize(4 * KB), {
      contentType: "image/png",
    })
  );
});

test("avatars are capped at 5 MB and covers at 10 MB", async () => {
  await assertSucceeds(
    uploadBytes(ref(admin(), "avatars/ok.png"), blobOfSize(5 * MB), { contentType: "image/png" })
  );
  await assertFails(
    uploadBytes(ref(admin(), "avatars/too-big.png"), blobOfSize(5 * MB + 1), {
      contentType: "image/png",
    })
  );
  await assertSucceeds(
    uploadBytes(ref(admin(), "covers/ok.png"), blobOfSize(10 * MB), { contentType: "image/png" })
  );
});

test("published media is world-readable", async () => {
  await assertSucceeds(
    uploadBytes(ref(admin(), "media/public.png"), blobOfSize(4 * KB), { contentType: "image/png" })
  );
  await assertSucceeds(getBytes(ref(anon(), "media/public.png")));
  await assertSucceeds(getBytes(ref(anon(), "media/ok.png")));
});

test("unlisted buckets and paths are denied outright", async () => {
  await assertFails(getBytes(ref(anon(), "private-stuff/secret.png")));
  await assertFails(
    uploadBytes(ref(admin(), "secrets/creds.txt"), blobOfSize(1 * KB), { contentType: "text/plain" })
  );
});

test.after(async () => {
  await testEnv.cleanup();
});
