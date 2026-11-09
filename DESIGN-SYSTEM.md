---
version: 3.0.0
name: Frame Cipher
description: The Definitive Single-Source-of-Truth Master Design System for Frame Cipher. Adapts Nuxt UI & Tailwind CSS v4 semantic architecture to Frame Cipher's dark aesthetic with purple brand accent. Covers every section, component, grid, table, icon, heading, animation, and interaction pattern.
brand:
  purple: "#A855F7"
  purple-light: "#C084FC"
  purple-dark: "#7E22CE"
  black: "#09090B"
  surface-1: "#121214"
  surface-2: "#18181B"
  surface-3: "#222226"
  white: "#FFFFFF"
theme:
  font-sans: "'Public Sans', sans-serif"
  font-heading: "'Public Sans', sans-serif"
  font-mono: "'Geist Mono', 'JetBrains Mono', monospace"
  color-purple-50: "#FAF5FF"
  color-purple-100: "#F3E8FF"
  color-purple-200: "#E9D5FF"
  color-purple-300: "#D8B4FE"
  color-purple-400: "#C084FC"
  color-purple-500: "#A855F7"
  color-purple-600: "#9333EA"
  color-purple-700: "#7E22CE"
  color-purple-800: "#6B21A8"
  color-purple-900: "#581C87"
  color-purple-950: "#3B0764"
  color-zinc-50: "#FAFAFA"
  color-zinc-100: "#F4F4F5"
  color-zinc-200: "#E4E4E7"
  color-zinc-300: "#D4D4D8"
  color-zinc-400: "#A1A1AA"
  color-zinc-500: "#71717A"
  color-zinc-600: "#52525B"
  color-zinc-700: "#3F3F46"
  color-zinc-800: "#27272A"
  color-zinc-900: "#18181B"
  color-zinc-950: "#09090B"
semantic-colors:
  primary: purple
  neutral: zinc
  important: purple
  secondary: neutral
  success: emerald
  info: sky
  warning: amber
  error: rose
css-variables:
  ui-container: 80rem
  ui-container-wide: 90rem
  ui-header-height: 80px
  ui-bg-dark: "var(--color-frame-bg)"
  ui-bg-muted-dark: "var(--color-frame-surface-1)"
  ui-bg-elevated-dark: "var(--color-frame-surface-1)"
  ui-bg-accented-dark: "var(--color-frame-surface-2)"
  ui-border: "rgba(255, 255, 255, 0.08)"
  ui-border-accented: "rgba(255, 255, 255, 0.16)"
text:
  dimmed: "text-dimmed"
  muted: "text-muted"
  toned: "text-toned"
  default: "text-default"
  highlighted: "text-highlighted"
  inverted: "text-inverted"
background:
  default: "bg-default"
  muted: "bg-muted"
  elevated: "bg-elevated"
  accented: "bg-accented"
  inverted: "bg-inverted"
border:
  default: "border-default"
  muted: "border-muted"
  accented: "border-accented"
  inverted: "border-inverted"
radius:
  base: "rounded-xl"
  utilities: [xs, sm, md, lg, xl, 2xl, 3xl, full]
components:
  button-primary: 'PosterButton variant="primary" (Deep Purple #9333EA, rounded-lg/full, min-h-[44px])'
  button-secondary: 'PosterButton variant="outline" / SectionButton (Subtle border, rounded-lg/full)'
  button-ghost: 'rounded-lg px-4 py-2 hover:bg-white/[0.08]'
  card: 'rounded-xl sm:rounded-2xl border border-default bg-elevated'
  card-elevated: 'rounded-xl sm:rounded-2xl border border-accented bg-accented'
  container: 'mx-auto max-w-7xl px-4 sm:px-6 md:px-8'
  prose: 'prose prose-invert prose-zinc max-w-3xl'
---

# Frame Cipher Unified Master Design System
> **The Definitive Single-Source-of-Truth Specification** for all developers, designers, and AI coding assistants across Frame Cipher.
> Every section, component, table, icon, animation, and heading hierarchy that can exist on any page is codified here.

---

## Table of Contents
1. [Executive Non-Negotiable Directives](#1-executive-non-negotiable-directives)
2. [Color Palette & Semantic Token Ladder](#2-color-palette--semantic-token-ladder)
3. [Complete Typography Scale (H1 through H6 + Body)](#3-complete-typography-scale-h1-through-h6--body)
4. [Universal Iconography System (`lucide-react`)](#4-universal-iconography-system-lucide-react)
5. [Grid Systems, Container Layouts & Breakpoints](#5-grid-systems-container-layouts--breakpoints)
6. [Table Design & Structured Data Ledgers](#6-table-design--structured-data-ledgers)
7. [Framer Motion & Micro-Interaction Engine](#7-framer-motion--micro-interaction-engine)
8. [Logo Animations, Client Marquees & Kinetic Tickers](#8-logo-animations-client-marquees--kinetic-tickers)
9. [Hero Section Architecture & 3D Interactive Visual](#9-hero-section-architecture--3d-interactive-visual)
10. [Problem & Solution Sections (The Comparative Ledger)](#10-problem--solution-sections-the-comparative-ledger)
11. [Client Testimonials & Social Proof Cards](#11-client-testimonials--social-proof-cards)
12. [FAQ Accordion Architecture & Schema.org JSON-LD](#12-faq-accordion-architecture--schemaorg-json-ld)
13. [Service Areas & Geographic Footprint Matrix](#13-service-areas--geographic-footprint-matrix)
14. [Services & Offerings Section Architecture (`Offerings.jsx` / `Platforms.jsx`)](#14-services--offerings-section-architecture-offeringsjsx--platformsjsx)
15. [Pricing Packages Architecture (`Pricing.jsx`)](#15-pricing-packages-architecture-pricingjsx)
16. [Process & Operational Turnaround SLAs](#16-process--operational-turnaround-slas)
17. [CTA Section & 6-Step Onboarding Matrix](#17-cta-section--6-step-onboarding-matrix)
18. [Forms, Inputs & Interactive Field Controls](#18-forms-inputs--interactive-field-controls)
19. [Content Zero-Loss Policy (Absolute Law)](#19-content-zero-loss-policy-absolute-law)
20. [Universal 10-Point Pre-Flight Quality Checklist](#20-universal-10-point-pre-flight-quality-checklist)
21. [The Nuxt-Grade Homepage Blueprint & Visual Anatomy](#21-the-nuxt-grade-homepage-blueprint--visual-anatomy)

---

## 1. Executive Non-Negotiable Directives

1. **Content Zero-Loss Policy (Absolute Law):**
   - Never delete, shorten, summarize, rephrase, or silently omit existing content. Every service offering, platform detail, FAQ, pricing tier, package deliverable, numerical figure, and disclaimer note MUST be retained 100% verbatim.
2. **Brand Palette Preservation:**
   - Brand colors are strictly **Frame Purple (`#A855F7`)**, **Deep Obsidian Black (`#09090B`)**, and **Pure White (`#FFFFFF`)**.
   - **Nuxt Green (`#00DC82`) and Deep Navy (`#020420`) are strictly banned.** Primary actions resolve to high-contrast white or Frame Purple.
3. **Headings Color System (H1 Two-Color; H2-H4 100% Solid White):**
   - **H1 Exclusivity:** The two-color display style is **strictly reserved for H1 alone** (Line 1 in Pure White `#FFFFFF`, Line 2 in Deep Purple `#9333EA` / `text-purple-600`), matching Nuxt display anatomy.
   - **H2, H3, H4 Complete White Rule:** All subsequent headings (H2, H3, H4) across the entire platform MUST BE **100% Complete Solid White** (`text-white font-medium tracking-tight`).
   - **Strictly Banned:** All italic accent words or colored highlights in H2, H3, H4.
   - **Strictly Banned:** All-caps (`uppercase`) on headings (decreases reading speed by 20%).
   - **Strictly Banned:** Gradient text clipping (`bg-clip-text text-transparent bg-gradient-to-...`) on headings.
   - **Icon Deep Purple Rule:** All icons across all sections must ALWAYS be **Deep Purple (`text-purple-600` / `#9333EA`)**, NEVER light purple (lavender/`purple-400`/`purple-300`) or multi-color.
4. **Concentric Radii Hierarchy:**
   - Radii must nest harmoniously: Container/Master Banner (`rounded-2xl` / 20px) $\rightarrow$ Cards (`rounded-xl` / 16px) $\rightarrow$ Nested Sub-cards/Trays (`rounded-lg` / 12px) $\rightarrow$ Tags/Badges (`rounded-md` / 6px) $\rightarrow$ Buttons/Pills (`rounded-full` / 9999px).
   - **Strictly Banned:** Sharp 90-degree corners (`rounded-none`).
5. **No Plain-Text Link Buttons:**
   - Interactive actions MUST be rendered as high-contrast pill buttons (`PosterButton`, `SectionButton`, or full-width card footer pills `min-h-[44px] rounded-full border border-white/[0.14] bg-white/[0.03]`).
6. **Pure Editorial Media Standards:**
   - ZERO fake browser chrome shells (no fake URL bars like `https://framecipher.com/work/...`).
   - ZERO text overlays on photos.
   - ZERO dark scrims (`bg-black/40`) covering editorial images.
7. **Explicit Micro-Transitions:**
   - NEVER use `transition: all`. Explicitly declare animated properties: `transition-colors duration-200`, `transition-transform duration-200`.
8. **Accessible Touch Targets & Tabular Metrics:**
   - Minimum hit target $\ge 44\text{px}$ on mobile (`min-h-[44px]`).
   - All currencies, metrics, prices, and counters MUST use `tabular-nums`.
9. **Strictly Forbidden Above Headers: Eyebrow Pills & Status Capsules:**
   - Text of the type `Full-Stack Growth Engine · 74 Services Across 7 Macro Pillars`, `Dhaka Studio · Built for brands moving worldwide`, or arbitrary capsule pills with pinging dots and meta slogans directly above H1 or H2 headlines are **STRICTLY FORBIDDEN** across all pages.
   - Headers must remain unobstructed and pure: either standing directly at the top of the content block or preceded only by a clean breadcrumb navigation. Intervening pill capsules create visual clutter, card fatigue, and disrupt reading flow.
10. **Strictly Forbidden: Box / Pill Chip Style for Deliverables & Tactical Lists:**
   - Deliverables, tactical outputs, platform inclusions, and service features MUST NEVER be styled as horizontal box capsules or pill chips (`flex flex-wrap gap-2` with `span className="rounded-md border bg-..."`). This creates visual fragmentation, box-in-box clutter, and ruins readability.
   - **Mandatory Standard:** Deliverables MUST always be rendered as a vertical list (`space-y-2` or `space-y-2.5`) with a crisp vector tickmark / checkmark icon (`<Check className="h-4 w-4 text-emerald-400 shrink-0" strokeWidth={2.5} />`) and clean readable editorial text (`text-sm font-normal text-zinc-200`).
11. **Hero Visual Preservation & Explicit Permission Rule:**
   - Before changing, modifying, or replacing ANY existing Hero Visual, you MUST explicitly ask the user for permission first. Many existing visuals (such as realistic device hardware frames, custom illustrations, and interactive mockups) are carefully crafted, visually polished, and intentional. Never abruptly or arbitrarily rewrite, swap, or remove an existing Hero Visual without explicit user consent.
12. **Strictly Forbidden: Artificial "Strict Evidence Policy" Disclaimers:**
   - Never insert artificial, defensive disclaimer boxes such as `"Strict Evidence Policy: Only publish ratings, download figures, project counts, performance improvements, or other measurable claims when supported by actual evidence."` These create unpolished legalistic clutter and detract from the brand's authority.
13. **Strictly Forbidden: Unsolicited "Core Production Standards" Capability Ledgers:**
   - Never inject arbitrary capability strips such as `"Core Production Standards • Verified Across Every Release"` with generic bullet matrices (`Kotlin Coroutines Non-Blocking IO`, `Crashlytics Real-Time Logging 99.9% Crash-Free`, etc.) unless specifically part of the verified page content.
14. **Dedicated Service Scope Purity (No Unsolicited Case Studies or Portfolio Grids):**
   - Sub-service pages must stay razor-focused on their specialized technical domain (offerings, architecture, security, pricing, process, SLA, FAQ). Do not inject unrequested generic case studies or portfolio showcases unless explicitly requested by the user.
15. **Strictly Forbidden: Bottom Takeaway / Note-Type Callout Boxes:**
   - Sections must end cleanly with their structured card grid or data table. Never append standalone bottom note-type callout boxes such as `"Native Advantage: Native development gives the application direct access to Android capabilities...",` `"Architecture Principle:",` `"Design Standard:",` `"Contractual Clarity:",` or `"QA Rule:"`. These create redundant visual clutter, interrupt section pacing, and degrade the clean architectural aesthetic.
16. **Strictly Forbidden: Trailing Card Footers / Explanatory Takeaway Notes:**
   - Individual service cards, feature cards, and data tables must NEVER contain trailing explanatory footnote sentences or meta-commentary (e.g. `footer: "This gives the project a clear direction before we move into technical API architecture...",` `footer: "The result is an API that your own applications...",` `footer: "This helps identify problems before they affect...",` or table footers like `"The final technology choices depend on the project's architecture..."`). Present capabilities, specifications, and deliverables directly without trailing justification or philosophical summary notes.
17. **Strictly Forbidden: Box-in-Box Pill/Badge Nesting Inside Cards & Grids ("Box-in-Box" Prohibition):**
   - Never wrap words, tags, city names, country locations, technologies, features, deliverables, or keywords inside nested little border/background boxes or pill capsules (`rounded-full border bg-... px-3 py-1`, `rounded-md border bg-...`, or `flex flex-wrap gap-2` chip badges) inside cards or grid cells.
   - Enclosing words inside miniature boxes within an already bordered card creates severe visual fragmentation, clutter, and visual fatigue ("box-in-box" antipattern).
   - **Mandatory Standard:** Present geographical markets, regional hubs, supported frameworks, or itemized listings either:
     - As clean, natural editorial prose/sentences (e.g., *"We work with businesses across Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and nationwide."*), OR
     - As a structured vertical / multi-column list with clean emerald checkmarks (`<Check className="h-4 w-4 text-emerald-400 shrink-0" strokeWidth={2.5} />`).
     - **NEVER** create horizontal chip tags, pill badges, or bordered box arrays inside cards.

---

## 2. Color Palette & Semantic Token Ladder

### 2.1 The 4-Step Surface Elevation Ladder

Depth is expressed through a four-step surface ladder and razor-sharp 1px hairlines:

| Token Name | Hex Code | Tailwind Token / Utility | Role & Application |
| :--- | :--- | :--- | :--- |
| **Canvas** | `#09090B` | `bg-frame-bg` / `bg-[#09090B]` | Global deep obsidian canvas background. |
| **Surface 1** | `#121214` | `bg-[#121214]` | Feature cards, continuum grid cells, accordions, calculator bays. |
| **Surface 2** | `#18181B` | `bg-[#18181B]` | Nested sub-cards, comparative ledger cards, active channel selectors. |
| **Surface 3** | `#222226` | `bg-[#222226]` | Dropdown menus, modal flyouts, deep overlays. |
| **Inverse** | `#FFFFFF` | `bg-white text-black` | Primary high-contrast CTA buttons (`PosterButton`). |
| **Frame Purple**| `#A855F7` | `text-frame-accent` / `bg-frame-accent` | Signature brand accent, heading italic words, active radar dots. |
| **Purple Light**| `#C084FC` | `text-frame-accent-light` | Hover states, focus rings, interactive glow boundaries. |
| **Hairline Soft**| `rgba(255,255,255,0.08)` | `border-white/[0.08]` | 1px section borders, card perimeters, grid dividing lines. |
| **Hairline Strong**| `rgba(255,255,255,0.16)` | `border-white/[0.16]` | Hovered card perimeter, active accordion boundary. |

### 2.2 Semantic Colors (Adapted from Nuxt UI Architecture)

| Semantic Role | Frame Cipher Mapping | Tailwind Utility | Component Usage |
| :--- | :--- | :--- | :--- |
| **`primary`** | `purple-500` (`#A855F7`) | `text-frame-accent`, `bg-frame-accent` | Primary CTAs, active badges, signature highlights |
| **`neutral`** | `zinc` (`#71717A`–`#09090B`) | `text-zinc-300`, `bg-[#121214]` | Body copy, card surfaces, structural borders |
| **`important`** | `purple-400` (`#C084FC`) | `text-frame-accent-light` | Priority tags, telemetry badges, key milestones |
| **`secondary`** | `zinc-100` / `white` | `text-white`, `border-white/[0.14]` | Secondary outlined actions, ghost pills |
| **`success`** | `emerald-400` (`#34D399`) | `text-emerald-400`, `bg-emerald-500/10` | Live operational status ("Dhaka & Global · Operational") |
| **`info`** | `sky-400` (`#38BDF8`) | `text-sky-400` | Informational callouts, documentation links |
| **`warning`** | `amber-400` (`#FBBF24`) | `text-amber-400` | Turnaround timeline alerts, scope notes |
| **`error`** | `rose-400` (`#FB7185`) | `text-rose-400` | Form validation errors, destructive prompts |

---

## 3. Complete Typography Scale (H1 through H6 + Body)

All headings use `font-heading` (`Geist`, `Inter`), solid pure white (`text-white`), natural sentence/title case, and medium weight (`font-medium`).

| Level | Size (Mobile $\rightarrow$ Desktop) | Tracking | Line-Height | Complete Tailwind Spec | Usage Example |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | `36px` $\rightarrow$ `60px` $\rightarrow$ `80px` | `-0.04em` | `0.94` | `font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[0.94] tracking-tight text-white` | Page Hero Display Title |
| **H2** | `28px` $\rightarrow$ `40px` $\rightarrow$ `56px` | `-0.035em`| `0.96` | `font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white` | Major Section Header, Master CTA |
| **H3** | `20px` $\rightarrow$ `24px` | `-0.025em`| `1.15` | `font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors` | Feature Card Title, Matrix Cell Heading |
| **H4** | `16px` $\rightarrow$ `18px` | `-0.02em` | `1.25` | `font-heading text-base sm:text-lg font-medium tracking-tight text-white` | Sub-service title, Comparative Ledger Item |
| **H5** | `14px` | `-0.01em` | `1.3` | `font-heading text-sm font-medium text-zinc-200` | Table Column Headers, Deliverable sub-title |
| **H6 / Meta** | `11px` $\rightarrow$ `12px` | `0.08em` | `1.4` | `font-mono text-xs uppercase tracking-wider text-frame-accent` | Category Badge, Monospace Step Counter (`01`) |
| **Lead Body** | `18px` | `normal` | `1.65` | `text-base sm:text-lg font-normal leading-relaxed text-zinc-200 max-w-3xl` | Hero description, Section Intro Paragraph |
| **Editorial Body** | `15px` $\rightarrow$ `16px` | `normal` | `1.6` | `text-sm sm:text-base font-normal leading-relaxed text-zinc-300` | Card body copy, process details, FAQ answers |
| **Small Notes** | `12px` $\rightarrow$ `13px` | `normal` | `1.5` | `text-xs font-normal leading-relaxed text-zinc-400` | Disclaimer notes, pricing footnotes, table meta |

---

## 4. Universal Iconography System (`lucide-react`)

All icons across Frame Cipher are standardized on **Lucide React** to ensure visual harmony, optical weight balance, and accessibility.

### 4.1 Optical Sizing Matrix
- **Inline / Button Icons:** `h-3.5 w-3.5` or `h-4 w-4` (e.g. `ArrowRight`, `ChevronRight`).
- **List / Feature Checkmarks:** `h-4 w-4` with `strokeWidth={2}` (e.g. `Check` in pricing, `X` in guarantee).
- **Control Bar / Accordion Toggles:** `h-4 w-4` or `h-5 w-5` (e.g. `ChevronDown`, `ChevronUp`).
- **Feature Card Badges:** `h-5 w-5` or `h-6 w-6` with `strokeWidth={1.5}`.

### 4.2 Standard Icon Container Types
```jsx
/* 1. CIRCULAR ACCENT BADGE (Used in FAQ toggles & Feature headers) */
<span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] p-2 text-zinc-400 group-hover:text-white transition-colors">
  <ChevronDown className="h-4 w-4" />
</span>

/* 2. SUCCESS CHECKMARK CHIP (Used in Pricing & Features) */
<span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
  <Check className="h-2.5 w-2.5" strokeWidth={3} />
</span>

/* 3. RADAR / TELEMETRY STATUS DOT (Pulsing live indicator) */
<span className="relative flex h-2 w-2">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
</span>
```

### 4.3 Universal Rules for Icons
- Never mix different icon packs (e.g., FontAwesome, Heroicons, Feather) with Lucide.
- Always include `shrink-0` on icons within flex containers to prevent layout distortion when text wraps.
- Decorative icons must carry `aria-hidden="true"`.

---

## 5. Grid Systems, Container Layouts & Breakpoints

### 5.1 Responsive Breakpoint Scale (Tailwind Defaults)
- **`sm` (640px):** 2-column card wrapping, horizontal button grouping.
- **`md` (768px):** Divided column bands shift from stacked `divide-y` to side-by-side `divide-x`.
- **`lg` (1024px):** 12-column hero split (6 text / 6 visual), 3-column continuum matrix.
- **`xl` (1280px):** 4-column pricing architecture.
- **`2xl` (1536px):** Proportional container growth up to `max-w-8xl` (`90rem`).

### 5.2 Container Standards
- **Global Page Canvas:** `<main className="service-page bg-[#09090B] text-[#FAFAFA] min-h-screen">`
- **Section Enclosure:** `<section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 scroll-mt-24">`
- **Maximum Width:** `<div className="mx-auto max-w-7xl">`
- **Zero Horizontal Overflow:** All horizontal layouts must contain `overflow-x-hidden` or scrollbars scoped cleanly.

---

## 6. Table Design & Structured Data Ledgers

When presenting complex matrices, pricing deliverables, technical specifications, or timeline horizons, standard unstyled tables look clumsy on dark mode. Use the **Frame Cipher Architectural Data Ledger**:

```jsx
<div className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
  {/* Horizontal Scroll wrapper for Mobile */}
  <div className="overflow-x-auto scrollbar-none">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-white/[0.08] bg-[#18181B]/50 font-mono text-xs uppercase tracking-wider text-zinc-400">
          <th className="py-4 px-6 font-medium">Deliverable / Scope</th>
          <th className="py-4 px-6 font-medium">Starter Tier</th>
          <th className="py-4 px-6 font-medium">Growth Tier</th>
          <th className="py-4 px-6 font-medium text-frame-accent">Enterprise</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white/[0.06] text-sm text-zinc-300">
        <tr className="transition-colors hover:bg-white/[0.02]">
          <td className="py-4 px-6 font-medium text-white">Platform Coverage</td>
          <td className="py-4 px-6 font-mono text-xs">2 Platforms</td>
          <td className="py-4 px-6 font-mono text-xs">Up to 4 Platforms</td>
          <td className="py-4 px-6 font-mono text-xs text-frame-accent">Full Omni-Channel</td>
        </tr>
        <tr className="transition-colors hover:bg-white/[0.02]">
          <td className="py-4 px-6 font-medium text-white">Response Turnaround SLA</td>
          <td className="py-4 px-6 font-mono text-xs">Standard Business Hours</td>
          <td className="py-4 px-6 font-mono text-xs">&lt; 30 Minutes</td>
          <td className="py-4 px-6 font-mono text-xs text-emerald-400">Real-Time Dedicated</td>
        </tr>
        <tr className="transition-colors hover:bg-white/[0.02]">
          <td className="py-4 px-6 font-medium text-white">Sentiment &amp; Escalation</td>
          <td className="py-4 px-6 text-zinc-500">Basic Routing</td>
          <td className="py-4 px-6 text-emerald-400">Included</td>
          <td className="py-4 px-6 text-emerald-400">Advanced 24/7 Priority</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

---

## 7. Framer Motion & Micro-Interaction Engine

### 7.1 Principles
- **Subtlety over spectacle:** Motion guides the eye through hierarchy; it never distracts.
- **Always respect `prefers-reduced-motion`:** If user prefers reduced motion, disable transform animations and fallback to simple opacity transitions.
- **Never use `transition: all`:** Always declare explicitly.

### 7.2 Canonical Interaction Recipes
```jsx
/* 1. VIEWPORT STAGGERED FADE-IN */
import { motion } from 'framer-motion'

export function FadeInUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

/* 2. 3D CARD TILT ON HOVER */
export function TiltCard({ children }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 transition-colors duration-200 hover:border-white/[0.16]"
    >
      {children}
    </motion.div>
  )
}
```

### 7.3 Continuous Scroll-Replay Metric Counter Engine (Re-triggers on Every Scroll)

Numbers, statistics, and ROI metrics across Frame Cipher MUST count up dynamically **every single time** they enter the user's viewport on scroll (continuous scroll-replay, never a one-time dead counter). When scrolled out of view, the counter automatically resets to `0`, and when scrolled back into view, it smoothly counts up again from `0` to its target value.

#### Core Mechanics:
1. **Replay on Every Scroll (`once: false`):** Uses an `IntersectionObserver` with a `0.2` threshold. When `isIntersecting === false`, it resets state to `0`. When `isIntersecting === true`, it initiates the count-up sequence.
2. **Smooth Deceleration Curve:** Uses `requestAnimationFrame` with an **`easeOutCubic`** curve ($1 - (1 - t)^3$) over 1200ms so numbers land smoothly without abrupt stops.
3. **No Horizontal Jitter:** The number container strictly enforces **`tabular-nums`** so digits have uniform monospace widths, completely eliminating layout jitter as numbers roll up.
4. **Accessibility First:** Automatically checks `window.matchMedia('(prefers-reduced-motion: reduce)')`. If the user prefers reduced motion, it immediately displays the target value with zero animation.
5. **Prefixes, Suffixes & Padding:** Supports currency symbols (`$`, `৳`), zero padding (`01`), and signature purple-accented suffixes (`+`, `%`, `°`, `/7`, `k`).

#### Production-Ready Component Code:
```jsx
'use client'

import { useState, useEffect, useRef } from 'react'

export function ScrollReplayCounter({
  target = 100,
  prefix = '',
  suffix = '+',
  pad = 0,
  label = 'Metric Description',
  duration = 1200,
  accentSuffix = true,
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef(null)

  // 1. Viewport observer that triggers true on enter, false on exit (once: false)
  useEffect(() => {
    const node = itemRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // 2. Count animation: resets to 0 on exit, counts up to target on enter
  useEffect(() => {
    if (!isVisible) {
      const resetRaf = requestAnimationFrame(() => setDisplayValue(0))
      return () => cancelAnimationFrame(resetRaf)
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDisplayValue(target)
      return
    }

    let start = 0
    let startTime = null
    let rafId

    const step = (now) => {
      if (!startTime) startTime = now
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // easeOutCubic curve for smooth decelerating landing
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (target - start) * ease)
      setDisplayValue(current)

      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      } else {
        setDisplayValue(target)
      }
    }

    rafId = requestAnimationFrame(step)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isVisible, target, duration])

  const formattedNumber =
    pad && displayValue < 10 ? String(displayValue).padStart(pad, '0') : displayValue

  return (
    <div
      ref={itemRef}
      className="relative flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-[#121214] p-6 text-center transition-colors duration-200 hover:border-white/[0.16] hover:bg-[#151518]"
    >
      <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-none tabular-nums text-white">
        {prefix}
        {formattedNumber}
        {suffix && (
          <span className={accentSuffix ? 'text-frame-accent' : 'text-white'}>
            {suffix}
          </span>
        )}
      </span>
      <span className="mt-3 font-mono text-xs uppercase tracking-wider text-zinc-400">
        {label}
      </span>
    </div>
  )
}
```

---

## 8. Logo Animations, Client Marquees & Kinetic Tickers

Social proof and tech stack tickers must glide continuously without jumpy jumps or layout reflows:

```jsx
/* KINETIC MARQUEE STRIP (Home & Service Page Benchmark) */
export function TypeMarquee({ items = [] }) {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#09090B] py-4 select-none">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {/* Render twice for seamless infinite loop */}
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="text-white font-medium">{item}</span>
            <span className="text-frame-accent" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
```

- **Client Logos:** Rendered in grayscale monochrome (`grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300`). Never render full-color distracting client logos side-by-side.

---

## 9. Hero Section Architecture & 3D Interactive Visual

The Frame Cipher service hero uses a **2-Tier Split Architecture**:

### 9.1 Tier 1: 12-Column Display Split
- **Breadcrumbs:** `Home` $\rightarrow$ `Services` $\rightarrow$ `Category` $\rightarrow$ `Active Service` with `ChevronRight`.
- **Live Telemetry Pill:** Pinging emerald radar dot with `Full-Stack Community Ops · Dhaka & Global`.
- **H1 Master Headline:** 7xl-8xl font-medium with signature italic purple word.
- **Lead Paragraph:** `max-w-3xl text-zinc-300 text-lg leading-relaxed`.
- **Symmetrical 52px Button Pair:** Primary `PosterButton` ("Get Free Consultation") + Secondary `PosterButton` ("Discuss Your Needs").
- **Interactive Control Bar & Visual:** Single-row segmented channel selector + 3D interactive tilt shell.

### 9.2 Tier 2: Strategic Callout Tier
- **Pipeline Band:** Sequence of operations connected by arrow markers (`Listen → Moderate & Filter → First-Line Response → Escalate & Track → Community Intelligence`).
- **3-Column Continuum Band:** `Who We Manage For` | `Where We Work` | `How We Deliver` on `#121214`.
- **Honest Assessment Callout Box:** Straight-talk assurance box with action button.

---

## 10. Problem & Solution Sections (The Comparative Ledger)

Replaces generic "Why Choose Us" grids with a high-contrast 2-column comparative ledger:

```jsx
<div className="grid gap-8 lg:grid-cols-2 lg:items-start">
  {/* Left: The Compounding Cost of Inaction / Weak Ops */}
  <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col justify-between">
    <div>
      <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
        The Compounding Cost of Weak Execution
      </h3>
      <div className="mt-8 space-y-4">
        {risks.map((risk, idx) => (
          <div key={idx} className="flex items-start gap-4 rounded-lg border border-white/[0.04] bg-[#18181B] p-5">
            <span className="font-mono text-xs uppercase text-frame-accent mt-0.5">0{idx + 1}</span>
            <div>
              <h4 className="font-heading text-base font-medium text-white">{risk.title}</h4>
              <p className="mt-1 text-sm font-normal text-zinc-300 leading-relaxed">{risk.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-8 pt-6 border-t border-white/[0.08]">
      <PosterButton href="/contact" variant="accent">Book a Strategy Session &rarr;</PosterButton>
    </div>
  </div>

  {/* Right: The Frame Cipher Sovereign Standard */}
  <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
    <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
      The Frame Cipher Standard
    </h3>
    <div className="mt-8 space-y-4">
      {advantages.map((adv) => (
        <div key={adv.number} className="rounded-lg border border-white/[0.04] bg-[#18181B] p-5">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-frame-accent">{adv.number}</span>
            <h4 className="font-heading text-base font-medium text-white">{adv.title}</h4>
          </div>
          <p className="mt-2 text-sm font-normal text-zinc-300 leading-relaxed">{adv.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>
```

---

## 11. Client Testimonials & Social Proof Cards

Testimonials avoid floating bubbles or fake rounded cartoon avatars. They use architectural quote blocks:

```jsx
<article className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col justify-between">
  <div>
    <div className="flex items-center gap-1 text-frame-accent mb-6">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    <blockquote className="font-heading text-lg sm:text-xl font-normal leading-relaxed text-zinc-200">
      “Frame Cipher established an engineering-grade response system for our platform. We cut customer inquiry drop-off by 72% within 3 weeks of launch.”
    </blockquote>
  </div>

  <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
    <div>
      <div className="font-heading text-base font-medium text-white">Tanvir Ahmed</div>
      <div className="font-mono text-xs text-zinc-400 mt-0.5">Head of Operations, Apex Digital</div>
    </div>
    <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-frame-accent">
      +72% Retention
    </span>
  </div>
</article>
```

---

## 12. FAQ Accordion Architecture & Schema.org JSON-LD

FAQs are strictly centered, clean, and backed by Google-indexed `FAQPage` structured data:

```jsx
'use client'
import { useState } from 'react'
import Script from 'next/script'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <section id="faq" className="relative border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:py-28 text-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
            Frequently Asked <span className="italic text-frame-accent">Questions.</span>
          </h2>
        </div>
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-white/[0.08] bg-[#121214] transition-colors hover:border-white/[0.14]">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-heading text-lg sm:text-xl font-medium text-white pr-4">{faq.question}</span>
                <span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] p-2 text-zinc-400">
                  {openIndex === i ? <ChevronUp className="h-4 w-4 text-frame-accent" /> : <ChevronDown className="h-4 w-4" />}
                </span>
              </button>
              {openIndex === i && (
                <div className="border-t border-white/[0.08] px-6 pb-6 pt-4 text-zinc-300 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 13. Service Areas & Geographic Footprint Matrix

Presents domestic and international coverage in a clean 2-column continuum:
- **Left Column:** Headquarters & Domestic Market (Dhaka, Bangladesh, Bangla/English bilingual ops).
- **Right Column:** International Markets & Time Zones (US, UK, Australia, Canada, UAE) with regional tags.

```jsx
<div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-2">
  {areas.map((area) => (
    <article
      key={area.number}
      className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
    >
      <div>
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <span className="font-mono text-xs text-frame-accent">{area.region}</span>
          <span className="font-mono text-xs text-zinc-500 tabular-nums">{area.number}</span>
        </div>
        <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium text-white group-hover:text-frame-accent transition-colors">
          {area.title}
        </h3>
        <p className="mt-3.5 text-sm font-normal text-zinc-300 leading-relaxed">{area.body}</p>
        {area.list && (
          <div className="mt-6 border-t border-white/[0.06] pt-4">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">Key Coverage Regions</span>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {area.list.map((item) => (
                <span key={item} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  ))}
</div>
```

---

## 14. Services & Offerings Section Architecture (`Offerings.jsx` / `Platforms.jsx`)

Services sections present sub-services, capabilities, and platform offerings using the **Modality 3 Technical Continuum Matrix**. This structure guarantees zero content loss, high-contrast readability, deliverable chips, and full-width card footer buttons:

```jsx
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Offerings({ offerings = [] }) {
  return (
    <section id="offerings" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Canonical 2-Column Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              What our service{' '}
              <span className="italic text-frame-accent">includes.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Comprehensive deliverables engineered around end-to-end execution, active monitoring, and measurable business growth.
          </p>
        </div>

        {/* Modality 3 Technical Continuum Matrix (Shared 1px Hairlines) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-2">
          {offerings.map((offering) => (
            <article
              key={offering.number}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                {/* Monospace Metadata Row */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {offering.tag}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {offering.number}
                  </span>
                </div>

                {/* H3 Heading */}
                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {offering.title}
                </h3>

                {/* High-Contrast Description */}
                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {offering.description}
                </p>

                {/* Deliverables Block with Monospace Chips */}
                {offering.items && offering.items.length > 0 && (
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                      {offering.listTitle || 'Key Deliverables'}
                    </span>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {offering.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] tracking-wide text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Context Note Box on Surface 2 (#18181B) */}
                {offering.note && (
                  <div className="mt-6 rounded-lg border border-white/[0.08] bg-[#18181B] p-4 text-xs font-normal leading-relaxed text-zinc-300">
                    {offering.note}
                  </div>
                )}
              </div>

              {/* Card Footer Full-Width Pill Action Button */}
              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]"
                >
                  <span>{offering.cta || `Inquire About ${offering.title}`}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 15. Pricing Packages Architecture (`Pricing.jsx`)

Pricing sections present tiers using the **Architectural Divided Column Band** (3 or 4 columns) with no double borders, checkmark lists, featured tier highlighting, standard inclusions container, and pricing disclaimers:

```jsx
import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function Pricing({ plans = [], includedAcrossPlans = [] }) {
  return (
    <section id="pricing" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Transparent, scope-backed{' '}
              <span className="italic text-frame-accent">pricing.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Pricing depends on platform count, interaction volume, coverage windows, and escalation requirements. Clear milestones with zero hidden fees.
          </p>
        </div>

        {/* 4-Column Architectural Divided Column Band */}
        <div className="grid grid-cols-1 border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200 ${
                plan.featured ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
              }`}
            >
              <div>
                {/* Plan Tier Badge & Index */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {plan.tier}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {plan.number}
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className="mt-5 font-heading text-xl font-medium text-white">
                  {plan.name}
                </h3>

                {/* Price Display */}
                <p className="mt-3 font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white tabular-nums">
                  {plan.price}
                </p>

                {/* Best For Tagline */}
                <p className="mt-2 text-xs font-medium text-frame-accent">
                  {plan.bestFor}
                </p>

                {/* Coverage Scope */}
                {plan.coverage && (
                  <div className="mt-6 border-t border-white/[0.08] pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500 block">
                      Coverage Scope
                    </span>
                    <p className="mt-1 text-xs font-normal leading-relaxed text-zinc-300">
                      {plan.coverage}
                    </p>
                  </div>
                )}

                {/* Deliverables Checklist with Checkmark Icons */}
                <div className="mt-6 border-t border-white/[0.08] pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500 block">
                    Key Deliverables
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs font-normal text-zinc-300">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Full-Width Action Button */}
              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <PosterButton
                  href="/contact"
                  variant={plan.featured ? 'accent' : 'outline'}
                  className="w-full justify-center"
                >
                  Select Plan &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included Across Standard Plans Container */}
        {includedAcrossPlans && includedAcrossPlans.length > 0 && (
          <div className="relative overflow-hidden mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/50 before:to-transparent">
            <h3 className="font-heading text-lg font-medium text-white">
              Included Across Standard Plans
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {includedAcrossPlans.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/[0.08] bg-[#18181B] px-3 py-1.5 font-mono text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Pricing Caveat Note */}
            <div className="mt-6 border-t border-white/[0.06] pt-4">
              <p className="text-xs font-normal leading-relaxed text-zinc-400">
                <strong className="text-white">Pricing note:</strong> Final pricing depends on actual platform count, volume, coverage hours, language requirements, moderation complexity, and response SLAs. Custom enterprise requirements receive dedicated proposals.
              </p>
            </div>
          </div>
        )}

        {/* Bottom Custom Consultation Strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300">
            Need a tailored response SLA, multi-market coverage, or custom functionality?
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get a Custom Scope &amp; Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## 16. Process & Operational Turnaround SLAs

- **6-Step Matrix:** Each card has Phase tag, step number, title, body description, and a dedicated **Deliverable Block** in the footer.
- **Operational Turnaround Ledger:** Dedicated 4-column container detailing exact turnaround timelines (e.g. Initial Setup: 2-3 business days, Workflow Setup: Week 1, Standard SLA: 15-45 minutes, Escalated: Instant).

---

## 17. CTA Section & 6-Step Onboarding Matrix

Two-part master conversion finale:
1. **Top Tier:** 6-Step Structured Onboarding Matrix ("What happens next after you contact us?") explaining first contact to live launch.
2. **Bottom Tier:** Master Conversion Banner (`rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12`) with H2 headline, reassurance paragraph, and dual symmetrical `PosterButton`s.

---

## 18. Forms, Inputs & Interactive Field Controls

- All inputs carry visible `<label>`, `text-sm font-medium text-white mb-2`.
- Field styling: `rounded-lg border border-white/[0.08] bg-[#121214] px-4 py-3 text-white placeholder:text-zinc-500 focus:border-frame-accent focus:outline-none focus:ring-1 focus:ring-frame-accent`.
- Minimum height 48px on interactive inputs.

---

## 19. Content Zero-Loss Policy (Absolute Law)

1. Under no circumstance may any headline, paragraph, bullet point, platform, pricing tier, package item, FAQ, or disclaimer note be omitted.
2. If refactoring a component, copy the exact substantive content from the source data into the new architectural structure.
3. Automated verification scripts test string preservation on every service file build.

---

## 20. Universal 10-Point Pre-Flight Quality Checklist

Before marking any service page or component refactor complete, verify every item:

- [ ] **1. Content Zero-Loss Verified:** 100% of all substantive text, packages, deliverables, numbers, notes, and FAQs are preserved.
- [ ] **2. Natural Case Solid-White Headings:** Zero `uppercase` on H1/H2/H3. All headings use `text-white font-medium tracking-tight`.
- [ ] **3. Single Italic Accent:** Exactly one thematic word per heading carries `<span className="italic text-frame-accent">...</span>`.
- [ ] **4. High-Contrast Prose:** Lead paragraphs use `text-zinc-200`, body descriptions use `text-zinc-300`. No low-contrast `#A1A1AA` body copy.
- [ ] **5. Surface Ladder Adherence:** Page on `#09090B`, primary cards on `#121214`, nested sub-cards on `#18181B`.
- [ ] **6. Hairline 1px Precision:** All dividers and perimeter borders use `border-white/[0.08]` (or `[0.16]` on hover).
- [ ] **7. Concentric Radii Hierarchy:** Containers `rounded-2xl` $\rightarrow$ Cards `rounded-xl` $\rightarrow$ Sub-cards `rounded-lg` $\rightarrow$ Badges `rounded-md` $\rightarrow$ Buttons `rounded-full`. Zero `rounded-none`.
- [ ] **8. Standardized Pill Buttons:** Dual 52px symmetrical `PosterButton`s in heroes; full-width `rounded-full` pill buttons in card footers.
- [ ] **9. Touch Targets & Tabular Metrics:** Touch targets $\ge 44\text{px}$ (`min-h-[44px]`). All prices, dates, and numbers use `tabular-nums`.
- [ ] **10. Zero Horizontal Overflow:** Layout fits within `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` without horizontal scrollbars across all screen widths.

---

## 21. The Nuxt-Grade Homepage Blueprint & Visual Anatomy

This section codifies the **exact visual architecture of the Nuxt landing page** adapted for Frame Cipher's brand aesthetics (Deep Obsidian Black `#09090B`, Frame Purple `#A855F7`, and Pure White `#FFFFFF`). Every developer and agent working on the home page must implement these exact patterns.

### 21.1 Overview & Visual Rhythm Architecture

Nuxt's UI works because every screen height introduces a distinct visual modality rather than repetitive plain text cards:

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION 1: HERO DISPLAY (Symmetrical 2-Column Grid)                   │
│ [Left: Eyebrow + H1 + Copy + Dual PosterButtons + Command Pill]        │
│ [Right: Borderless 3D Wireframe Ecosystem Globe + 6 Platform Badges]  │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 2: CLIENT LOGO MARQUEE (Monochrome Grayscale Infinite Loop)    │
│ [Brands We Have Helped Move Forward + Live Meta Proof Badges]         │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 3: 2-COLUMN COMPARATIVE LEDGER (Problems / Fragmentation)      │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 4: "EVERYTHING YOU NEED" (Build Matrix with Dedicated Icons)   │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 5: PHOTOGRAPHIC STUDIO SHOWCASE (Zero-Jump 3-Col Slider)       │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 6: PERFORMANCE METRICS & CAPABILITIES (HomeMarqueeStats)       │
│ [8-Col Bento + Replay-on-Scroll Universal Animated Counters]          │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 7: ONE ROOF. NO VENDOR DRIFT. (Service Pillars)                │
│ [3-Col Nuxt Module Card Grid with Telemetry Footers & >_ Badges]       │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 8: EDITORIAL WORK & CASE STUDIES (Verified Data Receipts)      │
│ [rounded-2xl Cards + rounded-xl Purple Action Buttons + Counter Stats] │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 9: AD SPEND CALCULATORS (Textbook Equations & Math Fractions) │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 10: ARCHITECTURAL DATA COMPARISON LEDGER (Integrated vs Vendors│
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 11: MULTINATIONAL MACHINE (About / Leadership Portraits)       │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 12: FAQ ACCORDION + ONBOARDING ROADMAP + CONVERSION CTA BANNER │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 21.2 Hero Section Architecture (`HomeHero.jsx` & `HeroGlobeVisual.jsx`)

The Home Hero is engineered as a **Symmetrical Two-Column Layout** (`grid lg:grid-cols-[1.1fr_1fr] lg:items-center gap-12`), eliminating floating full-width headlines and framing the 3D ecosystem visual in perfect balance:

#### Left Column Specifications:
1. **Raycast Capsule Eyebrow Bar:**
   - Pill container: `rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]`.
   - Live beacon: Dual-layer green beacon (`h-2 w-2 rounded-full bg-emerald-500` with pulsing outer ring `animate-ping bg-emerald-400 opacity-75`).
   - Copy: `font-mono text-[11px] uppercase tracking-[1.1px] text-muted`: `Dhaka Studio · Built for brands moving worldwide`.
2. **Main Headline (H1):**
   - Sizing: `text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-semibold tracking-tight leading-[1.04]`.
   - Dual-tone line split:
     - Line 1: `text-highlighted` (`#FFFFFF`): "We build the system"
     - Line 2: `text-purple-600` (`#9333EA`): "that makes brands move."
   - Strictly forbidden: Italics or gradient fills across words.
3. **Editorial Description:**
   - Sizing: `mt-6 max-w-2xl text-base font-normal leading-relaxed text-muted md:text-lg`.
   - Keyword deep links with signature purple underlines (`text-white underline decoration-purple-600/50 underline-offset-4 transition-colors hover:text-purple-600`).
4. **Action CTA Cluster:**
   - Primary: `<PosterButton href="/contact">Book a strategy call</PosterButton>`.
   - Secondary: `<PosterButton href="/projects" variant="outline">Explore our work</PosterButton>`.
5. **Nuxt-Style CLI Command Box:**
   - Interactive pill: `inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1.5 font-mono text-xs text-zinc-300`.
   - Terminal prompt: Deep purple `Terminal` icon (`text-purple-600 h-3.5 w-3.5`), muted `$`, and copyable `$ npx frame-cipher audit`.
   - Explanatory microcopy: `font-mono text-xs text-zinc-500`: `Free 20-min growth architecture session`.

#### Right Column: 3D Polar Perspective Wireframe Globe (`HeroGlobeVisual.jsx`):
1. **Zero-Container Canvas:** The globe sits borderless, cardless, and bare directly on the deep obsidian canvas (`#09090B`). Bounding gray boxes, card containers, and wrapper borders are strictly forbidden.
2. **Spherical Polar Perspective Projection:**
   - Convergent Apex Pole: Longitudinal meridians radiate from the visible top pole (`cx="320" cy="140"` in `viewBox="0 0 620 600"`), creating true 3D spherical depth.
   - Longitude Meridians: 7 sweeping arcs (1 central vertical meridian, 3 left meridians, 3 right meridians) curving downward across the hemisphere.
   - Latitude Parallels: 6 downward-curving concentric perspective rings (`ellipse` elements concentric with the polar axis).
   - Ambient Shading: Soft radial depth fill (`#0B132B` to `#09090B` at `cx="320" cy="320" r="180"`) providing natural volumetric mass.
3. **Target Intersection Nodes:**
   - Located precisely at the intersections of longitude and latitude wireframe paths.
   - Masked Dark Center: Outer ring (`r="7"`, `fill="#09090B"`, `stroke="rgba(148, 163, 184, 0.55)"`) that cleanly masks out wireframe lines passing behind the node.
   - Core Pin Dot: Center solid circle (`r="3"`, `fill="#64748B"`).
   - Inactive Network Nodes: Ambient background nodes scattered across the sphere to enrich the interconnected architecture look.
4. **Stepped Orthogonal & 45° Dotted Connector Lines:**
   - Dotted hairlines (`strokeDasharray="2.5 3.5"`, `stroke="rgba(148, 163, 184, 0.45)"`) animated continuously with `@keyframes fcLineFlow`.
   - Clean circuit elbows: Orthogonal steps (straight vertical, straight horizontal, and 45° angled elbows) leading directly into the physical edges of each card.
   - Interactive Hover State: When a card is hovered, its connector line and surface node illuminate in that platform's authentic brand color with a pulsing ripple beacon (`animate-ping`).
5. **6 Core Platform Squircle Badges (Zero White Blobs Rule):**
   - **Form Factor:** `h-11 w-11 sm:h-12 sm:w-12 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 cursor-pointer`.
   - **Strict Color Architecture (NO pure white squircle boxes):**
     1. **Next.js & Web Architecture (Top Center):** Deep obsidian purple card (`bg-[#130D22] border-purple-600/50`) with signature Frame Purple code glyph (`#A855F7`).
     2. **Nuxt & Shopify Commerce (Upper-Left):** Midnight teal card (`bg-[#06181B] border-[#00DC82]/50`) with neon emerald Nuxt glyph (`#00DC82`).
     3. **Meta Ads & Acquisition (Mid-Left):** Midnight navy card (`bg-[#0B1528] border-[#1877F2]/50`) with authentic Meta Blue Facebook glyph (`#1877F2`).
     4. **Instagram Creative & Reels (Upper-Right):** Dark magenta card (`bg-[#1C0D1E] border-[#E1306C]/50`) with authentic Instagram camera glyph (`#E1306C`).
     5. **YouTube Commercial Media (Mid-Right):** Deep ruby card (`bg-[#1F0A0A] border-[#FF0000]/50`) with authentic YouTube Red play glyph (`#FF0000`).
     6. **LinkedIn B2B Engine (Lower-Right):** Dark cyan-blue card (`bg-[#081524] border-[#0A66C2]/50`) with authentic LinkedIn Blue glyph (`#0A66C2`).
   - Floating Animation: Staggered floating phases (`animation: fcGlobeFloat 4.5s ease-in-out infinite` with delays `0s`, `0.6s`, `1.2s`, `1.8s`, `2.4s`, `3.0s`).

---

### 21.3 "Brands We Have Helped Move Forward" Client Proof (`Clients.jsx`)

1. **Section Heading (H2):** Standardized to 100% solid white `text-highlighted` (`#FFFFFF`) with `font-heading text-3xl sm:text-5xl font-semibold`. Colored words, italic accents, or light purple highlights are strictly forbidden.
2. **Infinite Logo Loop:** Grayscale monochrome client logos gliding continuously in a GPU-accelerated CSS marquee.
3. **Live Meta Proof Bar:** Bottom telemetry strip displaying verified scale metrics (`50+ Brands`, `100% Satisfied Clients`) with deep purple accent dots (`bg-purple-600`) and tabular numbers.

---

### 21.4 Universal Replay-on-Scroll Counter Engine (`AnimatedCounter.jsx` & `HomeMarqueeStats.jsx`)

All performance metrics and numeric proof points must count upward dynamically as the user scrolls, creating an engaging, living telemetry interface:

#### Counter Architecture Rules:
1. **Replay-On-Scroll Execution (`replay = true` Default):**
   - Whenever a metric scrolls into the active viewport, it counts up smoothly from `0` to its target value.
   - When the user scrolls past the section (out of view), the number resets to `0`.
   - Every time the user scrolls back into view, the counter re-triggers from `0`, guaranteeing the animation is seen every time.
2. **Smooth Visible Easing Curve:**
   - Uses an ease-out cubic curve (`1 - Math.pow(1 - progress, 3)`) across a 1200ms–1400ms duration.
   - Front-loading curves (such as `easeOutExpo`) that jump to 90% in 100ms are strictly forbidden; numbers must visibly roll and tick.
3. **Section-Level Dual Observer & Scroll Listener (`HomeMarqueeStats.jsx`):**
   - Observed at the `<section>` container level using both `IntersectionObserver` and a passive `window.onscroll` listener (`getBoundingClientRect`).
   - Prevents premature off-screen triggering on initial page load and guarantees triggering across all screen scaling factors (100%, 125%, 150%).
4. **Strict Policy on Reduced-Motion:** System-level `prefers-reduced-motion` settings must never abort or disable counter animations.
5. **Interactive Card Hover Trigger:** Hovering over any individual stat card immediately re-triggers its counting animation.
6. **Numeric Formatting:**
   - `tabular-nums` monospace alignment to prevent layout shifts during counting.
   - Padded zeros for single-digit numbers (`pad={2}` produces `01`, `07`, `06`).
   - Suffix styling: Signature deep purple (`text-purple-600`) for symbols (`°`, `+`, `/7`, `%`).

#### The 8 Core Marquee Metrics:
| Metric Value | Suffix | Padding | Label | Lucide Icon |
| :--- | :--- | :--- | :--- | :--- |
| `360` | `°` | `0` | Growth System | `Zap` |
| `74` | `+` | `0` | Services Integrated | `Layers` |
| `1` | None | `2` (`01`) | Integrated Team | `ShieldCheck` |
| `24` | `/7` | `0` | Always On | `Clock` |
| `7` | None | `2` (`07`) | Service Areas | `MapPin` |
| `50` | `+` | `0` | Brands Served | `Users` |
| `6` | None | `2` (`06`) | Step Process | `GitBranch` |
| `100` | `%` | `0` | In-House | `CheckCircle2` |

---

### 21.5 "One Roof. No Vendor Drift." Service Pillars (`HomePillars.jsx`)

The 5 Service Pillars are codified under the **Nuxt Module Card Grid Pattern** in a symmetrical 3-column layout on desktop:

1. **Container Grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.
2. **Card Shell:** `rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 relative transition-all duration-300 hover:border-white/[0.16] hover:bg-[#18181B]`.
3. **Bare Canvas Deep Purple Icons:** Lucide icons (`Compass`, `TrendingUp`, `Sparkles`, `Video`, `Code2`) rendered at `h-7 w-7 text-purple-600` sitting bare directly on the card canvas (no enclosing square boxes or gray backgrounds).
4. **Top-Right Sequence Index:** Monospace index numbers (`01` through `05`) in `font-mono text-xs text-zinc-500 tabular-nums`.
5. **Solid White H3 Titles:** `font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight mt-5`. Full-card link hit area via `after:absolute after:inset-0`.
6. **Telemetry Footer & Terminal Prompt:**
   - Divider: `mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between`.
   - Left telemetry: `flex items-center gap-3 font-mono text-xs text-zinc-400` with `Download` (PDF overview), `Star` (SLA rating), and `Activity` (100% in-house) in `text-purple-600`.
   - Right CLI badge: `flex h-6 px-2 items-center justify-center rounded border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-zinc-400 group-hover:border-purple-600/50 group-hover:bg-purple-600/10 group-hover:text-purple-600 transition-colors` with `>_`.

---

### 21.6 Portfolio, Case Studies & Action Button Consistency Standards

1. **Card Radius Unification:** All cards across `HomeFeaturedWork.jsx`, `HomePortfolioShowcase.jsx`, `HomeCaseStudies.jsx`, and `HomeRecentInsights.jsx` are strictly standardized to `rounded-2xl border border-white/[0.08] bg-[#121214]`.
2. **Section Subtitle Consistency:** Every section H2 header must include a descriptive subtitle directly beneath it (`text-base sm:text-lg text-muted max-w-2xl mt-4`).
3. **Action Button & Link Hierarchy (`SectionButton.jsx` & Card Footers):**
   - Shape: Standardized to `rounded-xl`.
   - Idle State: `border border-white/[0.12] bg-white/[0.04] text-zinc-300`.
   - Interactive Hover State: `hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white transition-all duration-200`.
   - Arrow Animation: `ArrowRight` glyph slides right (`group-hover:translate-x-1 group-hover:text-purple-600`).
4. **Tabular Data Receipts:** Metrics in `HomeCaseStudies` and `HomePortfolioShowcase` use `<AnimatedCounter />` with deep purple suffixes and monospace numerals.

---

### 21.7 Section-by-Section Home Component Directory Mapping

| Section Order | Component Name | Visual Modality Pattern | Key Visual & Interactive Rules |
| :--- | :--- | :--- | :--- |
| **01** | `HomeHero.jsx` | Symmetrical 2-Column Grid + 3D Ecosystem Globe | Left column hosts H1, eyebrow, copy, dual PosterButtons, CLI command pill; Right column hosts borderless 3D wireframe globe (`HeroGlobeVisual.jsx`) with 6 dark-glass squircle platform badges (Next.js, Nuxt, Meta, Instagram, YouTube, LinkedIn). |
| **02** | `Clients.jsx` | Monochrome Client Marquee + Proof Bar | Solid white H2 (`text-highlighted`), infinite grayscale loop, live meta bar with purple accent dots and counter stats. |
| **03** | `HomeProblems.jsx` | 2-Column Comparative Ledger | Compounding cost of agency fragmentation vs Frame Cipher standard. |
| **04** | `HomeBuild.jsx` | "Everything You Need" Feature Grid | Dedicated glowing Lucide icon chips (`TrendingUp`, `Globe`, `Cpu`, `Video`, `Search`, `Sparkles`), deliverable tags. |
| **05** | `HomeStudioShowcase.jsx`| Zero-Jump 3-Column Transform Slider | Pure 16:10 camera POVs, transform-based sliding, touch swipe, zero text overlays, studio address chip. |
| **06** | `HomeMarqueeStats.jsx` | 8-Column Platform Proof Bento | Replay-on-scroll universal counters, section-level scroll detection, tabular nums, purple suffixes (`°`, `+`, `/7`, `%`). |
| **07** | `HomePillars.jsx` | Nuxt Module Card Grid (5 Pillars) | 3-column desktop layout, bare deep purple icons, sequence numbers `01`–`05`, solid white H3 with full-card link, telemetry footers, and `>_` terminal prompts. |
| **08** | `HomeLoop.jsx` | 6-Step Operating Loop | Vertical numbered continuum with monospace indicators. |
| **09** | `HomeManifesto.jsx` | Nuxt Module Card Grid (3 Pillars) | Deep purple pillar icon, sequence numbering, white semibold title, description, telemetry footer, and `>_` prompt. |
| **10** | `HomeFeaturedWork.jsx` | Editorial Work Showcase | 16:10 preview frames on `rounded-2xl` cards with subtitle copy and `rounded-xl` purple hover action buttons. |
| **11** | `HomePortfolioShowcase.jsx`| Website & SEO Proof Cards | High-res site screenshots, live metric callouts with `<AnimatedCounter />`, `rounded-2xl` cards, and `rounded-xl` action buttons. |
| **12** | `HomeCaseStudies.jsx` | Verified Data Receipts | Performance receipts on Surface 2 (`#18181B`) with subtitle copy, tabular counter numbers, and `rounded-xl` action buttons. |
| **13** | `HomeCalculatorsGrid.jsx`| Nuxt Module Card Grid (10 Calculators)| Deep purple calculator icon, engine tag, white semibold title, textbook equation block, telemetry footer, and `>_` prompt. |
| **14** | `HomeProcess.jsx` | Nuxt Module Card Grid (6 Phases) | Deep purple phase icon, phase numbering, white semibold title, description, deliverable badge, telemetry footer, and `>_` prompt. |
| **15** | `HomeEngagement.jsx` | Nuxt Module Card Grid (3 Columns, 5 Tiers)| Deep purple icon, white semibold title, best-for block, telemetry footer (`Download`, `Star`, `Activity`), and `>_` prompt. |
| **16** | `HomeIndustries.jsx` | Nuxt Module Card Grid (13 Verticals) | Deep purple sector icon, sector numbering, white semibold title, description, telemetry footer, and `>_` prompt. |
| **17** | `HomeWhy.jsx` | Result Anchor + Divided Ledger | Sticky result anchor card + 5-step divided reason list. |
| **18** | `HomeTech.jsx` | Nuxt Module Card Grid (4 Groups) | Deep purple tech icon, white semibold title, tech chip stack, telemetry footer, and `>_` prompt. |
| **19** | `HomeComparison.jsx` | Structured Data Ledger Table | Full-width responsive comparison table (Integrated vs Fragmented) with green `Check` and red `X` crossmark. |
| **20** | `HomeAbout.jsx` | Multinational Machine Showcase | Display heading, metric proof cards with `<AnimatedCounter />`, 4:3 founder portraits, social links. |
| **21** | `HomeFAQ.jsx` | Centered Accordion List + JSON-LD | Centered max-w-4xl accordion list with circular plus toggles and Schema.org FAQPage data. |
| **22** | `HomeCTA.jsx` | Nuxt Module Card Grid + Master Banner | 6-step onboarding roadmap with Nuxt module card layout (`Download`, `Star`, `Activity`, `>_`) + master conversion banner. |

---

### 21.8 Nuxt Module Card Grid Pattern Specification

For all structured capability and vertical matrices (`HomePillars`, `HomeTech`, `HomeEngagement`, `HomeIndustries`, `HomeProcess`, `HomeCalculatorsGrid`, `HomeManifesto`, `GrowthOS`, `HomeCTA` Onboarding Steps):

1. **Card Container:**
   - Isolated standalone rounded card (`rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 relative`).
   - Symmetrical grid layout with `gap-6` (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` or `4` or `5`).
   - Subtle top gradient hairline on hover (`before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent`).
2. **Top Row:**
   - Deep saturated purple Lucide icon (`text-purple-600`, size `h-7 w-7`) sitting directly on dark canvas without noisy container boxes.
   - Sequence indicator or category index on the top right (`font-mono text-xs text-zinc-500 tabular-nums`).
3. **Typography:**
   - Title: `font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight mt-5` (100% solid white, no colored words or italics).
   - Description: `mt-2 text-sm font-normal leading-relaxed text-muted` (Nuxt slate `#94A3B8`).
4. **Telemetry Footer:**
   - Top divider hairline: `mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between`.
   - Left telemetry metrics: `flex items-center gap-3 font-mono text-xs text-zinc-400` with mini Lucide icons (`Download`, `Star`, `Activity` in `text-purple-600`).
   - Right CLI terminal action badge: `flex h-6 px-2 items-center justify-center rounded border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-zinc-400 group-hover:border-purple-600/50 group-hover:bg-purple-600/10 group-hover:text-purple-600 transition-colors` with `>_`.

---

## 22. Master Portion-by-Portion Blueprint & Cross-Page Design Consistency Engine

This section establishes the **definitive portion-by-portion blueprint of the Home page** and formalizes it into a repeatable, modular architectural language. Every sub-page across the Frame Cipher platform (About, 74+ Service Pages, Studio Hub, Case Studies, Portfolio, Blog, Contact, and Tools) must implement these exact modalities to guarantee 100% cross-page visual harmony and UX consistency.

```
══════════════════════════════════════════════════════════════════════════════════════════
               FRAME CIPHER UNIFIED DESIGN ARCHITECTURE ENGINE
  Home Page Blueprint ──► 8 Reusable Modalities ──► Page-by-Page Implementation Map
══════════════════════════════════════════════════════════════════════════════════════════
```

---

### 22.1 Complete Portion-by-Portion Home Blueprint (All 26 Portions)

Below is the complete sequence of all 26 portions comprising the Frame Cipher Home Page (`src/views/Home.jsx`), detailing the exact design modality, grid configuration, typography rules, surface tokens, iconography standards, action elements, and dynamic behaviors for each.

---

#### Portion 01: Hero & 3D Ecosystem Globe (`HomeHero.jsx` & `HeroGlobeVisual.jsx`)
- **Design Modality:** Modality A (Symmetrical 2-Column Hero Grid + 3D Polar Perspective Wireframe Globe).
- **Layout & Grid:** `grid lg:grid-cols-[1.1fr_1fr] lg:items-center gap-12` on deep obsidian `#09090B`.
- **Left Column:**
  - Raycast capsule eyebrow bar (`rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5` with green pulsing dot `bg-emerald-500`).
  - H1 Headline: `text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-semibold tracking-tight leading-[1.04]`. Line 1 is solid white `text-highlighted`; Line 2 is signature `text-purple-600`. Zero italics.
  - Body copy with deep purple keyword link underlines (`text-white underline decoration-purple-600/50 hover:text-purple-600`).
  - Dual `PosterButton` actions (Primary & Outline, min-h-[44px]).
  - Nuxt CLI command box: `inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1.5 font-mono text-xs` with `$ npx frame-cipher audit`.
- **Right Column (3D Globe):**
  - Bare canvas floating directly on `#09090B` (zero card wrapper, zero container borders).
  - 3D Polar Perspective Sphere: 7 longitudinal meridians converging at top pole (`y: 140`) and 6 downward-curved concentric perspective latitude rings.
  - Target Intersection Nodes: Dual-layer masked lenses (`r="7"`, `fill="#09090B"`, `stroke="rgba(148, 163, 184, 0.55)"`) that mask wireframe lines behind them, plus center core dot (`r="3"`).
  - Stepped orthogonal & 45° dotted circuit connector hairlines (`strokeDasharray="2.5 3.5"` with continuous `fcLineFlow` animation).
  - 6 Dark-Glass Squircle Platform Badges (Strictly ZERO white boxes): Next.js (`bg-[#130D22] border-purple-600/50`), Nuxt (`bg-[#06181B] border-[#00DC82]/50`), Meta (`bg-[#0B1528] border-[#1877F2]/50`), Instagram (`bg-[#1C0D1E] border-[#E1306C]/50`), YouTube (`bg-[#1F0A0A] border-[#FF0000]/50`), LinkedIn (`bg-[#081524] border-[#0A66C2]/50`).
  - Interactive hover scaling (`scale-115 -translate-y-1`), brand-colored border glow, and connector hairline/node pulsing in that badge's authentic brand color.

---

#### Portion 02: Client Logo Marquee & Proof Strip (`Clients.jsx`)
- **Design Modality:** Modality C (Continuous Monochrome Marquee + Live Proof Telemetry Bar).
- **Layout & Grid:** Full-bleed marquee container with top/bottom `border-white/[0.08]`.
- **Typography & Rules:**
  - H2: 100% solid white `text-highlighted` (`font-heading text-3xl sm:text-5xl font-semibold`). Colored words and italics are strictly forbidden.
- **Interactive Elements:**
  - Continuous CSS marquee track (`kinetic-marquee-track-slow`) pausing on hover.
  - Floating grayscale client logos (`opacity-50 grayscale brightness-125 contrast-125 hover:opacity-100 hover:grayscale-0 hover:scale-110`).
  - Bottom meta proof strip with deep purple accent dots (`bg-purple-600`) and live counter metrics (`<AnimatedCounter value={50} suffix="+" />`, `<AnimatedCounter value={100} suffix="%" />`).

---

#### Portion 03: 2-Column Comparative Ledger (`HomeProblems.jsx`)
- **Design Modality:** Modality E (Divided Comparative Ledger / Anti-Card Fatigue).
- **Layout & Grid:** `grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:items-start` with edge-to-edge dividing hairlines (`border-white/[0.08]`).
- **Left Column:** Sticky challenge anchor card on `#121214` defining the compounding cost of vendor fragmentation.
- **Right Column:** 4 divided comparative rows contrasting the chaotic multi-agency handoff against Frame Cipher's integrated single operating system.
- **Visual Signals:** Crimson `X` (`text-rose-400`) for fragmented agencies vs. Emerald `Check` (`text-emerald-400`) for Frame Cipher.

---

#### Portion 04: "Everything You Need" Feature Matrix (`HomeBuild.jsx`)
- **Design Modality:** Modality B (Open 6-Card Icon Grid on Bare Canvas).
- **Layout & Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` on `#09090B`.
- **Card Styling:** Borderless cards allowing generous whitespace. Top row features bare deep purple Lucide icons (`TrendingUp`, `Globe`, `Cpu`, `Video`, `Search`, `Sparkles` in `text-purple-600 h-7 w-7`) sitting directly on dark canvas.
- **Typography:** 100% solid white H3 titles, muted slate descriptions (`text-zinc-400`), and deliverable monospace tag arrays.

---

#### Portion 05: Photographic Studio Showcase Slider (`HomeStudioShowcase.jsx`)
- **Design Modality:** Modality D (Zero-Jump 3-Column Transform Slider).
- **Layout & Grid:** Symmetrical 3-card desktop viewport (`lg:w-[calc((100%-3rem)/3)]`) with 24px gaps, driven by pure GPU-accelerated CSS translation (`style={{ transform: 'translateX(-${translateX}px)' }}`).
- **Key Rules:**
  - Zero vertical scroll jumping (`overflow-hidden`, no `window.scrollTo()`, no `snap-mandatory`).
  - Native mobile touch swipe handlers (`onTouchStart`, `onTouchMove`, `onTouchEnd`).
  - Pristine photographic bay: 16:10 camera POVs strictly free of text overlays, 4K REC badges, watermark stamps, or HUD crosshairs.
  - Card body features studio number (`Studio 01` / `Studio 02`), crisp solid white H3, physical Dhaka campus address chip, and natural description.
  - Centered interactive pagination pills with elongated active glowing purple indicators (`w-10 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.6)]`).

---

#### Portion 06: Verified Client Testimonials (`Testimonials.jsx`)
- **Design Modality:** Modality B (Verified Quote Bento Cards).
- **Layout & Grid:** Symmetrical multi-column card grid (`rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8`).
- **Typography & Rules:**
  - Solid white executive client names and verified company roles in monospace.
  - Deep purple quote mark icons (`text-purple-600 h-8 w-8`).
  - Five-star telemetry ratings and verified procurement badges.

---

#### Portion 07: Proprietary Growth OS Engine (`GrowthOS.jsx` / `GrowthOSHome`)
- **Design Modality:** Modality B (Nuxt Module Card Grid Pattern - 6 Growth Modules).
- **Layout & Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
- **Card Elements:**
  - Surface: `rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 relative transition-all duration-300 hover:border-white/[0.16] hover:bg-[#18181B]`.
  - Top Row: Deep purple module icons (`text-purple-600 h-7 w-7`) bare on canvas, sequence numbering (`01`–`06`).
  - Typography: Solid white H3 titles, muted descriptions (`text-muted`).
  - Telemetry Footer: Divider hairline, `Download`, `Star`, and `Activity` metrics in `text-purple-600`, right CLI terminal badge with `>_`.

---

#### Portion 08: Performance Metrics & Capabilities (`HomeMarqueeStats.jsx`)
- **Design Modality:** Modality C (8-Column Platform Proof Bento with Replay-on-Scroll Animated Counters).
- **Layout & Grid:** `grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-white/[0.08]` on `#09090B`.
- **Counter Architecture:**
  - Section-level observation using both `IntersectionObserver` and passive `window.onscroll` listener.
  - Smooth cubic ease-out curve (`1 - (1 - progress)³`) with 1400ms duration.
  - Continuous replay rule (`replay = true` default): Resets on viewport exit, counts up on every viewport entry.
  - Staggered wave delay (`index * 50ms`) across all 8 metrics: `360°`, `74+`, `01`, `24/7`, `07`, `50+`, `06`, `100%`.
  - Monospace numeric alignment (`tabular-nums`) with deep purple accent suffixes (`°`, `+`, `/7`, `%`) and padded zeros (`01`, `07`, `06`).
  - Individual card hover re-trigger for immediate interaction.

---

#### Portion 09: One Roof. No Vendor Drift. Service Pillars (`HomePillars.jsx`)
- **Design Modality:** Modality B (Nuxt Module Card Grid Pattern - 5 Pillars in 3-Column Desktop Grid).
- **Layout & Grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.
- **Card Elements:**
  - Deep purple Lucide icons (`Compass`, `TrendingUp`, `Sparkles`, `Video`, `Code2` in `text-purple-600 h-7 w-7`).
  - Top-right sequence numbers `01`–`05` in `font-mono text-xs text-zinc-500 tabular-nums`.
  - Solid white H3 titles with full-card clickable link area (`after:absolute after:inset-0`).
  - Telemetry footer with `Download` (PDF overview), `Star` (SLA rating), `Activity` (100% in-house), and `>_` terminal action prompt.

---

#### Portion 10: 6-Step Operating Loop (`HomeLoop.jsx`)
- **Design Modality:** Modality E (Vertical Numbered Operating Continuum).
- **Layout & Grid:** Vertical step continuum with edge-to-edge connectors and monospace phase chips.
- **Content:** Audit $\rightarrow$ System Architecture $\rightarrow$ Media & Code Build $\rightarrow$ Launch $\rightarrow$ Attribution $\rightarrow$ Scale.
- **Rules:** Monospace phase indicators in `text-purple-600`, solid white stage titles.

---

#### Portion 11: The Sovereign Manifesto (`HomeManifesto.jsx`)
- **Design Modality:** Modality B (3-Pillar Architectural Card Grid).
- **Layout & Grid:** `grid grid-cols-1 lg:grid-cols-3 gap-6` (`rounded-2xl border border-white/[0.08] bg-[#121214]`).
- **Rules:** Deep purple bare canvas icons, sequence numbers `01`–`03`, solid white titles, telemetry footer with `>_` terminal badges.

---

#### Portion 12: Kinetic Editorial Text Rotation (`HomeTextMarquee.jsx`)
- **Design Modality:** Modality C (Continuous Typographic Velocity Stream).
- **Layout:** Full-bleed marquee track with `border-y border-white/[0.08] bg-[#09090B] py-8`.
- **Rules:** Display headings in solid white separated by deep purple dots (`bg-purple-600 h-2 w-2 rounded-full`). Pauses on hover.

---

#### Portion 13: Editorial Commercial Work (`HomeFeaturedWork.jsx`)
- **Design Modality:** Modality F (Editorial Work Showcase).
- **Layout & Grid:** Symmetrical card grid (`rounded-2xl border border-white/[0.08] bg-[#121214]`).
- **Typography & Rules:**
  - H2: 100% solid white `text-highlighted`.
  - Subtitle copy directly beneath H2 (`text-base sm:text-lg text-muted max-w-2xl mt-4`).
  - Action Buttons: `rounded-xl` with interactive deep purple hover glow (`hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white transition-all duration-200`) and sliding arrow (`group-hover:translate-x-1 group-hover:text-purple-600`).

---

#### Portion 14: Website & Software Portfolio (`HomePortfolioShowcase.jsx`)
- **Design Modality:** Modality F (High-Fidelity Device Screen Proof).
- **Layout & Grid:** 16:10 website preview frames on `rounded-2xl border border-white/[0.08] bg-[#121214]`.
- **Content:** Live screenshots, platform technology chips (Next.js, Shopify, React), conversion metrics wrapped in `<AnimatedCounter />`.
- **Buttons:** `rounded-xl` action buttons with purple hover glow.

---

#### Portion 15: Recent Strategic Insights / Blog (`HomeRecentInsights.jsx`)
- **Design Modality:** Modality F (3-Column Editorial Article Grid).
- **Layout & Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
- **Card Elements:**
  - `rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7`.
  - Category badge in monospace, publication date, solid white H3 title, excerpt.
  - Footer Action Button: `rounded-xl` with purple hover glow.

---

#### Portion 16: Verified Case Studies & Data Receipts (`HomeCaseStudies.jsx`)
- **Design Modality:** Modality F (Surface 2 Performance Receipts).
- **Layout & Grid:** Cards hosted on Surface 2 (`rounded-2xl border border-white/[0.08] bg-[#18181B] p-7 sm:p-8`).
- **Typography & Rules:**
  - H2: 100% solid white with descriptive subtitle copy.
  - Tabular proof points (ROAS, revenue growth, CPA reduction) wrapped in `<AnimatedCounter />` with deep purple suffixes (`%`, `x`, `+`).
  - `rounded-xl` action buttons with purple hover glow and sliding arrows.

---

#### Portion 17: Ad Spend Math & Growth Calculators (`HomeCalculatorsGrid.jsx`)
- **Design Modality:** Modality B (Nuxt Module Card Grid - 10 Growth Calculators).
- **Layout & Grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6`.
- **Card Elements:**
  - Deep purple calculator icons (`Calculator`, `Percent`, `TrendingUp`, `BarChart3` in `text-purple-600 h-7 w-7`).
  - Mathematical textbook equation block in monospace.
  - Telemetry footer with `Download` (PDF formula), `Star` (rating), `Activity` (100%), and `>_` terminal prompt.

---

#### Portion 18: 6-Phase Execution Roadmap (`HomeProcess.jsx`)
- **Design Modality:** Modality B (Nuxt Module Card Grid - 6 Execution Phases).
- **Layout & Grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.
- **Rules:** Phase index `01`–`06`, deliverable chip, deep purple phase icon, solid white H3, telemetry footer, `>_` terminal prompt.

---

#### Portion 19: Partnership Models & Engagement Tiers (`HomeEngagement.jsx`)
- **Design Modality:** Modality B (Nuxt Module Card Grid - 3 Columns, 5 Tiers).
- **Layout & Grid:** Symmetrical 3-column layout on desktop (`grid-cols-1 md:grid-cols-3 gap-6`).
- **Rules:** Tier icon in `text-purple-600`, best-for block, deliverable scope, telemetry footer, and `>_` terminal badge.

---

#### Portion 20: Industry Verticals Served (`HomeIndustries.jsx`)
- **Design Modality:** Modality B (Nuxt Module Card Grid - 13 Specialized Verticals).
- **Layout & Grid:** Symmetrical responsive matrix.
- **Rules:** Sector icon in `text-purple-600`, sector index, telemetry footer, and `>_` terminal badge.

---

#### Portion 21: The 5 Decisive Advantages (`HomeWhy.jsx`)
- **Design Modality:** Modality E (Sticky Result Anchor + Divided Ledger).
- **Layout & Grid:** `grid lg:grid-cols-[0.8fr_1.2fr] gap-12`.
- **Left Column:** Sticky outcome anchor card on `#121214`.
- **Right Column:** 5-step divided reason list with monospace indices (`01`–`05`), solid white titles, and clean hairlines.

---

#### Portion 22: Tech Stack & Cloud Infrastructure (`HomeTech.jsx`)
- **Design Modality:** Modality B (Nuxt Module Card Grid - 4 Core Tech Groups).
- **Layout & Grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`.
- **Rules:** Tech chip stack in monospace, telemetry footer (`Download`, `Star`, `Activity`), and `>_` prompt.

---

#### Portion 23: Structured Data Ledger Table (`HomeComparison.jsx`)
- **Design Modality:** Modality G (Full-Width Comparison Ledger Table).
- **Layout & Grid:** 3-column responsive table (Capability / Frame Cipher / Fragmented Vendors).
- **Rules:** Emerald `Check` (`text-emerald-400`) for Frame Cipher; Crimson `X` (`text-rose-400`) for fragmented vendors. Clean border hairlines, zero clutter.

---

#### Portion 24: Multinational Machine & Leadership (`HomeAbout.jsx`)
- **Design Modality:** Modality D (Photographic Leadership & Global Campus Proof).
- **Layout & Grid:** Display headline + proof metrics with `<AnimatedCounter />` + 4:3 founder portraits with social links.
- **Rules:** Unobstructed portraits, circular 44px social action buttons with purple hover glow (`hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white`).

---

#### Portion 25: Due Diligence FAQ Accordion (`HomeFAQ.jsx`)
- **Design Modality:** Modality H (Centered Architectural Accordion List + Schema.org FAQPage).
- **Layout & Grid:** Centered `max-w-4xl` accordion container with `rounded-2xl border border-white/[0.08] bg-[#121214]` items.
- **Rules:** Circular toggles with deep purple accent (`text-purple-600`), smooth expand/collapse, embedded Schema.org JSON-LD.

---

#### Portion 26: Master Onboarding Roadmap & Conversion CTA (`HomeCTA.jsx`)
- **Design Modality:** Modality B (6-Step Nuxt Module Roadmap) + Master Conversion Banner.
- **Layout & Grid:** 6-card onboarding grid + master high-contrast banner with dual PosterButtons.
- **Rules:** Full Nuxt module card layout (`Download` timeline, `Star` SLA, `Activity` readiness, `>_` prompt) leading into the primary conversion shell with `rounded-2xl` borders and dual action buttons.

---

### 22.2 The 8 Universal Design Modalities (The Reusable Design Language)

Every section across the entire Frame Cipher website must be composed from one of these **8 Master Design Modalities**:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THE 8 REUSABLE DESIGN MODALITIES                                │
├───────────┬───────────────────────────────────────────┬────────────────────────────────┤
│ MODALITY  │ PATTERN NAME                              │ PRIMARY USE CASES              │
├───────────┼───────────────────────────────────────────┼────────────────────────────────┤
│ Modality A│ Symmetrical 2-Column Hero & Canvas        │ Page Heroes & Primary Displays │
│ Modality B│ Nuxt Module Card Grid Pattern             │ Capabilities, Tech, Services   │
│ Modality C│ Multi-Column Replay-on-Scroll Bento       │ Proof Metrics, KPI Marquees    │
│ Modality D│ Zero-Jump Photographic Slider             │ Studio Sets, Video Portfolios  │
│ Modality E│ Editorial Divided Continuum / Ledger      │ Problems, Timelines, Origins   │
│ Modality F│ Verified Data Receipts & Case Study Cards │ Portfolios, Blog, Work Proof   │
│ Modality G│ Full-Width Structured Comparison Table    │ Pricing Tables, SLA Matrices   │
│ Modality H│ Centered Due-Diligence Accordion List     │ FAQs, Due Diligence, Roadmaps  │
└───────────┴───────────────────────────────────────────┴────────────────────────────────┘
```

#### Modality Specifications & Exact Code Blueprints:

1. **Modality A (Symmetrical 2-Column Hero Grid):**
   - Container: `grid lg:grid-cols-[1.1fr_1fr] lg:items-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8`.
   - Left: Eyebrow capsule pill + Two-Tone H1 (Line 1 `text-highlighted`, Line 2 `text-purple-600`) + Copy with purple links + Dual `PosterButton`s (52px height) + Monospace CLI command pill.
   - Right: Interactive visual (e.g. 3D wireframe globe, interactive terminal, or architectural canvas) floating bare directly on `#09090B`.

2. **Modality B (Nuxt Module Card Grid Pattern):**
   - Container: `rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 relative transition-all duration-300 hover:border-white/[0.16] hover:bg-[#18181B]`.
   - Top Row: Deep purple Lucide icon (`text-purple-600 h-7 w-7`) bare on canvas + sequence number `01`–`06` (`font-mono text-xs text-zinc-500 tabular-nums`).
   - Title: `font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight mt-5`. Full-card click area via `after:absolute after:inset-0`.
   - Body: `mt-2 text-sm font-normal leading-relaxed text-muted`.
   - Telemetry Footer: `mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between` with mini purple icons (`Download`, `Star`, `Activity`) and right CLI terminal badge (`>_`).

3. **Modality C (Multi-Column Replay-on-Scroll Metric Bento):**
   - Container: `grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-white/[0.08] border-y border-white/[0.08]`.
   - Detection: Section-level viewport observer + passive scroll listener (`getBoundingClientRect`).
   - Counter: `<AnimatedCounter value={target} duration={1400} delay={idx * 50} replay={true} suffixClassName="text-purple-600" />`.
   - Easing: Smooth cubic curve (`1 - (1 - progress)³`). Card hover re-trigger enabled.

4. **Modality D (Zero-Jump Photographic Showcase Slider):**
   - Transform: Pure GPU translation (`style={{ transform: 'translateX(-${translateX}px)' }}`) inside `overflow-hidden`.
   - Touch: Native gesture swipe handlers (`onTouchStart`, `onTouchMove`, `onTouchEnd`).
   - Frame: 16:10 pristine camera POVs with zero HUD/REC badge clutter. Centered glowing purple pagination pills.

5. **Modality E (Editorial Divided Continuum / Ledger):**
   - Container: Edge-to-edge dividing hairlines (`border-t border-b border-white/[0.08] divide-y divide-white/[0.08]`).
   - Layout: Monospace stage indicator (`font-mono text-xs text-purple-600`) + solid white headline + narrative copy. Eliminates card fatigue.

6. **Modality F (Verified Data Receipts & Case Study Cards):**
   - Surface: Hosted on Surface 1 (`#121214`) or Surface 2 (`#18181B`) with `rounded-2xl border border-white/[0.08]`.
   - Metrics: Tabular numeric receipts wrapped in `<AnimatedCounter />` with purple suffixes (`%`, `x`, `+`).
   - Actions: `rounded-xl` action button with deep purple interactive hover glow (`hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white`) and animated sliding arrow (`group-hover:translate-x-1 group-hover:text-purple-600`).

7. **Modality G (Full-Width Structured Comparison Table):**
   - Container: Responsive table wrapped in horizontal-scroll wrapper with `border border-white/[0.08] rounded-2xl bg-[#121214]`.
   - Indicators: Emerald `Check` for included features; Crimson `X` for excluded features. Monospace vector tags.

8. **Modality H (Centered Due-Diligence Accordion List):**
   - Container: Centered `max-w-4xl mx-auto space-y-3`.
   - Items: `rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden`.
   - Toggles: Circular toggles with deep purple indicators (`text-purple-600`). Embedded Schema.org JSON-LD.

---

### 22.3 Page-by-Page Implementation & Consistency Translation Guide

To maintain 100% design consistency across the entire website, every sub-page must map its content directly to these 8 modalities:

| Target Page Route | Section Function | Assigned Design Modality | Applied Visual Specification |
| :--- | :--- | :--- | :--- |
| **`/about` (About Page)** | Hero & Ambition | **Modality A** | Symmetrical 2-column layout, two-tone H1, PosterButtons, editorial text marquee ticker. |
| **`/about`** | Key Metrics Ledger | **Modality C** | 4-column divided band with `<AnimatedCounter />` (`20+`, `50+`, `100%`, `74+`). |
| **`/about`** | Origin & Problem | **Modality E** | 4-row divided editorial ledger with purple sequence indicators (`01`–`04`). |
| **`/about`** | Global Delivery Nodes | **Modality B** | 4-column matrix, deep purple timezone tags, `rounded-2xl` enterprise governance block. |
| **`/about`** | Tech Architecture | **Modality B** | 2x2 blueprint matrix, code chip stack, `rounded-xl` action buttons with purple hover glow. |
| **`/about`** | Company Timeline | **Modality E** | Vertical timeline cards (`rounded-2xl`), monospace year callouts, checklist milestones. |
| **`/about`** | Executive Leadership | **Modality D** | 3-column founder portraits (4:3), unobstructed photography, 44px circular social links. |
| **`/about`** | Operating Principles | **Modality B** | 6-card hairline matrix, sequence index `01`–`06`, solid white titles. |
| **`/about`** | Capability Mix | **Modality B** | 5-pillar divided column band, `rounded-xl` action buttons with sliding arrows. |
| **`/about`** | FAQs & Due Diligence | **Modality H** | Centered `max-w-4xl` accordion with `rounded-2xl` items, Schema.org FAQPage data. |
| **`/about`** | Conversion CTA | **Modality B + Master** | `rounded-2xl` conversion shell on `#121214` with dual PosterButtons. |
| **`/services/*` (74+ Pages)**| Service Page Hero | **Modality A** | Two-tone H1, breadcrumb, PosterButtons, delivery SLA chip, category proof badge. |
| **`/services/*`** | Capability Architecture| **Modality B** | 6-card Nuxt module grid (`Download`, `Star`, `Activity`, `>_`), bare purple icons. |
| **`/services/*`** | Pricing & Deliverables | **Modality G** | Structured comparison table (Scope / Timeline / Deliverables / Price) with `Check`/`X`. |
| **`/services/*`** | Execution Process | **Modality B** | 4-to-6 phase Nuxt module roadmap with phase numbers and telemetry footers. |
| **`/services/*`** | Verified Case Proof | **Modality F** | Surface 2 receipts (`#18181B`) with `<AnimatedCounter />` and `rounded-xl` action buttons. |
| **`/services/*`** | Sub-Service FAQs | **Modality H** | Centered accordion with Schema.org JSON-LD FAQPage injection. |
| **`/studio/*` (Studio Hub)** | Studio Hero | **Modality A** | Two-tone H1, physical Dhaka campus address chip, 16:10 video preview bay. |
| **`/studio/*`** | Physical Sets Showcase| **Modality D** | Zero-jump 3-column transform slider, pure 16:10 POVs, purple pagination indicators. |
| **`/studio/*`** | Video Portfolio Grid | **Modality F** | Categorized video cards (Commercial, Podcast, Product), modal player, client tags. |
| **`/studio/*`** | Production Gear | **Modality B** | Sony FX cinema rigs, DaVinci Resolve color suites, acoustic soundstages in 4-card grid. |
| **`/portfolio` (Work Proof)**| Showcase Grid | **Modality F** | 16:10 high-res live screenshots, live metrics with `<AnimatedCounter />`, `rounded-xl` buttons. |
| **`/case-studies/*`** | Case Study Deep-Dive | **Modality F + E** | Surface 2 metric receipts, before/after attribution ledger, full-width performance graph. |
| **`/blog/*` (Insights)** | Article Directory | **Modality F** | 3-column editorial grid, category badges, publication dates, `rounded-xl` read buttons. |
| **`/contact` (Consultation)** | Consultation Hero | **Modality A** | 2-column layout: Left strategy brief form; Right direct executive channels + Dhaka map. |
| **`/tools/*` (Calculators)** | Growth Calculators | **Modality B** | Interactive math equation inputs, live formula calculations, PDF export with `>_`. |

---

### 22.4 Design System Verification & Non-Negotiable Guardrails

When creating or modifying ANY component across ANY page, the following automated checks MUST pass 100%:

1. **Headings Guardrail:**
   - H2, H3, H4 headings must be **100% solid white** (`text-highlighted` / `#FFFFFF`).
   - Zero italics (`italic`), zero colored spans (`text-purple-`, `text-violet-`), and zero gradient text in H2–H4 headings.
2. **Iconography Guardrail:**
   - All Lucide icons must use signature **Deep Purple** (`text-purple-600` / `#9333EA`).
   - Light purple variants (`text-purple-400`, `text-purple-300`, `text-purple-200`) are strictly forbidden for icons.
3. **Card Radii Guardrail:**
   - Base cards and containers must use `rounded-2xl border border-white/[0.08] bg-[#121214]`.
   - Legacy `rounded-lg` or `rounded-md` on outer card shells is strictly forbidden.
4. **Button & Link Guardrail:**
   - Action buttons must use `rounded-xl` with interactive deep purple hover glow (`hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white transition-all duration-200`).
   - Sliding arrow icon (`ArrowRight`) must animate horizontally on hover (`group-hover:translate-x-1 group-hover:text-purple-600`).
   - Minimum touch target height must be $\ge 44\text{px}$ (`min-h-[44px]`).
5. **Counter Guardrail:**
   - Numerical metrics must use `<AnimatedCounter />` with `replay = true` and smooth cubic ease-out.
   - Reduced-motion settings must never disable or jump counters.
6. **Zero Content Loss Policy:**
   - All routes (74+ services, portfolio items, founder bios, FAQs, calculator formulas) must remain 100% preserved.
7. **Zero Redundant Eyebrow Badges Policy (Eliminating All Header Pill Capsules):**
   - Redundant pill boxes, status capsules with pinging dots, and metadata badges directly above primary display headings (e.g. `Full-Stack Growth Engine · 74 Services Across 7 Macro Pillars`, `Dhaka Studio · Built for brands moving worldwide`, `SEO • Case #13`, `PixC Retouch • Photo Editing & Retouching`, `Category • Case #XX`, or arbitrary pills repeating breadcrumb text) are **STRICTLY FORBIDDEN** across all pages.
   - Breadcrumb navigation (`Home > Category > Detail`) already establishes clear architectural context. Stacking intermediary pill badges between breadcrumbs and the main headline creates unnecessary visual stutter, card fatigue, and cognitive noise.
   - The visual hierarchy must flow cleanly and unobstructed from Breadcrumbs directly into the H1 display headline.
8. **Tickmark Systems List Guardrail (No Boxy Pills for Capabilities/Tools):**
   - Capability stacks, toolings, and system feature lists (e.g. `Meta Ads Manager`, `Messenger Conversations`, `Broad Targeting`, `Creative Testing`, `Advantage+`) must **NEVER** be wrapped in individual bordered pill boxes (`rounded-md border bg-[#18181B]`).
   - Instead, render them as a clean inline or grid checklist using signature deep purple tickmarks (`<Check className="h-3.5 w-3.5 text-purple-600 shrink-0" />`) with monospace text (`font-mono text-[11px] text-zinc-300`).
   - "Icon gular pashe kono ajaira texts jeno na thake" — eliminate all auxiliary junk tags, redundant labels, and badges glued next to icons.




