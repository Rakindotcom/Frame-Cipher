import { getAllServicePages, getServiceDisplayName, getServiceSummary } from "@/data/servicePages";
import { growthCaseStudies } from "@/data/growthWork";

export interface ServiceItemConfig {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  targetKeyword: string;
  href: string;
  type: "Service" | "Case Study";
}

export function getFrameCipherRegistry(): ServiceItemConfig[] {
  const servicePages = getAllServicePages();
  const services: ServiceItemConfig[] = servicePages.map((page) => ({
    slug: page.slug,
    category: page.pillarSlug || "complete-solutions",
    title: getServiceDisplayName(page),
    shortTitle: page.sheetTitle || page.title,
    description: getServiceSummary(page) || "",
    targetKeyword: getServiceDisplayName(page).toLowerCase(),
    href: page.fullPath,
    type: "Service",
  }));

  const caseStudies: ServiceItemConfig[] = growthCaseStudies.map((study) => ({
    slug: study.slug,
    category: (study as { serviceType?: string }).serviceType || "growth-case-study",
    title: `${study.client} (${study.industry})`,
    shortTitle: study.client,
    description: study.summary || "",
    targetKeyword: `${study.client} case study`.toLowerCase(),
    href: `/case-studies/${study.slug}`,
    type: "Case Study",
  }));

  return [...services, ...caseStudies];
}

export const FRAMECIPHER_REGISTRY = getFrameCipherRegistry();
