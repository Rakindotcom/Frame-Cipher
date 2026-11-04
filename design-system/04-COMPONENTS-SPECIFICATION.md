# Frame Cipher — Components Specification & Library
> **Integrated Specification:** Synchronized with `D:\web-interface-guidelines\AGENTS.md` and user-approved production benchmarks.
> **Core Axiom:** Production-ready React/Tailwind component patterns embodying the Linear + Raycast craft layer with strict web interface engineering guidelines.

---

## 1. Action Buttons & CTA Elements

### 1.1 Primary High-Contrast Poster Button (`PosterButton`)
Used for primary hero conversions and major section CTAs ("Book a strategy call", "Let's solve it together"):
```jsx
/* PRIMARY POSTER BUTTON (White Fill High-Contrast) */
<Link
  href="/contact"
  className="group relative inline-flex min-h-[48px] h-[48px] items-center justify-center rounded-full bg-[#FAFAFA] px-7 text-[15px] font-medium leading-none text-[#09090B] transition-all duration-200 hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] touch-manipulation"
>
  <span>Book a strategy call</span>
  <span aria-hidden="true" className="ml-2 text-lg leading-none transition-transform duration-200 group-hover:translate-x-1">
    &rarr;
  </span>
</Link>
```

### 1.2 Laser Frosted Section Button (`SectionButton`)
Used for section-level navigation ("Explore all services", "Browse all case studies", "View all work", "All 10 Calculators"):
```jsx
/* SECTION BUTTON (Frosted Outline Pill) */
<Link
  href={href}
  className="group inline-flex min-h-[48px] h-[48px] items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-6 text-[14px] font-medium leading-none text-white backdrop-blur-sm transition-all duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98] shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] touch-manipulation"
>
  <span>{children}</span>
  <span aria-hidden="true" className="ml-1.5 text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0">
    &rarr;
  </span>
</Link>
```

### 1.3 Card Footer Full-Width Action Button
Used inside card footers for case studies, featured projects, and portfolio items:
```jsx
/* CARD FOOTER FULL-WIDTH PILL BUTTON */
<div className="border-t border-white/[0.08] p-6 pt-4 sm:p-7 sm:pt-4">
  <Link
    href={href}
    className="group inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-all duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98] touch-manipulation"
  >
    <span>{label}</span>
    <span aria-hidden="true" className="ml-2 text-base transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
  </Link>
</div>
```
- **Rule from `AGENTS.md`:** `min-h-[44px]` (mobile touch target ≥44px).
- **Rule from `AGENTS.md`:** Explicit `transition-all duration-200` or `transition-colors duration-200` + `transition-transform duration-200` (NEVER `transition: all`).

---

## 2. Headings & Typography Elements

### 2.1 Section H2 Display (Natural Case + Solid White + Italic Purple)
**Rule:** Natural Title/Sentence case (NO `uppercase`), solid pure white (`text-white`) with italic purple accent (`italic text-frame-accent`) on emphasis word. BANNED: Clip gradients and artificial eyebrow slash/bracketed taglines above headings.
```jsx
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
  Proof with{' '}
  <span className="italic text-frame-accent">
    pixels.
  </span>
</h2>
```

### 2.2 Kinetic Text Marquee
**Rule:** 100% solid white text separated by centered dots (`·`).
```jsx
<div className="flex shrink-0 items-center gap-8 whitespace-nowrap">
  <span className="text-white font-medium">Software that carries growth</span>
  <span className="text-zinc-500">·</span>
  <span className="text-white font-medium">Performance Marketing</span>
  <span className="text-zinc-500">·</span>
</div>
```

---

## 3. Pure Image Aspect Frames (NO Overlays / NO Fake Dashboards)

### 3.1 Strict Image Integrity Rules
- **Rule 1:** ZERO fake dashboards, fake URLs (`https://framecipher.com/...`), or window dots around real images.
- **Rule 2:** ZERO text overlays, client badges, or dark opacity scrims (`bg-black/40`) directly over images. The image must remain 100% clean and unobstructed.
- **Rule 3:** All metadata, client names, and categories belong in the card body below the image.

### 3.2 16:10 Thumbnail Aspect Frame (Case Studies & Featured Work)
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

### 3.3 4:3 Portrait Frame (Leadership & Founders)
```jsx
<div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950 border-b border-white/[0.08]">
  <Image
    src={founder.image}
    alt={founder.name}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
  />
</div>
```

---

## 4. Verified Performance Metrics Box (2x2 Grid)
Used in Case Studies and Performance sections to document verified empirical results:
```jsx
<div className="mt-6 rounded-lg border border-white/[0.08] bg-[#18181B] p-4">
  <div className="mb-2 flex items-center justify-between border-b border-white/[0.08] pb-2">
    <span className="text-[11px] text-frame-accent">
      Verified Performance
    </span>
    <span className="text-[10px] text-zinc-500 font-mono">
      Data Receipt
    </span>
  </div>
  <div className="grid grid-cols-2 gap-3 pt-1">
    {metrics.map(([val, lbl], idx) => (
      <div key={idx} className="border-l-2 border-frame-accent pl-3">
        <span className="block font-heading text-lg font-medium text-white tabular-nums">
          {val}
        </span>
        <span className="block text-[10px] text-zinc-400">
          {lbl}
        </span>
      </div>
    ))}
  </div>
</div>
```

---

## 5. Concentric Deliverable Tags & System Badges
Used for deliverables, tech stack items, and concentric metadata tags:
```jsx
/* CONCENTRIC DELIVERABLE TAG */
<span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300">
  Next.js 15
</span>

/* AUTHENTIC LIVE RADAR TELEMETRY BADGE */
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-zinc-300 backdrop-blur-md">
  <span className="relative flex h-2 w-2" aria-hidden="true">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
  </span>
  <span>Dhaka Studio · Live Set</span>
</div>
```
