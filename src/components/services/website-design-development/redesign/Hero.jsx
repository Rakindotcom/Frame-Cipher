'use client'

import React from 'react'
import Link from 'next/link'
import { Check, ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'
import { BlueprintBg } from '../../../ui/blueprint-bg'

const readinessFactors = [
  'The design feels outdated and no longer represents your brand or market position.',
  'Mobile visitors struggle with navigation, layouts, forms, or important actions.',
  'Pages load slowly, especially on mobile devices or content-heavy sections.',
  'Visitors don\'t know what to do next, even when your website receives traffic.',
  'Important pages no longer perform as well as they once did in search.',
  'Your content structure has become difficult to navigate as the website has grown.',
  'Your CMS or platform limits what you need to build, manage, or integrate.',
  'Your website has accumulated technical problems from years of updates, plugins, themes, or custom code.',
  'Your business has changed, but the website still reflects an older offer, audience, or positioning.',
  'Analytics show friction in important user journeys, forms, product pages, or checkout flows.',
]

const keepingAssets = [
  {
    title: 'SEO Equity',
    description: 'We identify pages that already receive organic traffic, rank for valuable searches, or attract backlinks so they can be protected during the redesign.',
  },
  {
    title: 'Existing URLs',
    description: 'We review which URLs should remain unchanged and which genuinely need to be replaced, consolidated, or redirected.',
  },
  {
    title: 'Valuable Content',
    description: 'Not every old page is outdated just because the design is outdated. We identify content that still supports rankings, conversions, customer journeys, or topical authority.',
  },
  {
    title: 'Analytics & Conversion Data',
    description: 'Existing analytics can reveal which pages, forms, products, and user journeys are already contributing to leads, sales, or engagement.',
  },
  {
    title: 'Information Architecture',
    description: 'We review the current navigation, categories, page hierarchy, and relationships between important pages before deciding what needs to change.',
  },
  {
    title: 'Existing Integrations',
    description: 'CRM systems, analytics platforms, payment gateways, booking tools, marketing systems, forms, APIs, and other integrations may need to remain functional after the redesign.',
  },
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* 1. TOP HEADER & BREADCRUMBS CLEARANCE */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        {/* Ambient Morph Canvas in Background */}
        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 h-[420px] w-[460px] opacity-25 pointer-events-none select-none [mask-image:radial-gradient(ellipse_70%_65%_at_50%_50%,#000_40%,transparent_100%)]">
          <BlueprintBg mode="morph" className="h-full w-full" />
        </div>

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
              <Link href="/services/website-design-development" className="shrink-0 hover:text-white transition-colors">
                Website Design &amp; Development
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <span className="text-frame-accent shrink-0">Website Redesign</span>
            </nav>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>SEO Preservation &middot; Dhaka &amp; Global</span>
            </div>
          </div>

          {/* Master 12-Column Hero Grid */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column (7-col) */}
            <div className="space-y-6 lg:col-span-6 xl:col-span-6">
              {/* Eyebrow & Meta */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                    [ 11 / WEBSITE REDESIGN ]
                  </span>
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Modern UX &amp; Speed / Zero SEO Loss
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Best Website Redesign{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                Framecipher redesigns websites for businesses, ecommerce stores, blogs, portfolios, and any other kind of site that&apos;s outdated, slow, or no longer performing, without losing the SEO rankings, content, or traffic already built up. Whether you&apos;re redesigning a business site, an online store, a content platform, or something else entirely in Dhaka or across the US, UK, Australia, Canada, or UAE, our redesign services fix what&apos;s actually broken instead of just applying a new coat of paint.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  View Pricing &amp; Plans
                </PosterButton>
              </div>
            </div>

            {/* Right Column (5-col) - Interactive 3D Canvas */}
            <div className="relative flex justify-center lg:col-span-6 xl:col-span-6 w-full">
              <div className="relative w-full max-w-[540px]">
                <Ambient3DCanvas
                  mode="refraction-scan"
                  className="w-full aspect-square max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCTION STATUS & KPI LEDGER */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 font-mono text-xs">
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Strategy</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Audit First</p>
              <p className="mt-1 text-[11px] text-emerald-400">Diagnose Before Rebuild</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">SEO Protection</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Zero Loss</p>
              <p className="mt-1 text-[11px] text-frame-accent">301 Redirect Mapping</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Performance</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">&lt; 1.0s Speed</p>
              <p className="mt-1 text-[11px] text-emerald-400">Core Web Vitals Pass</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Cutover</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">100% Uptime</p>
              <p className="mt-1 text-[11px] text-frame-accent">Zero-Downtime Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC ASSESSMENT: DOES YOUR WEBSITE ACTUALLY NEED A REDESIGN? */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Left-Aligned Header Block */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Does Your Website Actually{' '}
              <span className="italic text-frame-accent">Need a Redesign?</span>
            </h2>

            {/* 4-Step Process Pipeline */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-white">
              <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">Website Audit</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">SEO Equity Check</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">Performance Baseline</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-full border border-frame-accent/40 bg-frame-accent/15 px-3.5 py-2 text-frame-accent">Focused Rebuild</span>
            </div>
          </div>

          {/* 3 Strategic Approach Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Who We Redesign For
                </span>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  Businesses, ecommerce stores, blogs, portfolios, and content platforms whose site is outdated, slow, or no longer performing.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  What We Fix
                </span>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  Structure, performance, UX, platform issues, and conversion paths&mdash;not just a new coat of paint on an old design.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  How We Protect You
                </span>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  We diagnose before rebuilding, preserve SEO equity, map 301 redirects, and launch with zero-downtime cutover.
                </p>
              </div>
            </div>
          </div>

          {/* Honest Assessment Callout */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:flex-row md:items-center">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-2xl">
              Not sure whether your website needs a redesign or just an update? We audit it and tell you honestly what fits.
            </p>
            <PosterButton href="/contact" variant="outline" className="shrink-0">
              Get an Honest Assessment
            </PosterButton>
          </div>

          {/* Readiness Checklist */}
          <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
            <h3 className="font-heading text-xl sm:text-2xl font-medium text-white mb-6">
              Your Website May Be Ready for a Redesign If:
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {readinessFactors.map((factor, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#09090B] p-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span className="text-sm font-normal text-zinc-300 leading-snug">
                    {factor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Every Website Needs a Full Rebuild */}
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
            <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium text-white">
              Not Every Website Needs a Full Rebuild
            </h3>
            <div className="mt-4 space-y-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-4xl">
              <p>
                If your existing platform and structure are sound, a focused visual or UX refresh may solve the problem.
              </p>
              <p>
                If the underlying platform, codebase, architecture, or content structure is causing the problem, a deeper rebuild or migration may be the better option.
              </p>
              <p className="font-medium text-white">
                We determine that from the audit instead of assuming every client needs the largest possible redesign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ASSET AUDIT: WHAT IS WORTH KEEPING BEFORE WE REDESIGN? */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Left-Aligned Header Block */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              What Is Worth Keeping{' '}
              <span className="italic text-frame-accent">Before We Redesign?</span>
            </h2>

            <div className="space-y-3 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                A redesign should not mean throwing away everything your current website has built over the years.
              </p>
              <p>
                Before changing the structure, we identify the pages, content, URLs, rankings, backlinks, conversions, and integrations that already have value. The goal is to improve the website without unnecessarily destroying assets that are already working.
              </p>
            </div>
          </div>

          {/* 6 Keeping Asset Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keepingAssets.map((asset, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    Asset 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {asset.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {asset.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Keep What Works Callout */}
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
              Keep What Works. Fix What Doesn&apos;t.
            </h3>
            <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              A redesign should improve the existing website, not automatically replace everything. We use the current website as evidence, identify what should stay, and focus the redesign effort where it can create meaningful improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
