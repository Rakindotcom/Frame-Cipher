import { getPillarServices, getServiceDisplayName } from "@/data/servicePages";

export const CATEGORIES = getPillarServices().map((pillar) => ({
  slug: pillar.slug,
  title: getServiceDisplayName(pillar),
  navTitle: getServiceDisplayName(pillar),
  description: pillar.metaDescription || "Full-scale strategic solutions by Frame Cipher.",
  icon: "Briefcase",
  accentColor: "#A855F7",
}));
