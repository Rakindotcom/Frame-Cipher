'use client'

import React from 'react'
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react'

const timelineFactors = [
  'Website size and URL count',
  'CMS or development framework',
  'Number and complexity of technical issues',
  'Developer availability',
  'Migration requirements',
  'Server or hosting changes',
  'Approval and implementation speed',
]

export default function Timeline() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Realistic Expectations // Milestone Forecast
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            How Long Does{' '}
            <span className="italic text-frame-accent">Technical SEO</span> Take?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Implementation time depends on the size and complexity of the website rather than one fixed schedule.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column (7 cols): Timeframes & Measurable Changes */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
                <Clock className="h-4 w-4" />
                <span>Typical Implementation Horizons</span>
              </div>
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                A technical SEO audit can typically be completed within about one week once the required access and information are available.
              </p>
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Implementation time depends on the size and complexity of the website. A standard technical project may take around 2–3 weeks, while larger technical cleanups can take 4–6 weeks or longer.
              </p>
            </div>

            {/* Closing observation */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214]/60 p-6 sm:p-7 flex items-start gap-4">
              <AlertCircle className="h-5 w-5 shrink-0 text-frame-accent mt-0.5" />
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Technical fixes can sometimes produce measurable changes within weeks, but there is no fixed timeline for ranking improvements.
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): Factors */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white mb-2">
              The time required can depend on:
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Key variables influencing engineering turnaround
            </p>

            <div className="space-y-3">
              {timelineFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 border-b border-white/[0.06] pb-3 text-sm text-zinc-300 font-normal"
                >
                  <span className="font-mono text-xs font-semibold text-frame-accent">
                    0{idx + 1}
                  </span>
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
