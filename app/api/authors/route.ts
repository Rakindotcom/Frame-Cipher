import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import {
  getServerAuthors,
  saveServerAuthor,
  saveAllServerAuthors,
  deleteServerAuthor,
} from "@/lib/authors/serverAuthorStorage";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const authors = await getServerAuthors();
    return NextResponse.json(authors, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error: any) {
    console.error("API GET /api/authors error:", error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  try {
    let body: any = null;
    try {
      body = await req.json();
    } catch {
      try {
        const text = await req.text();
        body = text ? JSON.parse(text) : null;
      } catch {}
    }

    if (Array.isArray(body?.authors)) {
      const res = await saveAllServerAuthors(body.authors);
      try {
        revalidatePath("/authors");
        revalidatePath("/authors/[slug]", "page");
        revalidatePath("/blog");
        revalidatePath("/blog/[slug]", "page");
      } catch {}
      return NextResponse.json(res, { status: res.success ? 200 : 500 });
    }

    const author = body?.author || body;
    if (!author || !author.name || !author.slug) {
      return NextResponse.json(
        { success: false, error: "Author name and slug are required." },
        { status: 400 }
      );
    }

    const res = await saveServerAuthor(author);
    try {
      revalidatePath("/authors");
      revalidatePath("/authors/[slug]", "page");
      revalidatePath("/blog");
      revalidatePath("/blog/[slug]", "page");
    } catch {}
    return NextResponse.json(res, { status: res.success ? 200 : 500 });

  } catch (error: any) {
    console.error("API POST /api/authors error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to save author." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.response;

  try {
    const { searchParams } = new URL(req.url);
    let id = searchParams.get("id");
    if (!id) {
      try {
        const body = await req.json();
        id = body?.id || body?.slug;
      } catch {}
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Author ID or slug is required for deletion." },
        { status: 400 }
      );
    }

    const res = await deleteServerAuthor(id);
    try {
      revalidatePath("/authors");
      revalidatePath("/authors/[slug]", "page");
      revalidatePath("/blog");
      revalidatePath("/blog/[slug]", "page");
    } catch {}
    return NextResponse.json(res, { status: res.success ? 200 : 500 });
  } catch (error: any) {
    console.error("API DELETE /api/authors error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to delete author." },
      { status: 500 }
    );
  }
}

