import { SITE_NAME, SITE_URL } from "./site";

export interface WebsiteOptions {
  name?: string;
  url?: string;
  description?: string;
}

export function generateWebsiteSchema(options?: WebsiteOptions) {
  const name = options?.name || SITE_NAME || "Framecipher";
  const url = (options?.url || SITE_URL || "https://framecipher.info").replace(/\/$/, "");

  return {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url: `${url}/`,
    name,
    description:
      options?.description ||
      "Framecipher is a Dhaka-based marketing, media, branding, website, software, and growth agency.",
    publisher: {
      "@id": `${url}/#organization`,
    },
    inLanguage: "en",
  };
}
