import { SITE_URL } from "./site";

export interface WebPageOptions {
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage" | "ProfilePage";
  url: string;
  name: string;
  description?: string;
  aboutId?: string;
  isPartOfId?: string;
  breadcrumbId?: string;
}

export function generateWebPageSchema(options: WebPageOptions) {
  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const canonical = options.url.startsWith("http")
    ? options.url
    : `${base}${options.url.startsWith("/") ? options.url : `/${options.url}`}`;

  const cleanUrl = canonical.endsWith("/") ? canonical : `${canonical}/`;
  const pageId = `${canonical.replace(/\/$/, "")}#webpage`;

  const schema: Record<string, unknown> = {
    "@type": options.type || "WebPage",
    "@id": pageId,
    url: cleanUrl,
    name: options.name,
    isPartOf: {
      "@id": options.isPartOfId || `${base}/#website`,
    },
  };

  if (options.description) {
    schema.description = options.description;
  }

  if (options.aboutId) {
    schema.about = {
      "@id": options.aboutId,
    };
  }

  if (options.breadcrumbId) {
    schema.breadcrumb = {
      "@id": options.breadcrumbId,
    };
  }

  return schema;
}
