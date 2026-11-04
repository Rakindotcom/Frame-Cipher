'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import LinkBuildingVisual from './LinkBuildingVisual'

export default function Hero({ service }) {
  const subtitle =
    service?.shortDesc ||
    'Strong search visibility does not come from on-page optimization alone. External links, brand mentions, and publisher relationships contribute to how a website is discovered and evaluated. Framecipher provides off-page SEO and link building built around relevance, editorial quality, and manual outreach across Bangladesh, the US, UK, Australia, Canada, and UAE.'

  const quote =
    service?.quote ||
    "The links that actually help a site are the ones that would exist even if Google didn't. A link earned because the content deserved it holds up. A link bought because a tool made it easy usually doesn't."

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
            <span className="shrink-0 whitespace-nowrap text-frame-accent">Off-Page SEO &amp; Link Building</span>
          </nav>

          {/* Grid Layout: Left Content, Right Animated Visual */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Core SEO Discipline // Authority &amp; Editorial Outreach
                </span>
              </div>

              {/* Display H1 */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white break-normal hyphens-none">
                Best Off-Page SEO &amp;{' '}
                <span className="italic text-frame-accent">Link Building Service</span>{' '}
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
                  <span>100% In-House Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-frame-accent" />
                  <span>Manual Outreach Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-frame-accent" />
                  <span>Zero Link Network Risk</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <PosterButton href="/contact">
                  Get Free Consultation &rarr;
                </PosterButton>
                <PosterButton href="/services/seo" variant="outline">
                  Explore All SEO Services &rarr;
                </PosterButton>
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <LinkBuildingVisual />
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE BANNER */}
      {quote && (
        <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <blockquote className="font-heading text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-tight text-white leading-relaxed">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <p className="mt-3 font-mono text-xs text-frame-accent uppercase tracking-widest">
              Framecipher Editorial &amp; Authority Standards
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
