'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../home/PosterButton'
import SeoHeroSearchVisual from './SeoHeroSearchVisual'

const pillars = [
  {
    num: '01',
    title: 'Technical Health',
    detail: 'Crawlability, Core Web Vitals, SSR rendering, and indexation hygiene.',
  },
  {
    num: '02',
    title: 'Search Intent & Content',
    detail: 'Mapping buyer queries to high-converting product and service pages.',
  },
  {
    num: '03',
    title: 'Authority Building',
    detail: 'Editorial PR, contextual citations, and sustainable domain trust.',
  },
  {
    num: '04',
    title: 'AI Search Optimization',
    detail: 'Answer engine optimization, structured schema, and entity clarity.',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || 'Search Engine Optimization Services in Bangladesh'
  const subtitle =
    service?.shortDesc ||
    'Rankings that support real business growth. Framecipher combines technical SEO, content strategy, on-page optimization, authority building, local and ecommerce SEO, and AI search optimization under one in-house team. We help businesses in Bangladesh and international markets turn search visibility into qualified traffic, leads, calls, and sales.'

  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-4 pt-28 pb-16 sm:px-6 md:px-8 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs (§2.3 Clearance Standard) */}
          <nav
            aria-label="Breadcrumbs"
            className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 font-mono text-[11px] sm:text-xs text-zinc-400"
          >
            <Link href="/" className="shrink-0 whitespace-nowrap transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
            <Link href="/services" className="shrink-0 whitespace-nowrap transition-colors hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
            <span className="shrink-0 whitespace-nowrap text-frame-accent">Search Engine Optimization</span>
          </nav>

          {/* Grid Layout: Left Content, Right Animated Search Console */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Core Service Pillar // In-House Engineering
                </span>
              </div>

              {/* Display H1 */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white break-normal hyphens-none">
                {title.includes('Bangladesh') ? (
                  <>
                    Search Engine Optimization{' '}
                    <span className="italic text-frame-accent">Services</span>{' '}
                    in Bangladesh
                  </>
                ) : (
                  title
                )}
              </h1>

              {/* Subtitle / Lead Paragraph */}
              <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                {subtitle}
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent" />
                  <span>One In-House Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Built for Conversion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  <span>Zero Spam Backlinks</span>
                </div>
              </div>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <PosterButton href="/contact" variant="accent" className="w-full sm:w-auto justify-center">
                  Get a Free SEO Audit
                </PosterButton>
                <PosterButton href="#offerings" variant="outline" className="w-full sm:w-auto justify-center">
                  Talk to the Framecipher SEO Team
                </PosterButton>
              </div>
            </div>

            {/* Right Column: Live Animated Search Engine Terminal (5 cols) */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <SeoHeroSearchVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Modality 2: Architectural Divided Column Band */}
      <section className="border-b border-white/[0.08] bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group relative flex flex-col justify-between p-6 transition-colors duration-300 hover:bg-[#121214] sm:p-8"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-500">
                      {pillar.num}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {pillar.detail}
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
