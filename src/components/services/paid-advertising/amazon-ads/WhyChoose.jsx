'use client'

import React from 'react'
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Layers,
  BarChart3,
  Globe2,
  Users,
  Compass,
} from 'lucide-react'

const reasons = [
  {
    icon: Compass,
    title: 'Amazon-Native Advertising Strategy',
    desc: 'We do not treat Amazon like Google Ads. Campaigns are engineered around Amazon search algorithms, customer buying intent, competitor detail page conquesting, and marketplace dynamics.',
  },
  {
    icon: ShieldCheck,
    title: 'Advertising + Listing Readiness Alignment',
    desc: 'We audit your detail pages, imagery, bullet clarity, and Buy Box stability alongside your campaigns, resolving conversion leaks before media budgets scale.',
  },
  {
    icon: BarChart3,
    title: 'ACOS + TACOS Total Economics',
    desc: 'We report true blended performance—tracking whether paid velocity is lifting organic keyword rank and total account revenue rather than analyzing ACOS in a vacuum.',
  },
  {
    icon: Layers,
    title: 'Margin-Aware Profitability Modeling',
    desc: 'Every hero ASIN receives an individualized break-even and target ACOS benchmark based on COGS, Amazon referral fees, and FBA fulfillment charges.',
  },
  {
    icon: Globe2,
    title: 'Cross-Channel Attribution Sync',
    desc: 'For brands also leveraging Google Ads or Meta Ads, we deploy Amazon Attribution tags to connect off-Amazon marketing directly to Amazon sales.',
  },
  {
    icon: Users,
    title: 'Dedicated In-House Growth Team',
    desc: 'Strategy, keyword harvesting, bid optimization, creative production, and reporting are handled 100% in-house. No white-label subcontracting or unvetted freelancers.',
  },
  {
    icon: Lock,
    title: '100% Client-Owned Accounts',
    desc: 'You retain complete administrative ownership of your Amazon Advertising and Seller/Vendor Central accounts. All campaign history, audiences, and data remain yours.',
  },
  {
    icon: Globe2,
    title: 'Dhaka Team + International Reach',
    desc: 'Based in Dhaka, we manage campaigns across Amazon US, UK, Canada, Australia, and UAE, providing direct communication, timezone alignment, and local marketplace expertise.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Businesses Choose Framecipher for{' '}
            <span className="italic text-frame-accent">Amazon Ads.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We combine rigorous marketplace advertising execution with commercial unit economics, ensuring your Amazon ad spend builds profitable, enduring brand equity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-white mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
