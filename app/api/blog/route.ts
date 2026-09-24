import { NextResponse } from "next/server";
import { getBlogPostsFromFirestore } from "@/lib/firebase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const posts = await getBlogPostsFromFirestore();
    return NextResponse.json(posts, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
    });
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
