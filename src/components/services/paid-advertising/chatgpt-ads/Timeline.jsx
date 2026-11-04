'use client'

import React from 'react'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Discovery & Readiness',
    body: 'Business, market, offer, tracking, and advertising assessment.',
  },
  {
    phase: 'Phase 2',
    title: 'Campaign Preparation',
    body: 'Account structure, ad groups, context hints, creative, landing-page alignment, and conversion setup.',
  },
  {
    phase: 'Phase 3',
    title: 'Launch & Initial Learning',
    body: 'Campaign launch, monitoring, and early data collection.',
  },
  {
    phase: 'Phase 4',
    title: 'Optimization',
    body: 'Creative testing, context refinement, budget management, conversion optimization, and reporting.',
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Timeline &amp;{' '}
            <span className="italic text-frame-accent">Engagement.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            ChatGPT Ads campaign timelines depend on account eligibility, tracking requirements, creative production, campaign complexity, and current platform requirements.
          </p>
        </div>

        {/* 4-Phase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-medium text-white group-hover:text-frame-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Context */}
        <div className="mt-8 border-l-2 border-frame-accent bg-frame-accent/10 p-5 rounded-r-lg">
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
            Simple campaigns may move through these stages faster. International, ecommerce, multi-market, or advanced tracking projects may require additional preparation. We provide the expected timeline after reviewing the actual campaign requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
