'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import SeoAuditDashboardVisual from './SeoAuditDashboardVisual'

export default function Hero({ service }) {
  const subtitle =
    service?.shortDesc ||
    'Your website may have hundreds of SEO issues, but not every issue deserves the same priority. Framecipher provides SEO audit services in Bangladesh for businesses that need to understand what is limiting their search performance and what to fix first. We combine automated analysis with manual review to identify technical, content, on-page, backlink, competitive, and search visibility issues.'

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
            <span className="shrink-0 whitespace-nowrap text-frame-accent">SEO Audit</span>
          </nav>

          {/* Grid Layout: Left Content, Right Interactive Audit Dashboard */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Diagnostic Intelligence // Evidence &amp; Priorities
                </span>
              </div>

              {/* Display H1 */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
                Best SEO{' '}
                <span className="italic text-frame-accent">Audit Service</span>{' '}
                in Bangladesh
              </h1>

              {/* Subtitle / Lead Paragraph */}
              <p className="max-w-xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                {subtitle}
              </p>

              {/* Action Plan Clarification */}
              <p className="max-w-xl text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                Instead of a raw automated tool export, you receive an empirical action plan prioritized by impact, effort, and a realistic 30/60/90-day execution roadmap.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent" />
                  <span>Manual Review + Automated Crawl</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-frame-accent" />
                  <span>Prioritized Impact vs Effort</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-frame-accent" />
                  <span>30/60/90-Day Execution Roadmap</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <PosterButton href="/contact">
                  Request an SEO Audit &rarr;
                </PosterButton>
                <PosterButton href="/services/seo" variant="outline">
                  Explore All SEO Services &rarr;
                </PosterButton>
              </div>
            </div>

            {/* Right Column (6 cols) with Interactive SEO Audit Dashboard */}
            <div className="lg:col-span-6">
              <SeoAuditDashboardVisual />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
