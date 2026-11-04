'use client'

import React from 'react'
import { CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react'

const resultFactors = [
  'ICP quality',
  'Offer strength',
  'Deal value',
  'Sales cycle',
  'Market size',
  'Competition',
  'Creative quality',
  'Landing-page experience',
  'Lead follow-up speed',
  'Sales process',
  'Audience availability',
  'Advertising budget',
  'Tracking quality',
]

const commitments = [
  'Clear ICP definition',
  'Deliberate audience targeting',
  'Appropriate campaign objectives',
  'Reliable conversion measurement',
  'Creative testing',
  'Lead-quality review',
  'Transparent reporting',
  'Ongoing optimization',
  'Strategy adjustments based on evidence',
]

export default function PerformanceCommitment() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Performance Expectations{' '}
            <span className="italic text-frame-accent">&amp; Service Commitment.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            LinkedIn Ads performance depends on factors beyond campaign management.
          </p>
        </div>

        {/* 2-Column Split: Influencing Factors vs Disciplined Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Reality of B2B Results */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-medium text-white mt-1">
                Factors Beyond Account Management
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {resultFactors.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/[0.06] pt-5">
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                We therefore do not promise a fixed cost per lead, number of opportunities, revenue figure, or return on ad spend before understanding the business and market.
              </p>
            </div>
          </div>

          {/* Right Column: Disciplined Management Process */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-medium text-white mt-1">
                A Disciplined Management Process
              </h3>
            </div>

            <ul className="space-y-2.5">
              {commitments.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 border-b border-white/[0.04] pb-2 text-xs sm:text-sm text-zinc-300"
                >
                  <span className="font-mono text-[11px] text-frame-accent font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-2 border-frame-accent bg-frame-accent/10 p-4 rounded-r-lg">
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                LinkedIn Ads are not the right acquisition channel for every business. Where the target audience, deal economics, or sales process do not support the platform, we would rather identify that early than encourage unnecessary spend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
