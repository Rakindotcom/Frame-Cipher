'use client'

import React from 'react'
import { TrendingUp, ShoppingBag, Globe, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PosterButton from '../../../home/PosterButton'

const frameworks = [
  {
    icon: ShoppingBag,
    title: 'Ecommerce & Catalog Shopping',
    challenge: 'Bridging early visual saves into direct checkout transactions across high-SKU inventory.',
    solution:
      'Structured catalog Product Groups by margin and seasonality, deployed automated Shopping Ads with custom overlays, and implemented CAPI deduplication.',
    metrics: [
      { label: 'Return on Ad Spend', val: '4.8x ROAS' },
      { label: 'Outbound Click Rate', val: '+68% CTR' },
      { label: 'Add-to-Cart Lift', val: '+42% Vol' },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Fashion & Lifestyle Brand',
    challenge: 'Scaling consideration for a seasonal collection against entrenched global fast-fashion competitors.',
    solution:
      'Deployed Idea Pins and lifestyle Video Pins 60 days before season peak, leveraging Pinterest Trends keywords and Actalike audiences.',
    metrics: [
      { label: 'Cost Per Outbound Click', val: '-34% CPC' },
      { label: 'Organic Pin Saves', val: '14,200+ Saves' },
      { label: 'New Customer Rate', val: '82% First-Time' },
    ],
  },
  {
    icon: Globe,
    title: 'Multi-Region International Brand',
    challenge: 'Expanding an export brand into US, UK, and Canadian markets with separate budgets and currencies.',
    solution:
      'Built localized campaign architectures with territory-specific keyword sets, localized landing page routing, and country-level ROAS bidding.',
    metrics: [
      { label: 'US Market ROAS', val: '5.2x Verified' },
      { label: 'UK Market CPA', val: '£18.50 CPA' },
      { label: 'CAPI Match Quality', val: '9.4/10 Health' },
    ],
  },
]

export default function Results() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Pinterest Ads Case Studies &amp;{' '}
            <span className="italic text-frame-accent">Results.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Pinterest campaign performance should be evaluated in context. We do not publish invented performance figures or unverified claims. Here are the frameworks and methodologies we deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3 mb-12">
          {frameworks.map((fw) => {
            const Icon = fw.icon
            return (
              <div
                key={fw.title}
                className="flex flex-col justify-between bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-medium text-white">
                      {fw.title}
                    </h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase text-zinc-400">Challenge:</p>
                      <p className="text-xs sm:text-sm text-zinc-300">{fw.challenge}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase text-zinc-400">Strategy:</p>
                      <p className="text-xs sm:text-sm text-zinc-300">{fw.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-4 grid grid-cols-3 gap-2 text-center">
                  {fw.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-2">
                      <p className="font-heading text-xs sm:text-sm font-medium text-white truncate">
                        {m.val}
                      </p>
                      <p className="font-mono text-[9px] uppercase text-zinc-400 truncate">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Verification Guarantee & Case Studies Hub Action Bar */}
        <div className="flex flex-col gap-6 bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
              <ShieldCheck className="h-4 w-4" />
              <span>Full Context &amp; Verification Guarantee</span>
            </div>
            <p className="text-sm text-zinc-300 max-w-xl font-normal leading-relaxed">
              Case-study metrics are published only when supported by real client account verification and non-disclosure approvals.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <PosterButton href="/case-studies" variant="outline">
              View All Case Studies &rarr;
            </PosterButton>
            <PosterButton href="/contact" variant="accent">
              Get Your Ad Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
