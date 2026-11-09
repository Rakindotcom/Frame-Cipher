'use client'

import React from 'react'
import {
  Compass,
  Layout,
  Smartphone,
  Eye,
} from 'lucide-react'

const uiUxDesignPillars = [
  {
    icon: Compass,
    title: 'Platform-Aware Interface Design',
    desc: 'We maintain a consistent brand experience while adapting navigation, controls, spacing, interactions, and interface patterns where Android and iOS differ.',
  },
  {
    icon: Layout,
    title: 'User Flow Mapping',
    desc: 'We map important user journeys before development so customers can complete key actions naturally on both platforms.',
  },
  {
    icon: Smartphone,
    title: 'Adaptive Layouts',
    desc: 'Interfaces are designed around supported device sizes rather than one fixed mobile layout.',
  },
  {
    icon: Eye,
    title: 'Prototype & Usability Review',
    desc: 'Important flows can be validated through prototypes and early device testing before development is finalized.',
  },
]

export default function UiUxDesign() {
  return (
    <section id="ui-ux" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Platform-Aware UI/UX Design.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A shared application foundation does not require an identical interface on every platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uiUxDesignPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {pillar.desc}
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
