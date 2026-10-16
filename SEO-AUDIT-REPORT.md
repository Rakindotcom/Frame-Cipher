# SEO Audit Report — Frame Cipher (framecipher.info)

- Audited: production build (`next build` + `next start`), all 182 sitemap URLs crawled
- Scope: technical SEO, on-page SEO, structured data, internal/external link health
- Method: prerendered HTML audit (`.next/server/app/**/*.html`) + live crawl of every sitemap URL + outbound HTTP checks of all 121 external links

## TL;DR

| Area | Status |
| --- | --- |
| robots.txt / sitemap index | ✅ correct, valid XML, 0 non-200 URLs |
| Canonical tags | ✅ self-referencing on all pages, single host (`https://framecipher.info`) |
| Titles / descriptions | ✅ present on 182/182 pages, no real duplicates; now ≤60 chars / ≤160 chars everywhere except 1 title (61) |
| H1 | ✅ exactly one per page (4 pages fixed, see F1; calculator suite fixed, see F9) |
| Images | ✅ 950/950 referenced assets exist, 0 images without `alt`; default share card is a real 1200×630 `og-image.png` (R6) |
| Structured data | ✅ Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage, BlogPosting, Article, Person, WebApplication |
| Breadcrumbs | ✅ `BreadcrumbList` on every public page except `/` (admin/404/redirect-stub excluded) |
| Security headers | ✅ HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| robots meta on admin | ✅ `noindex, nofollow, noarchive, nocache` |
| 404 handling | ✅ 9/9 invalid routes return HTTP 404 |
| Redirects | ✅ 308/307 correct, trailing slashes normalise |
| Broken **internal** links | ✅ 0 (142 unique internal hrefs checked) |
| Broken **external** links | ⚠️ 7 were dead at audit time; **2 portfolio entries resolved** (Stitch BD + Don't Validate Labels removed) and the dead YouTube `sameAs` replaced with the live channel. Remaining: 3 blog-body `claude.ai/blog/*` 404s + 1 `developer.android.com/vitals` fetch failure (R2, CMS content), Pharmacity 500 (R1) and 4 Facebook 400s to verify in a browser; 15 YouTube + 3 LinkedIn responses are bot-blocks (429/999), not broken |

## Fixed in this pass

### F1 — Duplicate + empty `<h1>` on 4 paid-advertising pages (High)

`PageHero` (`src/components/Kinetic.jsx`) always rendered an `<h1>` even when no `title` was passed.
Four pages pass their copy through children and place their real `<h1>` further down, so they shipped **two H1s, the first empty**:

- `/services/paid-advertising/amazon-ads`
- `/services/paid-advertising/microsoft-ads`
- `/services/paid-advertising/remarketing`
- `/services/paid-advertising/lead-generation-ads`

Fix: render the heading only when a title exists. Verified: each page now has exactly 1 H1 with the correct text.

### F2 — XML sitemap listed 12 URLs that redirect (High)

`page-sitemap.xml` was 148 entries; 12 were 308 redirect *sources* (legacy service aliases), which Search Console reports as "Page with redirect" inside the sitemap.

Fix: extracted the redirect list into `src/lib/seo/redirects.js` as a single source of truth, imported by both `next.config.mjs` and `src/lib/seo/sitemapData.js`, and the sitemap now excludes every redirect source.
Verified: **148 → 136 entries, 0 non-200 URLs**; real legacy pages that legitimately return 200 (e.g. `/services/facebook-ads-bangladesh`, `/services/360-marketing`) are still listed. Redirects still behave identically.

### F3 — `/favicon.ico` returned 404 (Medium)

Generated `public/favicon.ico` from `public/logo.png` (32px + 48px PNG-in-ICO). Verified: `200 image/x-icon`.

### F4 — Wrong domain in calculator PDF footers (Medium)

4 calculator export files printed a link to **`https://framecipher.com`** — that domain does not resolve (DNS failure).

Fix: `framecipher.com` → `framecipher.info` in `GoogleAdsCalculator`, `MetaAdsCalculator`, `TikTokAdsCalculator`, `OpenAiAdsCalculator`.

### F5 — `og:url` pointed at the homepage on `/privacy` and `/terms` (Low)

Both pages had no `openGraph` block, so they inherited the root layout's `og:url` (`https://framecipher.info`). Fixed with page-level `openGraph`.

### F6 — Blog category pages had no `og:image` and thin descriptions (Medium)

`buildCategoryMetadata()` built an `openGraph` object without `images`, which replaced the root layout's `openGraph` and stripped the image; descriptions were ~62–79 chars.

Fix: added `openGraph.images` + `twitter` card and a longer default description. Verified: `og:image` present, descriptions now 138–141 chars.

### F7 — Stale duplicate `src/lib/seo/metadata.js` shadowed the typed module (High)

`src/lib/seo/metadata.js` was a leftover copy of `metadata.ts` with its own `buildBlogMetadata` and `buildCategoryMetadata` (including the pre-fix versions that omitted `og:image`). `@/lib/seo/metadata` is imported without an extension, and the two bundlers resolved it differently:

- webpack (`npm run dev --webpack`) → `metadata.js`
- Turbopack (`next build`) → `metadata.ts`

so development and production shipped different metadata. Proof from the running webpack dev server log:

```
./src/lib/seo/metadata.js
Import trace for requested module:
./src/lib/seo/metadata.js
./app/blog/category/[category]/page.jsx
```

and the observable difference: `/blog/category/technical-seo` served **no `og:image` on `npm run dev`** while the production build served one.

Fix: deleted `metadata.js`. Nothing imported its only extra export (`generatePageMetadata`), and both remaining importers use the extensionless path, so `metadata.ts` is now the single implementation. Restart `npm run dev` once so webpack drops the cached module path.

### F8 — Post titles contained a literal newline (Medium)

Three posts carried a trailing `\n` in their CMS title, producing e.g. `<title>Ecommerce SEO Checklist for Shopify and WooCommerce Stores\n | Frame Cipher</title>`:

- `/blog/ecommerce-seo-checklist`
- `/blog/technical-seo-vs-on-page-seo`
- `/blog/how-much-does-it-cost-to-build-a-mobile-app`

Fix: `buildBlogMetadata()` normalises whitespace in `post.title` once and reuses it for `<title>`, `og:title`, `twitter:title` and the image `alt`.

### F9 — `/tools/ads-calculator` had no server-rendered `<h1>` (Medium, was R4)

`AdsCalculatorSuite` calls `useSearchParams()`, so the whole page streamed in behind `<Suspense>` and the prerendered HTML contained only the fallback text — no heading at all.

Fix: the `<Suspense>` fallback now renders a visually hidden, server-rendered `<h1>Paid Advertising Budget &amp; ROAS Engine</h1>`, which is replaced by the suite's own `PageHero` H1 on hydration. Verified: 1 H1 in the initial HTML.

### F10 — Broken YouTube `sameAs` URL (Medium, was R14)

`https://www.youtube.com/@framecipher` in `src/lib/seo/organization.ts` `sameAs` returns **404 Not Found** (checked `/@framecipher`, `/c/framecipher`, `/user/framecipher` — all 404), so the Organization entity pointed at a non-existent profile.

Fix: the dead entry was removed, and the real channel you provided (`https://www.youtube.com/@teamFrameCipher`, channel id `UC_7sdwImoHzKf60zyvVerqw`, verified 200 / title "Frame Cipher - YouTube") is now in `sameAs` in `src/lib/seo/organization.ts`, `app/about/page.jsx` and the `public/llms-full.txt` channel list. LinkedIn (`/company/framecipher`) and X (`@framecipher`) were verified live.

## Recommendations applied in this pass

| # | Finding | What was done |
| --- | --- | --- |
| R6 | `og:image` declared 1200×630 but served a 512×347 logo | Generated a real **1200×630** social card at `public/og-image.png` (`scripts/generate-og-image.mjs`, brand colours + logo, 22.7 KB). All 20 OG/Twitter/service/article/schema image fallbacks now use it; `logo.png` is kept only where a *logo* is correct (favicon, manifest, `Organization.logo`, PDF letterhead, visible thumbnails). `/authors` also declared 512×512 and now declares 1200×630. |
| R7 | 39 titles over 60 chars (max 90) | New `withBrandSuffix()` in `src/lib/seo/metadata.ts`: it strips an existing `\| Frame Cipher` / `\| Framecipher` / `\| Frame Cipher Case Study` suffix and re-adds the brand **only when the result still fits in 60 chars**. Applied to blog posts, case studies, blog categories, author profiles, service pages and calculator pages; the four hand-written long titles (`/about`, `/services`, `/calculators`, `/tools/ads-calculator`, `/studio`) were rewritten. Result: **1 page left over 60 chars** (`/case-studies/phone-fashion-fix-local-seo`, 61 — the H1 copy itself). |
| R8 | 24 descriptions over 160 chars (max 268) | New `clampMetaDescription()` truncates on a sentence boundary when there is one ≥110 chars, otherwise on a word boundary, and is applied to service pages, case studies, blog posts, blog categories, author profiles and calculator pages. Visible on-page copy is untouched. Result: **0 pages over 160**. |
| R9 | Short descriptions | Already fixed in F6. |
| R10 | 27 pages had no `BreadcrumbList` | Added a reusable `BreadcrumbJsonLd` component and emitted breadcrumbs on `/privacy`, `/terms`, `/projects`, `/authors`, `/calculators`, `/tools/ads-calculator`, all 10 `/calculators/<slug>` pages, all 10 `/tools/ads-calculator/<slug>` pages and all 10 blog category pages. Only `/` (a one-item trail is meaningless), the admin area, `/_not-found`, `/_global-error` and the `/calculators/ads` redirect stub remain without one. |
| R11 | Sitemap `lastmod` was one constant date | New `scripts/generate-content-dates.mjs` (wired as the npm `prebuild` hook) maps each route family to the **last git commit that touched its source files** and writes `src/lib/seo/contentDates.json`. `sitemapData.js` now resolves `<lastmod>` per URL (exact route → longest prefix → fallback), and the sitemap index uses the newest of those dates. Result: `page-sitemap.xml` now reports 5 distinct dates instead of 1. It fails soft: no git history ⇒ the previous constant is kept, so a build can never break. Blog posts/CMS authors keep their own real dates. |
| R12 | `/services/logo-design` returned 404 | Added `{ source: '/services/logo-design', destination: '/services/content-creation/logo-design', permanent: true }` to `src/lib/seo/redirects.js` (single source of truth → also excluded from the sitemap). Verified: **308 → `/services/content-creation/logo-design`**. |
| R13 | `/authors` was not linked anywhere | Added an **Authors** link to the footer *Company* column, so the page now has sitewide internal links. |
| R14 | `facebook.com/framecipher` needed verification | Facebook returns **400 to every non-browser request** (same as the 4 personal profiles), so it can only be confirmed by opening it in a browser — see the open item below. The YouTube URL in the same `sameAs` array **was** broken and has been removed (F10). LinkedIn and X were verified live. |
| R15 | YouTube/LinkedIn rate limits | Bot protection only (429/999) — no action needed. |
| R5 | Duplicate `Organization` + `WebSite` JSON-LD on 109 pages | Removed the redundant `buildOrganizationSchema()` / `buildWebSiteSchema()` nodes from every page-level graph (`generatePageSchema()`, `buildServiceSchema()`, `buildLegacyServiceSchema()`, `buildCaseStudySchema()`, `buildBlogPostingSchema()`). The global `buildSiteGraph()` in `app/layout.jsx` remains the single definition and every `@id` reference still resolves. Verified live: 1 `Organization` + 1 `WebSite` node per page (`/`, `/about`, `/services`, `/services/website-design-development`, `/blog`, `/case-studies`, `/contact`, `/authors`); the only second `Organization` left on case studies is the legitimate nested client `about`. |

### Extra fixes found while applying the above

- **Blog post breadcrumbs carried the raw CMS title**, so 3 posts shipped `"… (A Complete Breakdown)\n"` inside `BreadcrumbList` and the `BlogPosting.headline` / `WebPage.name`. `BlogPostClientView` now normalises the title once (`cleanTitle`) and uses it for all three.
- **3 of the 10 blog category pages had lower-cased titles** (`app development Insights…`, `website development Insights…`, `website design and development Insights…`) while their H1 was properly cased, because `generateMetadata()` only checked the CMS category list and not the categories derived from posts. Metadata and the page body now share one `resolveCategoryContext()` helper, so `<title>` and `<h1>` cannot disagree.
- **`src/lib/pdf/generateBrandedReport.js` used an undefined `siteUrl`** in the PDF footer (eslint `no-undef`) — it would have thrown on PDF export. The symbol is now imported from `src/data/agency`.
- Removed two pre-existing unused imports (`Footer.jsx`, `app/author-sitemap.xml/route.js`).

**Verification:** `npm run build` passes (172/172 routes, `Finished TypeScript`), eslint reports no new problems, and the fixes were re-checked against a live `next start` instance (titles/descriptions/breadcrumbs/og:image/sitemap/redirect/asset statuses).

## Still open

### R1 — Outbound links to 3 dead portfolio websites (High)

These are live `<a href>` links in the Work page and website portfolio (`src/data/websiteProjects.js` + `src/views/ProjectsPage.jsx`):

| Entry | URL | Result |
| --- | --- | --- |
| ~~Stitch BD~~ | `https://stitchbd.net` | ✅ **Resolved** — entry removed |
| ~~Don't Validate Labels~~ | `https://dontvalidatelabels.store/` | ✅ **Resolved** — entry removed |
| Pharmacity | `https://pharmacity.com.bd/` | HTTP 500 (kept — not in the removal request; may be a temporary outage) |

Stitch BD and Don't Validate Labels were removed from `src/data/websiteProjects.js` and `src/views/ProjectsPage.jsx` (their screenshots `public/website-shots/stitchbd.webp` + `dontvalidatelabels.webp` deleted), and the two featured-slot fallbacks that referenced "Dont Validate Labels" now use Riha WebTech. The website portfolio is back to **18 projects** (matches the 18 screenshots on disk). Pharmacity stays as an option: remove the entry, keep the card but drop the outbound link, or point it at an archive snapshot.

### R2 — Broken links inside blog post bodies (High)

Blog content (stored in the CMS, editable at `/admin/cms`) links to:

- `https://claude.ai/blog/monthly-website-maintenance-cost` → 404
- `https://claude.ai/blog/wordpress-vs-webflow-vs-custom-development` → 404
- `https://claude.ai/blog/signs-your-website-needs-a-redesign` → 404
- `https://developer.android.com/vitals` → fetch failure

Affected posts include `/blog/wordpress-vs-webflow-vs-custom-development` and the homepage + `/blog` previews. These are content, not code — I can patch the HTML if you want.

### R3 — Facebook profile links return HTTP 400 (Verify)

`https://www.facebook.com/mahedihasan.perves`, `/rakinalshahriar`, `/nahid.bin.zaman11` (in `src/data/founders.jsx`, `src/data/authors.json`, `src/lib/authors/canonicalAuthors.ts`) all return **400 Bad Request**, as does `https://www.facebook.com/framecipher`. Facebook returns 400 both for deleted profiles and for bot traffic, so these need a manual open-in-browser check. Nahid's profile URL was corrected from the non-existent `nahid.bin.zaman.2025` to the real `nahid.bin.zaman11` in `src/data/founders.jsx` and `app/about/page.jsx`; Rakin (`/rakinalshahriar`) and Mahedi (`/mahedihasan.perves`) were already correct.

### O2 — Long CMS blog titles (Low)

`/blog/*` titles are the only remaining titles above 60 chars, and they come from CMS article titles (e.g. `/blog/native-vs-cross-platform-app-development` at 75). Shortening those is an editorial decision — the brand suffix is already dropped automatically.

### O3 — Unknown blog categories return HTTP 200

`/blog/category/<anything>` (e.g. `/blog/category/seo`, which is not a real category) renders an empty archive with a 200 status instead of a 404. Nothing links to these URLs, but a `notFound()` for unknown slugs would be cleaner.


## Verified healthy

- `robots.txt` — allows all public crawlers (incl. GPTBot, ClaudeBot, PerplexityBot), disallows `/admin`, `/api`, preview/sort/filter params; sitemap + host declared.
- `sitemap.xml` index → 4 child sitemaps; **182 unique URLs, 0 duplicates across sitemaps, 0 non-200**.
- Canonicals: self-referencing and correctly host-matching; `/tools/ads-calculator/<slug>` deliberately canonicalises to `/calculators/<slug>`.
- Redirects: `/insights*` → `/blog` (308), legacy `/services/*` aliases → canonical service pages (308), `/services/logo-design` → `/services/content-creation/logo-design` (308), `/dashboard*` → `/admin` (307), trailing slash → no slash (308).
- Sitemap `<lastmod>`: real per-route dates from git history (`page-sitemap.xml` reports 5 distinct dates; the index reports the newest), instead of one constant date.
- 404s: `/not-a-real-page`, `/services/not-a-real-service`, `/services/seo/not-real`, `/case-studies/not-real`, `/blog/not-real`, `/authors/not-real`, `/studio/not-real`, `/calculators/not-real`, `/tools/ads-calculator/not-real` → all 404.
- Accessibility of markup: `lang="en"` and viewport meta on every page; 0 `<img>` without `alt`.
- `llms.txt` present and accurate; `manifest.webmanifest` 200.
- Case-study/blog schema: all 21 posts carry `BlogPosting`, all 13 case studies carry `Article` + `BreadcrumbList`, and 146 service/studio/calculator/blog pages carry `FAQPage` (`Service` on 113 pages, `WebApplication` on the 11 calculator pages).
- Every page (182/182) has an `Organization` entity; no page is missing it.
- No page in the sitemap is `noindex`.
