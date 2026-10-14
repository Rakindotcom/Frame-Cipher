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
      a.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-") === target ||
      (target.includes("nahid") && a.slug?.includes("nahid")) ||
      (target.includes("rakin") && a.slug?.includes("rakin")) ||
      (target.includes("mahedi") && a.slug?.includes("mahedi"))
  );
}

export function resolveAuthorImage(authorName?: string, customImage?: string): string {
  if (customImage && typeof customImage === "string" && customImage.trim() && customImage !== "/logo.png") {
    return customImage;
  }
  if (!authorName) return "/Founders/Nahid Bin Zaman.jpeg";

  const lower = authorName.toLowerCase();
  if (lower.includes("nahid") || lower.includes("zaman") || lower.includes("joy")) {
    return "/Founders/Nahid Bin Zaman.jpeg";
  }
  if (lower.includes("mahedi") || lower.includes("perves") || lower.includes("hasan")) {
    return "/Founders/Mahedi Hasan Perves.png";
  }
  if (lower.includes("rakin") || lower.includes("shahriar")) {
    return "/Founders/Rakin Al Shahriar.png";
  }
  return "/Founders/Nahid Bin Zaman.jpeg";
}