import { SITE_URL } from "./site";

export interface PersonSchemaOptions {
  name: string;
  slug?: string;
  url?: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  worksFor?: string;
  worksForId?: string;
  sameAs?: string[];
  knowsAbout?: string[];
}

export function generatePersonSchema(options: PersonSchemaOptions) {
  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const authorSlug = options.slug || options.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const profileUrl = options.url || `${base}/authors/${authorSlug}/`;
  const personId = `${base}/authors/${authorSlug}#person`;

  const schema: Record<string, unknown> = {
    "@type": "Person",
    "@id": personId,
    name: options.name,
    url: profileUrl,
  };

  if (options.jobTitle) {
    schema.jobTitle = options.jobTitle;
  }

  if (options.description) {
    schema.description = options.description;
  }

  if (options.image) {
    schema.image = options.image.startsWith("http") ? options.image : `${base}${options.image.startsWith("/") ? options.image : `/${options.image}`}`;
  }

  schema.worksFor = {
    "@type": "Organization",
    "@id": options.worksForId || `${base}/#organization`,
    name: options.worksFor || "Framecipher",
  };

  if (options.sameAs && options.sameAs.length > 0) {
    schema.sameAs = options.sameAs.filter(Boolean);
  }

  if (options.knowsAbout && options.knowsAbout.length > 0) {
    schema.knowsAbout = options.knowsAbout.filter(Boolean).map((topic) => ({
      "@type": "Thing",
      name: topic,
    }));
  }

  return schema;
}
