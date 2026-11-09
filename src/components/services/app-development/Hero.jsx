'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../home/PosterButton'
import AppInterfaceHeroVisual from './AppInterfaceHeroVisual'

const kineticMetrics = [
  {
    num: '01',
    label: 'Native & Cross-Platform',
    detail: 'Android (Kotlin), iOS (Swift), Flutter & React Native with zero performance compromises',
  },
  {
    num: '02',
    label: 'Architecture & APIs',
    detail: 'Scalable backend infrastructure, database design, REST/GraphQL endpoints, and auth systems',
  },
  {
    num: '03',
    label: 'Store Deployment',
    detail: 'End-to-end release preparation and publishing workflows for Apple App Store & Google Play',
  },
  {
    num: '04',
    label: 'Post-Launch SLA',
    detail: 'OS compatibility maintenance, dependency updates, performance tuning, and technical monitoring',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || 'App Development Services in Bangladesh'
  const subtitle =
    service?.shortDesc ||
    "Custom mobile and web apps built to actually launch and scale, Android, iOS, cross-platform, and SaaS products, handled by one in-house team from strategy through App Store release. Talk to us about what you're building."

  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-4 pt-28 pb-20 sm:px-6 md:px-8 md:pt-32 md:pb-28">
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
            <span className="shrink-0 whitespace-nowrap text-frame-accent">App Development</span>
          </nav>

          {/* Grid Layout: Left Content, Right Visual */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column (6 cols) */}
            <div className="space-y-6">
              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                {title.includes('Bangladesh') ? (
                  <>
                    <span className="block text-white">App Development</span>
                    <span className="block text-purple-600">Services in Bangladesh.</span>
                  </>
                ) : (
                  <span className="text-white">{title}</span>
                )}
              </h1>

              {/* Running Description */}
              <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-zinc-300 max-w-2xl">
                {subtitle}
              </p>

              {/* Symmetrical 52px Button Pair (§4 Standard) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  Discuss Your App Project &rarr;
                </PosterButton>
              </div>

              {/* Trust Badge / Technical SLA */}
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-purple-600 shrink-0" />
                <span>
                  Apple App Store &amp; Google Play &bull; Production Backend &bull; 100% In-House Team
                </span>
              </div>
            </div>

            {/* Right Visual Column (6 cols): Interactive App Interface Mockup */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <AppInterfaceHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 4-METRIC ARCHITECTURAL LEDGER RIBBON */}
      <section className="border-b border-white/[0.08] bg-[#09090B]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {kineticMetrics.map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-[#121214] transition-colors hover:bg-[#18181B]">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                  {item.num}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {item.label}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-normal leading-relaxed text-zinc-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC EVALUATION SECTION */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12 md:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Your App Idea Needs a Team That&apos;s Shipped Before, Not Just Designed.
            </h2>

            <div className="mt-6 max-w-4xl space-y-4 text-base md:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                Most app projects stall somewhere between &ldquo;great idea&rdquo; and &ldquo;live in the App Store&rdquo;, usually because design, development, and backend infrastructure were never planned as one system. Framecipher builds Android, iOS, cross-platform, and SaaS applications for startups and businesses in Bangladesh, and for international clients across the US, UK, Australia, Canada, and UAE, handled by one in-house team from architecture through launch and post-launch support. Not sure if you need a native app, a cross-platform build, or just an MVP to test the idea first? Talk to us and we&apos;ll tell you honestly what fits your stage and budget.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <PosterButton href="/contact" variant="accent">
                Talk to Our Team
              </PosterButton>
              <PosterButton href="#offerings" variant="outline">
                Explore App Capabilities
              </PosterButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
