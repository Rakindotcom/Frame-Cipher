'use client'

import React from 'react'
import Link from 'next/link'
import { Check, ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'

const customFitReasons = [
  'Unique business workflows',
  'Custom data structures',
  'Advanced integrations',
  'Authentication and user roles',
  'Customer dashboards or portals',
  'SaaS functionality',
  'Headless ecommerce',
  'Application-specific performance requirements',
  'Custom APIs and backend logic',
  'A product that will continue evolving over time',
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Top Header & Breadcrumbs Clearance */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb Navigation Header Row */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              <Link href="/" className="shrink-0 hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <Link href="/services" className="shrink-0 hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <Link href="/services/website-design-development" className="shrink-0 hover:text-white transition-colors">
                Website Design &amp; Development
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <span className="text-frame-accent shrink-0">Custom &amp; Next.js</span>
            </nav>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Custom Next.js &middot; Dhaka &amp; Global</span>
            </div>
          </div>

          {/* Master 12-Column Grid (7 + 5 side-by-side on desktop) */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column (7-col) */}
            <div className="space-y-6 lg:col-span-6 xl:col-span-6">
              {/* Eyebrow & Meta */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                    [ 10 / CUSTOM ENGINEERING ]
                  </span>
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  React &amp; Next.js / Sub-Second Performance
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Best Custom / Next.js Development{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                Framecipher builds custom websites and web applications on Next.js/React.js for businesses with performance, integration, or scalability needs that pre-built platforms genuinely can&apos;t accommodate. Whether you&apos;re a growing company in Dhaka or a scaling business across the US, UK, Australia, Canada, or UAE, our custom development services deliver a platform built specifically around what your product actually needs, not what a template allows.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  View Pricing &amp; Plans
                </PosterButton>
              </div>
            </div>

            {/* Right Column (5-col) - Interactive 3D Canvas */}
            <div className="relative flex justify-center lg:col-span-6 xl:col-span-6 w-full">
              <div className="relative w-full max-w-[500px]">
                <Ambient3DCanvas
                  mode="constellation"
                  className="w-full aspect-square max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-METRIC ARCHITECTURAL STATUS LEDGER */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 md:p-8 font-mono text-xs">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090B]">
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Core Engine</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Next.js 15 &amp; React</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-medium">App Router &amp; Actions</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Architecture</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Full-Stack TS</p>
              <p className="mt-1 text-[11px] text-frame-accent font-medium">End-to-End Type Safety</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Speed Standard</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Sub-Second Load</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-medium">Edge SSR Delivery</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Ownership</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Zero Lock-In</p>
              <p className="mt-1 text-[11px] text-frame-accent font-medium">100% Full Source IP</p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE BANNER / WHY CHOOSE CUSTOM DEVELOPMENT */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
                Why Choose Custom /{' '}
                <span className="italic text-frame-accent">Next.js Development?</span>
              </h2>

              {/* 4-Pill Continuum */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium pt-2">
                <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">
                  Unique Requirements
                </span>
                <span className="text-zinc-600">&rarr;</span>
                <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">
                  Full-Stack Architecture
                </span>
                <span className="text-zinc-600">&rarr;</span>
                <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">
                  Integrations &amp; Data
                </span>
                <span className="text-zinc-600">&rarr;</span>
                <span className="rounded-full border border-frame-accent/40 bg-frame-accent/10 px-4 py-2 text-frame-accent">
                  Scalable Product
                </span>
              </div>

              {/* 3-Row Delivery Continuum */}
              <div className="space-y-4 pt-2">
                <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.14]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    Who We Build For
                  </span>
                  <p className="mt-2 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    Growing companies and products with performance, integration, or scalability needs that pre-built platforms genuinely can&apos;t accommodate.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.14]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    What We Build
                  </span>
                  <p className="mt-2 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    Custom websites, web applications, SaaS products, headless ecommerce, dashboards, and portals on Next.js/React with full source ownership.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.14]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    How We Deliver
                  </span>
                  <p className="mt-2 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    Every project starts with a platform-fit assessment, then frontend, backend, data, and performance are built around what your product needs.
                  </p>
                </div>
              </div>

              {/* Honest Assessment Banner */}
              <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:flex-row sm:items-center sm:p-8">
                <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-200 max-w-xl">
                  Not sure whether you need custom development or a pre-built platform? We&apos;ll tell you honestly which one makes sense.
                </p>
                <PosterButton href="/contact" variant="accent" className="shrink-0">
                  Get an Honest Assessment
                </PosterButton>
              </div>
            </div>

            {/* Right 5 Columns: Reasons Checklist Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium text-white">
                  Custom development can make sense when you need:
                </h3>
                <div className="mt-6 space-y-3">
                  {customFitReasons.map((reason, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-white/[0.12]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span className="text-xs sm:text-sm text-zinc-200">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
