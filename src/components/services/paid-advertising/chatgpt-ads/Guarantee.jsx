'use client'

import React from 'react'
import { CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react'

const factors = [
  'Offer quality',
  'Market demand',
  'Competition',
  'Budget',
  'Landing-page experience',
  'Conversion tracking',
  'Creative',
  'Campaign structure',
  'Platform delivery',
  'Customer behavior',
]

const commitments = [
  'Structured campaign management',
  'Accurate conversion measurement',
  'Controlled A/B testing',
  'Transparent data reporting',
  'Clear communication on what evidence shows',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            What We Do{' '}
            <span className="italic text-frame-accent">Not Guarantee.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            No responsible advertising agency can guarantee a fixed CPC, conversion rate, ROAS, or revenue outcome before campaign data exists.
          </p>
        </div>

        {/* 2-Column Split: Influencing Factors vs Our Disciplined Commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Reality of Influencing Factors */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 space-y-5">
            <h3 className="font-heading text-2xl font-medium text-white">
              Performance Depends on Factors Including:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {factors.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Our Strict Agency Commitment */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 space-y-5">
            <h3 className="font-heading text-2xl font-medium text-white">
              What We Actually Commit To:
            </h3>

            <ul className="space-y-3 pt-2">
              {commitments.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-2 border-frame-accent bg-frame-accent/10 p-4 rounded-r-lg mt-4">
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Our commitment is to structured campaign management, accurate measurement, controlled testing, transparent reporting, and clear communication about what the available data shows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
