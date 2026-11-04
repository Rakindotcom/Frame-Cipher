# Home Page Design Audit & Master System Alignment Report

> **Audit Date:** November 2026  
> **Source Baseline:** Production Home Page (`src/views/Home.jsx`, `src/components/home/*`, `src/components/Kinetic.jsx`, `app/globals.css`)  
> **Objective:** Perform a rigorous audit of the Home Page UI/UX, document every design primitive, token, card pattern, and typography hierarchy, and resolve all visual discrepancies between the Home Page and the service pages.

---

## 1. Executive Summary: Why the Disconnect Happened

When comparing the existing Home Page (`src/components/home/*`) against recently refactored service pages, several major visual disconnects emerged:

| Design Dimension | Home Page Production Standard | Service Pages Defect (Pre-Audit) | Impact |
|---|---|---|---|
| **Card Radii & Geometry** | Concentric radii: `rounded-2xl` containers, `rounded-xl` cards, `rounded-md` deliverable badges, `rounded-full` pills. | Harsh square boxes (`rounded-none`, sharp 90° corners). | Looked like harsh wireframes rather than a polished luxury product. |
| **Surface Elevations** | Continuum Grid: `bg-white/[0.08] rounded-xl overflow-hidden` with `bg-[#121214]` cells and `hover:bg-[#151518]`. | `bg-[#09090B]` cells on `border-white/[0.08]`. | Flat, hollow, lacking surface depth and elevation contrast. |
| **Typography & Italic Accent** | `font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white` with `<span className="italic text-frame-accent">accent phrase</span>`. | Plain sans bold text (`font-bold text-[#FAFAFA]`) with NO italic accent. | Stripped away the agency's signature brand typography. |
| **Color Contrast & Text Tone** | High-contrast `text-white` titles, `text-zinc-300` lead text, `text-zinc-400 group-hover:text-zinc-200` body text. | Monochromatic, dull `text-[#A1A1AA]` across all paragraphs and lists. | Low contrast, washed-out appearance, difficult to scan. |
| **Status Pills & Live Indicators** | Capsule status bar: `inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md` with animated live ping (`bg-emerald-400`). | Either stripped out entirely or rendered as harsh rectangular callout strips. | Lost the high-tech, live studio prestige aesthetic. |
| **Interactive Buttons** | Rounded pill buttons (`rounded-full`) with `bg-[#FAFAFA] text-[#09090B]` primary, hover arrow translation (`group-hover:translate-x-1`). | Inconsistent or plain text links (`→`) without pill containers. | Broken interaction consistency. |
| **Accordion Styling** | FAQ cards: `rounded-xl border border-white/[0.08] bg-[#121214]` with `group-open:before:opacity-100`, circular plus button `rounded-full border bg-white/[0.04]`, and inner `#09090B` tray. | Sharp-cornered `<details>` blocks with square borders. | Disjointed feel from Home Page FAQ. |

---

## 2. Definitive Home Page Component Archetypes

Every section on the Home Page maps to one of the following 6 core architectural archetypes:

### Archetype 1: Symmetrical Continuum Grid (e.g., `HomeBuild`, `HomeCalculatorsGrid`)
Used for core capabilities, engines, and multi-card directories:
- **Outer Wrapper:** `relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] grid gap-px before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:z-10`
- **Cell Surface:** `group relative flex flex-col justify-between bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:bg-[#151518]`
- **Cell Header:** `flex items-center justify-between border-b border-white/[0.06] pb-3` with `<span className="font-mono text-xs text-frame-accent">{tag}</span>` and `<span className="font-mono text-xs text-zinc-500 tabular-nums">0{index + 1}</span>`.
- **Deliverables / Tags:** `rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300`.
- **Cell Footer:** `mt-8 flex items-center justify-between border-t border-white/[0.06] pt-4` with metric on left and explore arrow on right.

### Archetype 2: Elevated Photographic & Story Surface Cards (e.g., `HomeFeaturedWork`, `HomeStudioShowcase`)
Used for portfolio case studies, studio bays, and rich offerings:
- **Outer Grid:** `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`
- **Card:** `group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100`
- **Image Aspect Frame:** `relative aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-white/[0.08]` with image zoom on hover (`group-hover:scale-105 transition-transform duration-500`).
- **Card Footer Action:** `rounded-full border border-white/[0.14] bg-white/[0.03] px-5 min-h-[44px] h-[44px] text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98]`.

### Archetype 3: Editorial Divided Rows (e.g., `HomeProblems`, `HomeWhy`)
Used for challenges, reasons, and chronological sequences:
- **Divider:** `divide-y divide-white/[0.08] border-t border-b border-white/[0.08]`
- **Row:** `group relative grid grid-cols-1 gap-4 py-8 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:items-baseline md:gap-8 md:py-10 px-4 -mx-4 rounded-lg before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100`
- **Tag:** `font-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-frame-accent tabular-nums`.

### Archetype 4: Divided Column Band (e.g., `HomePillars`)
Used for multi-column horizontal breakdowns:
- **Container:** `border-t border-white/[0.08] divide-y divide-white/[0.08] lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-5`
- **Column:** `group relative flex flex-col justify-between p-6 sm:p-8 transition-colors duration-300 hover:bg-white/[0.02] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100`

### Archetype 5: Highlight Feature Box / Split Card (e.g., `HomeCTA`, `HomeWhy`)
Used for high-impact conversions, hero callouts, and guarantee frameworks:
- **Box:** `relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-10 md:p-16 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/60 before:to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5)]`
- **Directional Arrow / Visual Icon:** Large transparent white symbol (`text-white/20 select-none font-heading text-7xl xl:text-8xl`).

### Archetype 6: Interactive FAQ Accordion (e.g., `HomeFAQ`)
Used for collapsible Q&A:
- **Item Container:** `group relative rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.16] open:border-white/[0.16] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 group-open:before:opacity-100 hover:before:opacity-100`
- **Summary Row:** `flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 text-left` with tabular number `0{index + 1}` and circular plus toggle `flex h-8 w-8 rounded-full border border-white/[0.08] bg-white/[0.04] text-zinc-300 group-open:rotate-45`.
- **Answer Container:** `border-t border-white/[0.08] px-6 pb-6 pt-4 sm:px-7 sm:pb-7 text-zinc-300 bg-[#09090B]`.

---

## 3. Strict Typography & Color Rules

1. **Section Heading Display:**
   ```jsx
   <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
     Two in-house production studios in{' '}
     <span className="italic text-frame-accent">
       Dhaka.
     </span>
   </h2>
   ```
2. **Text Hierarchy Palette:**
   - **Headings:** Solid `text-white` (`font-medium` or `font-semibold`), with italic purple signature `<span className="italic text-frame-accent">...</span>`.
   - **Lead Prose:** `text-base font-normal leading-relaxed text-zinc-300 md:text-lg max-w-3xl`.
   - **Body Copy:** `text-sm md:text-base font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200`.
   - **Metadata / Indices:** `font-mono text-xs text-frame-accent tabular-nums tracking-wider`.
   - **Banned:** Dull `#A1A1AA` flat text without hover elevation.

---

## 4. Standard Button Primitives

- **Primary PosterButton:**
  `rounded-full bg-[#FAFAFA] text-[#09090B] hover:bg-white active:scale-[0.98] transition-colors duration-200 shadow-sm min-h-[48px] h-[48px] px-6 text-[15px] font-medium leading-none` with sliding `→`.
- **Outline PosterButton:**
  `rounded-full border border-white/[0.14] bg-white/[0.03] text-white hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98] transition-colors duration-200 min-h-[48px] h-[48px] px-6 text-[15px] font-medium leading-none` with sliding `→`.
- **SectionButton:**
  `rounded-full border border-white/[0.14] bg-white/[0.03] px-6 min-h-[44px] h-[44px] text-[14px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]`.
- **Card Action Button:**
  `rounded-full border border-white/[0.14] bg-white/[0.03] px-5 min-h-[44px] h-[44px] w-full text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98]`.

