# Frame-Cipher CMS + Dashboard — Full A-to-Z Audit Report

Audit date: 2026-09-26 · Scope: every `/admin/*` page, every `/api/*` route, all data storage,
auth, media, schema, sitemaps, analytics. Method: full source read + git state + build artifacts.

---

## 0. BOTTOM LINE

| Question you asked | Answer |
|---|---|
| Data JSON theke ja rchi na Firebase theke? | **100% JSON.** `src/data/blog-posts.json` + `authors.json`, read with `fs.readFileSync`. Firestore is **write-only and mostly dead code**. |
| Post / upload hocche ki na? | Post hocche (JSON file e), kintu **Netlify e kaj korbe na** — filesystem read-only. Upload **hocche na** — image browser-er `localStorage` e base64 hoy. |
| Image kothay store hocche? | **Kothao nai** (except 3 static founder PNG in `/public`). Uploaded media = base64 in one browser's localStorage. Firebase Storage: **zero usage**. |
| Author data / author image kothay? | `authors.json` + image = `/public/Founders/*.png`. Extra 3rd source `founders.jsx`. 3 sources, manually synced. |
| Schema real na fake? | Schema tags **real** hoy, kintu **blog er JSON-LD client-rendered** — Google pore na. Ar `Sarah Connor` = fake author, live. |
| Analytics fake ki na? | **Mostly FAKE.** 28-day chart ekta **sine wave** (`Math.sin`), lifetime = **hardcoded 1420**, live visitors **1-ei kom hoi na**. |
| Dashboard features kaj korche? | 10-ta page er moddhe **3-ta real, 4-ta partial, 3-ta pure fake UI**. |

---

## 1. DATA STORAGE — EXACTLY KOTHAY

### Blog posts
```
WRITE (admin save) →
  1. localStorage["framecipher_admin_blog_posts"]        (browser-e)
  2. src/data/blog-posts.json   ← fs.writeFileSync      (server disk)
  3. src/data/post.json         ← fs.writeFileSync      (duplicate alias)
  4. Firestore blog_posts       → ONLY in the unused single-post branch. NEVER in the real save path.
READ (public site) →
  fs.readFileSync("src/data/blog-posts.json")  — new-mtime-wins between the 2 files
  Firestore: NEVER read on any server-rendered page.
```
- `src/lib/blog/serverBlogStorage.ts:70,72` — the `fs.writeFileSync`
- `src/lib/blog/serverBlogStorage.ts:109` — the only `saveBlogPostToFirestore` call in the whole app
- `src/lib/firebase.ts:262-265` — `getBlogPostsFromFirestore()` returns `[]` on server (`typeof window === "undefined"` guard) → **structurally dead**
- `app/admin/cms/page.tsx:191-211` — `persistPosts` sends `{posts:[...]}`, which hits `saveAllServerBlogPosts` (filesystem only, **no Firestore**)

### Authors
```
WRITE → localStorage + authors.json + author.json.  Firestore: NEVER (serverAuthorStorage.ts doesn't even import firebase)
READ  → fs.readFileSync("src/data/authors.json") → fallback to CANONICAL_AUTHORS (1 hardcoded TS object)
```
- `src/lib/authors/serverAuthorStorage.ts:40-52` — dual file write
- `app/admin/authors/page.tsx:6-10` — imports `getAuthorProfilesFromFirestore`, `saveAuthorProfileToFirestore`, `deleteAuthorProfileFromFirestore` — **all 3 imported, 0 call sites, dead code**

### Media / images
| Asset | Where stored | Real? |
|---|---|---|
| Founder photos | `public/Founders/*.png` (3 files) | Real |
| Blog featured images | `""` empty → falls back to `/logo.png` | **No images exist** |
| Sarah Connor avatar | `""` → CSS initials tile "SC" | Fake person |
| Anything you upload in the editor | `localStorage["framecipher_media_library"]` as base64 | **Per-browser, ~5MB cap, invisible to public site, lost on cache clear** |
| Firebase Storage | `firebase/storage` imported **0 times** in the repo | Not used at all |

`src/components/admin/cms/MediaLibraryModal.tsx:134` → `reader.readAsDataURL(file)`

### Analytics hits
- Firestore `analytics_hits` (fire-and-forget, errors swallowed) + `src/data/analytics-hits.json` (7 hits, all from `::1` = your own localhost)
- `lifetimeBaseline: 1420` in that file is the origin of the "1,420 visitors" claim. **No data source exists for it.**

---

## 2. DASHBOARD FEATURES — A TO Z

| # | Page | Data source | Persists? | Verdict |
|---|---|---|---|---|
| 1 | `/admin` Executive | `/api/analytics` + `/api/search-console` | read-only | **FAKE** — every card has a hardcoded fallback |
| 2 | `/admin/cms` Blog CMS | `/api/blog` (fs) + localStorage | ✅ to JSON | **PARTIAL** — works locally, breaks on Netlify, API unauthenticated |
| 3 | `/admin/authors` | `/api/authors` (fs) + localStorage | ✅ to JSON | **PARTIAL** — same |
| 4 | `/admin/media` | localStorage base64 only | in-browser only | **FAKE** — not a real media library |
| 5 | `/admin/settings` | localStorage | partial | **FAKE** — profile save is a no-op that fakes a success toast |
| 6 | `/admin/seo-health` | nothing | no | **FAKE** — every metric invented; "Google Indexing API 200 OK" is a lie, no request is made |
| 7 | `/admin/technical-seo` | `useState` only | no | **FAKE** — redirects vanish on refresh, don't exist in `next.config.mjs` |
| 8 | `/admin/tools-analytics` | `/api/analytics` | read-only | **PARTIAL** — 74 services & 13 case studies are real; everything else inherited fake |
| 9 | `/admin/search-console` | **Real Google Search Console API** | read-only | **REAL DATA** ✅ — see §4 |
| 10 | `/admin/login` | Firebase Auth + local fallback | — | **PARTIAL** — Firebase real, but there's a hardcoded password backdoor |

---

## 3. ANALYTICS — WHAT IS FAKE (with proof)

| What you see | Reality | Evidence |
|---|---|---|
| "Live Active: N" | **Can never be 0.** Floored at 1. | `app/api/analytics/route.ts:117` `Math.max(activeSessions.length, 1)` |
| "Today Visits" | **Can never be 0.** Floored at 1. | `route.ts:135` |
| "Lifetime Visitors" | **Hardcoded 1420** + real count | `route.ts:49,55,142`, `firestore-analytics.ts:360-361`, `RealAnalyticsDashboard.tsx:238` (`?? 1422`) |
| **28-day visitor chart** | **A sine wave. Not data.** | `route.ts:273` `Math.floor(40 + Math.sin(i*0.8)*15 + ((i%5)*4))` — and `Math.max(real, fake)` so real data can only ever raise the bar |
| "Client Leads" chart | **Invents 1 lead every 3rd day, forever** | `route.ts:281` `calculations: calcs \|\| (i % 3 === 0 ? 1 : 0)` |
| Devices / Browser / OS / Country breakdown | With no data, hardcodes Desktop / Chrome / Windows / **Bangladesh** | `route.ts:155,185,214,232` |
| "Top Pages" | With no data, 3 hardcoded paths | `route.ts:249-251` |
| "Countries: 1" | The 1 is the fake Bangladesh | `RealAnalyticsDashboard.tsx:271` |
| Badge "Firebase & GA4 Synchronized" | **Unconditionally true** — `source` can never report failure | `route.ts:300` |
| GSC cards on `/admin` | Falls back to **fake 1,420 clicks / 48,900 impressions / 2.9% CTR** presented as Google data | `app/admin/page.tsx:136-138,169-171` |
| Donut "Webflow 24 / Growth 16 / UI-UX 14…" | **Entirely invented.** Real distribution is 12/8/12/10/8/8/9 | `app/admin/page.tsx:381-435` |
| "74 services across 5 disciplines" | There are **7** pillars, not 5 | `app/admin/page.tsx:369` |
| "Inbound Links" per service | **`4 + (idx % 3)`** — generated from the array index | `app/admin/seo-health/page.tsx:31` |
| "Schema Health 100%", "GEO Readiness 100%" | Hardcoded strings | `seo-health/page.tsx:80,89` |
| "Google Indexing API notified (200 OK)" | **No HTTP request exists.** Fakes a status code. | `seo-health/page.tsx:54-57` |
| "Redirected Visitors 3,280" | Sum of 4 hardcoded numbers. No visitor ever counted. | `technical-seo/page.tsx:124` vs `:31,38,45,52` |
| "XML Sitemap Nodes 375" | Hardcoded. Real page-sitemap has **111** URLs, post-sitemap has **0**. | `technical-seo/page.tsx:106` |
| "Robots.txt Directive = Valid" | Hardcoded. No file is ever read. | `technical-seo/page.tsx:115` |
| Blog post "views" counter | `localStorage` reload counter **in one browser** | `BlogPostClientView.tsx:113-118` |
| Firebase Analytics | Initialized, then **abandoned**. `logEvent` called **0 times**. | `src/lib/firebase.ts:46-53,326` |
| `src/lib/analytics/telemetry.ts` | Entirely dead code (0 importers) + internally fabricated (`impressions = clicks * 6`, position hardcoded `2.8`) | `telemetry.ts:188-190,343-347` |

**Bottom line:** your only genuinely real traffic numbers are in **Google Search Console** (`/admin/search-console`) and in **your own GA4 property** (GA4 receives real pageviews — `app/layout.jsx:93-105` + `AnalyticsTracker.tsx:61-69`). Nothing in the admin UI ever reads GA4 back. The "GA4 & Telemetry" label on `/admin` is a false claim.

**Why it's empty in production:** `route.ts:46` reads `src/data/analytics-hits.json`, and that file is **untracked in git** + Netlify's filesystem is read-only, so `saveStore()` (`:80`) always throws and is caught. In production `sessions` and `hits` are permanently `{}` and `[]` → 100% of the dashboard falls through to the fabrications above.

---

## 4. WHAT IS ACTUALLY REAL ✅

| Thing | Status |
|---|---|
| **Google Search Console integration** | **Genuinely real and correctly built.** Hand-rolled RS256 JWT via `crypto.subtle` (`app/api/search-console/route.ts:50-92`), 6 real queries, 30-min cache, 3-day lag handling, alpha-3 country resolution. Works without `googleapis` (not needed). Service account email matches `.env.local`. |
| Service account key hygiene | `framecipherweb-3959eb37a773.json` is gitignored + untracked ✅ |
| `/api/analytics` and `/api/analytics/track` | Unauthenticated (expected for tracking, **not** for the GET) |
| Page-view tracking beacon | `AnalyticsTracker.tsx` — real POST + GA4 event, skips `/admin` |
| 74 services / 13 case studies counts | Real, derived from the registry |
| Contact forms + inquiries → Firestore | Real (`contact_messages`, `saved_inquiries`) |
| HTML sanitization | `src/lib/blog/sanitizeHtml.ts` exists and is used |
| Static founder images | 3 real PNGs in `public/Founders/` |
| Sitemap index + robots.txt pointer | Real |

⚠️ GSC will only show live data **if `GSC_CLIENT_EMAIL` / `GSC_PRIVATE_KEY` are set as Netlify site env vars.** `.env.local` is gitignored and never deployed. If they aren't set, `/admin` shows the fake 1,420/48,900/2.9% instead of an error.

---

## 5. CRITICAL SECURITY PROBLEMS

| # | Problem | Evidence | Impact |
|---|---|---|---|
| 1 | **Your password is hardcoded in the source code and committed to git** | `src/lib/admin/auth.ts:18` — a plaintext `DEFAULT_CREDENTIALS` entry (value redacted; see git history) | Anyone with the repo can log in. It is in git history across many commits. **This must be rotated now.** |
| 2 | **Changing the password does nothing** — 2 original passwords always work | `auth.ts:126-128` — a `pass === <literal> \|\| pass === <literal>` fallback chain (values redacted) | Permanent backdoor. Settings page says "secured successfully!" |
| 3 | **`/api/blog` POST + DELETE have ZERO auth** | `app/api/blog/route.ts:24,72` | **Anyone on the internet can overwrite or delete your entire blog.** |
| 4 | **`/api/authors` POST + DELETE have ZERO auth** | `app/api/authors/route.ts:24,73` | Anyone can rewrite your author list. |
| 5 | **`/api/analytics` GET has no auth** | `route.ts:62` | Leaks visitor IPs, user agents, referrers, session IDs to anyone. |
| 6 | **Search Console "auth" is a forgeable cookie** | `route.ts:232` accepts cookie value `"true"`; set by plain `document.cookie` at `auth.ts:111` | `document.cookie = "framecipher_admin_session=true"` = full GSC read access. |
| 7 | **Admin session is a `localStorage` key** | `auth.ts:218-229` `hasLocal \|\| hasCookie`, timestamp never checked | One devtools line bypasses login. Sessions never expire. |
| 8 | `role` field is stored but **never checked** anywhere | `auth.ts:1-6,106` — 0 authorization reads | Every logged-in user is a full admin. |
| 9 | No `firestore.rules` / `storage.rules` in the repo | — | If your deployed rules are open, anyone can inject fake traffic hits and/or read all your data. **Please check this in the Firebase console.** |
| 10 | `revalidateSitemaps` server action is unauthenticated | `src/lib/actions/revalidateSitemap.ts:5` | Anyone can purge your cache. |

---

## 6. CONTENT / SEO PROBLEMS

| # | Problem | Evidence |
|---|---|---|
| 1 | **`/blog/category/[category]` returns HTTP 500 on every URL.** `Clock`, `ChevronRight`, `BookOpen` are used but the `lucide-react` import was overwritten. All 6 category URLs in the sitemap are 500s. | `app/blog/category/[category]/page.jsx:1-12` (no lucide import) vs `:60,64,115,140,148` |
| 2 | **Your entire CMS data layer is untracked in git.** `?? src/data/blog-posts.json`, `?? src/lib/blog/serverBlogStorage.ts`, `?? app/api/blog/route.ts`, `?? app/api/authors/`, `?? src/components/blog/BlogPageClient.tsx`, `?? src/lib/seo/site.js`. A clean Netlify build will **fail with module-not-found**. | `git status --porcelain` |
| 3 | **Both live blog posts are keyboard-mashed test data** and both are `status: "published"`: `/blog/test-growth-strategy-2026` (10 words, `hherjr`, `gggkgkgk`) and `/blog/m` (2 words, `cnrglkklrgndflkkkkkk…`) | `src/data/blog-posts.json` |
| 4 | **A fake author "Sarah Connor" is published** at `/authors/sarah-connor` with full `Person` schema + sitemap entry, under the heading *"Every strategy, build and insight on this site is signed by a real human."* `id: "author-test-new"` | `src/data/authors.json:41-67`, `app/authors/page.tsx:67` |
| 5 | **`post-sitemap.xml` renders 0 URLs** and there's no fallback | verified in `.next/server/app/post-sitemap.xml.body` |
| 6 | **Blog JSON-LD is client-rendered** → Google doesn't reliably index it. This kills all Article/Breadcrumb/FAQ rich results for the blog. | `app/blog/[slug]/page.tsx:105` → `BlogPostClientView.tsx:228-231` (`"use client"`) |
| 7 | Blog schema hardcodes **`alumniOf: "American International University-Bangladesh"`** for every author, and asserts a job title — unverifiable claims in structured data | `BlogPostClientView.tsx:170-174` |
| 8 | `TechArticle` is missing `proficiencyLevel`, `dateModified`, `mainEntityOfPage`. The correct builder already exists but is **dead code**. | `src/lib/seo/schema.js:246-278` unused |
| 9 | `Offer` schema has no `price` → invalid, kills pricing rich results on all 74 service pages | `schema.js:139-144` |
| 10 | Every sitemap `lastmod` is **frozen at 2026-09-24** | `sitemapData.js:10` |
| 11 | `author-sitemap.xml` reads `CANONICAL_AUTHORS` (1 person) while author pages read `authors.json` (2 people) → orphan pages | `sitemapData.js:129` vs `serverAuthorStorage.ts` |
| 12 | `/blog/category/anything` returns 200 for **any** unknown slug — infinite thin-content URL factory, no `noindex` | `page.jsx:15` `dynamicParams = true`, no `notFound()` |
| 13 | Homepage shows 3 "recent insights" that are hardcoded objects with no slug/URL — every card just links to `/blog` | `src/components/home/HomeRecentInsights.jsx:22-32` |
| 14 | 2 portfolio projects are self-labelled `placeholder: true` and are **live on the homepage** | `src/data/agency.js:669,680,687,701+` |

---

## 7. WHAT I NEED FROM YOU

**Do NOT send me a login/password.** I don't need it, and email+password cannot be used for programmatic access anyway.

What I actually need, in priority order:

1. **Rotate your admin password immediately** (it's in git history at `src/lib/admin/auth.ts:18` and in 2 hardcoded fallbacks at `auth.ts:127-128`). Delete all 3, use Firebase Auth only.
2. **Export your Firestore security rules** — Firebase Console → Firestore → Rules → copy/paste. Also Storage rules. This is the single most important unknown; it determines whether your `analytics_hits` writes are succeeding or being silently rejected.
3. **Run one command for me and paste the output** — this tells me if any real data is in Firestore at all:
   ```powershell
   node -e "const{initializeApp}=require('firebase/app');const{getFirestore,collection,getDocs}=require('firebase/firestore');initializeApp({apiKey:'AIzaSyB0X9PQ7vrw8KxBT23rgKOrB4mOzgkD0_4',projectId:'framecipherweb'});getFirestore().collection('__collections').get().then(s=>console.log(s.docs.map(d=>d.id))).catch(e=>console.log('ERR',e.code,e.message))"
   ```
4. **Confirm whether these are set as Netlify site env vars** (not in `.env.local`): `GSC_CLIENT_EMAIL`, `GSC_PRIVATE_KEY`, `GSC_SITE_URL`.
5. **A Firebase service-account JSON with Viewer role** — *only* if you want me to read/inspect/migrate your real Firestore contents. Create it in Firebase Console → Project Settings → Service Accounts → Generate new private key. Save it outside the repo and tell me the path; do not paste the key into chat.

---

## 8. RECOMMENDED FIX ORDER

**Stage 1 — stop the bleeding (today, ~1 hour)**
1. Rotate the admin password; delete `DEFAULT_CREDENTIALS` + both hardcoded fallbacks (`auth.ts:16-21,127-128`).
2. Add an auth check to `/api/blog` and `/api/authors` POST/DELETE.
3. Check + lock down Firestore rules.
4. `git add` the untracked CMS files (or a clean Netlify build fails).

**Stage 2 — make the content honest (today)**
5. Unpublish/delete `/blog/m` and `/blog/test-growth-strategy-2026`.
6. Delete or unpublish "Sarah Connor".
7. Fix the 500 on `/blog/category/[category]` (restore the lucide import).
8. Remove every fabricated metric from `seo-health`, `technical-seo`, and the `/admin` donut/GSC fallbacks — replace with "—" or a real "not connected" state.

**Stage 3 — make analytics real**
9. Delete the sine-wave generator and all the `1420` / `|| 1` fallbacks. Show honest zeros and a "collecting data" state.
10. Move `analytics_hits` to Firestore as the only store; aggregate into `analytics_daily` docs. Drop the JSON file.
11. Either actually read GA4 back (GA4 Data API needs a service account) or delete the "GA4 Synchronized" claim.
12. Make "Client Leads" real: no code ever sends `isCalculation: true` — wire the contact/calculator forms to it.

**Stage 4 — make the CMS actually a CMS**
13. Firestore becomes the source of truth; delete the `fs.writeFileSync` dual-write (broken on Netlify).
14. Move media to Firebase Storage (needs `images.remotePatterns` in `next.config.mjs`, currently missing).
15. Real role-based auth in `proxy.ts` + real 301 redirect persistence.

---

## 9. ANSWER TO "DOES IT WORK A TO Z?"

**No.** Of the 10 admin surfaces, 3 work with caveats (`/admin/cms` and `/admin/authors` work locally only; `/admin/search-console` is real), 1 is real-but-insecure, and 6 present fabricated or non-functional data as if it were live. The core issue is architectural: the CMS was written as a local-file + localStorage app, then labelled as a Firestore CMS. The analytics fallbacks were designed so the dashboard never looks empty — which is exactly why it looks populated but isn't.
