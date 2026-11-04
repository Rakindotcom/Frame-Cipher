'use client'

import React from 'react'
import { Check, X } from 'lucide-react'

const commitments = [
  'Defined project deliverables',
  'International market research',
  'Documented SEO strategy',
  'Technical implementation within scope',
  'Hreflang validation & mapping',
  'Market-specific keyword research',
  'Localization recommendations',
  'Reporting and empirical analysis',
  'Ongoing optimization recommendations',
]

const nonGuarantees = [
  'A #1 ranking in any country',
  'A specific ranking position',
  'A fixed traffic increase',
  'A fixed number of leads',
  'Guaranteed revenue',
  'A specific market-entry ranking date',
  'Permanent rankings',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Transparent Commitments</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            What International SEO{' '}
            <span className="italic text-frame-accent">Can and Can&apos;t Guarantee</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            International SEO depends on competition, content quality, authority, search demand, technical implementation, user behavior, and search-engine systems outside any agency&apos;s direct control.
          </p>
        </div>

        {/* 2 Column Comparison: Commitments vs What We Cannot Guarantee */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Commitments Card */}
          <div className="flex flex-col justify-between rounded-xl border border-frame-accent/40 bg-[#14121a] p-7 md:p-9 shadow-lg">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                Empirical Engineering // What We Commit To
              </span>
              <h3 className="mt-3 font-heading text-2xl font-medium tracking-tight text-white">
                What We Commit To
              </h3>
              <p className="mt-3 text-sm text-zinc-300">
                Depending on the agreed scope, Framecipher can commit to:
              </p>
              <ul className="mt-6 space-y-3">
                {commitments.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-zinc-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-frame-accent/20 text-frame-accent border border-frame-accent/30">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Non-Guarantees Card */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-9">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                Ethical Policy // Algorithmic Realities
              </span>
              <h3 className="mt-3 font-heading text-2xl font-medium tracking-tight text-white">
                What We Cannot Guarantee
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
                We do not guarantee:
              </p>
              <ul className="mt-6 space-y-3">
                {nonGuarantees.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-zinc-400">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                      <X className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 rounded-lg border border-white/[0.06] bg-[#18181B] p-4 text-xs sm:text-sm text-zinc-400">
              <p className="leading-relaxed">
                Our focus is to build a technically sound, market-specific SEO foundation and improve it through ongoing analysis, implementation, and performance data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
