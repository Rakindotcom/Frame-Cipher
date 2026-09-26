# Master Prompt — Frame-Cipher CMS + Blog System (Complete Functionality)

Copy everything inside the block below and paste it into your AI coding agent (Claude Code / Cursor / OpenCode) while the repo root is the working directory.

---

## THE PROMPT

You are a senior full-stack engineer working inside the existing repository at the repo root. Build out the **complete production-ready functionality** of the CMS blog system. Do not scaffold a new project — extend what exists and keep every current feature working.

### 1. PROJECT CONTEXT (already true — do not re-architect)

- **Next.js 16** (App Router, Turbopack) + **React 19** + **Tailwind CSS v4** (CSS-first `@theme` in `src/index.css`, no `tailwind.config.js`)
- **Firebase v12 client SDK only** (`firebase/app`, `firebase/auth`, `firebase/firestore`, `firebase/analytics`). There is **no** `firebase-admin` and no server service account.
- Import alias: `@/` → `src/`
- `tsconfig.json` has `strict: false`, `allowJs: true`. Mixed `.jsx` / `.tsx`.
- **Middleware is `proxy.ts`** (Next 16 renamed `middleware.ts`). It currently only sets `X-Robots-Tag` for `/admin/:path*` and `/api/:path*`.
- Deploy target: **Netlify** (`netlify.toml`, Node 22, `npm run build`).
- Scripts available: `dev`, `build`, `lint`, `test`, `audit:routes`, `start`
- Tests: **Node built-in runner** — `node --test tests/*.test.mjs`. No Jest/Vitest/testing-library. Do not introduce another runner.

**Existing files you must read before writing code and then extend, not replace:**

| Area | Path |
|---|---|
| Admin shell / auth gate | `app/admin/layout.tsx`, `src/components/admin/AdminLayoutClient.tsx`, `AdminSidebar.tsx`, `AdminHeader.tsx`, `AdminMobileNav.tsx` |
| Admin login | `app/admin/login/page.tsx` |
| Blog CMS list view | `app/admin/cms/page.tsx` |
| Block editor (WordPress-style, ~4200 lines) | `src/components/admin/cms/WordPressEditor.tsx` |
| Media library (currently localStorage + base64) | `src/components/admin/cms/MediaLibraryModal.tsx`, `app/admin/media/page.tsx` |
| Authors | `app/admin/authors/page.tsx`, `src/components/admin/authors/AuthorProfileEditor.tsx` |
| Firebase + CRUD helpers | `src/lib/firebase.ts` |
| Blog data layer | `src/lib/blog/getBlogPosts.ts`, `canonicalPosts.ts`, `sanitizeHtml.ts`, `serverBlogStorage.ts` |
| Author data layer | `src/lib/authors/getAuthors.ts`, `canonicalAuthors.ts`, `serverAuthorStorage.ts` |
| Types | `src/types/blog.ts`, `src/types/author.ts` |
| Public blog UI | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/blog/category/[category]/page.jsx`, `src/components/blog/*` |
| SEO / sitemap | `src/lib/seo/*`, `app/*sitemap.xml/route.js`, `src/lib/actions/revalidateSitemap.ts` |
| Analytics | `src/lib/analytics/*`, `app/api/analytics/route.ts`, `app/api/analytics/track/route.ts` |
| Local admin auth (must be replaced) | `src/lib/admin/auth.ts` |

### 2. HARD CONSTRAINTS — violating any of these fails the task

1. **Add a dependency only if unavoidable.** Prefer what is already installed: `firebase`, `lucide-react`, `tailwindcss`, `next`, `react`. If you truly need a new package, list it, justify it in one line, and stop for confirmation before installing. Never add a UI kit, a form library, a markdown parser, or a rich-text framework without asking.
2. **Follow the existing return contract for every lib helper:** never throw, always return `{ success: boolean; id?: string; error?: string }`; log with `console.warn("Firestore <Thing> Note:", error?.message)`.
3. **Every helper must be null-safe:** guard on `if (!db) return { success: false, error: "Firebase is not configured." }` for writes and `if (!db || typeof window === "undefined") return [];` for reads so `next build` never fails during page-data collection.
4. **Sanitize before every Firestore write** with `sanitizeForFirestore()` (Firestore rejects `undefined`).
5. **Sanitize all user-authored rich text** with `sanitizeBlogHtml()` from `src/lib/blog/sanitizeHtml.ts` at render time via `dangerouslySetInnerHTML`. Never render unsanitized post HTML.
6. **Every mutating API route** must call the existing `revalidateSitemaps([...])` server action in a `try/catch` after a successful write.
7. **Follow the two-theme convention:** public site uses semantic tokens (`bg-frame-bg text-frame-fg text-frame-accent font-heading`); admin uses hardcoded arbitrary values (`bg-[#F8FAFC] text-[#0F172A] border-[#E2E8F0] text-[#64748B] bg-[#1D4ED8]`). Do not introduce a theme library.
8. **No comments in code.** No emojis. No barrel-file churn, no mass reformatting, no drive-by refactors of files outside the scope. Show a diff summary of unrelated files and confirm they are intentional.
9. **Icons** only from `lucide-react`, `h-4 w-4` / `h-5 w-5`, aliased on name collision (`Image as ImageIcon`).
10. **No `alert()`.** Status via inline banner or a `{ type: "success" | "error" | null, message: string }` state. Deletes confirm with `window.confirm()` as they do today.
11. When adding an admin page, also register it in `navGroups` in `AdminSidebar.tsx` **and** `navModules` in `AdminHeader.tsx`.
12. Every new Firestore collection is `snake_case` plural; document ID = `id || slug`.
13. Before finishing you must run, in this order, and paste the real output: `npm run lint`, `npm run build`, `npm test`. All three must pass. Also run `npm run audit:routes` if you touched public routes.

### 3. PHASE 0 — FIX THE SECURITY HOLE (do this first, it is blocking)

`src/lib/admin/auth.ts` currently contains **hardcoded plaintext admin credentials**, two extra hardcoded fallback passwords, and a session that is accepted from `localStorage` **or** a non-`HttpOnly` cookie, so anyone can bypass login with one devtools line. `/api/*` routes are entirely unauthenticated.

Replace this with real enforcement:

- Admin identity comes from **Firebase Auth only** (`signInWithEmailAndPassword` / Google popup via `src/lib/firebase.ts`).
- Add an **allowlist**: a `admins/{uid}` Firestore document, or a single `site_settings/admins` doc with an array of allowed UIDs/emails. Seed it with the current admin account. Non-allowlisted but signed-in users get a "no access" screen, not a redirect loop.
- Gate `/admin/*` in **`proxy.ts`**: verify the Firebase session cookie (`createSessionCookie` + `verifySessionCookie` server-side is not possible with client SDK only — so instead ship a signed short-lived token issued by a `/api/auth/admin-session` route and validated in `proxy.ts` via `jose`-free HMAC using `crypto.subtle` on a `SESSION_SECRET` env var). Unauthorized requests redirect to `/admin/login?next=<path>`; API requests get `401`.
- Add the `SESSION_SECRET` (and any new secret) to `.env.example` with a comment on how to generate it. Never commit a real secret.
- Every `/api/*` route that mutates blog/authors/media/settings must verify the session and return `401` on failure. Add a shared `requireAdmin()` helper in `src/lib/admin/auth.ts` and use it in all of them.
- **Keep the admin UX working**: `AdminLayoutClient.tsx` must still redirect unauthenticated users, `app/admin/login/page.tsx` must still offer Google + email/password, and it must preserve the `next` param after login.
- Remove all hardcoded passwords from the codebase and from git history if trivially possible; at minimum delete them from source and report that rotation is required.

### 4. PHASE 1 — DATA MODEL (single source of truth)

Today the truth is split between `src/data/blog-posts.json` (+ its alias `post.json`, newest-mtime-wins) and a Firestore mirror — which breaks on Netlify's read-only ephemeral filesystem. Fix the architecture, do not paper over it:

- **Firestore becomes the source of truth** for all CMS writes. Git JSON files become **seed/import fixtures only**, read on first run when the collection is empty.
- Keep the existing read path resilient: if Firestore is unavailable or slow, fall back to the seeded JSON so the public site never 500s. Extract that fallback into one function instead of repeating it.
- **Delete-on-write, not dual-write.** Remove the mirrored `writeFileSync` from `serverBlogStorage.ts` / `serverAuthorStorage.ts` and add an explicit `npm run seed:blog` script that regenerates the JSON from Firestore for local dev / diff review.
- `blog_posts` document (extend `src/types/blog.ts` with any missing fields):
  `id` (= slug), `title`, `slug`, `excerpt`, `contentHtml`, `blocks[]`, `coverImage { url, alt, width, height, blurDataUrl? }`, `authorId`, `coAuthorIds[]`, `category` (one, from `BLOG_CATEGORIES` in `src/lib/blog/getBlogPosts.ts`), `tags[]`, `seo { title, metaDescription, focusKeyword, canonicalUrl, schemaType, ogImage, noIndex }`, `seoScore` (0-100, from the existing analyzer in `WordPressEditor.tsx`), `status` (`draft|scheduled|published|archived|private`), `visibility` (`public|password|private`), `postPassword`, `publishedAt`, `scheduledAt`, `allowComments`, `allowPingbacks`, `isFeatured`, `readingTimeMinutes`, `wordCount`, `revisionIds[]`, `createdAt`, `updatedAt`, `updatedBy`.
- `author_profiles` document: keep today's fields, add `userId` (link to Firebase uid), `bio`, `role`, `socials { twitter, linkedin, github, website }`, `avatar { url, alt }`, `expertise[]`, `postCount`, `createdAt`, `updatedAt`.
- New collections: `media` (metadata only; binary lives in Storage), `categories`, `tags`, `comments`, `post_revisions`, `newsletter_subscribers`, `redirects` (if not already present).
- **Categories become data, not a hardcoded array.** Seed `categories` from the current `BLOG_CATEGORIES`, expose them through a getter, keep `blogCategorySlug()` / `blogCategoryFromSlug()` working for existing URLs so **no published URL ever breaks**. Categories need name, slug, description, parent (one level), seo meta, and a post count.

### 5. PHASE 2 — POSTS: full CRUD + lifecycle

- Create, read, update, soft-delete (archive), and permanently delete. Deleting must offer a **30-day trash** with restore, stored as `deletedAt` + `deletedBy`, excluded from all public queries.
- **Autosave**: debounced draft save (2s idle, max 1 save per 10s) with a visible `Saving… / Saved HH:MM / Unsaved changes / Save failed` status and a `Cmd/Ctrl+S` shortcut. Never lose typed content — keep a local draft mirror in `localStorage` keyed by post id, restored on load with a "recover unsaved draft?" prompt.
- **Optimistic concurrency**: store `updatedAt` on the doc; on save, run a transaction that aborts and shows a conflict dialog if the server copy changed after the editor loaded. Never silently overwrite another admin's edits.
- **Slug editor**: live slug preview, auto-slugify from title, uniqueness check against `blog_posts`, manual override, and permanent-URL warning if a published post's slug changes (offer to auto-create a 301 in the existing `app/admin/technical-seo` redirect manager).
- **Duplicate post** (with new slug and `status: "draft"`), and **bulk actions** on the list view: publish, unpublish to draft, archive, change category, add/remove tags, delete.
- **Scheduling**: `scheduledAt` in the future publishes via a `POST /api/blog/publish-scheduled` cron route (register it in `netlify.toml`), and also lazily on read so a missed cron run cannot leave a post unpublished. Show a clear "Scheduled for <date>" badge in the list.
- **Preview**: token-based draft preview route (`/blog/preview/[slug]?token=`) that renders unpublished and password-protected posts without exposing them to crawlers (`X-Robots-Tag: noindex`).
- **List view upgrades** on `app/admin/cms/page.tsx`: column sorting, per-post SEO score badge, status/category/author/tag filters, date range, full-text search over title+excerpt+content, saved filter presets in `localStorage`, result counts, bulk-select "select all filtered", and a real empty state (not a blank table) that links to "create your first post".
- **Workflow states** with role hints: Draft → In Review → Scheduled → Published → Archived. Add `reviewStatus` to the post model and show it as a column.

### 6. PHASE 3 — EDITOR (extend `WordPressEditor.tsx`; do not rewrite from scratch)

Keep the existing `contentEditable` + `document.execCommand` block model and the `blocksToHtml()` / `summarizeHtmlAsBlocks()` round-trip. Add:

- **Markdown shortcuts**: `# `, `## `, `### `, `- `, `1. `, `> `, ` ``` `, `--- `, `**bold**`, `*italic*`, `[text](url)` convert as you type; `Cmd/Ctrl+Alt+1..6` for headings; `Cmd/Ctrl+K` for link.
- **Paste handling**: paste from Word/Google Docs/Notion must become clean semantic HTML (strip `font`, `class`, inline styles, `<o:p>`, MSO junk), and pasting a URL over selected text must create a link.
- **Code blocks** with a language selector and **formula/LaTeX blocks** rendered with KaTeX (or MathJax CDN if you cannot add a dep — ask first).
- **Tables** with add/remove row+column, header row toggle, and alignment.
- **Image block**: pick from the media library, set `alt` (required before publish), optional caption, focal point, and automatic `width/height` capture.
- **Callout / quote / divider / embed** blocks; embed accepts a validated allowlist of URLs and renders a responsive iframe with a lazy facade.
- **Block-level operations**: move up/down, duplicate, delete, convert-to-text, per-block id anchors so `[slug]#block-id` deep links work, and `/` command palette to insert a block.
- **Find & replace** across the whole post, word count, reading time, and a custom SEO analyzer that scores title length, meta length, focus keyword in title/H2/first paragraph/alt text, heading hierarchy, link text, image alt coverage, and content depth — with clickable "fix" jumps to the offending block.
- **Per-post password + visibility + comment toggles** already exist; make them actually enforced end-to-end (public route must honour `visibility: "private"` and `postPassword`).
- Undo/redo must survive a save and must not drop the block model. Keyboard shortcut help sheet (`?`).

### 7. PHASE 4 — MEDIA LIBRARY (replace the localStorage/base64 implementation)

- Real uploads to **Firebase Storage** (`firebase/storage` — add it, it ships with the existing `firebase` umbrella package so no new install is needed).
- Client-side validation before upload: type allowlist (`jpg/png/webp/avif/gif/svg`), max size (env-tunable, default 8MB), max dimension, and dimension/aspect-ratio warnings for OG images.
- Client-side resize/compress with `canvas` (no dependency), generate a **blur placeholder** (`blurDataURL`) and a WebP variant, strip EXIF, and rename files to a content-hash slug.
- Library UI: grid + list view, search by filename/alt text/tag, filter by type/date/uploader, multi-select, bulk tag, bulk delete, copy URL, "insert into post", drag-and-drop upload zone with per-file progress, retry failed uploads, and a usage count ("used in 3 posts") with a warning before deleting an in-use asset.
- Serve images through `next/image`; add the required `images.remotePatterns` for `firebasestorage.googleapis.com` in `next.config.mjs` (it is currently missing and remote images will fail).
- Keep `MediaLibraryModal.tsx` API-compatible so the editor keeps working; migrate existing localStorage entries to Storage on first load and then clear them.

### 8. PHASE 5 — AUTHORS, CATEGORIES, TAGS

- Authors: full CRUD, avatar upload, `userId` link to a Firebase user, expertise tags, public profile at `/authors/[slug]` (already exists — keep the URL), and automatic `postCount` / `updatedAt` maintenance. Prevent deleting an author who has published posts (offer reassign instead).
- Add an **admin user management** page: list allowlisted admins, invite by email, change role (`owner|editor|author`), deactivate. Every role change is written to an audit log.
- Categories: CRUD with slug uniqueness, parent/child (one level), reorder, description + SEO meta, and a delete guard when posts exist (reassign or block).
- Tags: CRUD, merge/rename with redirect, per-tag post counts, and a tag index page.

### 9. PHASE 6 — COMMENTS (new)

- Schema: `postId`, `authorName`, `authorEmail` (never rendered), `bodyHtml` (sanitized), `status` (`pending|approved|spam|rejected`), `parentId` for one level of threading, `userAgentHash`, `createdAt`, `moderatedBy`, `moderatedAt`.
- Public: threaded render under the post, submit form with honeypot + time-to-submit check, optimistic "awaiting moderation" state, and pagination.
- Admin moderation queue at `/admin/comments` (register in the sidebar): filter, bulk approve/spam/delete, per-comment permalink, and link to the parent post.
- `allowComments: false` on a post hides the form and the existing comments.

### 10. PHASE 7 — SEO, sitemap, redirects, structured data

- Per-post `seo` fields already exist; wire them fully into `generateMetadata` on `app/blog/[slug]/page.tsx` and `app/blog/category/[category]/page.jsx` using the helpers in `src/lib/seo/metadata.js`.
- **OG/Twitter image** resolution: featured image → first image block → generated default. Keep the `TechArticle` / `BlogPosting` schema selection in `src/lib/schema/` and add `BreadcrumbList`, `ItemList` on the index, and `Person` on author pages (extend the existing `personSchema.ts`).
- **Canonical URLs**, `noindex` for drafts/private/preview, and correct `robots.txt` (`app/robots.js`).
- **Sitemaps**: keep the split sitemap routes working and include every published post, category, and author with `lastmod` from `updatedAt`. Sitemap routes must not hang if Firestore is slow — keep the existing timeout/`Promise.race` approach and make it reusable.
- **Redirect manager**: auto-create a 301 when a published slug changes, and expose the list at `/admin/technical-seo` (the page exists — back it with real data instead of local state).
- **Redirect legacy URLs**: the existing `/insights*` → `/blog*` rule in `next.config.mjs` must keep working; add 301s for any category/tag renames.

### 11. PHASE 8 — DISCOVERY

- **Search**: full-text over published posts. If Firestore alone is too weak, build a lightweight search index (normalized token map in a `search_index` collection, or a client-side index built from a single fetched doc) — no external search service. Search UI: debounced input, highlighted matches, filters (category, tag, author, date), and a `/blog?q=` deep-linkable state. Search page must be `noindex, follow`.
- **Blog index page**: pagination or "load more", category filter pills, tag cloud, featured post, "most read", reading-time badges, and a newsletter CTA.
- **Related posts**: 3–5 posts by shared tags/category with a documented scoring function in `src/lib/blog/`.
- **Table of contents** auto-generated from H2/H3 with scroll-spy, and a reading-progress bar.
- RSS/Atom feed at `/feed.xml` and `/rss.xml`, and a JSON-LD `Blog` schema for the site.

### 12. PHASE 9 — ANALYTICS + NEWSLETTER

- Per-post analytics: views, unique visitors, avg read time, scroll depth, and top referrers, aggregated **daily** into `post_analytics_daily` (never store one doc per hit forever). Respect a cookie-less, privacy-first design and `Do Not Track`.
- Admin analytics page: overview KPIs, top posts, traffic sources, device split, and a date-range picker — replace any placeholder/mock numbers with real aggregation over the new collection.
- Newsletter: `newsletter_subscribers` with double opt-in (token in `newsletter_tokens`), subscribe form, unsubscribe (one-click, `List-Unsubscribe` header on outgoing mail), and an admin subscribers view with CSV export. Sending is via an API route stubbed behind an env-configured provider — do not hardcode a vendor.

### 13. PHASE 10 — IMPORT / EXPORT / BACKUP

- **Import**: Markdown files (front-matter), JSON, and **WordPress WXR** (`wp-json`/WordPress eXtended RSS). Map WNX fields → post fields, preserve slugs and dates, download and remap remote images to Storage, and show a **dry-run preview** with a per-item import/skip decision before anything is written.
- **Export**: single post → Markdown with front-matter; whole blog → ZIP of Markdown + JSON + media manifest. Trigger from the admin list and per-post menus.
- **Backup/restore**: `npm run export:blog` / `npm run import:blog` scripts writing to a timestamped directory under `backups/` (gitignored).

### 14. UX, ACCESSIBILITY, STATES (applies to every screen)

- Every async surface needs `loading`, `error`, and `empty` states — skeleton loaders, an error card with a **Retry** button, and a helpful empty state with a primary CTA.
- Every destructive action confirms and is **undoable for 10 seconds** via a toast-style inline banner.
- Keyboard accessible: visible focus rings, `Esc` closes modals, focus is trapped in dialogs and returned on close, `aria-label` on every icon-only control, correct roles for tabs/menus/dialogs, and `aria-live` for save status.
- Mobile: the CMS must be fully usable at 360px — the editor needs a mobile mode (toolbar becomes a horizontal scroller or bottom sheet; the block list becomes stacked cards).
- Respect `prefers-reduced-motion` in the public blog.
- No layout shift on image load (always set `width`/`height` or `aspect-ratio`).

### 15. TESTING (Node built-in runner only)

Add files under `tests/` named `*.test.mjs` so `npm test` picks them up. Cover the pure logic, not the UI:

- slug generation and uniqueness, category/tag slug round-trip
- `sanitizeBlogHtml` against XSS payloads (`<script>`, `onerror=`, `javascript:` URLs, SVG payloads, malformed nesting)
- post status machine transitions (draft → scheduled → published → archived, and illegal transitions)
- scheduling logic and the lazy-publish-on-read path
- merge/concat/rename/redirect logic
- SEO score function
- WXR and Markdown parsers against fixture files in `tests/fixtures/`
- read-path fallback when Firestore is unavailable (mock the module)
- `requireAdmin()` allowing and denying

Keep `tests/service-content.test.mjs` passing. Do not add a test framework.

### 16. DELIVERY ORDER

Work in this order and stop for my review after each phase: **Phase 0 (security) → Phase 1 (data model) → Phase 2 (posts) → Phase 3 (editor) → Phase 4 (media) → Phase 5 (authors/categories/tags) → Phase 6 (comments) → Phase 7 (SEO) → Phase 8 (discovery) → Phase 9 (analytics/newsletter) → Phase 10 (import/export) → polish/a11y → tests**.

### 17. DEFINITION OF DONE

- [ ] `npm run lint`, `npm run build`, `npm test` all pass, output pasted
- [ ] No hardcoded credentials or secrets anywhere; new secrets documented in `.env.example`
- [ ] Every `/admin/*` page and every mutating `/api/*` route is server-verified
- [ ] No published URL 404s or loses its slug; all redirects are 301 and recorded
- [ ] No `dangerouslySetInnerHTML` without `sanitizeBlogHtml()`
- [ ] Every new collection has a documented schema and a fallback read path
- [ ] Works with JavaScript enabled, at 360px and 1440px, keyboard-only
- [ ] Empty/loading/error states exist on every new screen
- [ ] Final message: a summary of files added/changed/deleted, decisions made, anything deliberately left out, and the exact manual steps to verify each phase

### 18. WORKING STYLE

- Read the relevant existing files **before** proposing edits, and match the existing style, naming, and file layout exactly.
- When a requirement is ambiguous or you believe the existing architecture should change, **stop and ask** with a one-paragraph recommendation and two options — do not silently redesign.
- Prefer the smallest change that fully solves the requirement. No speculative abstractions, no new folders "for future use", no `TODO` stubs left in the code.
- If a phase is too large to complete well in one pass, say so and propose a split, then do the first slice completely.

---
