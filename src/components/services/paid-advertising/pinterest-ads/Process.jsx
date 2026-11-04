'use client'

import React from 'react'
import {
  Search,
  Calendar,
  Activity,
  Palette,
  Rocket,
  Sliders,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Account & Campaign Audit',
    desc: 'Reviewing existing Pinterest Business accounts, campaigns, pixel tracking, creative assets, merchant catalog health, and past conversion history to assess channel feasibility.',
  },
  {
    num: '02',
    icon: Calendar,
    title: 'Strategy & Calendar Planning',
    desc: 'Defining campaign objectives, target markets, keyword clusters, audience tiers, seasonal planning windows (Pinterest Trends), and budget allocations.',
  },
  {
    num: '03',
    icon: Activity,
    title: 'Tracking & Campaign Setup',
    desc: 'Implementing Pinterest Tag, server-side Conversions API (CAPI), event deduplication, product catalog feeds, Product Groups, and landing-page parameters.',
  },
  {
    num: '04',
    icon: Palette,
    title: 'Creative Production',
    desc: 'Designing Pinterest-native vertical Static Pins, Video Pins, Carousels, and Collection assets with high-utility text overlays and search-optimized copy.',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Launch & Learning Buffer',
    desc: 'Deploying campaigns under controlled bidding. Enforcing a strict 10-day initial learning window without disruptive edits to allow algorithmic stabilization.',
  },
  {
    num: '06',
    icon: Sliders,
    title: 'Management & Scaling',
    desc: 'Ongoing search query pruning, audience refinement, creative refreshes, budget reallocation to top-performing Product Groups, and transparent weekly reporting.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Pinterest Ads Management{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            From technical readiness audit and catalog curation to disciplined 10-day algorithmic learning and ongoing ROAS optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="flex flex-col justify-between bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {step.desc}
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
