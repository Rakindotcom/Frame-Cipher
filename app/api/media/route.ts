import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { requireAdmin } from "@/lib/admin/requireAdmin";

export const dynamic = "force-dynamic";

const UPLOAD_DIR = path.join(process.cwd(), "public", "blog-images");
const MEDIA_JSON_PATH = path.join(process.cwd(), "src", "data", "media.json");

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

export async function GET() {
  ensureDir();
  const stored = readStoredMedia();
  const storedMap = new Map(stored.map((item) => [item.filename, item]));

  // Also scan public/blog-images to ensure any dropped/existing images are discovered
  let files: string[] = [];
  try {
    files = fs.readdirSync(UPLOAD_DIR).filter((f) => !f.startsWith("."));
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
        stats = fs.statSync(path.join(UPLOAD_DIR, filename));
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

  try {
    ensureDir();
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const dimensions = (formData.get("dimensions") as string) || "";
    const title = (formData.get("title") as string) || "";

    if (!file || typeof file === "string") {
      return NextResponse.json({ success: false, error: "No file provided for upload." }, { status: 400 });
    }

    const maxBytes = 10 * 1024 * 1024; // 10MB
    if (file.size > maxBytes) {
      return NextResponse.json({ success: false, error: "File exceeds 10MB limit." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const rawName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
    const filename = `${Date.now()}-${rawName}`;
    const filePath = path.join(UPLOAD_DIR, filename);

    fs.writeFileSync(filePath, buffer);

    const item: LocalMediaItem = {
      id: `media-${Date.now()}`,
      title: title || file.name.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " "),
      filename,
      url: `/blog-images/${filename}`,
      storagePath: `public/blog-images/${filename}`,
      alt: title || file.name.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " "),
      caption: "",
      description: "",
      uploadedAt: new Date().toISOString(),
      fileSize: formatBytes(file.size),
      dimensions,
      type: file.type || "image/jpeg",
    };

    const currentList = readStoredMedia();
    currentList.unshift(item);
    saveStoredMedia(currentList);

    return NextResponse.json({ success: true, item });
  } catch (error: any) {
    console.error("Local media upload failed:", error);
    return NextResponse.json({ success: false, error: error?.message || "Local media upload failed." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  try {
    let body: any = null;
    try {
      body = await req.json();
    } catch {}

    const filename = typeof body?.filename === "string" ? body.filename : "";
    const id = typeof body?.id === "string" ? body.id : "";

    if (filename) {
      const filePath = path.join(UPLOAD_DIR, filename);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (err) {
          console.warn("Could not delete file:", err);
        }
      }
    }

    const currentList = readStoredMedia();
    const filtered = currentList.filter((item) => (id ? item.id !== id : item.filename !== filename));
    saveStoredMedia(filtered);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Local media delete failed:", error);
    return NextResponse.json({ success: false, error: error?.message || "Failed to delete media." }, { status: 500 });
  }
}
