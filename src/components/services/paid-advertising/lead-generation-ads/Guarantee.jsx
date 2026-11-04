'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'

const variables = [
  'Underlying offer & pricing competitiveness',
  'Commercial market demand & urgency',
  'Competitor advertising & aggressive bids',
  'Sales team follow-up speed & contact rate',
  'Internal sales closing acumen & proposal quality',
  'Length and complexity of client buying cycle',
  'Ad platform algorithm volatility',
  'Economic conditions in target territory',
]

const commitments = [
  'Rigorous multi-channel campaign strategy tailored to buyer intent',
  'Rock-solid tracking with browser pixel + server-side CAPI resilience',
  'Friction-calibrated qualification questions filtering casual tire-kickers',
  'Sub-minute automated CRM lead routing with instant rep notifications',
  'Continuous quality-weighted optimization guided by sales feedback',
  'Closed-loop reporting measuring Cost Per Qualified Lead (CPQL) and CAC',
  '100% client administrative ownership of all ad accounts, tags, and CRM assets',
  'Direct communication and rapid strategic adjustments from our Dhaka team',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What We{' '}
            <span className="italic text-frame-accent">Commit To.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We do not make fictitious promises of guaranteed fixed CPLs or specific numbers of closed customers. Commercial sales outcomes depend on variables such as offer competitiveness, pricing, market demand, and your sales team&apos;s follow-up speed outside any agency&apos;s control.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:p-10 space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold mb-3">
              Market &amp; Operational Variables Beyond Any Agency&apos;s Control:
            </p>
            <div className="flex flex-wrap gap-2">
              {variables.map((v) => (
                <span
                  key={v}
                  className="rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-xs text-zinc-400"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.06]">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-4">
              Our Non-Negotiable Management Commitments:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {commitments.map((c) => (
                <div key={c} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
