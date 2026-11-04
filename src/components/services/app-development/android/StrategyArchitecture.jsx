'use client'

import React from 'react'
import {
  Compass,
  Smartphone,
  Database,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'

const strategyArchitecture = [
  {
    num: '01',
    title: 'Requirements & Feature Planning',
    desc: 'We identify the core features, user roles, key workflows, and functionality required for the initial release.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'Device & OS Targeting',
    desc: 'We define the Android versions, device categories, screen sizes, and other compatibility requirements relevant to the target users.',
    icon: Smartphone,
  },
  {
    num: '03',
    title: 'Data & API Planning',
    desc: 'We determine what data the application needs, where it comes from, and how the Android client communicates with backend systems.',
    icon: Database,
  },
  {
    num: '04',
    title: 'Scalability Planning',
    desc: 'The architecture is planned around the expected product roadmap so future features can be added without unnecessarily restructuring the application.',
    icon: TrendingUp,
  },
]

export default function StrategyArchitecture() {
  return (
    <section
      id="strategy-architecture"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Product Strategy &amp;{' '}
            <span className="italic text-frame-accent">Architecture.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Before development starts, we establish how the application should work as a product and as a technical system.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strategyArchitecture.map((item, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] p-8 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  {item.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Architectural Uncertainty Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex items-start gap-4">
          <CheckCircle2 className="h-5 w-5 text-frame-accent shrink-0 mt-0.5" />
          <p className="font-mono text-sm leading-relaxed text-zinc-300">
            <strong className="text-white">Architecture Rule:</strong> Good architecture reduces uncertainty later. It should support the product without introducing unnecessary technical complexity.
          </p>
        </div>
      </div>
    </section>
  )
}
