import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import {
  getServerBlogPosts,
  getPublicBlogPosts,
  saveServerBlogPost,
  saveAllServerBlogPosts,
  deleteServerBlogPost,
} from "@/lib/blog/serverBlogStorage";

export const dynamic = "force-dynamic";

/**
 * `GET /api/blog` is readable without a session (proxy.ts allows it) and is
 * consumed by the public blog components, so it must never return drafts,
 * private posts, or a post password. The CMS asks for `?scope=all`, which
 * requires a valid admin session.
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    if (searchParams.get("scope") === "all") {
      const guard = await requireAdmin(req);
      if (!guard.ok) return guard.response;
      const posts = await getServerBlogPosts();
      return NextResponse.json(posts, {
        headers: { "Cache-Control": "no-store" },
      });
    }

    const posts = await getPublicBlogPosts();
    return NextResponse.json(posts, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("API GET /api/blog error:", error);
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

    if (Array.isArray(body?.posts)) {
      const res = await saveAllServerBlogPosts(body.posts);
      try {
        revalidatePath("/blog");
        revalidatePath("/blog/[slug]", "page");
        revalidatePath("/authors");
        revalidatePath("/authors/[slug]", "page");
        revalidatePath("/post-sitemap.xml");
        revalidatePath("/category-sitemap.xml");
      } catch {}
      return NextResponse.json(res, { status: res.success ? 200 : 500 });
    }

    const post = body?.post || body;
    if (!post || !post.title || !post.slug) {
      return NextResponse.json(
        { success: false, error: "Title and slug are required." },
        { status: 400 }
      );
    }

    const res = await saveServerBlogPost(post);
    try {
      revalidatePath("/blog");
      revalidatePath("/blog/[slug]", "page");
      revalidatePath("/authors");
      revalidatePath("/authors/[slug]", "page");
      revalidatePath("/post-sitemap.xml");
      revalidatePath("/category-sitemap.xml");
    } catch {}
    return NextResponse.json(res, { status: res.success ? 200 : 500 });
  } catch (error: any) {
    console.error("API POST /api/blog error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to save post." },
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
        { success: false, error: "Post ID or slug is required for deletion." },
        { status: 400 }
      );
    }

    const res = await deleteServerBlogPost(id);
    try {
      revalidatePath("/blog");
      revalidatePath("/blog/[slug]", "page");
      revalidatePath("/authors");
      revalidatePath("/authors/[slug]", "page");
      revalidatePath("/post-sitemap.xml");
      revalidatePath("/category-sitemap.xml");
    } catch {}
    return NextResponse.json(res, { status: res.success ? 200 : 500 });
  } catch (error: any) {
    console.error("API DELETE /api/blog error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to delete post." },
      { status: 500 }
    );
  }
}

