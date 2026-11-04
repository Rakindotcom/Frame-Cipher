'use client'

import React from 'react'
import { Target, Users, Clock, ShieldCheck, Repeat, Filter } from 'lucide-react'

const pillars = [
  {
    icon: Filter,
    title: 'Funnel-Stage Segmentation',
    desc: 'Separating 4-second bounces from engaged product researchers, cart abandoners, and qualified high-intent leads.',
  },
  {
    icon: Clock,
    title: 'Dynamic Recency Windows',
    desc: 'Calibrating message urgency across 1-day, 7-day, 30-day, and 90-day intervals based on your actual buying cycle.',
  },
  {
    icon: ShieldCheck,
    title: 'Active Suppression Logic',
    desc: 'Immediately removing purchasers and converted leads so ad dollars are never squandered on closed conversions.',
  },
  {
    icon: Repeat,
    title: 'Sequential Storytelling',
    desc: 'Guiding undecided prospects from product education and objection handling through to social proof and closing offers.',
  },
]

const factors = [
  'Audience behavior',
  'Funnel stage',
  'Recency windows',
  'Product or service interest',
  'Previous conversions',
  'Customer status',
  'Creative exposure',
  'Purchase cycle',
  'Available first-party data',
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
              Remarketing Built Around Buyer Intent,{' '}
              <span className="italic text-frame-accent">Not Repeated Impressions.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                Remarketing works best when previous interactions are used to make the next message more relevant. A homepage visitor, product viewer, cart abandoner, past customer, and qualified lead should not automatically receive the same campaign.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                The goal is simple: re-engage people who already showed genuine commercial interest without burning media budget on audiences that have already converted or bounced immediately.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold mb-3">
                Core Behavioral Variables We Model:
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
