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
  // Kept in sync with the verified Google Business Profile place for Frame
  // Cipher (see src/data/agency.js `officeCoords` / `officeMapsUrl`) so the
  // LocalBusiness entity does not conflict with the Contact page map.
  const [officeLat, officeLng] = String(contact?.officeCoords || "23.8201454,90.3920304")
    .split(",")
    .map((value) => Number(value.trim()));

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
      streetAddress: "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar",
      addressLocality: "Dhaka",
      postalCode: "1206",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: Number.isFinite(officeLat) ? officeLat : 23.8201454,
      longitude: Number.isFinite(officeLng) ? officeLng : 90.3920304,
    },
    hasMap: contact?.officeMapsUrl || "https://maps.app.goo.gl/Ht7yUXyMw6V1fAcF6",
    parentOrganization: {
      "@id": `${base}/#organization`,
    },
    areaServed: ["Dhaka", "Bangladesh", "Worldwide"],
  };
}
