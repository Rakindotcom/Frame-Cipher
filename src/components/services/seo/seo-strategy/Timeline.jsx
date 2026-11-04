'use client'

import React from 'react'
import { Clock, Calendar, Users, CheckCircle2 } from 'lucide-react'

const timelines = [
  {
    phase: '01',
    icon: Clock,
    timeframe: 'Within 2 Weeks',
    title: 'Single Strategy Sprint',
    description:
      'A standalone strategy session or Audit-to-Roadmap package typically wraps within 2 weeks of kick-off—spanning stakeholder discovery, competitive deep-dive, roadmap drafting, and the live executive walkthrough session.',
  },
  {
    phase: '02',
    icon: Calendar,
    timeframe: 'Month-to-Month or Quarterly',
    title: 'Fractional Advisory & Leadership',
    description:
      'Ongoing advisory engagements run on a flexible month-to-month or quarterly cadence with regular check-ins, sprint calibrations, and algorithm update guidance rather than an arbitrary locked end date.',
  },
  {
    phase: '03',
    icon: Users,
    timeframe: 'Custom Scoped (2–6 Weeks)',
    title: 'Team Training & Enablement',
    description:
      'Training timelines vary based on how much internal capability needs to be established and how many department members are participating. Scoped individually based on your team’s verified baseline.',
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Realistic Expectations
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Timeline &amp; <span className="italic text-frame-accent">Engagement Duration</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Strategy engagements take distinct operational shapes, so timelines depend directly on whether you need a single roadmap sprint, ongoing fractional advisory, or team enablement.
          </p>
        </div>

        {/* 3-Column Timeline Surface Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {timelines.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.phase}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent uppercase">
                      Timeline 0{item.phase}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-xs font-semibold text-emerald-400 border border-white/[0.06]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>{item.timeframe}</span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                    {item.description}
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
