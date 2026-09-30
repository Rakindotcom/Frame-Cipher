import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore/lite";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import { publicFirestore } from "@/lib/server/publicFirestore";

export const dynamic = "force-dynamic";

// Kept for older media-library clients. The current dashboard reads Firestore
// directly, and this endpoint does not upload or delete any image files.
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
  return NextResponse.json(
    { success: false, error: "File uploads are disabled. Add an existing image URL in the dashboard." },
    { status: 410 }
  );
}

export async function DELETE(request: Request) {
  const guard = await requireAdmin(request);
  if (!guard.ok) return guard.response;
  return NextResponse.json(
    { success: false, error: "File deletion is disabled. Remove image references in the dashboard." },
    { status: 410 }
  );
}
