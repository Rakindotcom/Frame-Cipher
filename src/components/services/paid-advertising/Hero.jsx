'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import PosterButton from '../../home/PosterButton'
import PaidAdsHeroVisual from './PaidAdsHeroVisual'

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
            <span className="shrink-0 text-frame-accent">Paid Advertising</span>
          </nav>

          {/* Symmetrical 50/50 Master Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300 overflow-hidden">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent whitespace-nowrap">
                  Core Service Pillar · Performance Media
                </span>
                <span className="hidden sm:inline text-zinc-600">/</span>
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-zinc-400 whitespace-nowrap">
                  Google, Meta, LinkedIn, TikTok &amp; More
                </span>
              </div>

              {/* Master Display Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white break-normal hyphens-none">
                Paid Advertising{' '}
                <span className="italic text-frame-accent">Services in Bangladesh.</span>
              </h1>

              {/* Running Description */}
              <div className="space-y-3 text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl">
                <p>
                  Ad spend should be accountable. Framecipher provides paid advertising services across Google, Meta, LinkedIn, TikTok, Microsoft, Amazon, and other relevant platforms, with campaigns built around leads, sales, bookings, and measurable business outcomes.
                </p>
                <p>
                  We do not treat clicks, impressions, or reach as the final result. We connect campaign strategy with creative, landing pages, conversion tracking, and ongoing optimization so you can see where your budget is going and what it is producing, for businesses in Bangladesh and international markets including the US, UK, Australia, Canada, and UAE.
                </p>
              </div>

              {/* Symmetrical 52px Button Pair (§4 Standard) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent">
                  Get Your Free Ad Account Audit &rarr;
                </PosterButton>
                <PosterButton href="/tools/ads-calculator" variant="outline">
                  Calculate Media Spend &amp; ROAS &rarr;
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
                  <span>Built for Conversions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-frame-accent" />
                  <span>Zero Wasted Ad Spend</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Floating Platform Icons Visual (6 cols) */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <PaidAdsHeroVisual />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
