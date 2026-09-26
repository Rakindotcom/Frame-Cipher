import { SITE_URL } from "./site";

export interface ArticleSchemaOptions {
  url: string;
  headline: string;
  description: string;
  image?: string | string[];
  datePublished?: string;
  dateModified?: string;
  authorId?: string;
  authorName?: string;
  authorUrl?: string;
  publisherId?: string;
  schemaType?: "BlogPosting" | "Article" | "NewsArticle";
}

export function generateArticleSchema(options: ArticleSchemaOptions) {
  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const canonical = options.url.startsWith("http")
    ? options.url
    : `${base}${options.url.startsWith("/") ? options.url : `/${options.url}`}`;

  const cleanUrl = canonical.replace(/\/$/, "");
  const articleId = `${cleanUrl}#article`;
  const webpageId = `${cleanUrl}#webpage`;

  let images: string[] = [];
  if (Array.isArray(options.image)) {
    images = options.image.map((img) => (img.startsWith("http") ? img : `${base}${img.startsWith("/") ? img : `/${img}`}`));
  } else if (typeof options.image === "string") {
    images = [options.image.startsWith("http") ? options.image : `${base}${options.image.startsWith("/") ? options.image : `/${options.image}`}`];
  } else {
    images = [`${base}/logo.png`];
  }

  const author = options.authorId
    ? { "@id": options.authorId }
    : {
        "@type": "Person",
        name: options.authorName || "Mahedi Hasan Perves",
        ...(options.authorUrl ? { url: options.authorUrl } : {}),
      };

  return {
    "@type": options.schemaType || "BlogPosting",
    "@id": articleId,
    headline: options.headline,
    description: options.description,
    image: images,
    ...(options.datePublished ? { datePublished: options.datePublished } : {}),
    dateModified: options.dateModified || new Date().toISOString(),
    author,
    publisher: {
      "@id": options.publisherId || `${base}/#organization`,
    },
    mainEntityOfPage: {
      "@id": webpageId,
    },
  };
}
