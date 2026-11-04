# Frame Cipher — Framer Motion & Micro-Interaction Specification

> **Aesthetic Benchmark:** Linear.app + Raycast Fluid Physics  
> **Runtime Environment:** Next.js 16 (App Router) + React 19  
> **Status:** Motion & Animation Architecture Specification

---

## 1. Deep Inspection & Runtime Analysis

### 1.1 Current Codebase State
- **React Version:** `^19.2.0` (React 19)
- **Next.js Version:** `^16.0.0` (App Router with React Server Components)
- **Current Motion Architecture:** Currently, animations (marquees, card hover transitions, glowing radar pings) are implemented with high-performance CSS and Tailwind v4 (`src/index.css`).
- **Compatibility Note:** In React 19, Framer Motion v12+ (`motion` or `framer-motion@^12.0.0`) is fully compatible. Because Next.js App Router defaults to Server Components, any component using Framer Motion **MUST be a Client Component (`'use client'`)**.

---

## 2. Where Framer Motion CAN & SHOULD Be Used (The Sweet Spots)

Framer Motion brings the signature Linear / Raycast tactile fluid feel to five specific areas:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   FRAMER MOTION PRIORITY USE CASES                     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   1. SHARED LAYOUT TABS (layoutId)                                     │
│      Pill gliding smoothly between active filter tabs / service tiers  │
│                                                                        │
│   2. SPOTLIGHT CURSOR FOLLOWER ON CARDS                                │
│      Radial light tracking mouse coordinates across card grids         │
│                                                                        │
│   3. SCROLL-TRIGGERED STAGGERED REVEALS (whileInView)                  │
│      Process steps, cards, and proof points fading in gracefully       │
│                                                                        │
│   4. ZERO-JITTER EXPANDABLE ACCORDIONS & MODALS (AnimatePresence)      │
│      Natural spring physics for FAQs and drawer overlays               │
│                                                                        │
│   5. TELEMETRY NUMBER SPRINGS (useSpring)                              │
│      Mathematical statistics counting up with realistic deceleration   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. High-Value Implementation Recipes

### 3.1 Shared Layout Sliding Tabs (`layoutId`)
Linear's signature navigation highlight that glides behind the active item:
```tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const tabs = ['All Work', 'Web Platforms', 'SEO & Growth', 'Cinematic Media']

export function FilterTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#121214] p-1 backdrop-blur-md">
      {tabs.map((tab) => {
        const isActive = activeTab === tab
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-white transition-colors"
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        )
      })}
    </div>
  )
}
```

### 3.2 Raycast Spotlight Grid (Cursor Follower on Surface Cards)
Tracks the user's cursor across a grid of `#121214` cards, illuminating the 1px border under the mouse:
```tsx
'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

export function SpotlightCard({ children, className = '' }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 ${className}`}
    >
      {/* Dynamic Radial Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Top Hairline Sheen */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-frame-accent/40 to-transparent" />
      
      <div className="relative z-10">{children}</div>
    </div>
  )
}
```

### 3.3 Staggered Scroll Reveal (`whileInView`)
Reveals process cards with physics rather than harsh instant pops:
```tsx
'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // Linear's signature cubic bezier
    },
  },
}

export function StaggeredCardGrid({ children }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {children}
    </motion.div>
  )
}
```

---

## 4. What NEVER to Use Framer Motion For & Strict Rules from `web-interface-guidelines/AGENTS.md`

| Feature | Forbidden Implementation | Mandatory Solution | Why |
|---|---|---|---|
| **Infinite Marquees & Tickers** | `motion.div animate={{ x: [-1000, 0] }}` | Pure CSS `@keyframes` with `transform: translate3d` | Framer Motion tickers run on JS main thread; CSS runs on GPU. Must include hover pause. |
| **All-Property Transitions** | `transition: all` or `transition-all` | `transition-colors duration-200`, `transition-transform duration-200` | `transition: all` triggers reflows and degrades frame rates. |
| **Layout Property Animation** | Animating `top`, `left`, `width`, `height` | Animate compositor-friendly props (`transform`, `opacity`) only | Layout property animations cause browser recalculations on every frame. |
| **Static Card Hover Borders** | `<motion.div whileHover={{ scale: 1.02 }}>` on every small div | Tailwind `transition-colors duration-200 hover:border-white/[0.16]` | Zero JS bundle cost; immediate native browser acceleration. |
| **Simple Fade-In Headers** | Putting Framer Motion on every single H2/paragraph across 50 pages | Native SSR rendering with CSS utility classes | Prevents Cumulative Layout Shift (CLS) and preserves pure SEO text hydration. |

---

## 5. Performance & Accessibility (WCAG & Prefers-Reduced-Motion)

Whenever implementing Framer Motion or CSS transitions:
1. **Always Respect Reduced Motion:**
   Use the `useReducedMotion()` hook or CSS `motion-reduce:transition-none`:
   ```tsx
   import { useReducedMotion } from 'framer-motion'

   const shouldReduceMotion = useReducedMotion()
   const initial = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
   ```
2. **Interruptible Motion:**
   All user-initiated transitions must be interruptible and input-driven; autoplay is reserved for subtle, non-essential loops that pause on `:hover` or `:focus-within`.
3. **Dynamic Imports for Heavy Modals:**
   Load animation-heavy modals or 3D visualizers using `next/dynamic` with `ssr: false` to keep the initial page bundle lean.

