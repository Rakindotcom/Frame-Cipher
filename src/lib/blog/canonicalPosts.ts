import { BlogPostItem } from "@/types/blog";

export interface BlogArticleSection {
  id: string;
  heading: string;
  level: "h2" | "h3";
  paragraphs: string[];
  formula?: {
    latex: string;
    description: string;
    variables: { symbol: string; label: string }[];
  };
  callout?: {
    type: "tip" | "warning" | "note";
    title: string;
    message: string;
  };
  figure?: {
    caption: string;
    alt: string;
    type?: string;
  };
}

export interface DetailedBlogPost extends BlogPostItem {
  readTime: string;
  authorRole: string;
  authorDegree: string;
  tableOfContents: { id: string; title: string; level: number }[];
  sections: BlogArticleSection[];
}

// Demo/blog seed posts removed. Blog content now comes from the CMS
// (Firestore) via getMergedPostsFromStorage / getBlogPostsFromFirestore.
export const CANONICAL_BLOG_POSTS: DetailedBlogPost[] = [];