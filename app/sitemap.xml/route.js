import { NextResponse } from "next/server";
import {
  BASE_URL,
  latestContentDate,
  xmlEscape,
} from "../../src/lib/seo/sitemapData";

export const revalidate = 3600;

export function GET() {
  const indexLastModified = latestContentDate().toISOString();
  const children = [
    "post-sitemap.xml",
    "page-sitemap.xml",
    "category-sitemap.xml",
    "author-sitemap.xml",
  ]
    .map(
      (name) => `  <sitemap>
    <loc>${xmlEscape(`${BASE_URL}/${name}`)}</loc>
    <lastmod>${indexLastModified}</lastmod>
  </sitemap>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children}
</sitemapindex>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}