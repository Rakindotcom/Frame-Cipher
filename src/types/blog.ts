export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  categories?: string[];
  status: "published" | "draft" | "scheduled";
  author: string;
  publishDate: string;
  views: number;
  wordCount: number;
  seoScore: number;
  featuredImage: {
    url: string;
    alt: string;
    hasAlt: boolean;
    caption?: string;
  };
  focusKeyword: string;
  canonicalUrl: string;
  relatedToolSlugs: string[];
  schemaType?: "TechArticle" | "BlogPosting";
  faqs?: FAQItem[];
  excerpt?: string;
  metaDescription?: string;
  seoTitle?: string;
  tags?: string[];
  blocks?: any[];
  content?: string;
  visibility?: "public" | "password" | "private";
  postPassword?: string;
  allowComments?: boolean;
  allowPingbacks?: boolean;
}

export interface RedirectRule {
  id: string;
  source: string;
  destination: string;
  statusCode: 301 | 302;
  hits: number;
  createdAt?: string;
}
