'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import KeywordMatrixVisual from './KeywordMatrixVisual'

export default function Hero({ service }) {
  const subtitle =
    service?.shortDesc ||
    'Find the search terms your customers actually use, and the opportunities your website can realistically compete for. Framecipher builds keyword strategies around search intent, competition, customer language, competitor gaps, and business value. We turn raw keyword data into prioritized topics, keyword clusters, and page targets your SEO and content teams can act on.'

  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-4 pt-28 pb-16 sm:px-6 md:px-8 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
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
            <Link href="/services/seo" className="shrink-0 whitespace-nowrap transition-colors hover:text-white">
              SEO
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
            <span className="shrink-0 whitespace-nowrap text-frame-accent">Keyword Research</span>
          </nav>

          {/* Grid Layout: Left Content, Right Visual */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Core SEO Foundation // Intent &amp; Opportunity
                </span>
              </div>

              {/* Display H1 */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
                Best Keyword{' '}
                <span className="italic text-frame-accent">Research Service</span>{' '}
                in Bangladesh
              </h1>

              {/* Subtitle / Lead Paragraph */}
              <p className="max-w-xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                {subtitle}
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent" />
                  <span>Search Intent Mapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-frame-accent" />
                  <span>Cannibalization Prevention</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-frame-accent" />
                  <span>Commercial Topic Silos</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <PosterButton href="/contact">
                  Request a Keyword Research Quote &rarr;
                </PosterButton>
                <PosterButton href="/services/seo" variant="outline">
                  Explore All SEO Services &rarr;
                </PosterButton>
              </div>
            </div>

            {/* Right Column (6 cols) with Interactive Keyword Matrix Visual */}
            <div className="lg:col-span-6">
              <KeywordMatrixVisual />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
