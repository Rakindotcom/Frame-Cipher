# Frame Cipher — Layout, Grids & Section-by-Section Architectural Specification
> **Integrated Specification:** Synchronized with `D:\web-interface-guidelines\AGENTS.md` and user-approved production benchmarks.
> **Core Axiom:** Precision engineering geometry without box clutter, card fatigue, or horizontal bleed. Maximum viewport bounds are anchored at `max-w-7xl`. Every grid cell aligns to single-pixel hairlines (`border-white/[0.08]`).

---

## 1. Global Viewport, Spacing & Container Rules

### 1.1 Strict Max-Width Law & Section Wrapper
```jsx
/* STANDARD CONTAINER WRAPPER (Mandatory for all page sections) */
<section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white sm:px-6 md:px-8 md:py-24 lg:py-28 overflow-hidden">
  <div className="mx-auto max-w-7xl">
    {/* Section Content */}
  </div>
</section>
```
- **BANNED:** Never use `max-w-[95vw]`, `w-screen`, or uncontrolled width wrappers that cause horizontal scrolling.
- **Line-Length Cap for Text-Heavy Readability:**
  - Section intro paragraphs (`<p>`) MUST be constrained to `max-w-3xl` (60–75 characters per line) so eyes never strain across wide monitors.
- **Section Padding Rhythm:**
  - Mobile (<640px): `px-4 py-16`
  - Tablet (640px–1024px): `px-6 py-20`
  - Desktop (>1024px): `px-8 py-24 lg:py-28`

### 1.2 Core Layout & Cleanliness Laws
- **MUST:** Optical alignment; deliberate alignment to grid/baseline/edges — no irregular gaps.
- **MUST:** Avoid unwanted scrollbars; fix overflows with `min-w-0` on flex children and `overflow-hidden` on bounded viewports.
- **NEVER: `transition: all`** — explicitly declare properties (e.g., `transition-colors duration-200`, `transition-transform duration-200`).
- **BANNED: Artificial Slash & Bracketed Taglines Above Headings** — Never place artificial slash pill badges or bracketed labels (e.g. `The offer / Architecture`, `[ 01 / PATHWAYS • START HERE ]`) above headings. Headings lead directly.
- **BANNED: `uppercase` on H1, H2, H3 Headings** — Use natural Title/Sentence case (`font-medium leading-[0.96] tracking-tight text-white`) with an italic purple emphasis word (`italic text-frame-accent`).
- **BANNED: Fake Dashboards on Images** — Never add fake browser URLs (`https://framecipher.com/work/...`) or window dots around real images.
- **BANNED: Text Overlays on Images** — Images must remain 100% clean and unobstructed with zero dark opacity scrims (`bg-black/40`) or floating text pills.

---

## 2. The 5 Visual Rhythm Modalities (Preventing Card Fatigue on Text-Heavy Pages)

Because Frame Cipher pages contain deep SEO/AEO copy, **never stack more than two 3-column card grids back-to-back**. Alternate between these 5 distinct structural modalities down the page:

| Modality | Name | Tailwind Structure | Best Used For |
|---|---|---|---|
| **Modality 1** | **Editorial Divided Rows** | `border-y border-white/[0.08] divide-y divide-white/[0.08]` (12-col row alignment) | Problem statements, business goals, origin stories, step-by-step operating loops. |
| **Modality 2** | **Architectural Divided Column Band** | `border-y border-white/[0.08] grid lg:grid-cols-4` or `lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]` | Key metrics ledgers, 5-pillar capability overviews, engagement models. |
| **Modality 3** | **Shared 1px Hairline Continuum Matrix** | `rounded-xl border border-white/[0.08] bg-white/[0.08] gap-px grid sm:grid-cols-2 lg:grid-cols-3 overflow-hidden` (cells `bg-[#0f1011]`) | Manifesto theses, problem selectors, deliverables matrices, operating principles. |
| **Modality 4** | **Elevated Surface Card Grid** | `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` (cards `rounded-xl border border-white/[0.08] bg-[#121214]`) | Visual showcases (Studios, Featured Work, Websites/SEO Portfolio, Case Studies, Blogs, Founders). |
| **Modality 5** | **Interactive Progressive Disclosure** | Tabbed pillar switcher or centered `max-w-4xl` accordion (`space-y-3`) | 74+ Service Directory (`ServicesAllList`), Pricing Tiers, Due Diligence FAQs. |

---

## 3. Section-by-Section & Component-by-Component Grid Directory

This master directory defines the exact layout and grid pattern for every section across Frame Cipher so that all pages remain 100% visually consistent.

### 3.1 Hero Section (`HomeHero`, `AboutHero`, `ContactHero`, `ServicesHero`, Pillar Heroes)
- **Grid Pattern:** Asymmetric 12-Column Split (`grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-center`) or focused `max-w-5xl` editorial hero with breadcrumb on subpages.
- **Typography:**
  - Subpage Breadcrumb: `Home > Section` (`font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400`).
  - Massive H1 (`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.94] tracking-tight text-white` + `italic text-frame-accent` on emphasis word). NO `uppercase`.
  - Editorial description (`max-w-3xl text-base text-zinc-300 sm:text-lg md:text-xl`).
  - Dual button group (`PosterButton` primary filled white + `PosterButton` secondary outline pill).
- **Right Column (HomeHero / Split Heroes):**
  - Elevated Hardware Stats & Telemetry Card (`rounded-2xl border border-white/[0.1] bg-[#121214]/90 p-7 md:p-8 backdrop-blur-xl` with top hairline illuminated sheen and 2x2 tabular numbers).
- **Strict Rule:** Zero fake browser controls, zero fake URLs, zero artificial taglines above H1.

### 3.2 Client Logos Cloud (`Clients`, `AboutClients`)
- **Grid Pattern:** Continuous horizontal marquee or responsive flex wrap (`max-w-7xl mx-auto`).
- **Card/Item:** Pure monochrome vector/webp logos at `opacity-40 hover:opacity-100 transition-opacity duration-300`.

### 3.3 Problem / Solution Matrix (`HomeProblems`, `ServicesProblemSelector`)
- **Grid Pattern:** Modality 1 (12-Column Divided Rows) or Modality 3 (2x2 Shared Hairline Matrix).
- **Structure:** Each item has a tabular number (`01`), bold problem statement in natural case, concise resolution copy (`text-zinc-400`), and direct pathway link or bottom `PosterButton`.

### 3.4 Core Capabilities & Services (`HomeBuild`, `ServicesCoreCapabilities`, Sub-Service Offerings)
- **Grid Pattern:** Modality 4 (3-Column Card Grid `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`) or Modality 3 (2x3 Shared Hairline Matrix).
- **Card Architecture:**
  - `rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7`.
  - Top laser highlight sheen (`before:bg-gradient-to-r before:via-frame-accent/40`).
  - Deliverable pills: Concentric `rounded-md bg-white/[0.03] border border-white/[0.08] px-2.5 py-1 text-[11px]`.
- **Action:** Section header or footer centered `SectionButton href="/services">Explore all services</SectionButton>`.

### 3.5 Physical Infrastructure & Studio Showcase (`HomeStudioShowcase` & `/studio` Pages)
- **Grid Pattern:** Modality 4 Asymmetric Photographic Showcase (`grid gap-6 sm:grid-cols-2 lg:grid-cols-3`).
  - Index 0 spans 2 columns (`sm:col-span-2 lg:col-span-2 aspect-[16/9]`).
  - Secondary cards span 1 column (`aspect-[16/10]`).
- **Image Rule:** 100% pure authentic photographs (Sony cinema cameras, podcast sets). ZERO fake dashboards, ZERO text or gradient overlays on the images.
- **Card Body:** Studio badge (`Studio 01` / `Studio 02`), title, and gear description.
- **Action:** Section header `SectionButton href="/studio">Explore studio packages</SectionButton>`.

### 3.6 5-Pillar Architectural Band (`HomePillars`, `AboutCapabilityMix`)
- **Grid Pattern:** Modality 2 (Architectural 5-Column Divided Band `divide-y lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-5 border-t border-b border-white/[0.08]`).
- **Card Architecture:**
  - Shared 1px hairline borders without floating box clutter.
  - Subtle hover tone: `hover:bg-white/[0.02]`.
  - Index label: `font-mono text-xs text-zinc-500 tabular-nums` (`01 / Pillar`).

### 3.7 Operating Loop & Methodology (`HomeLoop`, `ServicesProcess`)
- **Grid Pattern:** 2-Column Sticky Layout (`grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start`) or 5-Column Process Continuum.
- **Left Column:** Sticky H2 heading + context.
- **Right Column:** Numbered step rows stack (`divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#121214]`). Each row has oversized tabular digits (`01`), step name, and hover directional arrow.

### 3.8 Manifesto & Strategic Core Beliefs (`HomeManifesto`, `AboutVision`, `AboutPrinciples`)
- **Grid Pattern:** Modality 3 (3-Column Shared 1px Hairline Continuum Matrix `grid lg:grid-cols-3 gap-px bg-white/[0.08] rounded-xl border border-white/[0.08] overflow-hidden`).
- **Card Architecture:**
  - Individual cell: `bg-[#0f1011] p-7 sm:p-8 md:p-10 hover:bg-[#141516]`.
  - Eliminates visual clutter by sharing single-pixel hairline dividers.

### 3.9 Kinetic Text Marquee (`HomeTextMarquee`, Hero Sub-Tickers)
- **Grid Pattern:** Full-width bounded marquee container (`overflow-hidden border-y border-white/[0.08] bg-[#09090B] py-6`).
- **Styling:** 100% solid white text (`text-white font-medium`) in natural case with centered dot dividers (`·` or accent dot).

### 3.10 Featured Work & Media Production (`HomeFeaturedWork`, `/projects`)
- **Grid Pattern:** Modality 4 (3-Column Card Grid `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`).
- **Image:** Pure 16:10 thumbnail (`bg-zinc-950 border-b border-white/[0.08]`) with smooth zoom on card hover. ZERO overlays on the image.
- **Card Body:** Category tag (`text-[11px] text-frame-accent`), project title, concise description.
- **Card Footer:** Full-width rounded pill button (`h-[44px] rounded-full border border-white/[0.14] bg-white/[0.03] text-[13px] font-medium text-white hover:bg-white/[0.08] View project →`).
- **Strict Ban:** NO `Scope:...` text clutter in card footers.

### 3.11 Website & SEO Portfolio Showcase (`HomePortfolioShowcase`)
- **Structure:** 2-tier showcase (Websites followed by SEO campaigns).
- **Sub-Section Headers:** Flex row with H3 and `SectionButton` (`View all work →` / `View case studies →`).
- **Grid Pattern:** Modality 4 (3-Column Card Grid `grid gap-6 lg:grid-cols-3`).
- **Card Architecture:**
  - 100% clean screenshot/preview banner (`aspect-[16/10] border-b border-white/[0.08]`).
  - Card body: Project name, platform/category pill, summary description, and optional metrics strip.
  - Card Footer: Full-width rounded pill button (`Visit website →` / `Read SEO case study →`).

### 3.12 Verified Case Studies / Receipts (`HomeCaseStudies`, `ServicesCaseStudies`, `/case-studies`)
- **Grid Pattern:** Modality 4 (3-Column Card Grid `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`).
- **Image:** 100% pure analytics graphs or verified revenue screenshots (`aspect-[16/10] border-b border-white/[0.08]`). STRICTLY ZERO text or badge overlays on the image.
- **Card Body:**
  - Client name + category meta row (`text-xs`).
  - Bold title (`font-heading text-xl sm:text-2xl font-medium text-white`).
  - Verified Performance Metrics Box: 2x2 grid in `#18181B` box with `border-l-2 border-frame-accent` tabular metric numbers.
- **Card Footer:** Full-width rounded pill button (`Read Case Study →`).
- **Header Action:** `SectionButton href="/case-studies">Browse all case studies</SectionButton>`.

### 3.13 Recent Insights & Editorial Blogs (`HomeRecentInsights` & `/blog`)
- **Grid Pattern:** Modality 4 (3-Column Card Grid `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`).
- **Card Architecture:**
  - 16:10 thumbnail image.
  - Title, 20-word editorial excerpt, author footer + read action.
- **Header Action:** `SectionButton href="/blog">View all blog posts</SectionButton>`.

### 3.14 Mathematical Calculators Suite (`HomeCalculatorsGrid` & `/calculators`)
- **Micro Grid Pattern:** 4-Column Card Grid (`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`).
- **Card Architecture:**
  - Compact `#121214` card with formula breakdown, platform tag, and tabular math equations.
- **Bottom Multi-Channel Allocation Banner:**
  - Full-width elevated banner with `SectionButton href="/calculators">All 10 Calculators</SectionButton>`.

### 3.15 Engagement Models & Pricing Bundles (`HomeEngagement`, `ServicesBundles`)
- **Grid Pattern:** Modality 2 (5-Column Continuum Band `divide-y lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-5 border-t border-white/[0.08]`) or 3-Column Pricing Tier Grid.
- **Card Architecture:** Model title, best-for context, itemized deliverables list, and clear CTA pill.

### 3.16 About & Global Infrastructure (`HomeAbout`, `AboutFounders`)
- **Facts Matrix:** Modality 2 (4-Column stats grid `grid gap-4 grid-cols-2 lg:grid-cols-4`) with large tabular numerals (`text-4xl md:text-6xl tabular-nums`).
- **Leadership Grid:** Modality 4 (3-Column founder portrait cards `grid gap-6 md:grid-cols-3`).
  - 4:3 or 4:5 aspect portrait photo. ZERO badges or overlays on founder photos.
  - Role pill, founder name, bio, and social media links in the card body below the photo.
- **Action:** `SectionButton href="/about">Explore Global Vision & Team</SectionButton>`.

### 3.17 FAQ Accordion (`HomeFAQ`, `AboutFAQ`, `ServicesFAQ`)
- **Grid Pattern:** Modality 5 (Single-Column Centered Container `max-w-4xl mx-auto space-y-3`).
- **Item Architecture:**
  - Rounded-xl cards (`border border-white/[0.08] bg-[#121214]`) or 1px border-separated rows.
  - Accessible trigger button with smooth rotating chevron and high-contrast answer typography.

### 3.18 Master Conversion CTA (`HomeCTA`, `AboutCTA`, `ServicesCTA`)
- **Card Architecture:** Elevated `rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-10 md:p-16` with top laser hairline sheen.
- **Layout:** Massive H2 headline (`Bring us the brief. / We will bring the system.`) beside oversized decorative directional arrow.
- **Action:** Dual `PosterButton` group ("Book a strategy call" primary + "Send a brief" outline).

---

## 4. Consistency Verification Checklist
For every page across the site, confirm:
1. Max container width is `max-w-7xl mx-auto`.
2. Heading uses natural Title/Sentence case (NO `uppercase`), solid white + italic purple accent (NO clip gradients).
3. No slash pill taglines or bracketed `[ 01 / ... ]` eyebrows above headings.
4. Images have NO text overlays, NO fake browser chrome, and NO dark opacity scrims.
5. All buttons use standard `PosterButton`, `SectionButton`, or full-width card pill buttons (`rounded-full`, min-h >= 44px).
6. Visual rhythm alternates between the 5 Modalities so no more than two 3-column text card grids appear back-to-back.
7. Transitions explicitly name target properties (no `transition: all`).
