import { SITE_NAME, SITE_URL } from "./site";
import { contact } from "../../data/agency";

export interface OrganizationOptions {
  name?: string;
  url?: string;
  logo?: string;
}

export function generateOrganizationSchema(options?: OrganizationOptions) {
  const name = options?.name || SITE_NAME || "Framecipher";
  const url = (options?.url || SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const logoUrl = options?.logo || `${url}/logo.png`;

  return {
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name,
    url: `${url}/`,
    logo: {
      "@type": "ImageObject",
      "@id": `${url}/#logo`,
      url: logoUrl,
      caption: name,
    },
    image: {
      "@type": "ImageObject",
      "@id": `${url}/#logo`,
      url: logoUrl,
      caption: name,
    },
    description:
      "Framecipher is a Dhaka-based 360 marketing, media, branding, website, software, and growth systems agency.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ecb Chattar, Matikata, Khan Polli Mosque",
      addressLocality: "Dhaka",
      postalCode: "1206",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact?.phoneHref || "+8801700000000",
      contactType: "Customer Service",
      email: contact?.email || "info@framecipher.info",
      availableLanguage: ["en", "bn"],
    },
    areaServed: ["Bangladesh", "Worldwide"],
  };
}
