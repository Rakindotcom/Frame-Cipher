# Frame Cipher — Design Tokens, Colors & Aesthetics
> **Integrated Specification:** Synchronized with `D:\web-interface-guidelines\AGENTS.md` and user-approved production benchmarks.
> **Core Rule:** 100% adherence to defined palette, pure high-contrast typography, and concentric surface ladder. No rogue colors or uncalibrated gradients.

---

## 1. Surface Ladder & Dark Architecture

Depth is expressed through a four-step surface ladder and razor-sharp 1px hairlines:

| Token Name | Hex Code | Tailwind Token / Variable | Usage in Frame Cipher |
|---|---|---|---|
| **Canvas** | `#09090B` | `bg-frame-bg` / `bg-[#09090B]` | Deep obsidian page background canvas. |
| **Surface 1** | `#121214` | `bg-[#121214]` / `--color-frame-surface-1` | Feature cards, continuum grid cells, screenshot panels, calculator bays. |
| **Surface 2** | `#18181B` | `bg-[#18181B]` / `--color-frame-surface-2` | Hovered cards, metric boxes, selected tabs, elevated modals. |
| **Surface 3** | `#222226` | `bg-[#222226]` | Dropdown menus, flyouts, sub-navigation bars. |
| **Hairline (Soft)** | `rgba(255,255,255,0.08)` | `border-white/[0.08]` | 1px dividers, grid cell lines, card perimeters. |
| **Hairline (Strong)** | `rgba(255,255,255,0.16)` | `border-white/[0.16]` | Focused inputs, hovered card borders. |
| **Inverse Canvas** | `#FAFAFA` / `#FFFFFF` | `bg-white` / `bg-[#FAFAFA]` | Primary high-contrast CTA button background ("Book a strategy call"). |

---

## 2. Signature Brand Accents & Typography Highlights

| Token Name | Hex Code | Tailwind Equivalent | Purpose & Usage |
|---|---|---|---|
| **`frame-accent`** | `#9d72ff` / `#A855F7` | `text-frame-accent` / `bg-frame-accent` | Focal points: emphasis italic words in headings, top laser edge sheen, interactive pill accents. |
| **`frame-accent-light`** | `#C084FC` | `text-frame-accent-light` | Hover text and interactive glow states. |
| **Pure White** | `#FFFFFF` | `text-white` | Base color for all H1, H2, and H3 headings, and kinetic text marquees. |
| **`zinc-300`** | `#D4D4D8` | `text-zinc-300` | Primary editorial body text (high contrast and crisp legibility). |
| **`zinc-400`** | `#A1A1AA` | `text-zinc-400` | Secondary description text and card captions. |
| **`zinc-500`** | `#71717A` | `text-zinc-500` | Subtle metadata and index counters (`#01`). |

---

## 3. High-Contrast Typography Standards

### 3.1 Strict Heading Standard (H1, H2, & H3) — Natural Case + Solid White + Italic Purple
**Rule:** Headings MUST be rendered in **natural Title Case or Sentence Case** (NEVER `uppercase`), in **solid pure white (`text-white font-medium tracking-tight`)** with an **italic purple accent** on the emphasis word (`italic text-frame-accent`).
- **STRICTLY BANNED:** Never use `uppercase` on H1, H2, or H3 headings (all-caps slows reading speed by 15–20% on a text-heavy site).
- **STRICTLY BANNED:** Never use `bg-clip-text text-transparent bg-gradient-to-...` for heading text.
- **Line-Length Measure:** Section subheadings and introductory prose MUST be constrained to `max-w-3xl` (`60ch–70ch`) so paragraphs never stretch across all 12 columns.

```jsx
/* STANDARD H1 DISPLAY (Hero) */
<h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.94] tracking-tight text-white">
  From signal to{' '}
  <span className="italic text-frame-accent">
    scale.
  </span>
</h1>

/* STANDARD H2 DISPLAY (Sections) */
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
  Two in-house production studios in{' '}
  <span className="italic text-frame-accent">
    Dhaka.
  </span>
</h2>
```

### 3.2 Kinetic Marquee & Ticker Standard
Text animations and tickers MUST use 100% solid white text with centered dot dividers (`·`):
```jsx
<span className="text-white font-medium">Software that carries growth</span>
<span className="text-zinc-500">·</span>
```

---

## 4. Craftsmanship Rules from `web-interface-guidelines/AGENTS.md`
1. **NEVER use `transition: all`:** Explicitly declare properties (e.g. `transition-colors duration-200`, `transition-transform duration-200`).
2. **Nested Radii Hierarchy (Concentric):**
   - Outer Container: `rounded-2xl` (20px) or `rounded-xl` (16px)
   - Inner Cards: `rounded-xl` (16px) or `rounded-lg` (12px)
   - Buttons: `rounded-full` (pills)
   - Small Tags / Badges: `rounded-md` (6px) or `rounded-full` (pills)
3. **Tabular Numbers:** Every number, percentage, timestamp, metric, and price MUST use `tabular-nums`.
4. **Touch Target Size:** Minimum hit target ≥44px on mobile (`min-h-[44px]` / `h-11` or `h-12`).
5. **No Dead Zones:** Checkbox, radio, and button label share the full clickable container.
