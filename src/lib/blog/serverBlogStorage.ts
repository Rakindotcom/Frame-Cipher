import fs from "fs";
import path from "path";
import { BlogPostItem } from "@/types/blog";
import {
  saveBlogPostToFirestore,
  deleteBlogPostFromFirestore,
} from "@/lib/firebase";
import { isLegacyDemoPost } from "./getBlogPosts";

const PRIMARY_FILE = path.join(process.cwd(), "src", "data", "blog-posts.json");
const ALIAS_FILE = path.join(process.cwd(), "src", "data", "post.json");

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
  };
}

function readLocalFile(): BlogPostItem[] {
  const candidateFiles = [PRIMARY_FILE, ALIAS_FILE];
  // Pick the file that exists and has the most recent modification time
  let newestFile = PRIMARY_FILE;
  let maxMtime = -1;

  for (const f of candidateFiles) {
    try {
      if (fs.existsSync(f)) {
        const stats = fs.statSync(f);
        if (stats.mtimeMs > maxMtime) {
          maxMtime = stats.mtimeMs;
          newestFile = f;
        }
      }
    } catch {}
  }

  try {
    if (fs.existsSync(newestFile)) {
      const data = fs.readFileSync(newestFile, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed
          .filter((p) => !isLegacyDemoPost(p))
          .map(normalizeBlogPost);
      }
    }
  } catch (err) {
    console.warn("Failed to read server blog posts file:", err);
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


export async function getServerBlogPosts(): Promise<BlogPostItem[]> {
  const localFilePosts = readLocalFile();
  return localFilePosts;
}

export async function saveAllServerBlogPosts(posts: BlogPostItem[]): Promise<{ success: boolean; error?: string }> {
  const clean = posts.filter((p) => !isLegacyDemoPost(p));
  writeLocalFile(clean);
  return { success: true };
}

export async function saveServerBlogPost(post: BlogPostItem): Promise<{ success: boolean; error?: string }> {
  if (isLegacyDemoPost(post)) {
    return { success: false, error: "Legacy demo posts cannot be saved." };
  }

  // 1. Persist to local file storage immediately (guaranteed instant save)
  const current = readLocalFile();
  const existingIdx = current.findIndex((p) => p.id === post.id || p.slug === post.slug);
  if (existingIdx >= 0) {
    current[existingIdx] = post;
  } else {
    current.unshift(post);
  }
  writeLocalFile(current);

  // 2. Asynchronously save to Firestore in background without blocking
  saveBlogPostToFirestore(post).catch((err) => {
    console.warn("Background Firestore save note:", err?.message);
  });

  return { success: true };
}

export async function deleteServerBlogPost(id: string): Promise<{ success: boolean; error?: string }> {
  // 1. Remove from local file storage immediately
  const current = readLocalFile();
  const updated = current.filter((p) => p.id !== id && p.slug !== id);
  writeLocalFile(updated);

  // 2. Asynchronously delete from Firestore in background
  deleteBlogPostFromFirestore(id).catch((err) => {
    console.warn("Background Firestore delete note:", err?.message);
  });

  return { success: true };
}
