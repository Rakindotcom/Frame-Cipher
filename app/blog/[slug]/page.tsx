import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCanonicalPosts, getPostBySlug, getMergedPostsFromStorage } from "@/lib/blog/getBlogPosts";
import { BlogPostClientView } from "@/components/blog/BlogPostClientView";
import { buildBlogMetadata } from "@/lib/seo/metadata";
import { getServerAuthors } from "@/lib/authors/serverAuthorStorage";
import { getServerBlogPosts } from "@/lib/blog/serverBlogStorage";

async function authorProfileFor(authorName: string) {
  if (!authorName) return undefined;
  const raw = authorName.trim();
  const lower = raw.toLowerCase();
  const derivedSlug = lower
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const allAuthors = await getServerAuthors();
  return (
    allAuthors.find(
      (a) =>
        a.name?.toLowerCase().trim() === lower ||
        a.slug?.toLowerCase().trim() === lower ||
        a.id?.toLowerCase().trim() === lower ||
        a.slug?.toLowerCase().trim() === derivedSlug ||
        a.id?.toLowerCase().trim() === derivedSlug
    ) ||
    allAuthors.find(
      (a) =>
        (a.name && lower.includes(a.name.toLowerCase().trim())) ||
        (a.name && a.name.toLowerCase().trim().includes(lower))
    )
  );
}

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

function normalizeSlug(s: string): string {
  try {
    return decodeURIComponent(s).trim().toLowerCase();
  } catch {
    return s.trim().toLowerCase();
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const targetSlug = normalizeSlug(slug);

  let post: any = null;
  try {
    const serverPosts = await getServerBlogPosts();
    const merged = getMergedPostsFromStorage(serverPosts);
    post = merged.find(
      (p) =>
        normalizeSlug(p.slug) === targetSlug ||
        normalizeSlug(p.id || "") === targetSlug
    );
  } catch {}

  if (!post) {
    post = getPostBySlug(slug) || getAllCanonicalPosts().find((p) => normalizeSlug(p.slug) === targetSlug);
  }

  if (!post) {
    return {
      title: "Strategic Blueprint | FrameCipher Blog",
      description: "Actionable growth marketing frameworks and enterprise front-end strategic perspectives.",
    };
  }

  return buildBlogMetadata(post);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const targetSlug = normalizeSlug(slug);

  // 1. Fetch persistent posts from server JSON storage (blog-posts.json / post.json)
  const remotePosts = await getServerBlogPosts();
  const merged = getMergedPostsFromStorage(remotePosts);

  // 2. Find target post
  const matchedPost =
    merged.find(
      (p) =>
        normalizeSlug(p.slug) === targetSlug ||
        normalizeSlug(p.id || "") === targetSlug
    ) ||
    getPostBySlug(slug) ||
    getAllCanonicalPosts().find((p) => normalizeSlug(p.slug) === targetSlug);

  if (matchedPost) {
    const authorProfile = await authorProfileFor(matchedPost.author);
    return (
      <BlogPostClientView
        initialPost={matchedPost}
        allPosts={merged.length > 0 ? merged : getAllCanonicalPosts()}
        authorProfile={authorProfile}
      />
    );
  }

  notFound();
}
