# Frame Cipher — Content Zero-Loss Policy & UI Decluttering Law

> **Status:** Absolute Non-Negotiable Requirement for All Codebases, Pull Requests & AI Agents  
> **Target Audience:** Any AI prompt, LLM developer, frontend engineer, or UI/UX designer modifying `src/` or `app/`.

---

## 1. The Core Law: Substantive Depth vs. Decorative Clutter

```
┌────────────────────────────────────────────────────────────────────────┐
│            SUBSTANTIVE CONTENT = 100% SACRED (ZERO LOSS)               │
│            ARTIFICIAL UI CLUTTER = STRICTLY REMOVED                    │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   PRESERVE 100% OF SUBSTANTIVE CONTENT:                                │
│   • All heading words, service descriptions, and technical explanations│
│   • All verified numbers, metrics, pricing tables, and ROI figures     │
│   • All deliverables, capabilities, and FAQ items                      │
│   • All internal/external links and JSON-LD structured data schemas    │
│                                                                        │
│   REMOVE ARTIFICIAL UI NOISE (PER USER DIRECTIVE):                     │
│   • Decorative slash/bracketed eyebrow tags above headings             │
│     (e.g. "[ 01 / PATHWAYS ]", "The offer / Architecture")             │
│   • Fake browser URLs or fake dashboard window controls on images      │
│   • Text overlays, client pills, or dark scrims covering images        │
│   • Redundant "Scope: ..." strings inside card action footers          │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Seven Specific Protections for Substantive Content

### 1. Protection of Copy & Technical Depth
- **Violation:** Replacing a 3-sentence technical explanation with a generic 5-word tagline like *"We build fast websites."*
- **Required Behavior:** Retain the full technical description in its entirety. Make it scannable using `max-w-3xl text-zinc-300 font-normal leading-relaxed` for section intros and `text-zinc-400` for card bodies.

### 2. Protection of Metrics & Empirical Data
- **Violation:** Removing stats like `74+ Services across 7 core areas`, `50+ Brands served`, `20+ Countries`, or specific case study figures (`108,887 views`, `312% ROAS`).
- **Required Behavior:** Keep every number, prefix, suffix, and explanatory note. Format numbers with `tabular-nums`.

### 3. Protection of Deliverables & Capabilities
- **Violation:** Reducing a list of 10 deliverables down to 4 to "make the card look cleaner."
- **Required Behavior:** Present deliverables using compact concentric badge chips (`rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300`) or clean divided rows so all items remain readable without visual bloat.

### 4. Protection of Internal & External Links
- **Violation:** Removing `Link` elements, omitting contextual SEO links, or unlinking CTAs.
- **Required Behavior:** Every link, contextual anchor, and CTA route (`/services/...`, `/case-studies/...`, `/projects`, `/studio`, `/contact`) must remain wired and clickable.

### 5. Protection of Authentic Proof & Media Assets
- **Violation:** Removing real Dhaka studio photos (`/studio/studio-01-set.jpg`, etc.), founder portraits, or client portfolio screenshots.
- **Required Behavior:** Keep every authentic image asset, ensure optimal `loading="lazy"` attributes, and present them in pure 16:10, 16:9, or 4:3 frames with ZERO text overlays on the image itself.

### 6. Protection of Schema & Structured Data
- **Violation:** Stripping out `<script type="application/ld+json">` FAQ schemas, BreadcrumbLists, or Organization structured data.
- **Required Behavior:** Preserve all SEO and semantic structured data blocks completely.

### 7. Protection of Sovereign Brand Vocabulary
- **Violation:** Changing Frame Cipher's disciplined, architectural tone into generic agency fluff.
- **Required Behavior:** Retain Frame Cipher's exact vocabulary: *"sovereign", "closed-loop machine", "compounding enterprise value", "no vendor drift", "pressure level", "mathematical attribution"*.

---

## 3. Pre-Commit Verification Checklist

Before marking any component update complete, verify:
- [ ] Are all substantive heading words and body sentences intact?
- [ ] Are all numbers, prices, and metrics identical to the source?
- [ ] Are all artificial slash/bracketed taglines above headings removed?
- [ ] Are all H1, H2, and H3 headings in natural Title/Sentence case (no `uppercase`) with solid white + italic purple emphasis?
- [ ] Are all images 100% clean (no text overlays, no fake browser bars)?
- [ ] Are all section and card buttons standardized to rounded-full pills?
