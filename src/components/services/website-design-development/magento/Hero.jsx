'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'
import { CodeTypingBg, CODE_TOKENS as T } from '../../../ui/code-typing-bg'

// Ambient typing snippet shows Magento layout XML engineering.
const MAGENTO_LINES = [
  [
    ['<referenceContainer ', T.kw],
    ['name', T.fn],
    ['=', T.punct],
    [`"content"`, T.str],
    ['>', T.kw],
  ],
  [
    ['  <block ', T.kw],
    ['name', T.fn],
    ['=', T.punct],
    [`"category.products"`, T.str],
  ],
  [
    ['         template', T.fn],
    ['=', T.punct],
    [`"Magento_Catalog::list.phtml"`, T.str],
    ['/>', T.kw],
  ],
  [['</referenceContainer>', T.kw]],
  [],
  [
    ['<type ', T.kw],
    ['name', T.fn],
    ['=', T.punct],
    [`"Magento\\Framework\\App"`, T.str],
    ['>', T.kw],
  ],
  [
    ['  <plugin ', T.kw],
    ['name', T.fn],
    ['=', T.punct],
    [`"fcRouteWarming"`, T.str],
    ['/>', T.kw],
  ],
  [['</type>', T.kw]],
  [],
  [['// multi-store, B2B pricing - layout XML driven', T.comment]],
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Background Ambient Glow & Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/[0.08] blur-[140px]" />
        <div className="fc-grid-pattern absolute inset-0 opacity-15" />

        {/* Ambient Magento Layout Terminal (types itself out, loops) */}
        <div className="hidden lg:block absolute -right-20 top-28 h-[400px] w-[420px] opacity-40 pointer-events-none select-none [mask-image:radial-gradient(ellipse_70%_65%_at_50%_50%,#000_30%,transparent_100%)]">
          <CodeTypingBg lines={MAGENTO_LINES} />
        </div>
      </div>

      {/* Top Header & Breadcrumbs Clearance */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
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
              <span className="text-frame-accent shrink-0">Magento Development</span>
            </nav>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Enterprise Adobe Commerce · Dhaka &amp; Global</span>
            </div>
          </div>

          {/* Master Display Headline & 3D Interactive Architecture Matrix (Strict 7+5=12 columns: Always Side-by-Side on Desktop) */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Master Display Headline & Intro (7 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Best Magento Development{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-3xl">
                Framecipher builds Magento stores for merchants with large product catalogs, complex inventory, or B2B pricing needs that outgrow simpler ecommerce platforms. Whether you&apos;re scaling a store in Dhaka or managing multi-region operations across the US, UK, Australia, Canada, or UAE, our Magento development services deliver a platform built to handle real ecommerce complexity, not just a bigger product list.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation &rarr;
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  View Pricing &amp; Plans &rarr;
                </PosterButton>
              </div>

              {/* Technical Trust Meta Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500">
                <span className="h-1 w-1 rounded-full bg-frame-accent" />
                <span>Magento 2 &amp; Adobe Commerce</span>
                <span className="text-zinc-700">|</span>
                <span>Hyvä Theme Architecture</span>
                <span className="text-zinc-700">|</span>
                <span>100K+ SKU Scaling</span>
              </div>
            </div>

            {/* Right Column: 3D Ambient Visual (Strict 5 cols: Always on the Side) */}
            <div className="flex justify-center lg:col-span-6 xl:col-span-6 w-full mt-8 lg:mt-0">
              <div className="w-full max-w-full sm:max-w-[540px]">
                <Ambient3DCanvas mode="enterprise-mesh" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Dashboard Panel */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 md:p-8 font-mono text-xs">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090B]">
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Commerce Engine</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Adobe Commerce</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-mono">B2B Company Accounts</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Storefront Speed</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Hyvä Theme</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-mono">Sub-Second TTFB</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">System Sync</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">ERP &amp; PIM</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-mono">Real-Time GraphQL/REST</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Payment Layer</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Local &amp; Global</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-mono">bKash/Nagad + Stripe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're the Right Magento Development Team */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading: STRICTLY LEFT-ALIGNED */}
          <div className="max-w-3xl space-y-4 mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why We&apos;re the Right{' '}
              <span className="italic text-frame-accent">Magento Development Team.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                Magento is not simply a platform for adding more products. It becomes valuable when ecommerce operations require more complex catalog structures, B2B pricing, multiple storefronts, custom workflows, or deep system integrations.
              </p>
              <p>
                Framecipher approaches Magento development from both the business and technical side. We first understand your products, customers, pricing model, fulfillment process, integrations, and growth plans before deciding how the store should be built.
              </p>
              <p>
                We also take a platform-neutral approach. When Magento is the right fit, we build around its strengths. When Shopify, WooCommerce, or another platform makes more practical sense, we explain that before development begins.
              </p>
            </div>
          </div>

          {/* Strategic Pills Band */}
          <div className="mb-12 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-300">
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Complex Ecommerce Architecture</span>
            <span className="text-frame-accent">&bull;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">B2B &amp; Multi-Store Ready</span>
            <span className="text-frame-accent">&bull;</span>
            <span className="rounded-full border border-frame-accent/40 bg-frame-accent/10 px-4 py-2 text-frame-accent">Platform-Neutral Recommendations</span>
          </div>

          {/* 3-Column Continuum Band */}
          <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3 mb-12">
            <div className="bg-[#121214] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">Who We Build For</span>
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                Merchants with large catalogs, complex inventory, B2B pricing, or multi-region needs that outgrow simpler ecommerce platforms.
              </p>
            </div>
            <div className="bg-[#121214] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">What We Build</span>
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                Enterprise storefronts, B2B company accounts, ERP &amp; PIM integrations, and multi-store operations built on Adobe Commerce.
              </p>
            </div>
            <div className="bg-[#121214] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">How We Deliver</span>
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                We first understand products, customers, pricing, fulfillment, and integrations&mdash;then build a store that handles real ecommerce complexity.
              </p>
            </div>
          </div>

          {/* Honest Assessment Banner */}
          <div className="flex flex-col items-start sm:items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 sm:flex-row">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-xl">
              Not sure whether Magento or a different platform fits your store? We&apos;ll tell you honestly which one makes sense.
            </p>
            <PosterButton href="/contact" variant="accent" className="shrink-0">
              Get an Honest Assessment &rarr;
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
