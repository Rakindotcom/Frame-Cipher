import { CANONICAL_BLOG_POSTS, DetailedBlogPost } from "./canonicalPosts";
import { BlogPostItem } from "@/types/blog";

export const BLOG_CATEGORIES = [
  "All Articles",
  "Growth Marketing",
  "Webflow Development",
  "UI/UX & Branding",
  "Technical SEO",
  "Conversion Optimization",
  "Agency Architecture",
] as const;

const LEGACY_DEMO_SLUGS = new Set<string>([]);

export function isLegacyDemoPost(post: Pick<BlogPostItem, "id" | "slug">): boolean {
  return LEGACY_DEMO_SLUGS.has(post.slug);
}

export function blogCategorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function blogCategoryFromSlug(slug: string): string | undefined {
  return BLOG_CATEGORIES.find((category) => blogCategorySlug(category) === slug && category !== "All Articles");
}

export function getAllCanonicalPosts(): DetailedBlogPost[] {
  return CANONICAL_BLOG_POSTS;
}

export function getPostBySlug(slug: string): DetailedBlogPost | undefined {
  return CANONICAL_BLOG_POSTS.find((p) => p.slug === slug);
}

export function getMergedPostsFromStorage(localPostsJson: string | null): DetailedBlogPost[] {
  if (!localPostsJson) return CANONICAL_BLOG_POSTS;
  try {
    const parsed: BlogPostItem[] = JSON.parse(localPostsJson);
    if (!Array.isArray(parsed)) return CANONICAL_BLOG_POSTS;

    // Convert any custom BlogPostItem from Admin CMS into a DetailedBlogPost
    const convertedLocal: DetailedBlogPost[] = parsed.filter((item) => !isLegacyDemoPost(item)).map((item) => {
      const canonicalMatch = CANONICAL_BLOG_POSTS.find((c) => c.id === item.id || c.slug === item.slug);
      if (canonicalMatch) {
        return {
          ...canonicalMatch,
          ...item,
          featuredImage: item.featuredImage || canonicalMatch.featuredImage,
        };
      }

      // New post created via CMS
      const words = item.wordCount || 1800;
      const readMin = Math.ceil(words / 220);

      return {
        id: item.id,
        slug: item.slug,
        title: item.title,
        category: item.category || "Growth Marketing",
        categories: item.categories || [item.category || "Growth Marketing"],
        status: item.status,
        author: item.author || "Mahedi Hasan Perves",
        authorRole: "Founder & Lead Strategist, FrameCipher",
        authorDegree: "B.Sc. in Electrical & Electronic Engineering, AIUB",
        publishDate: item.publishDate || new Date().toISOString().split("T")[0],
        views: item.views || 1,
        wordCount: words,
        readTime: `${readMin} min read`,
        seoScore: item.seoScore || 95,
        focusKeyword: item.focusKeyword || item.title.toLowerCase(),
        canonicalUrl: item.canonicalUrl || `https://framecipher.com/blog/${item.slug}`,
        excerpt:
          item.excerpt ||
          "Strategic perspective and operational architecture frameworks authored by FrameCipher's senior growth and design team.",
        metaDescription:
          item.metaDescription ||
          `Strategic playbooks, architectural analysis, and execution frameworks for ${item.title}.`,
        featuredImage: item.featuredImage || {
          url: "/logo.png",
          alt: item.title,
          hasAlt: true,
        },
        tags: item.tags || [item.category || "Growth Marketing", "FrameCipher", "Strategy"],
        relatedToolSlugs: item.relatedToolSlugs || ["webflow-development", "performance-marketing"],
        tableOfContents: [
          { id: "overview", title: "1. Strategic Overview & Scope", level: 2 },
          { id: "framework", title: "2. The Operational Framework", level: 2 },
          { id: "execution", title: "3. Execution & Implementation", level: 2 },
          { id: "benchmarks", title: "4. Measurable Outcomes & ROI", level: 2 },
        ],
        sections: [
          {
            id: "overview",
            heading: "1. Strategic Overview & Scope",
            level: "h2",
            paragraphs: [
              item.content ||
                "This publication explores high-leverage growth frameworks, design system scalability, and digital conversion velocity engineered for high-intent B2B and consumer brands.",
              "Successful enterprise execution demands alignment across technical infrastructure, conversion-focused design language, and predictable full-funnel acquisition economics.",
            ],
          },
          {
            id: "framework",
            heading: "2. The Operational Framework",
            level: "h2",
            paragraphs: [
              "We structure operational execution around measurable KPIs, eliminating guesswork and aligning cross-functional design and growth teams.",
              "By treating marketing technology as a scalable software system, organizations compress payback cycles and compound customer lifetime value.",
            ],
          },
          {
            id: "execution",
            heading: "3. Execution & Implementation",
            level: "h2",
            paragraphs: [
              "Implementation begins with disciplined class architecture and tokenized styling, followed by programmatic page clusters and end-to-end attribution telemetry.",
            ],
          },
          {
            id: "benchmarks",
            heading: "4. Measurable Outcomes & ROI",
            level: "h2",
            paragraphs: [
              "By monitoring leading indicators rather than lagging metrics, high-performing revenue teams adapt channel strategy in real time.",
            ],
          },
        ],
      };
    });

    // Merge: custom CMS posts first, then canonical posts not overwritten
    const localIds = new Set(convertedLocal.map((p) => p.id));
    const nonOverwrittenCanonical = CANONICAL_BLOG_POSTS.filter((c) => !localIds.has(c.id));

    return [...convertedLocal, ...nonOverwrittenCanonical];
  } catch {
    return CANONICAL_BLOG_POSTS;
  }
}
