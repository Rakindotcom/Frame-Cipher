import React from "react";
import { Metadata } from "next";
import { getAllCanonicalPosts, getPostBySlug } from "@/lib/blog/getBlogPosts";
import { BlogPostClientView } from "@/components/blog/BlogPostClientView";
import { buildBlogMetadata } from "@/lib/seo/metadata";
import { DetailedBlogPost } from "@/lib/blog/canonicalPosts";
import { CANONICAL_AUTHORS } from "@/lib/authors/canonicalAuthors";

function authorProfileFor(authorName: string) {
  const derivedSlug = authorName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return CANONICAL_AUTHORS.find(
    (a) =>
      a.name?.toLowerCase() === authorName.toLowerCase() ||
      a.slug === derivedSlug ||
      a.id === derivedSlug
  );
}

export async function generateStaticParams() {
  const posts = getAllCanonicalPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
  const canonicalPost = getPostBySlug(slug);
  const allPosts = getAllCanonicalPosts();

  if (canonicalPost) {
    return (
      <BlogPostClientView
        initialPost={canonicalPost}
        allPosts={allPosts}
        authorProfile={authorProfileFor(canonicalPost.author)}
      />
    );
  }

  // Fallback for custom dynamic posts created in CMS
  const dynamicFallbackPost: DetailedBlogPost = {
    id: `custom-${slug}`,
    slug: slug,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    category: "Growth Marketing",
    categories: ["Growth Marketing", "Agency Architecture"],
    status: "published",
    author: "Mahedi Hasan Perves",
    authorRole: "Founder & Lead Strategist, FrameCipher",
    authorDegree: "B.Sc. in Electrical & Electronic Engineering, AIUB",
    publishDate: new Date().toISOString().split("T")[0],
    views: 1,
    wordCount: 1800,
    readTime: "8 min read",
    seoScore: 95,
    focusKeyword: slug.replace(/-/g, " "),
    canonicalUrl: `https://framecipher.com/blog/${slug}`,
    excerpt: "Strategic perspective and operational architecture frameworks from FrameCipher.",
    metaDescription: `Strategic analysis and operational frameworks for ${slug}.`,
    featuredImage: {
      url: "/logo.png",
      alt: slug,
      hasAlt: true,
    },
    tags: ["Growth Marketing", "FrameCipher", "Strategy"],
    relatedToolSlugs: ["webflow-development", "performance-marketing"],
    tableOfContents: [{ id: "overview", title: "1. Overview & Strategic Framework", level: 2 }],
    sections: [
      {
        id: "overview",
        heading: "1. Overview & Strategic Framework",
        level: "h2",
        paragraphs: [
          "This publication outlines the essential components required to deploy sustainable growth systems and maintain alignment across brand, creative, and technical channels.",
        ],
      },
    ],
    faqs: [
      {
        id: "faq-auto",
        question: `What are the core strategic outcomes for ${slug.replace(/-/g, " ")}?`,
        answer:
          "The core objectives include establishing message congruence, eliminating conversion friction, and scaling high-efficiency acquisition channels.",
      },
    ],
  };

  return (
    <BlogPostClientView
      initialPost={dynamicFallbackPost}
      allPosts={allPosts}
      authorProfile={authorProfileFor(dynamicFallbackPost.author)}
    />
  );
}
