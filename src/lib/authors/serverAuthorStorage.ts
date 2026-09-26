import fs from "fs";
import path from "path";
import { AuthorProfile } from "../../types/author";
import { CANONICAL_AUTHORS } from "./canonicalAuthors";

const PRIMARY_FILE = path.join(process.cwd(), "src", "data", "authors.json");
const ALIAS_FILE = path.join(process.cwd(), "src", "data", "author.json");

function readLocalAuthors(): AuthorProfile[] {
  const candidateFiles = [PRIMARY_FILE, ALIAS_FILE];
  let newestFile = PRIMARY_FILE;
  let maxMtime = -1;

  for (const f of candidateFiles) {
    try {
      if (fs.existsSync(f)) {
        const stats = fs.statSync(f);
        if (stats.mtimeMs > maxMtime) {
          maxMtime = stats.mtimeMs;
          newestFile = f;
        }
      }
    } catch {}
  }

  try {
    if (fs.existsSync(newestFile)) {
      const data = fs.readFileSync(newestFile, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Failed to read server authors file:", err);
  }
  return CANONICAL_AUTHORS;
}

function writeLocalAuthors(authors: AuthorProfile[]): boolean {
  try {
    const serialized = JSON.stringify(authors, null, 2);
    fs.writeFileSync(PRIMARY_FILE, serialized, "utf-8");
    try {
      fs.writeFileSync(ALIAS_FILE, serialized, "utf-8");
    } catch {}
    return true;
  } catch (err) {
    console.error("Failed to write server authors file:", err);
    return false;
  }
}

export async function getServerAuthors(): Promise<AuthorProfile[]> {
  const current = readLocalAuthors();
  if (!fs.existsSync(PRIMARY_FILE)) {
    writeLocalAuthors(current);
  }
  return current;
}

export async function saveServerAuthor(
  author: AuthorProfile
): Promise<{ success: boolean; error?: string }> {
  if (!author || !author.name || !author.slug) {
    return { success: false, error: "Author name and slug are required." };
  }

  const current = readLocalAuthors();
  const existingIdx = current.findIndex(
    (a) => a.id === author.id || a.slug.toLowerCase() === author.slug.toLowerCase()
  );

  if (existingIdx >= 0) {
    current[existingIdx] = { ...current[existingIdx], ...author };
  } else {
    current.push(author);
  }

  writeLocalAuthors(current);
  return { success: true };
}

export async function getServerAuthorBySlug(
  slug: string
): Promise<AuthorProfile | undefined> {
  const authors = await getServerAuthors();
  const target = decodeURIComponent(slug).toLowerCase().trim();
  return authors.find(
    (a) =>
      a.slug?.toLowerCase() === target ||
      a.id?.toLowerCase() === target ||
      a.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-") === target
  );
}

export async function deleteServerAuthor(
  idOrSlug: string
): Promise<{ success: boolean; error?: string }> {
  const current = readLocalAuthors();
  const target = idOrSlug.toLowerCase().trim();
  const updated = current.filter(
    (a) => a.id !== idOrSlug && a.slug.toLowerCase() !== target
  );

  writeLocalAuthors(updated);
  return { success: true };
}

export async function saveAllServerAuthors(
  authors: AuthorProfile[]
): Promise<{ success: boolean; error?: string }> {
  if (!Array.isArray(authors)) {
    return { success: false, error: "Authors must be an array." };
  }
  const current = readLocalAuthors();
  const currentMap = new Map(current.map((c) => [c.id || c.slug, c]));
  const merged = authors.map((a) => {
    const existing = currentMap.get(a.id) || currentMap.get(a.slug);
    if (existing) {
      return {
        ...existing,
        ...a,
        bio: a.bio && a.bio.trim() ? a.bio : existing.bio || "",
        shortBio: a.shortBio && a.shortBio.trim() ? a.shortBio : existing.shortBio || "",
        image: a.image?.url ? a.image : existing.image,
        socialLinks: { ...(existing.socialLinks || {}), ...(a.socialLinks || {}) },
      };
    }
    return a;
  });
  const ok = writeLocalAuthors(merged);
  return { success: ok };
}




