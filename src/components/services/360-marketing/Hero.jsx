'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import PosterButton from '../../home/PosterButton'
import ThreeSixtyHeroVisual from './ThreeSixtyHeroVisual'

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Fixed Nav Clearance & Hero Container */}
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
            <Link href="/services" className="shrink-0 transition-colors hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <span className="shrink-0 text-frame-accent">360 Marketing</span>
          </nav>

          {/* Symmetrical 50/50 Master Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300 overflow-hidden">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent whitespace-nowrap">
                  Flagship Growth Operating System
                </span>
                <span className="hidden sm:inline text-zinc-600">/</span>
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-zinc-400 whitespace-nowrap">
                  Strategy, Media, Ads, SEO &amp; Web
                </span>
              </div>

              {/* Master Display Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white break-normal hyphens-none">
                360 Marketing Agency{' '}
                <span className="italic text-frame-accent">in Bangladesh.</span>
              </h1>

              {/* Running Description */}
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl">
                Growth breaks down when marketing is split between multiple disconnected vendors. Frame Cipher unifies brand positioning, commercial video production, paid performance advertising, technical and local SEO, high-converting web architecture, and lifecycle CRM into one accountable marketing operating system. We build, manage, and optimize every stage of the customer journey for ambitious brands in Bangladesh and global markets including the UK, UAE, USA, and Canada.
              </p>

              {/* Symmetrical 52px Button Pair (§4 Standard) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent">
                  Request a 360 Growth Audit
                </PosterButton>
                <PosterButton href="#pillars" variant="outline">
                  Explore the 6 Growth Pillars
                </PosterButton>
              </div>

              {/* Technical Trust Meta Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent" />
                  <span>One In-House Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-frame-accent" />
                  <span>6 Connected Engines</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-frame-accent" />
                  <span>Full-Funnel Accountability</span>
                </div>
              </div>
            </div>

            {/* Right Column: 360° Orbiting Growth Flywheel Visual (6 cols) */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <ThreeSixtyHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Value Proof Strip (Modality 2: Divided Column Band) */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          <div className="p-6 md:p-8 space-y-2 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
              6 in 1
            </p>
            <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
              Integrated Growth Disciplines Under One Roof
            </p>
          </div>
          <div className="p-6 md:p-8 space-y-2 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
              4.8x
            </p>
            <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
              Average ROAS Across Performance Campaigns
            </p>
          </div>
          <div className="p-6 md:p-8 space-y-2 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
              1M+
            </p>
            <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
              Organic Video Views Generated per Campaign
            </p>
          </div>
          <div className="p-6 md:p-8 space-y-2 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
              0%
            </p>
            <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
              Vendor Finger-Pointing &amp; Data Silos
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
