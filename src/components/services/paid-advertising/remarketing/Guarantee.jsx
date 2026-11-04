'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'

const variables = [
  'Website traffic volume',
  'Traffic quality & commercial intent',
  'Offer & price competitiveness',
  'Underlying product demand',
  'Landing page checkout conversion rate',
  'Length of customer decision journey',
  'Ad platform algorithm delivery shifts',
  'User cookie consent opt-in rates',
]

const commitments = [
  'Rigorous tracking implementation with browser pixel + server-side CAPI resilience',
  'Clear behavioral audience segmentation (no generic 30-day "all visitors" traps)',
  'Strict negative suppression rules ensuring purchasers never see acquisition ads',
  'Active frequency cap calibration to eliminate ad burnout and banner fatigue',
  'Multi-stage sequential creative testing addressing objections and social proof',
  '100% administrative client ownership of accounts, pixels, and first-party data',
  'Transparent executive reporting measuring true incremental conversion lift',
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
            We do not make fictitious promises of guaranteed 10x ROAS or specific recovered revenue totals. Remarketing performance depends on factors such as incoming traffic quality, offer strength, customer decision speed, and market demand outside any agency’s unilateral control.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:p-10 space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold mb-3">
              Market Variables Beyond Any Agency&apos;s Direct Control:
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
