import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import {
  getAdminFirestore,
  getAdminStorage,
  stripUndefined,
  describeMissingAdminConfig,
} from "@/lib/server/firebaseAdmin";

export const dynamic = "force-dynamic";

/**
 * Media library backed by Cloud Storage + Firestore.
 *
 * This route used to write the binary into `public/blog-images/` and the
 * metadata into `src/data/media.json`. On Netlify the function filesystem is
 * read-only, so `fs.writeFileSync` threw, the error was swallowed, and the
 * response said "success" while the image existed nowhere. Images now go to
 * Cloud Storage and the metadata document to Firestore. The local-disk path is
 * kept only for `next dev` with no service account configured.
 */

// `turbopackIgnore` keeps the Node file tracer from treating these as a
// whole-project trace. These paths are a development-only fallback; Cloud
// Storage and Firestore are the store that ships.
const UPLOAD_DIR = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "public",
  "blog-images"
);
const MEDIA_JSON_PATH = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "src",
  "data",
  "media.json"
);
const STORAGE_PREFIX = "media";
const COLLECTION = "media";
const STORAGE_BUCKET =
  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "framecipherweb.firebasestorage.app";

export interface LocalMediaItem {
  id: string;
  title: string;
  filename: string;
  url: string;
  storagePath?: string;
  alt: string;
  caption?: string;
  description?: string;
  uploadedAt: string;
  fileSize: string;
  dimensions?: string;
  type: string;
}

const ALLOWED_CONTENT_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/gif",
]);

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

function canUseLocalFiles(): boolean {
  return process.env.NODE_ENV !== "production";
}

function ensureDir() {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
}

function readStoredMedia(): LocalMediaItem[] {
  try {
    if (!fs.existsSync(MEDIA_JSON_PATH)) return [];
    const raw = fs.readFileSync(MEDIA_JSON_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStoredMedia(items: LocalMediaItem[]): void {
  try {
    const dir = path.dirname(MEDIA_JSON_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(MEDIA_JSON_PATH, JSON.stringify(items, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not save media.json:", err);
  }
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function normalizeFromFirestore(data: Record<string, any>, id: string): LocalMediaItem {
  const { id: _ignored, createdAt: _createdAt, ...rest } = data;
  return { ...rest, id: rest.id || id } as LocalMediaItem;
}

function storagePathForFilename(filename: string): string {
  return `${STORAGE_PREFIX}/${filename}`;
}

/** Anonymous read URL for an object, matching the public download endpoint. */
function publicDownloadUrl(bucket: string, objectPath: string): string {
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
    objectPath
  )}?alt=media`;
}

/** `/api/media` is admin-only, so an unauthenticated 401 is expected. */
export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  const firestore = getAdminFirestore();
  if (firestore) {
    try {
      const snapshot = await firestore.collection(COLLECTION).get();
      const items = snapshot.docs
        .map((doc) => normalizeFromFirestore(doc.data(), doc.id))
        .sort(
          (a, b) =>
            new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
      return NextResponse.json(items, {
        headers: { "Cache-Control": "no-store" },
      });
    } catch (error: any) {
      console.error("Firestore media read failed:", error?.message || error);
      if (!canUseLocalFiles()) {
        return NextResponse.json(
          { success: false, error: error?.message || "Failed to list media." },
          { status: 500 }
        );
      }
    }
  } else if (!canUseLocalFiles()) {
    return NextResponse.json(
      { success: false, error: describeMissingAdminConfig() },
      { status: 500 }
    );
  }

  ensureDir();
  const stored = readStoredMedia();
  const storedMap = new Map(stored.map((item) => [item.filename, item]));

  // Also scan public/blog-images to ensure any dropped/existing images are discovered
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(/* turbopackIgnore: true */ UPLOAD_DIR)
      .filter((f) => !f.startsWith("."));
  } catch {}

  const merged: LocalMediaItem[] = [];
  for (const filename of files) {
    const existing = storedMap.get(filename);
    if (existing) {
      merged.push(existing);
      storedMap.delete(filename);
    } else {
      let stats: fs.Stats | null = null;
      try {
        stats = fs.statSync(
          path.join(/* turbopackIgnore: true */ UPLOAD_DIR, filename)
        );
      } catch {}

      merged.push({
        id: `media-${filename.replace(/[^a-zA-Z0-9]/g, "-")}`,
        title: filename.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " "),
        filename,
        url: `/blog-images/${filename}`,
        alt: filename.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " "),
        caption: "",
        description: "",
        uploadedAt: stats?.mtime ? stats.mtime.toISOString() : new Date().toISOString(),
        fileSize: stats ? formatBytes(stats.size) : "Unknown",
        dimensions: "",
        type: `image/${filename.split(".").pop() || "jpeg"}`,
      });
    }
  }

  // Any remaining entries that might have absolute URLs or external references
  storedMap.forEach((item) => {
    merged.push(item);
  });

  merged.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
  return NextResponse.json(merged, {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  const firestore = getAdminFirestore();
  const storage = getAdminStorage();
  if (!firestore || !storage) {
    if (!canUseLocalFiles()) {
      return NextResponse.json(
        { success: false, error: describeMissingAdminConfig() },
        { status: 500 }
      );
    }
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const dimensions = (formData.get("dimensions") as string) || "";
    const title = (formData.get("title") as string) || "";

    if (!file || typeof file === "string") {
      return NextResponse.json({ success: false, error: "No file provided for upload." }, { status: 400 });
    }

    if (file.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json({ success: false, error: "File exceeds 10MB limit." }, { status: 400 });
    }

    // Storage rules only admit raster images; rejecting SVG and any other type
    // here keeps the two layers from disagreeing about what is uploadable.
    const contentType = file.type || "image/jpeg";
    if (!ALLOWED_CONTENT_TYPES.has(contentType)) {
      return NextResponse.json(
        { success: false, error: "Unsupported image type. Use WEBP, PNG, JPG, AVIF or GIF." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const rawName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
    const filename = `${Date.now()}-${rawName}`;
    const titleOrFilename =
      title || file.name.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ");

    if (firestore && storage) {
      const objectPath = storagePathForFilename(filename);
      const fileRef = storage.bucket().file(objectPath);
      await fileRef.save(buffer, {
        contentType,
        resumable: false,
        metadata: { cacheControl: "public, max-age=31536000, immutable" },
      });
      // A signed URL would bake a long-lived credential into a public document.
      // storage.rules already allows anonymous reads on /media/**, so the plain
      // download endpoint is used instead — next.config.mjs allowlists it.
      const url = publicDownloadUrl(STORAGE_BUCKET, objectPath);

      const item: LocalMediaItem = {
        id: `media-${Date.now()}`,
        title: titleOrFilename,
        filename,
        url,
        storagePath: objectPath,
        alt: titleOrFilename,
        caption: "",
        description: "",
        uploadedAt: new Date().toISOString(),
        fileSize: formatBytes(file.size),
        dimensions,
        type: contentType,
      };

      await firestore
        .collection(COLLECTION)
        .doc(item.id)
        .set(stripUndefined(item) as Record<string, any>, { merge: true });

      if (canUseLocalFiles()) {
        const currentList = readStoredMedia();
        currentList.unshift(item);
        saveStoredMedia(currentList);
      }

      return NextResponse.json({ success: true, item });
    }

    ensureDir();
    const filePath = path.join(
      /* turbopackIgnore: true */ UPLOAD_DIR,
      filename
    );
    fs.writeFileSync(/* turbopackIgnore: true */ filePath, buffer);

    const item: LocalMediaItem = {
      id: `media-${Date.now()}`,
      title: titleOrFilename,
      filename,
      url: `/blog-images/${filename}`,
      storagePath: `public/blog-images/${filename}`,
      alt: titleOrFilename,
      caption: "",
      description: "",
      uploadedAt: new Date().toISOString(),
      fileSize: formatBytes(file.size),
      dimensions,
      type: contentType,
    };

    const currentList = readStoredMedia();
    currentList.unshift(item);
    saveStoredMedia(currentList);

    return NextResponse.json({ success: true, item });
  } catch (error: any) {
    console.error("Media upload failed:", error);
    return NextResponse.json({ success: false, error: error?.message || "Media upload failed." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  const firestore = getAdminFirestore();
  const storage = getAdminStorage();
  if ((!firestore || !storage) && !canUseLocalFiles()) {
    return NextResponse.json(
      { success: false, error: describeMissingAdminConfig() },
      { status: 500 }
    );
  }

  try {
    let body: any = null;
    try {
      body = await req.json();
    } catch {}

    const filename = typeof body?.filename === "string" ? body.filename : "";
    const id = typeof body?.id === "string" ? body.id : "";
    if (!filename && !id) {
      return NextResponse.json(
        { success: false, error: "Media id or filename is required for deletion." },
        { status: 400 }
      );
    }

    if (firestore && storage) {
      // The document id is not always the filename, so resolve the stored
      // object path before deleting the binary.
      const snapshot = await firestore.collection(COLLECTION).get();
      for (const doc of snapshot.docs) {
        const data = doc.data();
        const matchesId = id && doc.id === id;
        const matchesFilename = filename && data?.filename === filename;
        if (!matchesId && !matchesFilename) continue;

        const objectPath = data?.storagePath as string | undefined;
        if (objectPath) {
          try {
            await storage.bucket().file(objectPath).delete();
          } catch (err: any) {
            // A missing object must not block removal of its metadata.
            console.warn("Could not delete stored object:", err?.message || err);
          }
        }
        await doc.ref.delete();
      }
    }

    if (canUseLocalFiles()) {
      if (filename) {
        const filePath = path.join(
          /* turbopackIgnore: true */ UPLOAD_DIR,
          filename
        );
        if (fs.existsSync(/* turbopackIgnore: true */ filePath)) {
          try {
            fs.unlinkSync(/* turbopackIgnore: true */ filePath);
          } catch (err) {
            console.warn("Could not delete file:", err);
          }
        }
      }
      const currentList = readStoredMedia();
      saveStoredMedia(
        currentList.filter((item) => (id ? item.id !== id : item.filename !== filename))
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Media delete failed:", error);
    return NextResponse.json({ success: false, error: error?.message || "Failed to delete media." }, { status: 500 });
  }
}
