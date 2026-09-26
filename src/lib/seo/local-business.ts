import { SITE_NAME, SITE_URL } from "./site";
import { contact } from "../../data/agency";

export interface LocalBusinessOptions {
  name?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
}

export function generateLocalBusinessSchema(options?: LocalBusinessOptions) {
  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const name = options?.name || SITE_NAME || "Framecipher";

  return {
    "@type": "LocalBusiness",
    "@id": `${base}/#localbusiness`,
    name,
    url: `${base}/`,
    telephone: options?.telephone || contact?.phoneHref || "+8801700000000",
    email: options?.email || contact?.email || "info@framecipher.info",
    image: `${base}/logo.png`,
    address: options?.address || {
      "@type": "PostalAddress",
      streetAddress: "Ecb Chattar, Matikata, Khan Polli Mosque",
      addressLocality: "Dhaka",
      postalCode: "1206",
      addressCountry: "BD",
    },
    parentOrganization: {
      "@id": `${base}/#organization`,
    },
    areaServed: ["Bangladesh", "Worldwide"],
  };
}
