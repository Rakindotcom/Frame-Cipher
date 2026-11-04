'use client'

import React from 'react'
import { Clock, Calendar, CheckCircle2 } from 'lucide-react'

const timelineFactors = [
  'Industry competitiveness',
  'Existing domain authority baseline',
  'Target market or multi-country scope',
  'Publisher availability in the niche',
  'Content development requirements',
  'Outreach response rates & editorial interest',
  'Publisher editorial review cycles',
  'Number of priority target pages referenced',
  'Overall campaign scope and resource tier',
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Realistic Delivery Cadence
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How Long Does{' '}
            <span className="italic text-frame-accent">Link Building Take?</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Off-page SEO is usually an ongoing process because the main work depends on research, publisher response, content development, editorial review, and live publication.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Narrative & Cadence Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                <Clock className="h-5 w-5 text-frame-accent" />
                <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                  Initial Audit: 1 Week Delivery
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                An initial backlink audit and competitor gap analysis can typically be completed within one week, depending on website size, link history, and Search Console data access.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                <Calendar className="h-5 w-5 text-emerald-400" />
                <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                  Ongoing Monthly Progression
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                A campaign may produce placements at varying cadences rather than all at once. Some editors respond within days, while high-tier trade publications require weeks of revision and editorial scheduling.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Search performance also takes time to evaluate as Google discovers, recrawls, and recalculates PageRank across referencing domains. For that reason, we do not promise fixed ranking improvements after arbitrary date thresholds.
              </p>
            </div>
          </div>

          {/* Timeline Factors List (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Velocity Variables
            </span>
            <h3 className="mt-2 font-heading text-xl font-medium text-white">
              Campaign timelines vary based on:
            </h3>

            <ul className="mt-6 space-y-3">
              {timelineFactors.map((factor, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
