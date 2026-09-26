import { SITE_URL } from "./site";
import { BreadcrumbItem } from "@/types/seo";

export function generateBreadcrumbSchema(items: BreadcrumbItem[], pageUrl?: string) {
  if (!items || items.length === 0) return null;

  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const canonical = pageUrl
    ? (pageUrl.startsWith("http") ? pageUrl : `${base}${pageUrl.startsWith("/") ? pageUrl : `/${pageUrl}`}`)
    : (items[items.length - 1]?.url?.startsWith("http")
        ? items[items.length - 1].url
        : `${base}${items[items.length - 1]?.url?.startsWith("/") ? items[items.length - 1].url : `/${items[items.length - 1]?.url || ""}`}`);

  const breadcrumbId = `${canonical.replace(/\/$/, "")}#breadcrumb`;

  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: items.map((crumb, idx) => {
      const fullUrl = crumb.url.startsWith("http")
        ? crumb.url
        : `${base}${crumb.url.startsWith("/") ? crumb.url : `/${crumb.url}`}`;
      return {
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.name,
        item: fullUrl.endsWith("/") || fullUrl === base ? fullUrl : `${fullUrl}/`,
      };
    }),
  };
}
