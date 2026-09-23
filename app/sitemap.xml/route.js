import { NextResponse } from "next/server";
import { BASE_URL, SITE_CONTENT_UPDATED, xmlEscape } from "../../src/lib/seo/sitemapData";

export const revalidate = 3600;

// Sitemap index that references the four (sub-)sitemaps below, mirroring a
// WordPress-style split so each file stays small and cacheable.
export function GET() {
  const children = ["post-sitemap.xml", "page-sitemap.xml", "category-sitemap.xml", "author-sitemap.xml"]
    .map((name) => `  <sitemap>\n    <loc>${xmlEscape(`${BASE_URL}/${name}`)}</loc>\n    <lastmod>${SITE_CONTENT_UPDATED.toISOString()}</lastmod>\n  </sitemap>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${children}\n</sitemapindex>`;
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}