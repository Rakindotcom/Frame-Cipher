import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore/lite";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import { publicFirestore } from "@/lib/server/publicFirestore";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_IMAGE_BYTES = 100 * 1024;
const MAX_REQUEST_BYTES = MAX_IMAGE_BYTES + 32 * 1024;
const IMAGEKIT_ENDPOINT = "https://ik.imagekit.io/framecipher/";

function imageType(bytes: Uint8Array): string | null {
  if (bytes.length >= 8 && [137, 80, 78, 71, 13, 10, 26, 10].every((byte, index) => bytes[index] === byte)) return "image/png";
  if (bytes.length >= 3 && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) return "image/jpeg";
  const ascii = (start: number, end: number) => String.fromCharCode(...bytes.subarray(start, end));
  if (bytes.length >= 12 && ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "image/webp";
  if (bytes.length >= 6 && (ascii(0, 6) === "GIF87a" || ascii(0, 6) === "GIF89a")) return "image/gif";
  if (bytes.length >= 12 && ascii(4, 8) === "ftyp" && ["avif", "avis"].includes(ascii(8, 12))) return "image/avif";
  return null;
}

async function readLimitedBody(request: Request): Promise<Uint8Array | null> {
  if (!request.body) return null;
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_REQUEST_BYTES) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const body = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return body;
}

// The dashboard reads and writes media metadata through authenticated Firestore.
export async function GET(request: Request) {
  const guard = await requireAdmin(request);
  if (!guard.ok) return guard.response;

  try {
    const snapshot = await getDocs(collection(publicFirestore, "media"));
    const items = snapshot.docs
      .map((entry) => ({ id: entry.id, ...entry.data() }))
      .sort((a: any, b: any) => (b.uploadedAt || "").localeCompare(a.uploadedAt || ""));
    return NextResponse.json(items, { headers: { "Cache-Control": "no-store" } });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Could not list media." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

export async function POST(request: Request) {
  const guard = await requireAdmin(request);
  if (!guard.ok) return guard.response;

  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!privateKey) {
    return NextResponse.json({ success: false, error: "ImageKit is not configured on the server." }, { status: 503 });
  }
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.startsWith("multipart/form-data;")) {
    return NextResponse.json({ success: false, error: "Choose an image file to upload." }, { status: 400 });
  }
  const declaredLength = Number(request.headers.get("content-length"));
  if (declaredLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ success: false, error: "Images must be 100 KB or smaller." }, { status: 413 });
  }

  try {
    const body = await readLimitedBody(request);
    if (!body) return NextResponse.json({ success: false, error: "Images must be 100 KB or smaller." }, { status: 413 });
    const form = await new Request(request.url, {
      method: "POST",
      headers: { "content-type": contentType },
      body: body.buffer as ArrayBuffer,
    }).formData();
    const file = form.get("file");
    const titleValue = form.get("title");
    if (!(file instanceof File) || file.size === 0 || file.size > MAX_IMAGE_BYTES) {
      return NextResponse.json({ success: false, error: "Choose an image of 100 KB or smaller." }, { status: 400 });
    }
    const bytes = new Uint8Array(await file.arrayBuffer());
    const mime = imageType(bytes);
    if (!mime) {
      return NextResponse.json({ success: false, error: "Use a PNG, JPEG, WebP, GIF, or AVIF image." }, { status: 400 });
    }
    const fileName = file.name.replace(/[^A-Za-z0-9._-]/g, "_").slice(-120) || "image";
    const rawTitle = typeof titleValue === "string" ? titleValue.trim().slice(0, 200) : "";
    const title = rawTitle || fileName.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");

    const upload = new FormData();
    upload.set("file", new Blob([bytes], { type: mime }), fileName);
    upload.set("fileName", fileName);
    upload.set("folder", "/framecipher");
    upload.set("useUniqueFileName", "true");
    upload.set("checks", '"file.size" <= 102400 AND "file.mime" IN ["image/png","image/jpeg","image/webp","image/gif","image/avif"]');
    const response = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
      method: "POST",
      headers: { Authorization: `Basic ${Buffer.from(`${privateKey}:`).toString("base64")}` },
      body: upload,
      cache: "no-store",
    });
    if (!response.ok) {
      return NextResponse.json({ success: false, error: `ImageKit upload failed (${response.status}).` }, { status: 502 });
    }
    const uploaded = await response.json();
    const url = typeof uploaded.url === "string" ? uploaded.url : "";
    if (!url.startsWith(IMAGEKIT_ENDPOINT) || uploaded.fileType !== "image" || !uploaded.fileId) {
      return NextResponse.json({ success: false, error: "ImageKit returned an invalid image response." }, { status: 502 });
    }
    const item = {
      id: `media-${crypto.randomUUID()}`,
      title,
      filename: uploaded.name || fileName,
      url,
      storagePath: uploaded.fileId,
      alt: title,
      caption: "",
      description: "",
      uploadedAt: new Date().toISOString(),
      fileSize: `${(file.size / 1024).toFixed(1)} KB`,
      dimensions: uploaded.width && uploaded.height ? `${uploaded.width} × ${uploaded.height}` : "Unknown",
      type: mime,
    };
    return NextResponse.json({ success: true, item }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ success: false, error: "Could not process or upload image." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const guard = await requireAdmin(request);
  if (!guard.ok) return guard.response;
  return NextResponse.json(
    { success: false, error: "File deletion is disabled. Remove image references in the dashboard." },
    { status: 410 }
  );
}
