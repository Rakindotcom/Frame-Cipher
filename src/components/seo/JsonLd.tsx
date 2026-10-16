import React from "react";
import { generateBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import type { BreadcrumbItem } from "@/types/seo";

interface JsonLdProps {
  data: Record<string, any> | null | undefined;
}

export function JsonLd({ data }: JsonLdProps) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * Emits a standalone BreadcrumbList for pages that do not build their own
 * schema graph. Google uses these for breadcrumb rich results in the SERP.
 */
export function BreadcrumbJsonLd({
  items,
  pageUrl,
}: {
  items: BreadcrumbItem[];
  pageUrl?: string;
}) {
  const breadcrumb = generateBreadcrumbSchema(items, pageUrl);
  if (!breadcrumb) return null;
  return <JsonLd data={{ "@context": "https://schema.org", ...breadcrumb }} />;
}

