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
    sameAs: [
      "https://www.linkedin.com/company/framecipher",
      "https://www.facebook.com/framecipher",
      "https://www.instagram.com/framecipher",
      "https://x.com/framecipher",
      "https://www.youtube.com/@framecipher",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: contact?.location || "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar",
      addressLocality: "Dhaka",
      postalCode: "1206",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact?.phoneHref || "+8801768146650",
      contactType: "Customer Service",
      email: contact?.email || "teamframecipher@gmail.com",
      availableLanguage: ["en", "bn"],
    },
    areaServed: ["Bangladesh", "Worldwide"],
  };
}
