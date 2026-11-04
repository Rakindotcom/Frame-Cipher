'use client'

import React from 'react'
import { ShieldCheck, ShieldAlert, Check, X } from 'lucide-react'

const commitments = [
  'A defined SEO scope',
  'Structured research and strategy',
  'Technical recommendations',
  'Implementation within the agreed scope',
  'Product and category optimization',
  'Transparent reporting',
  'Data-based recommendations',
  'Review and approval before agreed changes go live',
]

const nonGuarantees = [
  '#1 Google rankings',
  'A specific traffic increase',
  'A fixed number of sales',
  'A fixed revenue amount',
  'A specific ranking date',
  'Permanent rankings for individual keywords',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Ethical Framework // Honest Guarantees
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            What Ecommerce SEO{' '}
            <span className="italic text-frame-accent">Can and Can&apos;t Guarantee</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            SEO performance depends on many factors outside an agency&apos;s direct control. Search algorithms, competitors, market demand, product quality, pricing, seasonality, and website conversion rates can all affect results.
          </p>
        </div>

        {/* 2-Column Split: Commitments vs What Cannot Guarantee */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* What We Commit To */}
          <div className="rounded-2xl border border-emerald-500/30 bg-[#121614] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Transparent Standards
                  </span>
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-white">
                    What We Commit To
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3 border-t border-emerald-500/20 pt-5">
                {commitments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 font-mono text-[11px] text-zinc-400 italic border-t border-emerald-500/10 pt-4">
              &rarr; We deliver rigorous engineering and documented milestones that you approve at every step.
            </p>
          </div>

          {/* What We Cannot Guarantee */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <ShieldAlert className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Realistic Expectations
                  </span>
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-white">
                    What We Cannot Guarantee
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-5">
                {nonGuarantees.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <X className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 font-mono text-[11px] text-zinc-400 italic border-t border-white/[0.06] pt-4">
              &rarr; Instead, we focus on work that can be planned, implemented, measured, and improved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
