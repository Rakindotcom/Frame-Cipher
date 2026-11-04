'use client'

import React from 'react'
import { Search, Calendar, ArrowRightLeft, Activity, Rocket, Sliders } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Audit & Opportunity Assessment',
    desc: 'Reviewing your business offer, target search volume on Bing, existing Google Ads account structures, competitor landscape, and conversion goals to validate channel viability.',
  },
  {
    num: '02',
    icon: Calendar,
    title: 'Strategy & Campaign Planning',
    desc: 'Defining campaign objectives, geographic locations, commercial keyword tiers, LinkedIn profile audience layers, budget pacing, and conversion goal blueprints.',
  },
  {
    num: '03',
    icon: ArrowRightLeft,
    title: 'Setup or Deliberate Migration',
    desc: 'Building fresh campaign architectures or executing a structured Google Ads import—followed by rigorous keyword cleanup, bid recalibration, and network setting audits.',
  },
  {
    num: '04',
    icon: Activity,
    title: 'Tracking & UET Quality Assurance',
    desc: 'Installing and validating UET tags, enhanced conversion parameters, conversion goals, Merchant Center feeds, and destination URL tracking prior to launch.',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Launch & Early Optimization',
    desc: 'Deploying campaigns under controlled bidding. Monitoring early search-term reports, impression shares, and click-through rates to eliminate irrelevant queries immediately.',
  },
  {
    num: '06',
    icon: Sliders,
    title: 'Ongoing Management & Scaling',
    desc: 'Continuous search-term pruning, audience bid adjustments, AI Max evaluation, Merchant Center feed optimization, and transparent weekly reporting.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Microsoft Ads Management{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            From search demand validation and clean account migration to rigorous UET tracking verification and ongoing ROAS scaling.
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
