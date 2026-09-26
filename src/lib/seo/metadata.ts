import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";
import { PageSEO } from "@/types/seo";

export const BASE_URL = SITE_URL;
export { SITE_NAME };

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
    : `${base}/logo.png`;

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
  const title = `${post.title} | ${SITE_NAME}`;
  const description = post.metaDescription || post.excerpt;

  const imageUrl = post.featuredImage?.url
    ? post.featuredImage.url.startsWith("http")
      ? post.featuredImage.url
      : `${BASE_URL}${post.featuredImage.url}`
    : `${BASE_URL}/logo.png`;

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
      title: post.title,
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
          alt: post.featuredImage?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
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
  return {
    title: `${categoryTitle} Insights | ${SITE_NAME}`,
    description: description || `Articles and strategic frameworks for ${categoryTitle}.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${categoryTitle} Insights | ${SITE_NAME}`,
      description: description || `Articles and strategic frameworks for ${categoryTitle}.`,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}
