'use client'

import React from 'react'

const uiUxDesignPillars = [
  {
    title: 'Platform-Aware Interface Design',
    desc: 'We maintain a consistent brand experience while adapting navigation, controls, spacing, interactions, and interface patterns where Android and iOS differ.',
  },
  {
    title: 'User Flow Mapping',
    desc: 'We map important user journeys before development so customers can complete key actions naturally on both platforms.',
  },
  {
    title: 'Adaptive Layouts',
    desc: 'Interfaces are designed around supported device sizes rather than one fixed mobile layout.',
  },
  {
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
            Platform-Aware{' '}
            <span className="italic text-frame-accent">UI/UX Design.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A shared application foundation does not require an identical interface on every platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uiUxDesignPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
