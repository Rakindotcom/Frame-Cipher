'use client'

import React from 'react'
import { TrendingUp, ShoppingBag, Target, Layers, ShieldCheck, BarChart3 } from 'lucide-react'

const pillars = [
  {
    icon: ShoppingBag,
    title: 'Product & Listing Readiness',
    desc: 'Evaluating detail pages, high-resolution imagery, A+ content, bullet clarity, and Featured Offer eligibility before committing ad budgets.',
  },
  {
    icon: Target,
    title: 'High-Intent Search & ASIN Targeting',
    desc: 'Harvesting precise commercial keywords, competitor product ASIN targets, and category placements where shoppers are primed to buy.',
  },
  {
    icon: BarChart3,
    title: 'Margin-Aware Profitability',
    desc: 'Optimizing around Break-Even ACOS, TACOS, inventory velocity, and contribution margin rather than vanity click volume.',
  },
  {
    icon: Layers,
    title: 'Cross-Channel Attribution',
    desc: 'Measuring and attributing external traffic from Google Ads, Meta Ads, and social channels directly into Amazon marketplace sales.',
  },
]

const factors = [
  'Advertising',
  'Product listings',
  'Search intent',
  'Pricing',
  'Reviews',
  'Featured Offer eligibility',
  'Inventory',
  'Conversion rate',
  'Product margins',
  'Total sales',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* SoftWebGrove 2-Column Master Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Strategic Thesis & Context (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Amazon Ads Built Around Products, Profitability &amp;{' '}
              <span className="italic text-frame-accent">Marketplace Performance.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                Amazon advertising is not simply about generating clicks. A campaign can attract relevant shoppers and still struggle when the product page is weak, the price is uncompetitive, inventory is limited, or the product does not convert against competing offers.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                Amazon itself highlights factors such as product detail page quality, inventory, pricing, and Featured Offer eligibility when preparing products for advertising. We use those signals to make better advertising decisions instead of managing ACOS in isolation.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold mb-3">
                Key Marketplace Interdependencies
              </p>
              <div className="flex flex-wrap gap-2">
                {factors.map((factor) => (
                  <span
                    key={factor}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {factor}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architecture Alignment Vectors (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-medium text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
