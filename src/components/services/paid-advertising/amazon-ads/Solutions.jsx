'use client'

import React from 'react'
import { Box, Sparkles, Video, Monitor, Radio, Store, ArrowUpRight } from 'lucide-react'

const solutions = [
  {
    icon: Box,
    badge: 'Core Performance',
    title: 'Sponsored Products',
    desc: 'Cost-per-click ads for individual items appearing directly in search results and product detail pages. They form the primary engine of purchase-ready Amazon traffic and keyword-to-sale attribution.',
  },
  {
    icon: Sparkles,
    badge: 'Brand Registry Required',
    title: 'Sponsored Brands',
    desc: 'Top-of-search headline banner ads featuring your brand logo, custom headline, and multiple curated products. Guides shoppers to your custom product collections or official Amazon Brand Store.',
  },
  {
    icon: Video,
    badge: 'High Conversion Hook',
    title: 'Sponsored Brands Video',
    desc: 'Auto-playing in-feed video ads demonstrating product benefits and unboxing utility right in search results. Proven to capture attention and achieve higher CTR than static product placements.',
  },
  {
    icon: Monitor,
    badge: 'Audience & Retargeting',
    title: 'Amazon Display Ads',
    desc: 'Self-service display placements (previously Sponsored Display) reaching high-intent shoppers across Amazon detail pages, customer reviews, and third-party apps based on browsing and purchase behavior.',
  },
  {
    icon: Radio,
    badge: 'Programmatic Scale',
    title: 'Amazon DSP (Demand-Side Platform)',
    desc: 'Advanced programmatic audio, video, and display inventory across Amazon properties (Prime Video, Twitch, IMDb, Fire TV) and leading web publishers using Amazon exclusive first-party shopper data.',
  },
  {
    icon: Store,
    badge: 'Branded Experience',
    title: 'Amazon Brand Stores',
    desc: 'Multi-page immersive brand storefronts on Amazon without competitor ads. We structure Store navigation, sub-pages, and merchandising to convert Sponsored Brands traffic into higher order value.',
  },
]

export default function Solutions() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Amazon Advertising Solutions{' '}
            <span className="italic text-frame-accent">We Manage.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We work across the entire Amazon advertising ecosystem available for your account type, product category, and target marketplace—from entry-level Sponsored Products to enterprise Amazon DSP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-white mb-2.5 flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-frame-accent" />
                </h3>

                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
