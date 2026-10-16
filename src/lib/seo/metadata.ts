import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";
import { PageSEO } from "@/types/seo";

export const BASE_URL = SITE_URL;
export { SITE_NAME };

/**
 * Joins a page title with the brand suffix only when the result still fits in
 * the ~60 character SERP limit. A title that already carries the brand is
 * normalised instead of doubled up.
 *
 * Without this, long CMS/service titles were rendered as
 * "… | Frame Cipher" and Google truncated them mid-word in search results.
 */
export function withBrandSuffix(title: string, suffix = ` | ${SITE_NAME}`, limit = 60): string {
  const clean = String(title ?? "").replace(/\s+/g, " ").trim();
  if (!clean) return SITE_NAME;

  // Titles authored in the CMS / service data often already end with the brand
  // ("| Frame Cipher", "| Framecipher", "| Frame Cipher Case Study"). Strip that
  // first so it is never doubled, then re-decide whether the brand fits.
  const branded = /\s*\|\s*frame\s*cipher(\s+case\s+study)?\s*$/i;
  const core = clean.replace(branded, "").trim() || clean;

  if (`${core}${suffix}`.length <= limit) return `${core}${suffix}`;
  return core;
}

/**
 * Meta descriptions longer than ~160 characters are cut off in search results.
 * Truncate on a sentence boundary when there is a usable one, otherwise on a
 * word boundary, so the snippet never ends mid-word.
 */
export function clampMetaDescription(description: string, limit = 160): string {
  const clean = String(description ?? "").replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;

  const window = clean.slice(0, limit);
  const sentenceEnd = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? ")
  );
  if (sentenceEnd >= 110) return window.slice(0, sentenceEnd + 1).trim();

  const wordEnd = window.lastIndexOf(" ");
  return `${window.slice(0, wordEnd > 110 ? wordEnd : limit - 1).trim()}…`;
}

/**
 * Builds central data-driven Next.js Metadata object adhering to Specification Point 31
 */
export function generatePageMetadata(seo: PageSEO): Metadata {
  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const canonicalUrl = seo.canonical.startsWith("http")
    ? seo.canonical
    : `${base}${seo.canonical.startsWith("/") ? seo.canonical : `/${seo.canonical}`}`;

  const ogImageUrl = seo.ogImage?.url
    ? (seo.ogImage.url.startsWith("http") ? seo.ogImage.url : `${base}${seo.ogImage.url.startsWith("/") ? seo.ogImage.url : `/${seo.ogImage.url}`}`)
    : `${base}/og-image.png`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: seo.noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: seo.type === "article" ? "article" : "website",
      ...(seo.publishedTime ? { publishedTime: seo.publishedTime } : {}),
      ...(seo.modifiedTime ? { modifiedTime: seo.modifiedTime } : {}),
      ...(seo.author?.name ? { authors: [seo.author.name] } : {}),
      images: [
        {
          url: ogImageUrl,
          width: seo.ogImage?.width || 1200,
          height: seo.ogImage?.height || 630,
          alt: seo.ogImage?.alt || seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
      creator: "@framecipher",
    },
  };
}

export function buildBlogMetadata(post: any): Metadata {
  if (!post) {
    return {
      title: "Strategic Insights & Growth Systems | Frame Cipher",
      description:
        "Strategy perspectives on 360 marketing, brand positioning, website engineering, and high-converting campaigns.",
    };
  }

  const url = post.canonicalUrl || `${BASE_URL}/blog/${post.slug}`;
  // CMS titles occasionally arrive with a trailing newline or doubled spaces,
  // which leaked straight into <title> as "Ecommerce SEO Checklist … Stores\n
  // | Frame Cipher". Normalise once and reuse it for every tag below.
  const postTitle = String(post.title ?? "").replace(/\s+/g, " ").trim();
  // The brand suffix is dropped when it would push <title> past the ~60 char
  // SERP limit, and the description is clamped so Google never cuts it mid-word.
  const title = withBrandSuffix(postTitle);
  const description = clampMetaDescription(post.metaDescription || post.excerpt || "");

  const imageUrl = post.featuredImage?.url
    ? post.featuredImage.url.startsWith("http")
      ? post.featuredImage.url
      : `${BASE_URL}${post.featuredImage.url}`
    : `${BASE_URL}/og-image.png`;

  return {
    title,
    description,
    keywords: [post.focusKeyword, ...(post.tags || []), post.category].filter(Boolean),
    authors: [{ name: post.author || "Mahedi Hasan Perves", url: `${BASE_URL}/about` }],
    creator: post.author || "Mahedi Hasan Perves",
    publisher: SITE_NAME,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: postTitle || SITE_NAME,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author || "Mahedi Hasan Perves"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.featuredImage?.alt || postTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: postTitle || SITE_NAME,
      description,
      images: [imageUrl],
      creator: "@framecipher",
    },
  };
}

export function buildCategoryMetadata(
  categoryTitle: string,
  description?: string,
  path?: string
): Metadata {
  const url = `${BASE_URL}${path || ""}`;
  // Was previously falling back to a ~65-character description, and the
  // openGraph object omitted `images`, which replaced the root layout's
  // openGraph wholesale and left category pages without any og:image.
  const resolvedDescription = clampMetaDescription(
    description ||
      `Strategic articles, operational playbooks, and technical breakdowns for ${categoryTitle}, published by the Frame Cipher growth team.`
  );
  const image = `${BASE_URL}/og-image.png`;
  const title = withBrandSuffix(`${categoryTitle} Insights`);
  return {
    title,
    description: resolvedDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: resolvedDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${categoryTitle} insights from Frame Cipher` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resolvedDescription,
      images: [image],
    },
  };
}
