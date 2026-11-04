'use client'

import React from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const mistakes = [
  {
    num: '01',
    title: 'The Product Detail Page Is Part of the Ad Strategy',
    desc: 'For Sponsored Products, shoppers land directly on the product detail page. If images, copy, reviews, or A+ content fail to communicate value clearly, ad budgets produce expensive visits without sufficient conversion.',
    factors: [
      'Product images & gallery quality',
      'Optimized product titles',
      'Benefit-driven bullet points',
      'A+ Content and brand story',
      'Review volume & rating threshold',
      'Competitive price vs. category alternatives',
      'Featured Offer (Buy Box) eligibility',
      'In-stock availability and delivery speed',
    ],
  },
  {
    num: '02',
    title: 'Advertising and Organic Visibility Must Be Measured Separately',
    desc: "Amazon's organic ranking algorithm (A9/Cosmo) is proprietary. While strong sales velocity from ads can assist ranking signals, advertising does not guarantee automated organic positioning. We track paid velocity and total marketplace sales in clean parallel.",
    factors: [
      'No unverified promises of automatic organic rank jumps',
      'Monitoring blended TACOS to assess true organic momentum',
      'Isolating paid keyword volume from organic discovery keywords',
    ],
  },
  {
    num: '03',
    title: 'Featured Offer (Buy Box) Eligibility Dictates Ad Delivery',
    desc: 'Amazon requires products to hold Featured Offer eligibility to serve sponsored ads. Eligibility is determined by price competitiveness, stock levels, fulfillment speed, and seller metrics. A bid increase cannot compensate for retail readiness issues.',
    factors: [
      'Continuous monitoring of Buy Box win percentage',
      'Automated suppression alerts when Buy Box is lost to competitors',
      'FBA vs. FBM fulfillment and dispatch reliability audits',
    ],
  },
  {
    num: '04',
    title: 'Competitors Are Displayed Directly on Your Product Detail Page',
    desc: 'Amazon shoppers compare alternatives within seconds on the exact same page. Competitor Sponsored Products appear right beneath your bullets and buy box. Your advertising defense and conquesting strategy must account for proximity.',
    factors: [
      'Defensive ASIN targeting on your own product detail pages',
      'Strategic offensive conquesting on vulnerable competitor ASINs',
      'Price-to-feature ratio comparisons against adjacent category leaders',
    ],
  },
  {
    num: '05',
    title: 'Inventory Stock-Outs Permanently Damage Momentum',
    desc: 'Running out of stock halts advertising instantly, suppresses search history, and hands market share to competitors. Rebuilding ranking momentum after an out-of-stock event costs significantly more than maintaining steady stock.',
    factors: [
      'Inventory forecasting coordinated with promotional ad spend',
      'Pacing budgets to avoid accelerating stock depletion prematurely',
      'Re-launch protocols for newly restocked inventory batches',
    ],
  },
]

export default function WhenWrong() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Where Amazon Ad Accounts{' '}
            <span className="italic text-frame-accent">Commonly Go Wrong.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            One of the most frequent mistakes is treating Amazon like a pure traffic source. Amazon is a live marketplace where competing products, pricing, reviews, and stock velocity interact in real time.
          </p>
        </div>

        <div className="space-y-4">
          {mistakes.map((mistake) => (
            <div
              key={mistake.num}
              className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14]"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                    {mistake.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {mistake.desc}
                  </p>
                </div>

                <div className="lg:col-span-7 rounded-lg border border-white/[0.06] bg-black/40 p-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3">
                    Critical Factors We Audit &amp; Manage:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {mistake.factors.map((factor) => (
                      <div key={factor} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                        <span>{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
