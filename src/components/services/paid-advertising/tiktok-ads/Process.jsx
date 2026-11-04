'use client'

import React from 'react'
import { Search, Calendar, Video, Rocket, Sliders, RefreshCw } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Audit & Discovery',
    desc: 'Reviewing your business offer, target audience, landing page friction, existing TikTok ad accounts, pixel health, competitor creative, and tracking setup.',
  },
  {
    num: '02',
    icon: Calendar,
    title: 'Strategy & Measurement Plan',
    desc: 'Defining campaign objectives, event configuration, audience tiers (broad, interest, custom), budget pacing, creative angles, and reporting frameworks.',
  },
  {
    num: '03',
    icon: Video,
    title: 'Creative Planning & Production',
    desc: 'Scripting native video concepts, testing hook variations, coordinating creator and UGC briefs, and editing high-retention 9:16 vertical video assets.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Campaign Launch',
    desc: 'Deploying initial campaigns with verified Pixel and Events API tracking, controlled bids, target placements, and structured A/B testing ad groups.',
  },
  {
    num: '05',
    icon: Sliders,
    title: 'Testing & Optimization',
    desc: 'Evaluating hook rates, 6-second video view rates, click-through rates, and downstream conversion costs. Reallocating budget to proven winner variants.',
  },
  {
    num: '06',
    icon: RefreshCw,
    title: 'Scaling & Creative Refresh',
    desc: 'Scaling winning audiences and Spark Ads systematically while cycling in new hook angles and creative variations to prevent ad fatigue.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our TikTok Ads Management{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            From account audit and hook scripting to server-side Events API integration and systematic creative scaling.
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
