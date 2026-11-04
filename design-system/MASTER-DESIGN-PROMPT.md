# Frame Cipher — Unified Master Design System Prompt

> **Instructions for AI Agents & Developers:** When working on Frame Cipher's UI/UX, follow this master specification without deviation. It synthesizes the visual craft of Linear.app, Raycast, Stripe Editorial, and Dhaka Cinema Studio Prestige into an enforceable system optimized for text-heavy clarity.

---

## 1. Prime Directives (Non-Negotiable)

1. **Content Zero-Loss Policy (Absolute Law):**
   Never delete, shorten, summarize, paraphrase, or omit any substantive text, deliverables, stats, links, headings, or schemas. Transform presentation and scannability without losing depth.
2. **Atmospheric Obsidian Surface Architecture:**
   - Canvas: `#09090B` (deep rich obsidian)
   - Cards / Panels: `#121214` (surface 1)
   - Metric Strips / Hover States: `#18181B` (surface 2)
   - Signature Accent: `#9d72ff` / `#A855F7` (`text-frame-accent` / `bg-frame-accent`)
   - Accent Light / Hover: `#C084FC`
   - Borders: `border-white/[0.08]` default, `border-white/[0.16]` hover
3. **Solid White Display Typography + Italic Purple Accent (H1, H2, H3):**
   - Headings MUST use solid pure white (`text-white font-medium tracking-tight`) in **natural Title/Sentence case (NEVER `uppercase`)** with an **italic signature purple accent** (`italic text-frame-accent`) on the emphasis word (e.g. `From signal to scale.`).
   - STRICTLY BANNED: Never use `bg-clip-text text-transparent bg-gradient-to-...` for heading text.
   - Text Marquees / Animations: 100% solid white text (`text-white font-medium`) in natural case separated by subtle dots (`·`).
4. **Complete Ban on Artificial Slash & Bracketed Taglines Above Headings:**
   - NEVER place artificial slash pills (`The offer / Architecture`) or bracketed labels (`[ 01 / PATHWAYS • START HERE ]`) above headings. Let headings lead with confidence.
5. **Text-Heavy UI/UX Management (Preventing Card Fatigue):**
   - Constrain section intro paragraphs to `max-w-3xl` (60–75ch) with `text-zinc-300 leading-relaxed`.
   - Never stack more than two 3-column card grids back-to-back. Alternate between the **5 Visual Rhythm Modalities**:
     1. *Editorial Divided Rows* (`divide-y divide-white/[0.08] border-y border-white/[0.08]`)
     2. *Architectural Divided Column Band* (`divide-y lg:divide-x divide-white/[0.08]`)
     3. *Shared 1px Hairline Continuum Matrix* (`gap-px bg-white/[0.08] rounded-xl overflow-hidden`)
     4. *Elevated Surface Card Grid* (`grid gap-6 sm:grid-cols-2 lg:grid-cols-3` on `#121214`)
     5. *Interactive Progressive Disclosure* (Pillar Tabs / Centered Accordions)
6. **Authentic Imagery (NO Fake Dashboards / NO Overlays on Images):**
   - Real photography (studios, team, websites, analytics graphs) must be 100% clean.
   - NEVER add fake browser URLs (`https://framecipher.com/work/...`) or window dots around real images.
   - NEVER overlay large text blocks, client names, or capsule badges directly on top of images (`Dr. Ferdoush Saleheen`, `Personal Branding & Executive Presence`, `Scope:...`).
   - Remove dark opacity scrims (`bg-black/40`) covering images. Captions and client names belong in the card body below the image.
7. **Standardized Rounded Pill Buttons (Linear / Apple Grade):**
   - All interactive buttons are `rounded-full` pills (min-height ≥44px for mobile touch targets).
   - Primary / Section Action: `PosterButton` / `SectionButton` (`h-12` or `min-h-[48px]`, `rounded-full`, subtle border `border-white/[0.14]`, high-contrast text, hover arrow sliding `→`).
   - Card Footer Action: Full-width rounded pill button (`h-[44px] rounded-full border border-white/[0.14] bg-white/[0.03] text-[13px] font-medium text-white hover:bg-white/[0.08] active:scale-[0.98]`).
   - BANNED: Plain text links (e.g. `View all work →` in bare purple text) where buttons belong, and `Scope:...` clutter in card footers.
8. **Strict Viewport Geometry & Explicit Transitions:**
   - Global container width is strictly `max-w-7xl` with `mx-auto px-4 sm:px-6 lg:px-8`. No `max-w-[95vw]`. No horizontal scrolling.
   - Explicitly declare transition properties (e.g. `transition-colors duration-200`, `transition-transform duration-200` — NEVER `transition: all`).

---

## 2. Directory Navigation Map

For deep specifications, consult the corresponding guides in `D:\Frame-Cipher\design-system\`:
- [00-HOME-PAGE-DESIGN-AUDIT-AND-SYSTEM-ALIGNMENT.md](./00-HOME-PAGE-DESIGN-AUDIT-AND-SYSTEM-ALIGNMENT.md): Definitive Home Page design audit, token benchmarks, card archetypes, and alignment rules.
- [01-DESIGN-ANALYSIS-AND-PHILOSOPHY.md](./01-DESIGN-ANALYSIS-AND-PHILOSOPHY.md): Strategic brand DNA, text-heavy UI/UX engine, and craft principles.
- [02-TOKENS-AND-COLORS.md](./02-TOKENS-AND-COLORS.md): Complete color palette, typography scales, contrast, and CSS classes.
- [03-LAYOUT-AND-GRIDS.md](./03-LAYOUT-AND-GRIDS.md): 5 Visual Rhythm Modalities & 18-section component-by-component grid directory.
- [04-COMPONENTS-SPECIFICATION.md](./04-COMPONENTS-SPECIFICATION.md): Production-ready code recipes for buttons, cards, image frames, and metric boxes.
- [05-CONTENT-ZERO-LOSS-POLICY.md](./05-CONTENT-ZERO-LOSS-POLICY.md): Non-negotiable substantive copy preservation vs. UI decluttering rules.
- [06-COMPONENT-EDITING-PLAYBOOK.md](./06-COMPONENT-EDITING-PLAYBOOK.md): 7-step developer guide for refactoring files safely.
- [07-FRAMER-MOTION-AND-INTERACTION-SPEC.md](./07-FRAMER-MOTION-AND-INTERACTION-SPEC.md): Framer Motion high-value recipes (sliding tabs, spotlight hover, staggered reveals).
- [08-FULL-WEBSITE-UI-UPDATE-SEQUENCE.md](./08-FULL-WEBSITE-UI-UPDATE-SEQUENCE.md): Master route-by-route and component-by-component execution tracker.
- [09-SERVICE-PAGE-MASTER-BLUEPRINT-SPEC.md](./09-SERVICE-PAGE-MASTER-BLUEPRINT-SPEC.md): Canonical Service Page Master Blueprint modeled 100% on `/services/website-design-development` with copy-paste blueprints for all 12 sections.

---

## 3. Quick Copy-Paste Component Patterns

### 3.1 Standard Section Wrapper
```jsx
<section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white sm:px-6 md:px-8 md:py-24 lg:py-28 overflow-hidden">
  <div className="mx-auto max-w-7xl">
    {/* Content */}
  </div>
</section>
```

### 3.2 Standard H2 Display (Natural Case, Solid White + Italic Purple)
```jsx
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
  Strategic heading with{' '}
  <span className="italic text-frame-accent">
    emphasis word.
  </span>
</h2>
```

### 3.3 Standard Section Button
```jsx
<SectionButton href="/services">Explore all services</SectionButton>
```

### 3.4 Pure Image Aspect Container
```jsx
<div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-zinc-950">
  <img
    src={imageSrc}
    alt={imageAlt}
    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
    loading="lazy"
  />
</div>
```

### 3.5 Card Footer Full-Width Pill Action
```jsx
<div className="border-t border-white/[0.08] p-6 pt-4 sm:p-7 sm:pt-4">
  <Link
    href="/projects"
    className="group inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98]"
  >
    <span>View project</span>
    <span aria-hidden="true" className="ml-2 text-base transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
  </Link>
</div>
```
