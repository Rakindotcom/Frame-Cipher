'use client'

import React from 'react'

const whyFramecipherPillars = [
  {
    title: 'One In-House Team',
    description: 'Audit, strategy, design, development, migration, and launch support are handled by one team. This keeps the business objectives, UX decisions, and technical implementation connected.',
  },
  {
    title: 'Audit Before Design',
    description: 'We don\'t begin with a design file and work backward. We first identify what is actually underperforming so the redesign has a clear purpose.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    description: 'We can work with an existing platform when it is suitable and recommend migration when the platform itself is creating limitations.',
  },
  {
    title: 'Local & International Experience',
    description: 'We work with businesses in Bangladesh and international markets, adapting the redesign to different audiences, requirements, and technical environments.',
  },
  {
    title: 'Transparent Review Process',
    description: 'Major stages include review and approval checkpoints so you can confirm direction before the next stage begins.',
  },
]

export default function WhyFramecipher() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Why Framecipher for{' '}
            <span className="italic text-frame-accent">Website Redesign.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We approach every redesign with analytical rigor, in-house technical depth, and complete commitment to protecting your digital equity.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {whyFramecipherPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
