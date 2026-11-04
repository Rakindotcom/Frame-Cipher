'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'
import { CodeTypingBg, CODE_TOKENS as T } from '../../../ui/code-typing-bg'

// Ambient typing snippet shows real Liquid storefront templating.
const SHOPIFY_LINES = [
  [
    ['{% for ', T.kw],
    ['product ', T.id],
    ['in ', T.kw],
    ['collection.products ', T.id],
    ['%}', T.kw],
  ],
  [
    ['  <article ', T.id],
    ['class', T.fn],
    ['=', T.punct],
    [`"fc-product-card"`, T.str],
    ['>', T.id],
  ],
  [
    ['    {{ ', T.id],
    ['product.title', T.fn],
    [' }} - {{ ', T.id],
    ['product.price | money', T.fn],
    [' }}', T.id],
  ],
  [
    ['  </article>', T.id],
  ],
  [['{% endfor %}', T.kw]],
  [],
  [
    [`{% render `, T.kw],
    [`'fc-upsell'`, T.str],
    [', cart: cart %}', T.id],
  ],
  [],
  [['// bKash & Nagad checkout integrated', T.comment]],
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Top Header & Breadcrumbs Clearance */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        {/* Background Ambient Code Snippet */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[480px] w-[500px] opacity-25 select-none [mask-image:radial-gradient(ellipse_70%_65%_at_65%_50%,#000_30%,transparent_100%)] hidden xl:block">
          <CodeTypingBg lines={SHOPIFY_LINES} />
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
              <span className="text-frame-accent shrink-0">Shopify Development</span>
            </nav>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Managed Ecommerce &middot; Dhaka &amp; Global</span>
            </div>
          </div>

          {/* Master 12-Column Grid (7 + 5 side-by-side on desktop) */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column (7-col) */}
            <div className="space-y-6 lg:col-span-6 xl:col-span-6">
              {/* Eyebrow & Meta */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                    [ 09 / MANAGED ECOMMERCE ]
                  </span>
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Shopify &amp; Online Store 2.0 / High Conversion
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Best Shopify Development{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                Framecipher builds Shopify stores for merchants who want reliable uptime and simplified backend management without taking on full custom infrastructure. Whether you&apos;re launching a store in Dhaka or selling to customers across the US, UK, Australia, Canada, or UAE, our Shopify development services deliver a store built to convert visitors and stay easy for your team to run.
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
                  mode="speed-stream"
                  className="w-full aspect-square max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-METRIC ARCHITECTURAL STATUS LEDGER */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 md:p-8 font-mono text-xs">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090B]">
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Theme Architecture</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Online Store 2.0</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-medium">Modular Liquid &amp; JSON</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">App Strategy</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Zero App Bloat</p>
              <p className="mt-1 text-[11px] text-frame-accent font-medium">Native Functions Stack</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Global Commerce</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Shopify Markets</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-medium">Multi-currency &amp; Duties</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Speed Benchmark</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Sub-Second Load</p>
              <p className="mt-1 text-[11px] text-frame-accent font-medium">Core Web Vitals 95+</p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE BANNER / WHY WE'RE THE RIGHT TEAM */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why We&apos;re the Right{' '}
              <span className="italic text-frame-accent">Shopify Development Team.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                Shopify removes much of the infrastructure burden from ecommerce, but the storefront built on top of it still determines how customers browse, trust, and buy.
              </p>
              <p>
                Framecipher focuses on building Shopify stores that are structured for real business use, not simply designed to look good in a portfolio.
              </p>
              <p>
                We plan your catalog, navigation, theme architecture, app stack, integrations, payment setup, and conversion flow before development begins.
              </p>
              <p>
                We also take a platform-neutral approach. Shopify can be a strong fit for businesses that want managed ecommerce infrastructure and easy store management. When WooCommerce, Magento, or another platform makes more practical sense, we explain that before development starts.
              </p>
            </div>
          </div>

          {/* 4-Pill Continuum */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium">
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">
              Managed Ecommerce Infrastructure
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">
              Custom Shopify Development
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">
              Disciplined App Architecture
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="rounded-full border border-frame-accent/40 bg-frame-accent/10 px-4 py-2 text-frame-accent">
              Platform-Neutral Recommendations
            </span>
          </div>

          {/* 3-Column Continuum Band */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                Who We Build For
              </span>
              <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                Merchants who want reliable uptime and simplified backend management without taking on full custom infrastructure.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                What We Build
              </span>
              <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                Online Store 2.0 storefronts, app integrations, custom Shopify features, B2B, and global expansion through Shopify Markets.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                How We Deliver
              </span>
              <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                We plan catalog, theme architecture, app stack, payments, and conversion flow before build, with a zero-bloat app policy.
              </p>
            </div>
          </div>

          {/* Honest Assessment Banner */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:flex-row sm:items-center sm:p-8">
            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-200 max-w-2xl">
              Not sure whether Shopify or a different platform fits your store? We&apos;ll tell you honestly which one makes sense.
            </p>
            <PosterButton href="/contact" variant="accent" className="shrink-0">
              Get an Honest Assessment
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
