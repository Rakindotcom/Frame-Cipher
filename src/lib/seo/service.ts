import { SITE_URL } from "./site";

export interface ServiceSchemaOptions {
  url: string;
  name: string;
  serviceType?: string;
  description: string;
  providerId?: string;
  areaServed?: string | string[];
  pricing?: {
    intro?: string;
    table?: Array<{ name: string; price: string }>;
  };
}

export function generateServiceSchema(options: ServiceSchemaOptions) {
  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const canonical = options.url.startsWith("http")
    ? options.url
    : `${base}${options.url.startsWith("/") ? options.url : `/${options.url}`}`;

  const cleanUrl = canonical.endsWith("/") ? canonical : `${canonical}/`;
  const serviceId = `${canonical.replace(/\/$/, "")}#service`;

  const schema: Record<string, unknown> = {
    "@type": "Service",
    "@id": serviceId,
    name: options.name,
    serviceType: options.serviceType || options.name,
    url: cleanUrl,
    description: options.description,
    provider: {
      "@id": options.providerId || `${base}/#organization`,
    },
    areaServed: options.areaServed || ["Bangladesh", "Worldwide"],
  };

  if (options.pricing?.table && options.pricing.table.length > 0) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "BDT",
      description: options.pricing.intro || "Custom pricing based on scope and deliverables.",
    };
  }

  return schema;
}
