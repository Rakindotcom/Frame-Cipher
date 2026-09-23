import { NextResponse } from "next/server";
import { buildUrlset, corePageEntries, servicePageEntries } from "../../src/lib/seo/sitemapData";

export const revalidate = 3600;

export function GET() {
  const xml = buildUrlset([...corePageEntries(), ...servicePageEntries()]);
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}