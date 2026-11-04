'use client'

import React from 'react'
import { Target, Filter, Database, CheckCircle2, TrendingUp, Users } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Buyer Intent Over Raw Clicks',
    desc: 'Targeting commercial search terms and professional attributes where prospects have real buying budgets and immediate problems to solve.',
  },
  {
    icon: Filter,
    title: 'Friction-Calibrated Qualification',
    desc: 'Balancing form fields and qualification questions to screen out casual tire-kickers while maintaining healthy submission volume.',
  },
  {
    icon: Database,
    title: 'Instant CRM Routing & Follow-Up',
    desc: 'Connecting ad leads directly into your sales CRM within seconds so sales reps can call while intent is burning hot.',
  },
  {
    icon: TrendingUp,
    title: 'Downstream Revenue Optimization',
    desc: 'Feeding offline closed-won customer data back into ad platforms (Enhanced Conversions) to bid toward high-ticket opportunities.',
  },
]

const factors = [
  'Buyer intent',
  'Audience quality',
  'Offer strength',
  'Lead destination',
  'Qualification logic',
  'CRM routing speed',
  'Follow-up process',
  'Lead-to-opportunity rate',
  'Closed revenue',
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
              Lead Generation Built Around Sales Outcomes,{' '}
              <span className="italic text-frame-accent">Not Form Counts.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                A lead is not the final result of a campaign. A useful lead must reach the right decision-maker, receive rapid follow-up, enter a structured sales process, and have a genuine commercial likelihood of closing.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                The goal is not to generate the cheapest possible form fills that waste your sales team&apos;s time. The goal is to generate high-intent sales opportunities that turn into closed contracts.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold mb-3">
                Core Acquisition &amp; Pipeline Factors We Align:
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
