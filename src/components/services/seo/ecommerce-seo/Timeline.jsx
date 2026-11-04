'use client'

import React from 'react'
import { Calendar, CheckCircle2, Clock } from 'lucide-react'

const milestones = [
  {
    phase: 'Phase 01',
    timeframe: 'First Week',
    title: 'Initial Store & Catalog Audit',
    description: 'Comprehensive crawl of store URLs, canonicalization checks, indexation analysis, technical errors, and high-intent keyword mapping across catalog categories.',
  },
  {
    phase: 'Phase 02',
    timeframe: '2–4 Weeks',
    title: 'Small-Store Technical Improvements',
    description: 'Initial implementation of priority fixes: product schema markup, duplicate URL resolution, category hierarchy structuring, and title/meta optimization.',
  },
  {
    phase: 'Phase 03',
    timeframe: '6–10 Weeks or Longer',
    title: 'Large Catalog Technical Work',
    description: 'Scalable architecture fixes for large stores: faceted navigation cleanup, pagination rules, internal linking algorithms, and developer-level template updates.',
  },
  {
    phase: 'Phase 04',
    timeframe: 'Ongoing Monthly',
    title: 'Continuous Optimization & Revenue Expansion',
    description: 'Continuous optimization based on performance data: seasonal campaign optimization, new product launches, link acquisition, and conversion testing.',
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Expectations &amp; Horizons // Realistic Trajectory
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How Long Does{' '}
            <span className="italic text-frame-accent">Ecommerce SEO Take?</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Ecommerce SEO does not have a fixed ranking timeline. The time required depends on your catalog size, technical condition, competition, authority, content quality, implementation speed, and search demand.
          </p>
        </div>

        {/* 4 Milestones Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    {item.phase}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
                    <Clock className="h-3 w-3 text-zinc-400" />
                    <span>{item.timeframe}</span>
                  </div>
                </div>

                <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 border-t border-white/[0.06] pt-4 font-mono text-[10px] text-emerald-400">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                <span>Documented Milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 text-xs sm:text-sm text-zinc-300 leading-relaxed flex items-center gap-4">
          <Calendar className="h-6 w-6 text-frame-accent shrink-0" />
          <p>
            Technical fixes can be completed relatively quickly. Organic ranking, traffic, and revenue changes usually take longer to develop. We track progress throughout the engagement rather than promising a specific ranking date.
          </p>
        </div>
      </div>
    </section>
  )
}
