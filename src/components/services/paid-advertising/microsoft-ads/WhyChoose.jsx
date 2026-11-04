'use client'

import React from 'react'
import { Search, Briefcase, ArrowRightLeft, Users, ShieldCheck, Globe } from 'lucide-react'

const reasons = [
  {
    icon: Search,
    title: 'Microsoft-Specific Strategy',
    desc: 'We never simply import Google Ads and walk away. We adapt keyword match types, syndicated network placements, and device bid modifiers to the Microsoft environment.',
  },
  {
    icon: Briefcase,
    title: 'Deliberate LinkedIn Profile Targeting',
    desc: 'We strategically overlay professional B2B signals—targeting specific industries, decision-maker job functions, and enterprise company accounts at search CPC rates.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Clean Google Ads Migration',
    desc: 'We utilize Microsoft’s official import tools to transfer core campaign structures, followed by rigorous manual cleanup, bid recalibration, and negative keyword audits.',
  },
  {
    icon: Users,
    title: 'One In-House Media & Tech Team',
    desc: 'Strategy, ad copywriting, UET tag implementation, and bid optimization are handled by our dedicated team in Dhaka without external agency subcontracting.',
  },
  {
    icon: ShieldCheck,
    title: '100% Client-Owned Accounts',
    desc: 'Your Microsoft Advertising account, UET tracking tags, catalogs, and historical campaign data remain under your direct ownership. Zero media spend markups.',
  },
  {
    icon: Globe,
    title: 'Bangladesh & International Delivery',
    desc: 'We manage local campaigns in Bangladesh where demand justifies spend, alongside high-volume international campaigns across the US, UK, Canada, Australia, and UAE.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Businesses Choose Framecipher for{' '}
            <span className="italic text-frame-accent">Microsoft Ads.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Microsoft Advertising requires platform-specific optimization, deliberate audience layering, and reliable conversion measurement. Here is how we deliver incremental growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, idx) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
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
