'use client'

import React from 'react'
import { BarChart3, TrendingUp, Layers, CheckCircle2 } from 'lucide-react'

const dimensions = [
  {
    icon: Layers,
    title: 'Audience-Level Performance',
    desc: 'Evaluating CPA, conversion rate, and revenue contribution segmented across specific behavioral tiers rather than one blended account figure.',
    items: [
      'Cart & checkout abandoners vs. product viewers CPA comparison',
      'Lead form starters vs. general site visitor conversion rate lift',
      '1-day vs. 7-day vs. 30-day recency window efficiency benchmarks',
      'Past purchaser repeat order rate and cross-sell velocity',
    ],
  },
  {
    icon: BarChart3,
    title: 'True Conversion & Pipeline Metrics',
    desc: 'Tracking concrete business outcomes tied directly to commercial revenue rather than vanity impression or click totals.',
    items: [
      'Cost per acquisition (CPA) & return on ad spend (ROAS)',
      'Verified sales revenue & customer average order value (AOV)',
      'Marketing qualified leads (MQL) and sales accepted opportunities',
      'Lead-to-customer close rate across remarketing cohorts',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Attribution & Incremental Lift',
    desc: 'Distinguishing true incremental lift from conversions that would have occurred organically without ad intervention.',
    items: [
      'Multi-touch cross-platform attribution de-duplication',
      'Holdout group testing measuring true incremental conversion lift',
      'First-click vs. last-click vs. data-driven attribution models',
      'Blended customer acquisition cost (CAC) impact across channels',
    ],
  },
]

export default function Metrics() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Measuring Remarketing{' '}
            <span className="italic text-frame-accent">Performance.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Remarketing should never be judged by one platform-reported number in a vacuum. We evaluate performance across audience segments, conversion depth, attribution frameworks, and incremental business revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dimensions.map((d) => {
            const Icon = d.icon
            return (
              <div
                key={d.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                    {d.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {d.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
