'use client'

import React from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  ShieldCheck,
  Target,
  Workflow,
  Cpu,
  LineChart
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import MvpHeroVisual from './MvpHeroVisual'

const kineticMetrics = [
  {
    icon: Target,
    num: '01',
    label: 'Hypothesis Validation',
    detail: 'Focused strictly on testing the primary value proposition before committing full capital',
  },
  {
    icon: Workflow,
    num: '02',
    label: 'Rapid Prototyping',
    detail: 'Clickable wireframes and functional flows to evaluate user experience and gather feedback early',
  },
  {
    icon: Cpu,
    num: '03',
    label: 'Lean Engineering',
    detail: 'Essential frontend, backend, database, and APIs built with clean, scalable architecture',
  },
  {
    icon: LineChart,
    num: '04',
    label: 'Actionable Telemetry',
    detail: 'Measurement of user activation, core workflow completion, conversion signals, and retention',
  },
]

export default function Hero({ service }) {
  const subtitle =
    service?.shortDesc ||
    "The most expensive mistake in software isn't a bug, it's spending six months building the wrong thing. Framecipher builds MVPs for early-stage founders, product teams inside existing businesses, and organizations validating a new idea before committing real budget, in Dhaka and across the US, UK, Australia, Canada, and UAE. Whether you're launching a startup or testing a new feature within a company that already exists, an MVP answers the same question: does this idea actually have demand before you build the whole thing."

  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/10 px-4 pt-28 pb-16 sm:px-6 md:px-8 md:pt-32 md:pb-24">
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
            <span className="shrink-0 whitespace-nowrap text-purple-400">MVP Development</span>
          </nav>

          {/* Grid Layout: Left Content (6 cols), Right Visual (6 cols) */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column */}
            <div className="space-y-6">
              {/* Main Two-Tone Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight">
                <span className="text-white block">Best MVP Development</span>
                <span className="text-purple-600 block mt-1">Service in Bangladesh.</span>
              </h1>

              {/* Sub-headline Pill / Headline Tag */}
              <p className="font-heading text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
                Validate Your Product Idea with Real Users, Real Workflows &amp; Real Data
              </p>

              {/* Running Description */}
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl">
                {subtitle}
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent" className="h-[52px] px-8 text-sm font-medium">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline" className="h-[52px] px-8 text-sm font-medium">
                  Discuss Your MVP
                </PosterButton>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400 font-mono">
                <ShieldCheck className="h-4 w-4 text-purple-600 shrink-0" />
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

      {/* 4-METRIC ARCHITECTURAL LEDGER RIBBON */}
      <section className="border-b border-white/10 bg-[#0A0A0C]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {kineticMetrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between bg-[#0D0D0F] p-6 sm:p-8 transition-colors duration-300 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                        {metric.num}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                      {metric.label}
                    </h3>
                    <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-300">
                      {metric.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
