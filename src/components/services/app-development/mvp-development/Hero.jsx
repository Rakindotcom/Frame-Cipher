'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import MvpHeroVisual from './MvpHeroVisual'

const kineticMetrics = [
  {
    num: '01',
    label: 'Hypothesis Validation',
    detail: 'Focused strictly on testing the primary value proposition before committing full capital',
  },
  {
    num: '02',
    label: 'Rapid Prototyping',
    detail: 'Clickable wireframes and functional flows to evaluate user experience and gather feedback early',
  },
  {
    num: '03',
    label: 'Lean Engineering',
    detail: 'Essential frontend, backend, database, and APIs built with clean, scalable architecture',
  },
  {
    num: '04',
    label: 'Actionable Telemetry',
    detail: 'Measurement of user activation, core workflow completion, conversion signals, and retention',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || 'Best MVP Development Service in Bangladesh'
  const subtitle =
    service?.shortDesc ||
    'The most expensive mistake in software isn\'t a bug, it\'s spending six months building the wrong thing. Framecipher builds MVPs for early-stage founders, product teams inside existing businesses, and organizations validating a new idea before committing real budget, in Dhaka and across the US, UK, Australia, Canada, and UAE. Whether you\'re launching a startup or testing a new feature within a company that already exists, an MVP answers the same question: does this idea actually have demand before you build the whole thing.'

  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* HERO SECTION (§5.1 Clearance Standard: pt-28 md:pt-32) */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-4 pt-28 pb-16 sm:px-6 md:px-8 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Editorial Breadcrumbs */}
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
            <Link href="/services/app-development" className="shrink-0 whitespace-nowrap transition-colors hover:text-white">
              App Development
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
            <span className="shrink-0 whitespace-nowrap text-frame-accent">MVP Development</span>
          </nav>

          {/* Grid Layout: Left Content (6 cols), Right Visual (6 cols) */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column */}
            <div className="space-y-6">
{/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white">
                {title.includes('Bangladesh') ? (
                  <>
                    Best MVP Development{' '}
                    <span className="italic text-frame-accent">Service in Bangladesh.</span>
                  </>
                ) : (
                  title
                )}
              </h1>

              {/* Sub-headline Pill / Headline Tag */}
              <p className="font-heading text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
                Validate Your Product Idea with Real Users, Real Workflows &amp; Real Data
              </p>

              {/* Running Description */}
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl">
                {subtitle}
              </p>

              {/* Symmetrical 52px Button Pair (§5.5 Standard) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  Discuss Your MVP &rarr;
                </PosterButton>
              </div>

              {/* Trust Badge / SLA */}
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400 font-mono">
                <ShieldCheck className="h-4 w-4 text-frame-accent shrink-0" />
                <span>
                  4-8 Week Delivery &bull; Clean Scalable Architecture &bull; 100% In-House Team
                </span>
              </div>
            </div>

            {/* Right Visual Column (6 cols): Lean Roadmap & Scoping Console */}
            <div className="flex justify-center lg:justify-end">
              <MvpHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 4-METRIC ARCHITECTURAL LEDGER RIBBON (Modality 2: divide-x) */}
      <section className="border-b border-white/[0.08] bg-[#121214]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {kineticMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-6 sm:p-8 transition-colors duration-300 hover:bg-[#18181B]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl sm:text-3xl font-medium text-frame-accent">
                      {metric.num}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-frame-accent" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {metric.label}
                  </h3>
                  <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-400">
                    {metric.detail}
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
