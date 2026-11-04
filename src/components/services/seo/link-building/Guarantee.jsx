'use client'

import React from 'react'
import { Check, X } from 'lucide-react'

const guarantees = [
  'Execution of agreed scope: comprehensive prospecting, personalized pitching, and content creation',
  'Manual outreach only: zero automated spam bots, link farms, or PBN network placements',
  'Placement verification: every reported link is verified live, accessible, and correctly targeted',
  'Transparent reporting: full visibility into targeted sites, communication status, and live URLs',
  'Editorial quality: original content tailored to publisher standards that adds genuine reader value',
]

const nonGuarantees = [
  'A fixed number of accepted placements regardless of publisher response or editorial shifts',
  'Guaranteed publication on a particular third-party website (editor decisions remain outside our control)',
  'A specific Google #1 ranking or arbitrary SERP position from link building alone',
  'A fixed percentage increase in organic search traffic or guaranteed conversion count',
  'Indiscriminate disavowals (Google advises using disavow only for genuine artificial penalty risk)',
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
              Honest Commitments
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            What We Can and{' '}
            <span className="italic text-frame-accent">Can&apos;t Guarantee</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            You deserve clear expectations before an engagement begins. Publisher decisions remain outside our control, so we focus our guarantee on process excellence, rigorous vetting, and total transparency.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* We Guarantee Column */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.04] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Process &amp; Scope SLA
                  </span>
                  <h3 className="font-heading text-xl font-medium text-white">
                    What We Can Guarantee
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {guarantees.map((item, idx) => (
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

          {/* We Can't Guarantee Column */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/15 text-rose-400">
                  <X className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-rose-400">
                    Third-Party Autonomy
                  </span>
                  <h3 className="font-heading text-xl font-medium text-white">
                    What We Cannot Guarantee
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {nonGuarantees.map((item, idx) => (
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
