'use client'

import React from 'react'
import { Check, X } from 'lucide-react'

const commitments = [
  'A defined, data-driven local SEO roadmap tailored to your locations',
  'Clear implementation across GBP, on-page content, and citations',
  'Consistent weekly and monthly profile optimization and review monitoring',
  'Transparent reporting of geo-grid movements, phone calls, and direction clicks',
  'Data-led refinement adapting to competitor moves and algorithm changes',
  '100% adherence to Google Business Profile guidelines and review policies',
  'Clear and honest communication on all work completed and verified',
]

const nonPromises = [
  'A permanent Google Maps position that never fluctuates with user location',
  'A guaranteed #1 ranking on Google Maps (Google’s algorithm remains autonomous)',
  'A fixed number of inbound leads or customer walk-ins regardless of market demand',
  'A rigid ranking date or instantaneous overnight Map Pack domination',
  'Unlimited geographic visibility across cities without physical or verified presence',
  'Guaranteed sales conversions from search traffic alone without sales execution',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Honest SLA // Clear Expectations
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            What We Can and{' '}
            <span className="italic text-frame-accent">Can&apos;t Guarantee</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Local SEO operates within search systems controlled by Google. We focus on maximizing every factor we can control and delivering verifiable business growth.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Commitments Column */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.04] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Process &amp; Scope Commitments
                  </span>
                  <h3 className="font-heading text-xl font-medium text-white">
                    What We Commit To
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {commitments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-200">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Non Promises Column */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/15 text-rose-400">
                  <X className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-rose-400">
                    Search Engine Autonomy
                  </span>
                  <h3 className="font-heading text-xl font-medium text-white">
                    What We Cannot Promise
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {nonPromises.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-400">
                      <X className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
