'use client'

import React from 'react'
import { ShoppingCart, Award, Globe2, Store, TrendingUp, CheckCircle2 } from 'lucide-react'

const segments = [
  {
    icon: ShoppingCart,
    title: 'Amazon-First Brands',
    desc: 'Brands whose primary commercial revenue flows through Amazon. Structured PPC management maximizes top-of-search share, protects branded search terms, and defends product detail pages against competitor poaching.',
  },
  {
    icon: Award,
    title: 'Private Label & Trademarked Brands',
    desc: 'Private-label businesses enrolled in Amazon Brand Registry seeking to unlock Sponsored Brands video, custom storefronts, A+ content, and advanced brand analytics to build enduring equity.',
  },
  {
    icon: Store,
    title: 'Ecommerce Brands Expanding to Amazon',
    desc: 'Direct-to-consumer (DTC) brands expanding into Amazon marketplaces to capture massive built-in search intent while keeping off-Amazon acquisition and Amazon Attribution aligned.',
  },
  {
    icon: Globe2,
    title: 'Multi-Marketplace Global Sellers',
    desc: 'Enterprises selling across US, UK, Canada, Australia, and UAE who require localized keyword research, market-specific budget pacing, and dedicated regional campaign architectures.',
  },
  {
    icon: TrendingUp,
    title: 'Mature Accounts Seeking Efficiency',
    desc: 'Established accounts spending $5,000 to $50,000+/mo that have plateaued. We eliminate wasted spend, restructure bloated campaigns, harvest high-performing search terms, and lower blended TACOS.',
    highlights: [
      'Scaling proven hero products profitably',
      'Harvesting search terms into single-keyword ad groups',
      'Negative keyword sculpting to cut ad waste',
      'Conquesting high-volume competitor ASINs',
      'Aligning ad bids with inventory availability',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Is Amazon Ads{' '}
            <span className="italic text-frame-accent">Management For?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Our Amazon PPC management services are engineered for sellers and brand owners who prioritize unit-level profitability, transparent reporting, and strategic marketplace growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((seg) => {
            const Icon = seg.icon
            return (
              <div
                key={seg.title}
                className={`rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between ${
                  seg.highlights ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white mb-2">
                    {seg.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                    {seg.desc}
                  </p>
                </div>

                {seg.highlights && (
                  <div className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {seg.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
