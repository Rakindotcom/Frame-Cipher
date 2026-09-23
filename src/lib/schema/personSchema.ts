import { AuthorProfile } from "@/types/author";

const SITE_URL = "https://framecipher.com";

function toAbsoluteImageUrl(url: string | undefined): string {
  if (!url) return `${SITE_URL}/logo.png`;
  if (url.startsWith("http") || url.startsWith("data:")) return url;
  return `${SITE_URL}${url}`;
}

// Auto-generated `Person` structured data for an author profile. This is the
// schema markup that search engines use for author/E-E-A-T rich results.
export function buildPersonSchema(author: Partial<AuthorProfile>) {
  const slug = author.slug?.trim() || "author";
  const profileUrl = `${SITE_URL}/authors/${slug}`;
  const sameAs = Object.values(author.socialLinks || {})
    .map((link) => link.trim())
    .filter(Boolean);
  const knowing = (author.tags || []).filter((tag) => tag.trim().length > 0);

  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${profileUrl}#person`,
    name: author.name?.trim() || "FrameCipher Author",
    url: author.website?.trim() || profileUrl,
    image: toAbsoluteImageUrl(author.image?.url),
  };

  if (author.jobTitle?.trim()) {
    person.jobTitle = author.jobTitle.trim();
  }
  if (author.shortBio?.trim() || author.bio?.trim()) {
    person.description = author.shortBio?.trim() || author.bio?.trim();
  }
  if ((author.worksFor || "FrameCipher").trim()) {
    person.worksFor = {
      "@type": "Organization",
      name: (author.worksFor || "FrameCipher").trim(),
      url: SITE_URL,
    };
  }
  if (author.email?.trim()) {
    person.email = author.email.trim();
  }
  if (sameAs.length > 0) {
    person.sameAs = sameAs;
  }
  if (knowing.length > 0) {
    person.knowsAbout = knowing.map((topic) => ({
      "@type": "Thing",
      name: topic,
    }));
  }

  return person;
}

export function personSchemaToJson(author: Partial<AuthorProfile>): string {
  return JSON.stringify(buildPersonSchema(author), null, 2);
}