'use client'

import React from 'react'
import {
  Search,
  Calculator,
  Compass,
  Rocket,
  Sliders,
  ShoppingBag,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Account & Product Catalog Audit',
    desc: 'Comprehensive review of your existing Amazon Ads account, product eligibility, listing quality, historical search terms, and Brand Registry status to identify baseline health.',
    deliverables: [
      'Historical campaign and search-term harvest review',
      'Catalog ASIN eligibility and Buy Box percentage check',
      'Identification of active wasted spend and negative term gaps',
    ],
  },
  {
    step: '02',
    icon: Calculator,
    title: 'Marketplace & Profitability Assessment',
    desc: 'Modeling break-even ACOS, Amazon referral fees, and FBA fulfillment charges for each SKU to set realistic target thresholds before committing advertising capital.',
    deliverables: [
      'SKU-level break-even ACOS benchmark model',
      'Competitor pricing and sponsored impression share assessment',
      'Inventory depth and restock lead-time validation',
    ],
  },
  {
    step: '03',
    icon: Compass,
    title: 'Campaign Architecture & Strategy',
    desc: 'Designing the custom account taxonomy, portfolio budgets, and campaign separation between hero ASINs, automatic discovery, manual exact, and competitor conquesting.',
    deliverables: [
      'Account portfolio hierarchy and naming structure',
      'Target keyword lists grouped by search intent and match type',
      'Sponsored Brands and Storefront alignment blueprint',
    ],
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Precision Setup & Controlled Launch',
    desc: 'Building campaigns with clean keyword isolation, negative match lists, placement multipliers, and tracking parameters followed by strict pre-launch QA checks.',
    deliverables: [
      'Automatic and manual campaign build across target match types',
      'Negative keyword and ASIN lists applied to prevent budget bleed',
      'Dynamic bidding settings and initial placement multipliers set',
    ],
  },
  {
    step: '05',
    icon: Sliders,
    title: 'Search-Term & Bid Optimization',
    desc: 'Systematic weekly harvesting of converting search queries into exact-match campaigns, aggressive pruning of non-converting terms, and placement calibration.',
    deliverables: [
      'Continuous search-term harvesting routines',
      'Negative exact pruning for low-conversion click sinks',
      'Top-of-search placement bid multiplier adjustments',
    ],
  },
  {
    step: '06',
    icon: ShoppingBag,
    title: 'Listing & Inventory Health Monitoring',
    desc: 'Ongoing surveillance of retail signals that affect advertising performance—ensuring ad spend never runs on low-inventory or Buy Box suppressed products.',
    deliverables: [
      'Buy Box loss detection and automated campaign throttling',
      'Inventory depletion alerts to protect organic rank momentum',
      'Listing change and review rating surveillance',
    ],
  },
  {
    step: '07',
    icon: TrendingUp,
    title: 'Executive Reporting & Strategic Iteration',
    desc: 'Transparent monthly reporting comparing ACOS, TACOS, organic rank movement, NTB customers, and contribution margins, driving data-backed strategic expansion.',
    deliverables: [
      'Monthly executive performance reports with clear business metrics',
      'ACOS vs. TACOS blended revenue and organic lift correlation',
      'Quarterly growth roadmap for new products or new marketplaces',
    ],
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Amazon Ads{' '}
            <span className="italic text-frame-accent">Management Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            A disciplined, 7-stage management framework engineered to eliminate wasted budget, accelerate product sales velocity, and expand marketplace profitability.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.step}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14]"
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm uppercase tracking-wider text-frame-accent font-bold">
                        Stage {s.step}
                      </span>
                      <div className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-frame-accent">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-7 rounded-lg border border-white/[0.06] bg-black/40 p-5">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3">
                      Stage Deliverables:
                    </p>
                    <div className="space-y-2">
                      {s.deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
