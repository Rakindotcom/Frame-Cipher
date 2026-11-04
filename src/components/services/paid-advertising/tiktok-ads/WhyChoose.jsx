'use client'

import React from 'react'
import { Users, Layers, ShieldCheck, Globe, BarChart3 } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'One In-House Creative & Tech Team',
    desc: 'Strategy, video scripting, media buying, Events API tracking, and weekly optimization are handled by our dedicated team in Dhaka without external handoffs.',
  },
  {
    icon: Layers,
    title: 'Creative + Media Buying Synchronized',
    desc: 'Media performance directly dictates the next video production cycle. When a hook or angle demonstrates high conversion efficiency, our video team iterates instantly.',
  },
  {
    icon: ShieldCheck,
    title: '100% Client-Owned Accounts & Assets',
    desc: 'Your TikTok Business Center, Ads Manager, Pixels, and catalog assets remain under your direct ownership. We never trap clients in proprietary agency accounts.',
  },
  {
    icon: Globe,
    title: 'Bangladesh & Global Territory Delivery',
    desc: 'We manage local campaigns tailored for Bangladesh consumer culture as well as international campaigns across the US, UK, Canada, Australia, and UAE.',
  },
  {
    icon: BarChart3,
    title: 'Transparent Commercial Reporting',
    desc: 'No vanity engagement metrics. We report on true business KPIs: outbound CTR, acquisition CPA, downstream sales pipeline stages, and verified revenue.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Businesses Choose Framecipher for{' '}
            <span className="italic text-frame-accent">TikTok Ads.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            TikTok requires both fast-turnaround video creative and disciplined performance media buying. Here is how our model delivers compounding returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, idx) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className={`rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-white mb-2.5">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
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
