'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../home/PosterButton'
import { AutoLinks } from '../../seo/AutoLinks'
import { Ambient3DCanvas } from '../../ui/ambient-3d-canvas'

const ARCHITECTURE_MODES = [
  { id: 'terrain', label: 'Next.js' },
  { id: 'corporate-matrix', label: 'Business' },
  { id: 'commerce-loop', label: 'eCom' },
  { id: 'modular-grid', label: 'WordPress' },
  { id: 'speed-stream', label: 'Shopify' },
]

export default function Hero() {
  const [activeMode, setActiveMode] = useState('terrain')

  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Background Ambient Glow & Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/[0.07] blur-[140px]" />
        <div className="fc-grid-pattern absolute inset-0 opacity-15" />
      </div>

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
              <span className="text-frame-accent shrink-0">Website Design &amp; Development</span>
            </nav>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Full-Stack Engineering · Dhaka &amp; Global</span>
            </div>
          </div>

          {/* Master Display Headline & 3D Interactive Architecture Matrix (Strict 7+5=12 columns: Always Side-by-Side on Desktop) */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Master Display Headline & Intro (7 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                <span className="inline-block whitespace-nowrap">Website Design</span>{' '}
                <span className="inline-block whitespace-nowrap">&amp; Development</span>{' '}
                <span className="italic text-frame-accent inline-block">Services in Bangladesh.</span>
              </h1>

              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-3xl">
                Custom websites that load fast, look professional, and turn visitors into customers built by one in-house team for businesses across Bangladesh and worldwide. Get a free quote and see what we&apos;d build for you.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <PosterButton href="/contact" variant="accent">
                  Get a Free Website Quote
                </PosterButton>
                <PosterButton href="#sub-services" variant="outline">
                  Explore Services (12)
                </PosterButton>
              </div>

              {/* Technical Trust Meta Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500">
                <span className="h-1 w-1 rounded-full bg-frame-accent" />
                <span>Zero bloated page builders</span>
                <span className="text-zinc-700">|</span>
                <span>Sub-second edge caching</span>
                <span className="text-zinc-700">|</span>
                <span>Full source code ownership</span>
              </div>
            </div>

            {/* Right Column: 3D Ambient Visual (Strict 5 cols: Always on the Side) */}
            <div className="flex justify-center lg:col-span-6 w-full mt-8 lg:mt-0">
              <div className="w-full max-w-full sm:max-w-[540px] space-y-3">
                {/* Single-row Segmented Platform Control (Fits 100% on one line, never wraps, never breaks down) */}
                <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#121214] p-1 font-mono w-full gap-1 select-none overflow-x-auto scrollbar-none">
                  {ARCHITECTURE_MODES.map((item) => {
                    const isActive = activeMode === item.id
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveMode(item.id)}
                        className={`flex-1 rounded-md py-1.5 px-2 text-center uppercase tracking-wide transition-colors duration-200 cursor-pointer select-none whitespace-nowrap text-[10px] sm:text-[11px] ${
                          isActive
                            ? 'bg-frame-accent/10 text-frame-accent font-medium shadow-sm border border-frame-accent/40'
                            : 'text-zinc-400 hover:text-white border border-transparent'
                        }`}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                </div>

                {/* 3D Code Animation Canvas */}
                <Ambient3DCanvas mode={activeMode} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Callout Banner (Architectural Modality 1 & 3) */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4 mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Website Design &amp; Development for{' '}
              <span className="italic text-frame-accent">Growing Businesses.</span>
            </h2>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              A website that loads slowly, looks outdated, or doesn&apos;t work properly on mobile costs your customers before they even see what you offer. Framecipher builds business websites, eCommerce stores, and custom web applications for SMEs, startups in Bangladesh and international clients across the US, UK, Australia, and Canada handled by one in-house team from design through launch. Not sure whether you need a new build or a redesign? Talk to us and we&apos;ll tell you honestly which one fits your situation.
            </p>
          </div>

          {/* Workflow Pipeline Band */}
          <div className="mb-12 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-300">
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Strategy</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">UI/UX Design</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Frontend &amp; CMS</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Core Web Vitals</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-frame-accent/30 bg-[#18181B] px-4 py-2 text-frame-accent">Conversion Growth</span>
          </div>

          {/* Modality 2 Architectural Divided Band (3-Column Continuum) */}
          <div className="grid grid-cols-1 border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/[0.08] md:grid-cols-3 mb-10">
            <div className="p-7 sm:p-8 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                Who We Build For
              </span>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                SMEs, startups, and established brands across Bangladesh and international markets.
              </p>
            </div>
            <div className="p-7 sm:p-8 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                What We Build
              </span>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                <AutoLinks currentPath="/services/website-design-development" allowed={["/services/website-design-development/landing-pages"]}>
                  Business websites, eCommerce stores, landing pages, and custom web applications.
                </AutoLinks>
              </p>
            </div>
            <div className="p-7 sm:p-8 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                How We Deliver
              </span>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                One in-house team across design, development, and launch followed by ongoing maintenance.
              </p>
            </div>
          </div>

          {/* Honest Assessment Callout Box */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-2xl">
              Not sure whether you need a new build or a redesign? We&apos;ll tell you honestly which one fits your situation.
            </p>
            <PosterButton href="/contact" variant="accent" className="shrink-0">
              Get an Honest Assessment
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
