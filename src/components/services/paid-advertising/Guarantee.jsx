'use client'

import React from 'react'
import { CheckCircle2, XCircle, ShieldCheck } from 'lucide-react'
import PosterButton from '../../home/PosterButton'

const commitments = [
  'Transparent reporting',
  'Clear management fees',
  'Agreed campaign and budget controls',
  'Conversion tracking setup and validation',
  'Documented campaign changes',
  'Ongoing optimization against agreed goals',
  'Clear communication about performance and issues',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What We <span className="italic text-frame-accent">Guarantee.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We believe paid advertising should come with transparency, not promises that depend on factors outside an agency&apos;s control.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: What We Guarantee */}
          <div className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-8 md:p-10 space-y-6 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  What We Guarantee (Scope Commitments)
                </span>
                <span className="h-2 w-2 rounded-full bg-frame-accent" />
              </div>

              <ul className="space-y-3">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-200">
                    <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <PosterButton href="/contact" variant="accent">
                Talk to the Framecipher Media Team &rarr;
              </PosterButton>
            </div>
          </div>

          {/* Right: What We Do Not Guarantee */}
          <div className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-8 md:p-10 space-y-6 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-zinc-500" />
                  What We Do Not Guarantee (Realistic Factors)
                </span>
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
              </div>

              <div className="space-y-4 text-sm font-normal leading-relaxed text-zinc-300">
                <p>
                  We do not guarantee a specific ROAS, cost per lead, cost per acquisition, number of sales, or revenue figure.
                </p>
                <p>
                  Advertising performance also depends on factors such as your offer, pricing, market competition, website experience, product quality, sales process, seasonality, platform conditions, and customer demand.
                </p>
                <p>
                  Our responsibility is to build, manage, measure, test, and optimize the campaign professionally while reporting the results honestly.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 font-mono text-[11px] text-zinc-400">
              <span className="text-frame-accent font-semibold block mb-1">AGENCY PHILOSOPHY:</span>
              Empirical accountability and transparent testing over manufactured marketing guarantees.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
