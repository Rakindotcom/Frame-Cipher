import { siteUrl, services } from "../../data/agency";
import { getAllServicePages } from "../../data/servicePages";
import { growthCaseStudies } from "../../data/growthWork";
import { CANONICAL_BLOG_POSTS } from "../blog/canonicalPosts";
import { BLOG_CATEGORIES, blogCategorySlug } from "../blog/getBlogPosts";
import { CANONICAL_AUTHORS } from "../authors/canonicalAuthors";
import { getBlogPostsFromFirestore, getAuthorProfilesFromFirestore } from "../firebase";

export const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || siteUrl || "https://framecipher.info").replace(/\/$/, "");
export const SITE_CONTENT_UPDATED = new Date("2026-09-24T00:00:00.000Z");

export function absoluteUrl(path) {
  return `${BASE_URL}${path}`;
}

export function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Deduplicate by path and render a valid <urlset> from the merged entries.
export function buildUrlset(entries) {
  const unique = new Map();
  entries.forEach((entry) => unique.set(entry.path, entry));
  const urls = [...unique.values()]
    .map((entry) => {
      const lastmod = (entry.lastModified || SITE_CONTENT_UPDATED).toISOString();
      return `  <url>\n    <loc>${xmlEscape(absoluteUrl(entry.path))}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export function corePageEntries() {
  return ["/", "/about", "/services", "/projects", "/case-studies", "/blog", "/authors", "/contact", "/privacy", "/terms"].map(
    (path) => ({ path })
  );
}

// Static service, legacy service, and case-study pages (cache-bust safe).
export function servicePageEntries() {
  const docServicePages = getAllServicePages();
  const docServiceRoutes = docServicePages.map((page) => ({
    path: page.fullPath,
  }));

  const coveredPaths = new Set(docServiceRoutes.map((r) => r.path));

  const legacyServiceRoutes = services
    .map((service) => ({ path: `/services/${service.slug}` }))
    .filter((route) => !coveredPaths.has(route.path));

  const caseStudyRoutes = growthCaseStudies.map((study) => ({
    path: `/case-studies/${study.slug}`,
  }));

  return [...docServiceRoutes, ...legacyServiceRoutes, ...caseStudyRoutes];
}

export async function categoryEntries() {
  const categoryNames = new Set(BLOG_CATEGORIES.filter((category) => category !== "All Articles"));

  const addFromPost = (post) => {
    if (!post || post.status !== "published") return;
    if (post.category) categoryNames.add(post.category);
    (post.categories || []).forEach((category) => {
      if (category && category !== "All Articles") categoryNames.add(category);
    });
  };

  CANONICAL_BLOG_POSTS.forEach(addFromPost);

  try {
    const posts = await Promise.race([
      getBlogPostsFromFirestore(),
      new Promise((_, reject) => setTimeout(() => reject(new Error("CMS category sitemap timeout")), 1500)),
    ]);
    posts.forEach(addFromPost);
  } catch {
    // Fixed categories + canonical post categories remain if Firestore is unavailable.
  }

  return [...categoryNames].map((category) => ({
    path: `/blog/category/${blogCategorySlug(category)}`,
  }));
}

// Published blog posts: canonical seeds + any dashboard-created posts from
// Firestore, with a short timeout so a slow CMS never blocks the sitemap.
export async function publishedBlogEntries() {
  const entries = CANONICAL_BLOG_POSTS.filter((post) => post.status === "published").map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: new Date(`${post.publishDate}T00:00:00.000Z`),
  }));

  try {
    const posts = await Promise.race([
      getBlogPostsFromFirestore(),
      new Promise((_, reject) => setTimeout(() => reject(new Error("CMS blog sitemap timeout")), 1500)),
    ]);
    posts
      .filter((post) => post?.status === "published" && typeof post?.slug === "string")
      .forEach((post) => {
        entries.push({
          path: `/blog/${post.slug}`,
          lastModified: post.updatedAt?.toDate?.() || (post.publishDate ? new Date(`${post.publishDate}T00:00:00.000Z`) : SITE_CONTENT_UPDATED),
        });
      });
  } catch {
    // Canonical posts remain available if Firestore is temporarily unavailable.
  }

  return entries;
}

// Published author profiles: canonical seeds + dashboard-created authors.
export async function authorEntries() {
  const canonical = CANONICAL_AUTHORS.filter((a) => a.status === "published" && a.name && a.slug);
  const entries = canonical.map((a) => ({
    path: `/authors/${a.slug}`,
    lastModified: SITE_CONTENT_UPDATED,
  }));

  try {
    const authors = await Promise.race([
      getAuthorProfilesFromFirestore(),
      new Promise((_, reject) => setTimeout(() => reject(new Error("CMS author sitemap timeout")), 1500)),
    ]);
    (authors || [])
      .filter((a) => a?.status === "published" && typeof a?.slug === "string" && a?.name)
      .forEach((a) => {
        entries.push({
          path: `/authors/${a.slug}`,
          lastModified: a.updatedAt?.toDate?.() || SITE_CONTENT_UPDATED,
        });
      });
  } catch {
    // Canonical authors remain available if Firestore is temporarily unavailable.
  }

  return entries;
}