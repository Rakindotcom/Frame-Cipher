'use client'

import React from 'react'
import { AlertTriangle, XCircle, ArrowRight } from 'lucide-react'

const warnings = [
  'Website traffic is too low (< 1,000 monthly active visitors) to accumulate minimum audience match sizes.',
  'Monthly conversion volume is insufficient to give ad platform algorithms enough optimization signals.',
  'The buying decision is an instantaneous low-ticket impulse where shoppers decide in under 60 seconds.',
  'Underlying pixel, tracking, or tag implementation is broken or missing across checkout gateways.',
  'Consent management or regional privacy restrictions severely restrict audience pool creation.',
  'The core product or offer has not yet achieved validated market acceptance or customer demand.',
  'Media budget is better invested in high-intent Google Search or top-of-funnel paid social prospecting.',
  'Severe audience overlap across campaigns is causing self-competition and inflated CPMs.',
]

export default function WhenNotRight() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-red-500/20 bg-red-950/[0.08] p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl mb-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              When Remarketing May{' '}
              <span className="italic text-red-400">Not Be the Right Move.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Remarketing is a multiplier of existing interest. It cannot generate interest out of thin air. Increasing your remarketing budget is usually premature when:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {warnings.map((w) => (
              <div
                key={w}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#121214] p-4 text-sm text-zinc-300 font-normal leading-relaxed"
              >
                <XCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
                <span>{w}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-black/40 p-5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>
              In these situations, focusing capital on high-intent search acquisition, offer validation, and conversion rate optimization (CRO) should take priority before building complex remarketing funnels.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-frame-accent hover:underline shrink-0"
            >
              <span>Get an Honest Audience Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
