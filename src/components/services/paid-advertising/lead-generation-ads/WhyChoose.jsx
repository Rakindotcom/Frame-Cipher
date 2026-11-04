'use client'

import React from 'react'
import {
  Target,
  Database,
  Users,
  Globe2,
  TrendingUp,
  Lock,
  Compass,
} from 'lucide-react'

const differentiators = [
  {
    icon: Target,
    title: 'Quality-Weighted Optimization',
    desc: 'We refuse to optimize blindly for cheap, unqualified form submissions. Our bidding decisions prioritize verified sales opportunities and customer revenue.',
  },
  {
    icon: Database,
    title: 'CRM + Paid Media Synchronized',
    desc: 'We engineer advertising campaigns and CRM follow-up pipelines as a single interconnected acquisition machine, eliminating lead handoff friction.',
  },
  {
    icon: Users,
    title: 'Dedicated In-House Growth Team',
    desc: 'Strategy, copywriting, landing page design, tracking implementation, and reporting are handled 100% in-house in Dhaka. Zero untracked outsourcing.',
  },
  {
    icon: Globe2,
    title: 'Dhaka Hub + Global Campaign Execution',
    desc: 'Direct communication in Dhaka with proven multi-market experience across Bangladesh, the US, UK, Australia, Canada, and the UAE.',
  },
  {
    icon: TrendingUp,
    title: 'We Look Far Past the Initial Click',
    desc: 'We optimize the entire path: Ad Click → Form Submission → Lead Qualification → Sales Rep Contact → Proposal → Customer Revenue.',
  },
  {
    icon: Compass,
    title: 'Sales-Aligned Executive Reporting',
    desc: 'Reporting goes beyond platform metrics to calculate Cost Per Qualified Lead (CPQL), sales pipeline generated, and closed Customer Acquisition Cost (CAC).',
  },
  {
    icon: Lock,
    title: '100% Client-Owned Accounts & Data',
    desc: 'All ad accounts, CRM data, tracking tags, and historical leads remain your exclusive property. We never lock you into proprietary black-box accounts.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Businesses Choose Framecipher for{' '}
            <span className="italic text-frame-accent">Lead Generation.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We replace vanity lead counts with commercial discipline, bridging the gap between digital advertising spend and closed sales pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {differentiators.map((d, idx) => {
            const Icon = d.icon
            return (
              <div
                key={d.title}
                className={`rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-white mb-2">
                    {d.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                    {d.desc}
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
