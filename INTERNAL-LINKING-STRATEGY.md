# Contextual Internal Linking — Strategy & Content Recon

> Goal: link *phrases inside body paragraphs* to the page that is **actually about that phrase**, across
> 74 service pages + 25 studio pages + the 21 CMS blog posts, without spamming or mismatching anchors.

---

## 1. Content recon (what actually exists in the repo)

| Corpus | Source of truth | Size | Shape |
| --- | --- | --- | --- |
| Service pages | `src/data/servicePagesData.json` (via `servicePages.js`) | **74** (7 pillars + 67 sub-services) | avg **14,386 chars** of prose per page: `h1`, `seoTitle`, `metaDescription`, `offerings`, `whyMatters`, `whyChooseUs`, `processSteps`, `pricing`, `serviceAreas`, `timeline`, `guarantee`, `faqs`, `nextSteps` |
| Studio pages | `src/data/studioServices.js` (+ `StudioSub*` components) | **25** | `name`, `seoTitle`, `h1`, `intro`, `detailedDescription`, `highlights`, `benefits`, `deliverables`, `pricingFactors`, `faqs` |
| Blog posts | **CMS / Firestore** (`getMergedPostsFromStorage`, `getBlogPostsFromFirestore`) | **21** | dynamic route (`/blog/[slug]` is server-rendered; **no prerendered HTML**). `CANONICAL_BLOG_POSTS` is intentionally `[]`, `blog-posts.json` + `post.json` are empty |

Sub-service split: `website-design-development` 12 · `seo` 12 · `paid-advertising` 10 · `content-creation` 9 · `app-development` 8 · `social-media-management` 8 · `content-writing` 8.

### What the current linker does (and its gaps)

`src/lib/seo/contextualParagraphLinks.jsx` holds a hand-written `CONTEXTUAL_LINK_RULES` dictionary (40 rules → 40 destinations) and `renderContextualParagraph()`, used by only **5 components** (`AboutVision`, `CaseStudyDetailBreakdown`, `StudioSubOverview`, `ServiceExperienceBusinessCase`, `ServiceExperienceHero`).

Measured against the real corpus:

- Covers **23 / 74** service destinations → **51 service pages have zero inbound contextual links** from the dictionary.
- Covers **0 / 25** studio pages and **0 / 21** blog posts.
- It links the *first phrase it finds* with **no relevance gate**, so it can attach an anchor whose destination page is not really about that phrase. Example found in the real data: `"ongoing support maintenance"` → `/services/website-design-development/business-website` (that phrase is a minor bullet on the target, not its topic).
- No per-page cap, no "one link per destination per page" guarantee, no orphan check.

`src/lib/seo/internalLinks.js` already contains a good **structural** linker (hub/sibling/cross-cluster/comparison/calculator/studio-bridge/case-study maps, with `isLinkableServicePath` guarding redirects). That lives in dedicated link sections — it is *not* in-paragraph. Keep it; this strategy adds the missing in-paragraph layer.

---

## 2. Core principle — **anchor-from-destination (reverse index)**

The anchor must be a phrase the destination page is *primarily about*, not just a phrase that happens to exist on it.

1. Every target publishes its **primary identity vocabulary**: its display name, `h1`, `seoTitle` fragments, and its own top `offerings`.
2. A link is only created when the candidate phrase in the source paragraph is part of the **destination's own primary vocabulary** *and* is **not** the source page's own primary vocabulary (no self-link).
3. The **anchor text = the exact substring found in the source paragraph** — so it reads naturally, and by construction the destination is genuinely about it.

### Measured with this rule on the real 74 pages

- **264 validated (source → target) pairs**, covering **69 / 74** targets — every pair topically correct.
- Ambiguous primary names (a phrase being the identity of 2+ pages): **0** today (will need arbitration once blogs are included).

```
[/services/website-design-development/business-website]
    --"website design and development"-->  /services/website-design-development
[/services/content-writing/website-content]
    --"website design and development"-->  /services/website-design-development
```

Contrast with the naive dictionary approach, which produced `"ongoing support maintenance"` → business-website.

---

## 3. Anchor tiers

| Tier | Anchor source | Example | Allowed |
| --- | --- | --- | --- |
| **T1 — primary** | destination display name / `h1` / `seoTitle` | "search engine optimization" → `/services/seo` | always, 1 per destination per page |
| **T2 — sub-topic** | destination's own `offerings` / section headings | "keyword research" → `/services/seo/keyword-research` | only if the phrase is not another page's T1 name |
| **T3 — functional** | case studies, calculators, studio bridges, contact (already in `internalLinks.js`) | "Meta ads ROAS calculator" → `/calculators/meta-ads` | as today |
| **B — blog** | blog `focusKeyword` / title phrase | service↔blog both directions | see §6 |

---

## 4. Placement rules (anti-spam, deterministic)

- Inject **only inside plain body paragraphs** — never in headings, buttons, list/tab labels, table cells, captions, existing `<a>`, or CTA/quote blocks.
- **Longest match wins**, word-boundary, case-insensitive match, **original casing preserved** in the anchor.
- **First occurrence only**; **max 1 link per paragraph**; **max 3–5 links per page**; **each destination at most once per page**.
- Skip a paragraph that already contains an internal link.
- Anchor length **2–5 words**; drop a phrase that could be claimed by **>16 pages** (too generic) or by **<2** (no link value).
- Never self-link (`isCurrentPage` logic stays, plus T1 identity check).
- Ambiguity: if a phrase is T1 for 2+ pages, do **not** auto-link it — resolve manually to the strongest single page.

---

## 5. Where it plugs in

1. New resolver `src/lib/seo/internalLinkIndex.js`: builds T1/T2 anchors from `servicePagesData.json` + `studioServices.js` (+ blog focus keywords when available) and exports `buildLinkIndex()` / `resolveContextualLinks(text, { currentPath })`.
2. Rewire `renderContextualParagraph()` to: T1/T2 from the index → T3 from the existing curated rules → apply §4 gates → existing dedupe/`usedUrls`.
3. Mount it on the paragraph renderers already in place (5 components) **plus** the remaining prose renderers under `src/components/specific-service/**` and `src/components/studio/**`.
4. Blog: apply at render in `BlogPostClientView` (works with CMS HTML, no CMS edits) — or inject into CMS HTML if you prefer.

---

## 6. Blog (21 posts) handling

- Blog bodies live in Firestore, so **render-time injection** is the only code-side option (`BlogPostClientView` / blog body renderer). No repo content to edit.
- Blog → service: match blog paragraphs against the T1/T2 index (each post already has `focusKeyword` + `category`, which seeds its own T1 for inbound links from services).
- Service → blog: add each post's `focusKeyword`/title phrase as a link target in the index, gated by the same relevance rule.

---

## 7. Verification & acceptance

- `scripts/audit-internal-links.mjs` (run after `next build`, parses built HTML for the 154 prerendered pages + renders blog/service/studio routes):
  - per page: count of in-body contextual links (target **3–6**), 0 self-links, 0 broken, 0 duplicate destination;
  - **orphans**: any service/studio/blog URL with **0** inbound contextual links;
  - dump the full anchor table (source → anchor text → destination) for human review.
- `npm run build` + `tsc --noEmit` + eslint stay clean.

---

## 8. Rollout proposal

1. **Pilot** on one cluster (recommended: the 12 `seo/*` sub-services + `/services/seo`) so you can eyeball the generated anchors before site-wide rollout.
2. Generate the anchor table → you approve/adjust → wire into the renderers → run the audit script → report before/after.
3. Repeat per cluster (website, apps, paid ads, social, content) and then studio + blog.

### Open decisions

1. Pilot first (SEO cluster) or full rollout in one pass?
2. Blog links: render-time injection (my recommendation) or CMS HTML edits by you?
3. Do you want to review the generated anchor list before it goes live?
