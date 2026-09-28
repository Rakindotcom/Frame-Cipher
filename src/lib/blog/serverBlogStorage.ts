import fs from "fs";
import path from "path";
import { BlogPostItem } from "@/types/blog";
import {
  getAdminFirestore,
  stripUndefined,
  describeMissingAdminConfig,
} from "@/lib/server/firebaseAdmin";
import { isLegacyDemoPost } from "./getBlogPosts";

/**
 * Blog post persistence.
 *
 * Firestore (`blog_posts`) is the source of truth. The JSON files are a
 * development-only fallback: Netlify Functions have a read-only, per-invocation
 * filesystem, so writing them in production threw an error that a `try/catch`
 * swallowed while the route still replied `{ success: true }`. The post was
 * never stored and its URL 404'd. Production now fails loudly instead; the JSON
 * path is only taken when no service account is configured and we are not on a
 * deployed environment.
 */

// `turbopackIgnore` keeps the Node file tracer from treating these as a
// whole-project trace. These files are a development-only fallback; Firestore
// is the store that ships.
const PRIMARY_FILE = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "src",
  "data",
  "blog-posts.json"
);
const ALIAS_FILE = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "src",
  "data",
  "post.json"
);

const COLLECTION = "blog_posts";

function normalizeBlogPost(post: BlogPostItem): BlogPostItem {
  return {
    ...post,
    featuredImage: post.featuredImage && typeof post.featuredImage === "object"
      ? {
          url: post.featuredImage.url || "",
          alt: post.featuredImage.alt || "",
          hasAlt: Boolean(post.featuredImage.hasAlt || post.featuredImage.alt),
        }
      : { url: "", alt: "", hasAlt: false },
    tags: Array.isArray(post.tags) ? post.tags : [],
    categories: Array.isArray(post.categories) && post.categories.length > 0 ? post.categories : [post.category || "Growth Marketing"],
    status: (post.status as "published" | "draft" | "scheduled") || "published",
    // The security rules require `visibility` with no default, so a legacy
    // document that predates the field stays private until it is re-saved.
    visibility: post.visibility || "public",
  };
}

function postDocumentId(post: BlogPostItem): string {
  return post.id || post.slug;
}

function newestMtime(file: string): number {
  try {
    if (fs.existsSync(/* turbopackIgnore: true */ file)) {
      return fs.statSync(/* turbopackIgnore: true */ file).mtimeMs;
    }
  } catch {}
  return -1;
}

// Each candidate is read through its own static `path.join` so the build-time
// file tracer resolves a fixed set of paths. Passing a loop-selected variable
// to `fs.readFileSync` makes the tracer treat the call as a whole-project trace,
// which is what produced the "unexpected file in NFT list" warning. The
// `turbopackIgnore` argument keeps the tracer from following the dev-only
// fallback reads at all.
function readJsonFile(file: string): unknown {
  try {
    if (fs.existsSync(/* turbopackIgnore: true */ file)) {
      return JSON.parse(fs.readFileSync(/* turbopackIgnore: true */ file, "utf-8"));
    }
  } catch (err) {
    console.warn("Failed to read server blog posts file:", err);
  }
  return null;
}

function readLocalFile(): BlogPostItem[] {
  const useAlias = newestMtime(ALIAS_FILE) > newestMtime(PRIMARY_FILE);
  const parsed = useAlias ? readJsonFile(ALIAS_FILE) : readJsonFile(PRIMARY_FILE);
  if (Array.isArray(parsed)) {
    return parsed
      .filter((p) => !isLegacyDemoPost(p))
      .map(normalizeBlogPost);
  }
  return [];
}

function writeLocalFile(posts: BlogPostItem[]): boolean {
  try {
    const clean = posts
      .filter((p) => !isLegacyDemoPost(p))
      .map(normalizeBlogPost);
    const serialized = JSON.stringify(clean, null, 2);
    // Write to both primary and alias files so both post.json and blog-posts.json stay in sync
    fs.writeFileSync(PRIMARY_FILE, serialized, "utf-8");
    try {
      fs.writeFileSync(ALIAS_FILE, serialized, "utf-8");
    } catch {}
    return true;
  } catch (err) {
    console.error("Failed to write server blog posts file:", err);
    return false;
  }
}

/**
 * The JSON files can only be trusted on a developer machine. On a deployed
 * environment a write is guaranteed to fail, so returning a "success" that lost
 * the data is worse than surfacing the misconfiguration.
 */
function canUseLocalFiles(): boolean {
  return process.env.NODE_ENV !== "production";
}

function normalizeFromFirestore(data: Record<string, any>, id: string): BlogPostItem {
  const { id: _ignored, updatedAt: _updatedAt, createdAt: _createdAt, ...rest } = data;
  return normalizeBlogPost({ ...rest, id: rest.id || id } as BlogPostItem);
}

export async function getServerBlogPosts(): Promise<BlogPostItem[]> {
  const firestore = getAdminFirestore();
  if (!firestore) {
    return readLocalFile();
  }

  try {
    const snapshot = await firestore.collection(COLLECTION).get();
    return snapshot.docs
      .map((doc) => normalizeFromFirestore(doc.data(), doc.id))
      .filter((post) => !isLegacyDemoPost(post));
  } catch (error: any) {
    // A read failure must not blank the blog, but it also must not hide a
    // broken Firestore setup behind stale local data.
    console.error("Firestore blog read failed:", error?.message || error);
    if (canUseLocalFiles()) return readLocalFile();
    return [];
  }
}

/**
 * A post is publicly readable only when it is published and not hidden behind a
 * password or marked private.
 *
 * The Admin SDK bypasses Firestore security rules, so this check is the only
 * thing standing between a draft and the public site. `visibility` is required
 * with no default, matching firestore.rules: a document that predates the field
 * stays private until it is re-saved through the CMS, which always writes it.
 */
export function isPubliclyVisible(post: BlogPostItem | null | undefined): boolean {
  if (!post) return false;
  if (isLegacyDemoPost(post)) return false;
  return post.status === "published" && post.visibility === "public";
}

/**
 * Drops the password before a post crosses the network. A private post is
 * filtered out entirely, but a published post can still carry a stale
 * `postPassword` field and that value must never reach a browser.
 */
function toPublicPost(post: BlogPostItem): BlogPostItem {
  const { postPassword: _postPassword, ...rest } = post;
  return rest as BlogPostItem;
}

/** Posts safe to render on a public page or return from an unauthenticated API. */
export async function getPublicBlogPosts(): Promise<BlogPostItem[]> {
  const posts = await getServerBlogPosts();
  return posts.filter(isPubliclyVisible).map(toPublicPost);
}

export async function saveAllServerBlogPosts(
  posts: BlogPostItem[]
): Promise<{ success: boolean; error?: string }> {
  const clean = posts.filter((p) => !isLegacyDemoPost(p)).map(normalizeBlogPost);
  const firestore = getAdminFirestore();

  if (!firestore) {
    if (!canUseLocalFiles()) {
      return { success: false, error: describeMissingAdminConfig() };
    }
    writeLocalFile(clean);
    return { success: true };
  }

  try {
    const batch = firestore.batch();
    for (const post of clean) {
      batch.set(
        firestore.collection(COLLECTION).doc(postDocumentId(post)),
        stripUndefined(post) as Record<string, any>,
        { merge: true }
      );
    }
    await batch.commit();
    if (canUseLocalFiles()) writeLocalFile(clean);
    return { success: true };
  } catch (error: any) {
    console.error("Firestore blog write failed:", error?.message || error);
    return { success: false, error: error?.message || "Failed to save blog posts." };
  }
}

export async function saveServerBlogPost(
  post: BlogPostItem
): Promise<{ success: boolean; error?: string }> {
  if (isLegacyDemoPost(post)) {
    return { success: false, error: "Legacy demo posts cannot be saved." };
  }

  const normalized = normalizeBlogPost(post);
  const firestore = getAdminFirestore();

  if (!firestore) {
    if (!canUseLocalFiles()) {
      return { success: false, error: describeMissingAdminConfig() };
    }
    const current = readLocalFile();
    const existingIdx = current.findIndex(
      (p) => p.id === normalized.id || p.slug === normalized.slug
    );
    if (existingIdx >= 0) {
      current[existingIdx] = normalized;
    } else {
      current.unshift(normalized);
    }
    writeLocalFile(current);
    return { success: true };
  }

  try {
    await firestore
      .collection(COLLECTION)
      .doc(postDocumentId(normalized))
      .set(stripUndefined(normalized) as Record<string, any>, { merge: true });

    if (canUseLocalFiles()) {
      const current = readLocalFile();
      const existingIdx = current.findIndex(
        (p) => p.id === normalized.id || p.slug === normalized.slug
      );
      if (existingIdx >= 0) {
        current[existingIdx] = normalized;
      } else {
        current.unshift(normalized);
      }
      writeLocalFile(current);
    }
    return { success: true };
  } catch (error: any) {
    console.error("Firestore blog write failed:", error?.message || error);
    return { success: false, error: error?.message || "Failed to save blog post." };
  }
}

export async function deleteServerBlogPost(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const firestore = getAdminFirestore();

  if (!firestore) {
    if (!canUseLocalFiles()) {
      return { success: false, error: describeMissingAdminConfig() };
    }
    const current = readLocalFile();
    writeLocalFile(current.filter((p) => p.id !== id && p.slug !== id));
    return { success: true };
  }

  try {
    // The CMS may address a post by its slug while Firestore keys it by id, so
    // resolve the id before deleting.
    const collection = firestore.collection(COLLECTION);
    const byId = await collection.doc(id).get();
    if (byId.exists) {
      await byId.ref.delete();
    } else {
      const snapshot = await collection.get();
      const match = snapshot.docs.find((doc) => doc.data()?.slug === id);
      if (match) await match.ref.delete();
    }

    if (canUseLocalFiles()) {
      writeLocalFile(readLocalFile().filter((p) => p.id !== id && p.slug !== id));
    }
    return { success: true };
  } catch (error: any) {
    console.error("Firestore blog delete failed:", error?.message || error);
    return { success: false, error: error?.message || "Failed to delete blog post." };
  }
}
