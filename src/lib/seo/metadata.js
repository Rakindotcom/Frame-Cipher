import { siteUrl } from "../../data/agency";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || siteUrl || "https://framecipher.info";
export const SITE_NAME = "Frame Cipher";

export function buildBlogMetadata(post) {
  if (!post) {
    return {
      title: "Strategic Insights & Growth Systems | Frame Cipher",
      description: "Strategy perspectives on 360 marketing, brand positioning, website engineering, and high-converting campaigns.",
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
    keywords: [post.focusKeyword, ...(post.tags || []), post.category],
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

export function buildCategoryMetadata(categoryTitle, description, path) {
  const url = `${BASE_URL}${path}`;
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
