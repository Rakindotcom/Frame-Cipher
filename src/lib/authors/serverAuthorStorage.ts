import fs from "fs";
import path from "path";
import { AuthorProfile } from "../../types/author";
import { CANONICAL_AUTHORS } from "./canonicalAuthors";
import {
  getAdminFirestore,
  stripUndefined,
  describeMissingAdminConfig,
} from "@/lib/server/firebaseAdmin";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { publicFirestore } from "@/lib/server/publicFirestore";

/**
 * Public author reads use the anonymous, rule-limited Firebase web SDK. The
 * Admin SDK methods below remain for legacy server mutation endpoints only;
 * the dashboard writes directly with Firebase Authentication and Firestore.
 */

// `turbopackIgnore` keeps the Node file tracer from treating these as a
// whole-project trace. These files are a development-only fallback; Firestore
// is the store that ships.
const PRIMARY_FILE = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "src",
  "data",
  "authors.json"
);
const ALIAS_FILE = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "src",
  "data",
  "author.json"
);

const COLLECTION = "author_profiles";

function canUseLocalFiles(): boolean {
  return process.env.NODE_ENV !== "production";
}

function newestMtime(file: string): number {
  try {
    if (fs.existsSync(file)) {
      return fs.statSync(file).mtimeMs;
    }
  } catch {}
  return -1;
}

// Each candidate is read through its own static `path.join` so the build-time
// file tracer resolves a fixed set of paths. Passing a loop-selected variable
// to `fs.readFileSync` makes the tracer treat the call as a whole-project trace,
// which is what produced the "unexpected file in NFT list" warning. The
// `turbopackIgnore` argument keeps the tracer from following the dev-only
// fallback reads at all.
function readJsonFile(file: string): unknown {
  try {
    if (fs.existsSync(/* turbopackIgnore: true */ file)) {
      return JSON.parse(fs.readFileSync(/* turbopackIgnore: true */ file, "utf-8"));
    }
  } catch (err) {
    console.warn("Failed to read server authors file:", err);
  }
  return null;
}

function pickNewestAuthors(): AuthorProfile[] | null {
  const useAlias = newestMtime(ALIAS_FILE) > newestMtime(PRIMARY_FILE);
  const parsed = useAlias ? readJsonFile(ALIAS_FILE) : readJsonFile(PRIMARY_FILE);
  return Array.isArray(parsed) && parsed.length > 0 ? (parsed as AuthorProfile[]) : null;
}

function readLocalAuthors(): AuthorProfile[] {
  return pickNewestAuthors() || CANONICAL_AUTHORS;
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

function authorDocumentId(author: AuthorProfile): string {
  return author.id || author.slug;
}

function normalizeFromFirestore(
  data: Record<string, any>,
  id: string
): AuthorProfile {
  const {
    id: _ignored,
    updatedAt: _updatedAt,
    createdAt: _createdAt,
    ...rest
  } = data;
  return { ...rest, id: rest.id || id } as AuthorProfile;
}

function mergeAuthor(
  existing: AuthorProfile,
  incoming: AuthorProfile
): AuthorProfile {
  return {
    ...existing,
    ...incoming,
    bio: incoming.bio && incoming.bio.trim() ? incoming.bio : existing.bio || "",
    shortBio:
      incoming.shortBio && incoming.shortBio.trim()
        ? incoming.shortBio
        : existing.shortBio || "",
    // A blank image field must not wipe the stored portrait.
    image: incoming.image?.url ? incoming.image : existing.image,
    socialLinks: { ...(existing.socialLinks || {}), ...(incoming.socialLinks || {}) },
  };
}

export async function getServerAuthors(): Promise<AuthorProfile[]> {
  try {
    const snapshot = await getDocs(query(
      collection(publicFirestore, COLLECTION),
      where("status", "==", "published")
    ));
    const authors = snapshot.docs.map((entry) => normalizeFromFirestore(entry.data(), entry.id));
    return authors.length > 0 ? authors : CANONICAL_AUTHORS;
  } catch (error) {
    console.error("Public Firestore author read failed:", error);
    return CANONICAL_AUTHORS;
  }
}

export async function saveServerAuthor(
  author: AuthorProfile
): Promise<{ success: boolean; error?: string }> {
  if (!author || !author.name || !author.slug) {
    return { success: false, error: "Author name and slug are required." };
  }

  const firestore = getAdminFirestore();

  if (!firestore) {
    if (!canUseLocalFiles()) {
      return { success: false, error: describeMissingAdminConfig() };
    }
    const current = readLocalAuthors();
    const existingIdx = current.findIndex(
      (a) => a.id === author.id || a.slug.toLowerCase() === author.slug.toLowerCase()
    );
    if (existingIdx >= 0) {
      current[existingIdx] = mergeAuthor(current[existingIdx], author);
    } else {
      current.push(author);
    }
    writeLocalAuthors(current);
    return { success: true };
  }

  try {
    const ref = firestore.collection(COLLECTION).doc(authorDocumentId(author));
    const existing = await ref.get();
    const payload = existing.exists
      ? mergeAuthor(normalizeFromFirestore(existing.data(), existing.id), author)
      : author;
    await ref.set(stripUndefined(payload) as Record<string, any>, { merge: true });

    if (canUseLocalFiles()) {
      const current = readLocalAuthors();
      const idx = current.findIndex(
        (a) => a.id === author.id || a.slug.toLowerCase() === author.slug.toLowerCase()
      );
      if (idx >= 0) {
        current[idx] = payload;
      } else {
        current.push(payload);
      }
      writeLocalAuthors(current);
    }
    return { success: true };
  } catch (error: any) {
    console.error("Firestore author write failed:", error?.message || error);
    return { success: false, error: error?.message || "Failed to save author." };
  }
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

/**
 * An author profile is publicly readable only once published. This check is
 * defense in depth after the rule-limited Firestore query.
 */
export function isPubliclyVisible(author: AuthorProfile | null | undefined): boolean {
  if (!author) return false;
  return author.status === "published" && Boolean(author.name && author.slug);
}

/** Authors safe to render on a public page or return from an unauthenticated API. */
export async function getPublicAuthors(): Promise<AuthorProfile[]> {
  const authors = await getServerAuthors();
  return authors.filter(isPubliclyVisible);
}

/** A published author by slug, or `undefined` so the page 404s on a draft. */
export async function getPublicAuthorBySlug(
  slug: string
): Promise<AuthorProfile | undefined> {
  const author = await getServerAuthorBySlug(slug);
  return isPubliclyVisible(author) ? author : undefined;
}

export async function deleteServerAuthor(
  idOrSlug: string
): Promise<{ success: boolean; error?: string }> {
  const firestore = getAdminFirestore();
  const target = idOrSlug.toLowerCase().trim();

  if (!firestore) {
    if (!canUseLocalFiles()) {
      return { success: false, error: describeMissingAdminConfig() };
    }
    writeLocalAuthors(
      readLocalAuthors().filter(
        (a) => a.id !== idOrSlug && a.slug.toLowerCase() !== target
      )
    );
    return { success: true };
  }

  try {
    const collection = firestore.collection(COLLECTION);
    const byId = await collection.doc(idOrSlug).get();
    if (byId.exists) {
      await byId.ref.delete();
    } else {
      const snapshot = await collection.get();
      for (const doc of snapshot.docs) {
        const data = doc.data();
        if (data?.slug?.toLowerCase() === target || data?.id?.toLowerCase() === target) {
          await doc.ref.delete();
        }
      }
    }

    if (canUseLocalFiles()) {
      writeLocalAuthors(
        readLocalAuthors().filter(
          (a) => a.id !== idOrSlug && a.slug.toLowerCase() !== target
        )
      );
    }
    return { success: true };
  } catch (error: any) {
    console.error("Firestore author delete failed:", error?.message || error);
    return { success: false, error: error?.message || "Failed to delete author." };
  }
}

export async function saveAllServerAuthors(
  authors: AuthorProfile[]
): Promise<{ success: boolean; error?: string }> {
  if (!Array.isArray(authors)) {
    return { success: false, error: "Authors must be an array." };
  }

  const firestore = getAdminFirestore();

  if (!firestore) {
    if (!canUseLocalFiles()) {
      return { success: false, error: describeMissingAdminConfig() };
    }
    const current = readLocalAuthors();
    const currentMap = new Map(current.map((c) => [c.id || c.slug, c]));
    const merged = authors.map((a) => {
      const existing = currentMap.get(a.id) || currentMap.get(a.slug);
      return existing ? mergeAuthor(existing, a) : a;
    });
    const ok = writeLocalAuthors(merged);
    return { success: ok };
  }

  try {
    const collection = firestore.collection(COLLECTION);
    const existingSnapshot = await collection.get();
    const existingMap = new Map<string, AuthorProfile>();
    for (const doc of existingSnapshot.docs) {
      const author = normalizeFromFirestore(doc.data(), doc.id);
      existingMap.set(author.id || author.slug, author);
      existingMap.set(author.slug, author);
    }

    const batch = firestore.batch();
    for (const author of authors) {
      const existing = existingMap.get(author.id) || existingMap.get(author.slug);
      const merged = existing ? mergeAuthor(existing, author) : author;
      batch.set(
        collection.doc(authorDocumentId(merged)),
        stripUndefined(merged) as Record<string, any>,
        { merge: true }
      );
    }
    await batch.commit();

    if (canUseLocalFiles()) {
      const current = readLocalAuthors();
      const currentMap = new Map(current.map((c) => [c.id || c.slug, c]));
      writeLocalAuthors(
        authors.map((a) => {
          const existing = currentMap.get(a.id) || currentMap.get(a.slug);
          return existing ? mergeAuthor(existing, a) : a;
        })
      );
    }
    return { success: true };
  } catch (error: any) {
    console.error("Firestore author write failed:", error?.message || error);
    return { success: false, error: error?.message || "Failed to save authors." };
  }
}
