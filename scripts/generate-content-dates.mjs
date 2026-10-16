// Generates src/lib/seo/contentDates.json — a route -> last-updated map used for
// the <lastmod> value of every sitemap entry.
//
// Before this, every hand-written page shared one hard-coded date
// (SITE_CONTENT_UPDATED), which Google ignores because a constant lastmod is not
// a trustworthy freshness signal. The most accurate source of truth available
// for code-driven pages is the last commit that touched the files behind the
// route, so we read that with `git log` at build time.
//
// Wired up as an npm "prebuild" hook. It fails soft on purpose: if git is not
// available (or the checkout has no history) the existing JSON is kept, so a
// deploy can never break because of this script.
//
// Run manually with: node scripts/generate-content-dates.mjs

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const OUTPUT_PATH = path.join("src", "lib", "seo", "contentDates.json");
const FALLBACK_DATE = "2026-09-24T00:00:00.000Z";

// Keys are either an exact route ("/about") or a route prefix ending in "/"
// ("/services/" covers every nested service page).
const ROUTE_SOURCES = {
  "/": ["app/page.jsx", "src/views/Home.jsx"],
  "/about": ["app/about/page.jsx", "src/views/AboutPage.jsx"],
  "/services": ["app/services/page.jsx", "src/views/ServicesPage.jsx"],
  "/services/": ["src/data/servicePagesData.json", "src/data/servicePages.js", "app/services/[...slug]/page.jsx"],
  "/studio": ["app/studio/page.jsx", "src/views/StudioPage.jsx"],
  "/studio/": ["src/data/studioServices.js", "app/studio/[slug]/page.jsx"],
  "/projects": ["app/projects/page.jsx", "src/views/ProjectsPage.jsx", "src/data/websiteProjects.js"],
  "/case-studies": ["app/case-studies/page.jsx", "src/views/CaseStudiesPage.jsx"],
  "/case-studies/": ["src/data/growthWork.js", "src/views/CaseStudyDetailPage.jsx"],
  "/blog": ["app/blog/page.tsx", "src/lib/blog/getBlogPosts.ts", "src/lib/blog/canonicalPosts.ts"],
  "/blog/category/": ["src/lib/blog/getBlogPosts.ts", "app/blog/category/[category]/page.jsx"],
  "/authors": ["app/authors/page.tsx"],
  "/authors/": ["src/lib/authors/canonicalAuthors.ts", "app/authors/[slug]/page.tsx"],
  "/contact": ["app/contact/page.jsx", "src/views/ContactPage.jsx"],
  "/privacy": ["app/privacy/page.jsx", "src/views/PrivacyPage.jsx"],
  "/terms": ["app/terms/page.jsx", "src/views/TermsPage.jsx"],
  "/calculators": ["app/calculators/page.jsx"],
  "/calculators/": ["src/data/calculators/allAdsCalculatorsConfig.js", "src/components/calculators/DedicatedServiceCalculatorView.jsx"],
  "/tools/ads-calculator": ["app/tools/ads-calculator/page.jsx", "src/components/calculators/AdsCalculatorSuite.jsx"],
  "/tools/ads-calculator/": ["src/data/calculators/allAdsCalculatorsConfig.js", "src/components/calculators/DedicatedServiceCalculatorView.jsx"],
};

function commitDateFor(files) {
  const existing = files.filter((file) => fs.existsSync(file));
  if (existing.length === 0) return null;
  try {
    const output = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...existing],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
    ).trim();
    const date = output.split("\n").filter(Boolean)[0];
    if (!date) return null;
    const parsed = new Date(date);
    return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
  } catch {
    return null;
  }
}

function readExisting() {
  try {
    return JSON.parse(fs.readFileSync(OUTPUT_PATH, "utf8"));
  } catch {
    return null;
  }
}

function main() {
  const dates = {};
  let resolved = 0;

  for (const [route, files] of Object.entries(ROUTE_SOURCES)) {
    const date = commitDateFor(files);
    if (date) {
      dates[route] = date;
      resolved += 1;
    }
  }

  if (resolved === 0) {
    const existing = readExisting();
    console.log(
      existing
        ? "[content-dates] git history unavailable — keeping the existing contentDates.json"
        : "[content-dates] git history unavailable — keeping the mtime fallback for all routes"
    );
    return;
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    fallback: FALLBACK_DATE,
    dates,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`[content-dates] wrote ${Object.keys(dates).length} route dates to ${OUTPUT_PATH}`);
}

try {
  main();
} catch (error) {
  console.warn("[content-dates] skipped:", error?.message || error);
}
