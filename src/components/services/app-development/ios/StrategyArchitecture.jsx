'use client'

import React from 'react'
import { FileText, Smartphone, Layers, TrendingUp, AlertTriangle } from 'lucide-react'

const strategyArchitecture = [
  {
    icon: FileText,
    title: 'Requirements & Feature Planning',
    desc: 'We define the primary user journeys, business rules, account types, key features, integrations, and technical requirements before development starts.',
  },
  {
    icon: Smartphone,
    title: 'iOS Device & Version Planning',
    desc: 'We identify the supported iPhone and iPad devices and iOS versions based on your audience, required features, and project scope.',
  },
  {
    icon: Layers,
    title: 'Backend & API Planning',
    desc: 'We map the data your app needs, API connections, authentication, admin workflows, notifications, and third-party services.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability Planning',
    desc: 'The architecture is planned around future features, increasing users, new integrations, and ongoing product updates.',
  },
  {
    icon: AlertTriangle,
    title: 'Technical Risk Review',
    desc: 'We identify complex integrations, platform limitations, performance-sensitive features, and dependencies early so they do not become expensive surprises later.',
  },
]

export default function StrategyArchitecture() {
  return (
    <section id="strategy-architecture" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Product Strategy &amp; Architecture.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A successful iOS app starts with decisions made before development begins. We structure engineering roadmaps around measurable milestones.
          </p>
        </div>

        {/* 5 Strategy Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strategyArchitecture.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                      0{i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
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
