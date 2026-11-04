'use client'

import React from 'react'
import { Clock } from 'lucide-react'

const timelineRows = [
  { project: 'International SEO Audit', duration: '1–2 weeks' },
  { project: 'Single-Market Expansion', duration: '3–6 weeks' },
  { project: 'Multi-Market Setup', duration: '6–12+ weeks' },
  { project: 'Complex Migration', duration: 'Depends on site size and migration scope' },
  { project: 'Ongoing International SEO', duration: 'Continuous' },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Realistic Expectations</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How Long Does{' '}
            <span className="italic text-frame-accent">International SEO Take?</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The timeline depends on the number of markets, site size, languages, technical condition, migration requirements, content volume, and amount of localization involved.
          </p>
        </div>

        {/* 2-Column Split: Explanatory Context & Timeline Matrix */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Realistic Narrative */}
          <div className="lg:col-span-6 space-y-4 text-base font-normal leading-relaxed text-zinc-300">
            <p>
              Technical implementation can often be completed within a defined project window, but ranking growth in a new market does not follow a fixed schedule.
            </p>
            <p className="text-zinc-400">
              New markets need time to establish visibility, relevance, authority, and search demand. Performance can also vary based on competition and the strength of existing websites in the target market.
            </p>
            <p className="text-zinc-400">
              We therefore focus on building the right technical and strategic foundation instead of promising a specific ranking date.
            </p>
          </div>

          {/* Right Column: Architectural Table Card */}
          <div className="lg:col-span-6 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                Project Scope
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                Typical Timeline
              </span>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {timelineRows.map((row) => (
                <div key={row.project} className="py-4 flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base font-medium text-white">
                    {row.project}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-frame-accent shrink-0">
                    {row.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
