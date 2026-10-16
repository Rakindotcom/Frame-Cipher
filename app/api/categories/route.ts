import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { BLOG_CATEGORIES } from "@/lib/blog/getBlogPosts";
import {
  getPublicCategories,
  getPublicBlogPosts,
  saveCategoryToServer,
} from "@/lib/blog/serverBlogStorage";

export const dynamic = "force-dynamic";

/**
 * GET /api/categories
 * Returns dynamic list of all blog categories:
 * Merging BLOG_CATEGORIES + categories stored in Firestore + categories used in published posts.
 * Always ensures "All Articles" is the first category.
 */
export async function GET() {
  try {
    const [dbCategories, publicPosts] = await Promise.all([
      getPublicCategories().catch(() => []),
      getPublicBlogPosts().catch(() => []),
    ]);

    const postCategories = publicPosts
      .flatMap((p) => [p.category, ...(p.categories || [])])
      .filter((c): c is string => typeof c === "string" && Boolean(c.trim()));

    const uniqueOther = Array.from(
      new Set(
        [
          ...BLOG_CATEGORIES.filter((c) => c !== "All Articles"),
          ...dbCategories,
          ...postCategories,
        ]
          .map((c) => c.trim())
          .filter(Boolean)
      )
    );

    const merged = ["All Articles", ...uniqueOther];

    return NextResponse.json(merged, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("GET /api/categories error:", error);
    return NextResponse.json([...BLOG_CATEGORIES], {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
}

/**
 * POST /api/categories
 * Adds a new category to Firestore.
 */
export async function POST(req: Request) {
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

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    if (!name) {
      return NextResponse.json(
        { success: false, error: "Category name is required." },
        { status: 400 }
      );
    }

    const result = await saveCategoryToServer(name);

    try {
      revalidatePath("/blog");
      revalidatePath("/blog/[slug]");
      revalidatePath("/blog/category/[category]");
    } catch {}

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("POST /api/categories error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to save category." },
      { status: 500 }
    );
  }
}
