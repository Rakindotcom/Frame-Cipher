import { NextResponse } from "next/server";
import { buildUrlset, publishedBlogEntries } from "../../src/lib/seo/sitemapData";

export const revalidate = 3600;

export async function GET() {
  const xml = buildUrlset(await publishedBlogEntries());
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}