# Frame Cipher — Component Editing Playbook & Guide
> **Integrated Specification:** Synchronized with `D:\web-interface-guidelines\AGENTS.md` and user-approved production benchmarks.
> **Purpose:** Operational instructions for developers and AI agents refactoring or creating components to ensure 100% aesthetic consistency and effortless scannability across all text-heavy pages.

---

## 1. The 7-Step Component Refactoring Workflow

### Step 1: Content Zero-Loss Check
Read the entire target component first. Explicitly preserve:
- All substantive copy, headings, descriptions, and verified data.
- All mapped data arrays (`items.map(...)`, `faqs.map(...)`, `stats.map(...)`).
- All internal and external links (`<Link href="...">`, `<a>`) and JSON-LD schemas.

### Step 2: Establish the Architectural Container & Line-Length Cap
Verify the outer container adheres to `max-w-7xl` and constrain section intro paragraphs to `max-w-3xl` (60–75ch) so text-heavy pages remain effortless to read:
```jsx
<section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white sm:px-6 md:px-8 md:py-24 lg:py-28 overflow-hidden">
  <div className="mx-auto max-w-7xl">
    {/* Section Header with max-w-3xl intro paragraph */}
  </div>
</section>
```

### Step 3: Heading Hierarchy (Pure Solid White + Italic Purple Accent, Natural Case)
- **STRICT RULE:** H1, H2, and H3 headings MUST use pure solid white text (`text-white font-medium tracking-tight`) in **natural Title/Sentence case (NO `uppercase`)** with an **italic purple accent** on the emphasis word (`italic text-frame-accent`).
- **NEVER:** Use muddy `bg-clip-text text-transparent bg-gradient-to-...` gradients.
- **NEVER:** Place artificial slash taglines (`The offer / Architecture`) or bracketed labels (`[ 01 / PATHWAYS • START HERE ]`) above headings.

```jsx
// CORRECT PRODUCTION HEADING:
<h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
  Solutions built around what you want to{' '}
  <span className="italic text-frame-accent">
    achieve.
  </span>
</h2>
```

### Step 4: Strict Image Presentation Rules
1. **NO Fake Dashboards:** Never add fake browser URL bars (e.g. `https://framecipher.com/work/...`) or window dots around real images.
2. **NO Text Overlays on Images:** Never overlay client names, badges, or capsule pills on top of photos or analytics screenshots. Remove dark opacity scrims (`bg-black/40`).
3. **Card Body Placement:** Place client names, categories, and metrics in the card content area below the image.

```jsx
// CORRECT PURE IMAGE CONTAINER:
<div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-zinc-950">
  <img
    src={imageSrc}
    alt={imageAlt}
    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
    loading="lazy"
  />
</div>
```

### Step 5: Standardized Rounded Pill Buttons
- **Section Headers & Footers:** Use `PosterButton` or `SectionButton` (`h-12` or `min-h-[48px]`, `rounded-full`). Never use raw text links (e.g. `View all work →` in bare purple text).
- **Card Footer Action:** Use a full-width rounded pill button (`h-[44px] rounded-full border border-white/[0.14] bg-white/[0.03] text-[13px] font-medium text-white hover:bg-white/[0.08]`).
- **Card Clutter Ban:** Remove `Scope:...` text strings from card footers.

```jsx
// CORRECT CARD FOOTER ACTION:
<div className="border-t border-white/[0.08] p-6 pt-4 sm:p-7 sm:pt-4">
  <Link
    href="/projects"
    className="group inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-all duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98]"
  >
    <span>View project</span>
    <span aria-hidden="true" className="ml-2 text-base transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
  </Link>
</div>
```

### Step 6: Alternate Visual Rhythm Modalities (Eliminate Card Fatigue)
On text-heavy pages, never stack more than two 3-column card grids back-to-back. Choose from the 5 Modalities in `03-LAYOUT-AND-GRIDS.md`:
1. **Modality 1:** Editorial Divided Rows (`divide-y divide-white/[0.08] border-y border-white/[0.08]`)
2. **Modality 2:** Architectural Divided Column Band (`divide-y lg:divide-x divide-white/[0.08]`)
3. **Modality 3:** Shared 1px Hairline Continuum Matrix (`gap-px bg-white/[0.08] border border-white/[0.08] rounded-xl overflow-hidden`)
4. **Modality 4:** Elevated Surface Card Grid (`grid gap-6 sm:grid-cols-2 lg:grid-cols-3` with `bg-[#121214] rounded-xl`)
5. **Modality 5:** Interactive Progressive Disclosure (Pillar Tabs / Centered Accordions)

### Step 7: Polish Micro-Details
- Ensure concentric radii (Container `rounded-2xl` / `rounded-xl` -> Card `rounded-xl` / `rounded-lg` -> Deliverable Pill `rounded-md` -> Button `rounded-full`).
- Ensure `tabular-nums` on all metrics and index counters.
- Ensure all transitions explicitly declare properties (NEVER `transition: all`).
