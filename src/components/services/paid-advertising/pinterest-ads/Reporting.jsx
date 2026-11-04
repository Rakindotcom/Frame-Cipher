'use client'

import React from 'react'
import { BarChart3, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react'

const metrics = [
  'Impressions & Pin Clicks',
  'Outbound Clicks & CTR',
  'Cost Per Click (CPC)',
  'Total Spend & Budget Pacing',
  'Organic Pin Saves & Repins',
  'Purchases & Conversion Volume',
  'Conversion Rate (CVR)',
  'Cost Per Acquisition (CPA)',
  'Return on Ad Spend (ROAS)',
  'Product Group Performance',
  'Audience & Search Query Breakdown',
  'Creative Asset Fatigue Signals',
]

export default function Reporting() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Reporting &amp; Performance{' '}
            <span className="italic text-frame-accent">Expectations.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Reporting should explain commercial performance, not simply vomit vanity metrics. We interpret the numbers within the economics of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tracked KPI Matrix (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                <BarChart3 className="h-4 w-4" />
              </span>
              <h3 className="font-heading text-xl font-medium text-white">
                Tracked Metrics &amp; Diagnostic Signals
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {metrics.map((m, idx) => (
                <div key={idx} className="flex items-center gap-2.5 rounded-lg border border-white/[0.04] bg-white/[0.02] p-3">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0" />
                  <span className="font-mono text-xs text-zinc-300 truncate">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Commercial Reality Checks (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6">
              <div className="flex items-center gap-2.5 mb-2.5 text-zinc-300">
                <AlertCircle className="h-4 w-4 text-frame-accent" />
                <h4 className="font-heading text-sm font-medium text-white">
                  CTR Does Not Guarantee Profit
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                A high Click-Through Rate or save rate on an attractive Pin means little if post-click traffic bounces. We optimize for downstream checkouts and qualified actions.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6">
              <div className="flex items-center gap-2.5 mb-2.5 text-zinc-300">
                <AlertCircle className="h-4 w-4 text-frame-accent" />
                <h4 className="font-heading text-sm font-medium text-white">
                  Lower CPC Is Not Always Better
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Cheap clicks from low-intent demographic clusters often dilute conversion rates. We prioritize high-intent outbound clicks that convert into revenue.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6">
              <div className="flex items-center gap-2.5 mb-2.5 text-zinc-300">
                <AlertCircle className="h-4 w-4 text-frame-accent" />
                <h4 className="font-heading text-sm font-medium text-white">
                  ROAS Context vs. Net Scale
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                A 10x ROAS on a microscopic budget does not move the needle for an enterprise. We balance optimal return with achievable scale across target territories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
