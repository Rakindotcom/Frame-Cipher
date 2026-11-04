'use client'

import React from 'react'
import { Search, Briefcase, Sliders, ShieldCheck } from 'lucide-react'

const strategies = [
  {
    icon: Search,
    title: 'Keyword & Match-Type Architecture',
    desc: 'Building targeted keyword clusters based on high-intent commercial queries, optimizing Exact, Phrase, and Broad match combinations specifically calibrated for Bing algorithms.',
  },
  {
    icon: ShieldCheck,
    title: 'Search-Term & Negative Governance',
    desc: 'Conducting aggressive search-term audits to eliminate irrelevant queries, prune wasted ad spend, and expand high-converting keyword themes.',
  },
  {
    icon: Briefcase,
    title: 'Audience Layering & LinkedIn Signals',
    desc: 'Layering LinkedIn professional profile data (company names, industry verticals, job functions, and seniority) to dynamically boost bids on high-value B2B decision-makers.',
  },
  {
    icon: Sliders,
    title: 'Network & Placement Management',
    desc: 'Evaluating traffic quality between core Bing search results and syndicated search partners, isolating high-converting placements and excluding low-intent partner sites.',
  },
]

export default function Strategy() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Microsoft Ads Search &amp;{' '}
            <span className="italic text-frame-accent">Audience Strategy.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Deliberate keyword selection, search-term governance, and professional audience layering engineered to capture high-margin commercial demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {strategies.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {s.desc}
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
