'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'

const businessNeeds = [
  {
    title: 'Easier User Journeys',
    description: 'Clear navigation and structured user flows help people understand what to do next without unnecessary decisions.',
  },
  {
    title: 'Fewer Friction Points',
    description: 'Confusing forms, unclear actions, difficult navigation, and complicated checkout flows can cause users to leave without reporting the problem.',
  },
  {
    title: 'Better Mobile Usability',
    description: 'A desktop layout cannot simply be reduced in size and expected to work equally well on mobile. Content hierarchy, navigation, spacing, and interaction often need to change.',
  },
  {
    title: 'Lower Redesign Risk',
    description: 'Validating structure before development makes major usability issues easier to identify and resolve before they become expensive changes.',
  },
  {
    title: 'Stronger Product Scalability',
    description: 'Reusable components, consistent patterns, and a clear design system make future features easier to design and maintain.',
  },
  {
    title: 'Better Design-to-Development Alignment',
    description: 'A well-structured design gives developers clearer guidance about layouts, interactions, responsive behavior, and interface states.',
  },
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-4 pt-28 pb-20 sm:px-6 md:px-8 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs (§2.3 Clearance Standard) */}
          <nav
            aria-label="Breadcrumbs"
            className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 font-mono text-[11px] sm:text-xs text-zinc-400"
          >
            <Link href="/" className="shrink-0 transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <Link href="/services" className="shrink-0 transition-colors hover:text-white"
            >
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <Link href="/services/website-design-development" className="shrink-0 transition-colors hover:text-white"
            >
              Website Design &amp; Development
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <span className="shrink-0 text-frame-accent">UI/UX Design</span>
          </nav>

          {/* Grid Layout: Left Content, Right 3D Visual */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Badge (Non-breaking on Mobile) */}
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300 overflow-hidden">
  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent whitespace-nowrap">
                  Focused Service · UI/UX Design
                </span>
                <span className="hidden sm:inline text-zinc-600">/</span>
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-zinc-400 whitespace-nowrap">
                  Figma Wireframes · User-Centered UX
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Best UI/UX Design{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              {/* Running Description */}
              <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-zinc-300 max-w-2xl">
                Framecipher designs user experiences and interfaces for business websites, ecommerce stores, mobile apps, SaaS products, web applications, and digital products. We start with user flows, structure, and usability before visual design, so problems can be identified before development begins.
              </p>

              {/* Symmetrical 52px Button Pair (§4 Standard) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  View Pricing &amp; Plans
                </PosterButton>
              </div>

              {/* Trust Badge / SLA */}
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-frame-accent shrink-0" />
                <span>
                  Interactive Figma Prototypes &bull; WCAG AA Accessibility &bull; Developer-Ready Handoff
                </span>
              </div>
            </div>

            {/* Right Visual Column (5 cols) */}
            <div className="lg:col-span-6 relative flex items-center justify-center w-full">
              <div className="relative w-full max-w-[540px] aspect-square rounded-3xl border border-white/[0.08] bg-[#121214] p-4 overflow-hidden shadow-2xl">
                <Ambient3DCanvas
                  mode="fluid-polyhedron"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATUS LEDGER / METRIC CARDS */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-8 md:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#121214] p-5 md:p-8 font-mono text-xs">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090B]">
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Strategy</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Flow First</p>
              <p className="mt-1 text-[11px] text-emerald-400">User Journey Mapping</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Architecture</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Validated IA</p>
              <p className="mt-1 text-[11px] text-frame-accent">Interactive Prototypes</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Design Systems</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Atomic UI</p>
              <p className="mt-1 text-[11px] text-emerald-400">Tokens &amp; Component Lib</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Handoff</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Dev Ready</p>
              <p className="mt-1 text-[11px] text-frame-accent">Organized Figma Tokens</p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ASSESSMENT: WHY YOUR BUSINESS NEEDS REAL UI/UX DESIGN */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Left-Aligned Header Block */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why Your Business Needs{' '}
              <span className="italic text-frame-accent">Real UI/UX Design.</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              UI/UX design is more than making a website or application look modern. It affects how easily users understand the product, complete tasks, and move through important journeys.
            </p>
          </div>

          {/* User Flow Pills Sequence */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-white">
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">User Flows</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">Structure &amp; Usability</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">Visual Design</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">Design System</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-frame-accent/40 bg-frame-accent/10 px-3.5 py-2 text-frame-accent font-medium">Dev-Ready Handoff</span>
          </div>

          {/* 3 Approach Cards */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Who We Design For
              </span>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Business websites, ecommerce stores, mobile apps, SaaS products, and web applications that depend on clear user journeys.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                What We Design
              </span>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                User flows, information architecture, wireframes, interactive prototypes, UI design, and reusable design systems in Figma.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                How We Work
              </span>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                We start with flows, structure, and usability before visual design, so problems surface before development, not after launch.
              </p>
            </div>
          </div>

          {/* Assessment Callout */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-2xl">
              Not sure whether your project needs full UI/UX design or a lighter approach? We&apos;ll tell you honestly what will help.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Get an Honest Assessment
            </PosterButton>
          </div>

          {/* 6 Benefit Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessNeeds.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.14]"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                    Benefit 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
