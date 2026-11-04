'use client'

import React from 'react'
import {
  Compass,
  Search,
  MapPin,
  Presentation,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Compass,
    title: 'Initial Discovery',
    description:
      'We review your commercial business goals, current SEO performance benchmarks, internal developer/writer team capacity, and existing technical constraints before proposing any solutions.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Audit & Assessment',
    description:
      'An empirical technical, content architecture, and competitor SERP review to uncover where you genuinely stand right now and where high-intent ranking opportunities remain untapped.',
  },
  {
    step: '03',
    icon: MapPin,
    title: 'Roadmap Development',
    description:
      'A prioritized, resource-realistic growth blueprint built specifically around what your team can execute across a clear 30/60/90-day trajectory.',
  },
  {
    step: '04',
    icon: Presentation,
    title: 'Strategy Walkthrough',
    description:
      'We present the roadmap directly to your marketing leads and engineering teams, resolving edge cases, clarifying prioritization logic, and tailoring items based on your feedback.',
  },
  {
    step: '05',
    icon: CheckCircle2,
    title: 'Ongoing Advisory or Handoff',
    description:
      'Continued fractional strategic oversight and quarterly reviews if you want executive guidance, or a clean, documented handoff to your internal team if that fits your workflow better.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Execution Framework
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            How We Approach <span className="italic text-frame-accent">SEO Strategy &amp; Consulting</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Understanding your actual operating situation and constraints always comes before prescribing technical recommendations or content initiatives.
          </p>
        </div>

        {/* 5-Step Process Sequence in Responsive Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => {
            const Icon = s.icon
            const isLast = idx === steps.length - 1
            return (
              <div
                key={s.step}
                className={`group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8 ${
                  isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                      Step {s.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                    {s.description}
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
