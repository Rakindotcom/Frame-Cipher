# Frame Cipher — Official Design System Documentation

Welcome to the **Frame Cipher Design System**. This directory houses the complete, authoritative UI/UX guidelines, design philosophy, color tokens, section-by-section grid architectures, component specifications, and developer playbooks for the Frame Cipher web platform.

```
D:\Frame-Cipher\design-system\
├── README.md                                <- Directory Index & Overview (This file)
├── MASTER-DESIGN-PROMPT.md                  <- Single Unified Master Prompt for AI & Developers
├── 00-HOME-PAGE-DESIGN-AUDIT-AND-SYSTEM-ALIGNMENT.md <- Definitive Home Page Audit & Master Primitives
├── 01-DESIGN-ANALYSIS-AND-PHILOSOPHY.md     <- Deep Brand DNA, User Aesthetic Truth & Linear Craft
├── 02-TOKENS-AND-COLORS.md                  <- Colors, Solid White Typography, Accents & Surfaces
├── 03-LAYOUT-AND-GRIDS.md                   <- 22-Section Architectural Layout & Grid Directory
├── 04-COMPONENTS-SPECIFICATION.md           <- Ready-to-use Component Recipes (Buttons, Images, Cards)
├── 05-CONTENT-ZERO-LOSS-POLICY.md           <- Absolute Non-Negotiable Content Preservation Law
├── 06-COMPONENT-EDITING-PLAYBOOK.md         <- Step-by-Step Component Refactoring Guide
├── 07-FRAMER-MOTION-AND-INTERACTION-SPEC.md <- Framer Motion & Micro-Interaction Specification
├── 08-FULL-WEBSITE-UI-UPDATE-SEQUENCE.md    <- Step-by-Step Route & Component Update Roadmap
└── 09-SERVICE-PAGE-MASTER-BLUEPRINT-SPEC.md <- Canonical Service Page Standard (Website Dev Benchmark)
```

---

## Quick Navigation

| Document | Description |
|---|---|
| [**MASTER-DESIGN-PROMPT.md**](./MASTER-DESIGN-PROMPT.md) | **The primary prompt** to supply to an AI coding assistant or use during development. |
| [**03-LAYOUT-AND-GRIDS.md**](./03-LAYOUT-AND-GRIDS.md) | **22-Section Grid Directory:** Complete section-by-section and component-by-component layout specs for 100% site-wide consistency. |
| [**04-COMPONENTS-SPECIFICATION.md**](./04-COMPONENTS-SPECIFICATION.md) | Production recipes for `PosterButton`, `SectionButton`, full-width card pills, pure 16:10 / 4:3 image frames, and metric boxes. |
| [**01-DESIGN-ANALYSIS-AND-PHILOSOPHY.md**](./01-DESIGN-ANALYSIS-AND-PHILOSOPHY.md) | Core principles, user taste benchmarks, and brand DNA. |
| [**02-TOKENS-AND-COLORS.md**](./02-TOKENS-AND-COLORS.md) | Exact hex codes (`#09090B`, `#121214`, `#18181B`, `#9d72ff`), contrast standards, and solid white typography rules. |
| [**05-CONTENT-ZERO-LOSS-POLICY.md**](./05-CONTENT-ZERO-LOSS-POLICY.md) | Strict rules ensuring no copy, numbers, links, or deliverables are ever altered or removed. |
| [**06-COMPONENT-EDITING-PLAYBOOK.md**](./06-COMPONENT-EDITING-PLAYBOOK.md) | 6-step practical workflow for safely updating any component across the site. |
| [**07-FRAMER-MOTION-AND-INTERACTION-SPEC.md**](./07-FRAMER-MOTION-AND-INTERACTION-SPEC.md) | Where and how to use Framer Motion vs pure CSS. |
| [**08-FULL-WEBSITE-UI-UPDATE-SEQUENCE.md**](./08-FULL-WEBSITE-UI-UPDATE-SEQUENCE.md) | Complete URL route and component priority update roadmap. |
| [**09-SERVICE-PAGE-MASTER-BLUEPRINT-SPEC.md**](./09-SERVICE-PAGE-MASTER-BLUEPRINT-SPEC.md) | **Canonical Service Page Master Blueprint:** Modeled 100% on `/services/website-design-development` with code blueprints for all 12 sections. |

---

## Core Brand Tokens & Non-Negotiable Directives

- **Background Canvas:** `#09090B` (Deep Obsidian)
- **Surface Layer 1:** `#121214` (Deep Charcoal Card Surface)
- **Surface Layer 2:** `#18181B` (Metric Strips / Hover State)
- **Signature Accent:** `#9d72ff` / `#A855F7` (`text-frame-accent` - Focal emphasis words & laser hairlines)
- **Headings (H1, H2, H3):** Natural Title/Sentence case (NEVER `uppercase`), 100% Solid Pure White (`text-white font-medium tracking-tight`) + Italic Purple Accent (`italic text-frame-accent`) on emphasis word. BANNED: Clip gradients.
- **Text-Heavy UI/UX Management Engine:** Alternate between the **5 Visual Rhythm Modalities** (`03-LAYOUT-AND-GRIDS.md`) so no more than two 3-column text card grids stack back-to-back. Constrain intro copy to `max-w-3xl`, convert comma-separated deliverable lists into concentric monospace chips, and use progressive disclosure for FAQs.
- **Marquees:** Solid white text (`text-white font-medium`) with subtle centered dot dividers (`·`).
- **Taglines Banned:** NEVER place artificial slash or bracketed category pills (`The offer / Architecture`, `[ 01 / PATHWAYS ]`, etc.) above headings.
- **Pure Imagery:** ZERO fake browser dashboards (no fake URLs like `https://framecipher.com/work/...`). ZERO text overlays on top of images. ZERO dark opacity scrims (`bg-black/40`).
- **Standardized Buttons:** `rounded-full` high-contrast interactive pills (`PosterButton`, `SectionButton`, and card footer full-width pill `min-h-[44px]`). BANNED: Raw plain text links where buttons belong.
- **Hairlines & Concentric Radii:** Single-pixel `border-white/[0.08]` with top laser hairline highlight (`before:via-frame-accent/40`). Container `rounded-2xl` / `rounded-xl` -> Card `rounded-xl` / `rounded-lg` -> Button `rounded-full`.
- **Global Max-Width:** Strictly `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (Zero horizontal overflow).
- **Explicit Transitions:** ALWAYS explicitly specify target properties (NEVER `transition: all`).
