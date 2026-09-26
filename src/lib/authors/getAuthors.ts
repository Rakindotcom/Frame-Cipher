import { AuthorProfile } from "@/types/author";
import { CANONICAL_AUTHORS } from "./canonicalAuthors";

export async function getAllAuthors(): Promise<AuthorProfile[]> {
  if (typeof window !== "undefined") {
    try {
      const res = await fetch("/api/authors");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return data;
        }
      }
    } catch {}
  }
  return CANONICAL_AUTHORS;
}

export async function getAuthorBySlug(slug: string): Promise<AuthorProfile | undefined> {
  const authors = await getAllAuthors();
  const target = decodeURIComponent(slug).toLowerCase().trim();
  return authors.find(
    (a) =>
      a.slug?.toLowerCase() === target ||
      a.id?.toLowerCase() === target ||
      a.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-") === target
  );
}