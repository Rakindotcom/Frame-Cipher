import { AuthorProfile } from "@/types/author";
import { CANONICAL_AUTHORS } from "./canonicalAuthors";
import { getAuthorProfilesFromFirestore } from "@/lib/firebase";

// Merges canonical (code) authors with dashboard-created profiles saved to
// Firestore. Dashboard edits to a canonical author's slug override the seed.
export async function getAllAuthors(): Promise<AuthorProfile[]> {
  let stored: any[] = [];
  try {
    const firestoreFetch = getAuthorProfilesFromFirestore().catch((error) => {
      console.warn("Firestore authors fetch error:", error);
      return [];
    });
    stored = await Promise.race([
      firestoreFetch,
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Firestore authors fetch timeout")), 1500)
      ),
    ]);
  } catch (error) {
    console.warn("Firestore authors fetch unavailable:", error);
  }

  const customMap = new Map<string, AuthorProfile>();
  (stored || []).forEach((item) => {
    if (item.slug) customMap.set(item.slug, item);
    if (item.id) customMap.set(item.id, item);
  });

  const merged: AuthorProfile[] = [];
  CANONICAL_AUTHORS.forEach((c) => {
    const override = customMap.get(c.slug) || customMap.get(c.id);
    if (override) {
      const mergedAuthor: AuthorProfile = { ...c, ...override };
      // Never let an override's empty socialLinks wipe the seed's links.
      mergedAuthor.socialLinks = {
        ...(c.socialLinks || {}),
        ...(override.socialLinks || {}),
      };
      // Keep the seed's photo/alt unless the override actually provides one.
      const baseImage = c.image || { url: "", alt: "", hasAlt: false };
      const overrideImage = (override.image || {}) as AuthorProfile["image"];
      mergedAuthor.image = {
        url: overrideImage.url || baseImage.url,
        alt: overrideImage.alt || baseImage.alt,
        hasAlt: Boolean(overrideImage.hasAlt || baseImage.hasAlt),
      };
      merged.push(mergedAuthor);
      customMap.delete(c.slug);
      customMap.delete(c.id);
    } else {
      merged.push(c);
    }
  });

  customMap.forEach((item) => {
    if (!merged.some((m) => m.id === item.id || m.slug === item.slug)) {
      merged.push(item);
    }
  });

  return merged;
}

export async function getAuthorBySlug(slug: string): Promise<AuthorProfile | undefined> {
  const authors = await getAllAuthors();
  return authors.find((a) => a.slug === slug || a.id === slug);
}