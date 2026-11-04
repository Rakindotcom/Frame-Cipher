'use client'

import React from 'react'
import { ShieldCheck, ShieldAlert, Check, X } from 'lucide-react'

const youReceive = [
  'A structured SEO audit report',
  'Prioritized findings',
  'Evidence and explanations',
  'Recommended actions',
  'Effort and implementation guidance',
  'Relevant competitive insights',
  'A findings walkthrough',
  'Next-step recommendations',
]

const dontGuarantee = [
  'A #1 ranking',
  'A specific ranking position',
  'A fixed traffic increase',
  'A fixed number of leads',
  'Guaranteed revenue',
  'A specific recovery date',
  'Permanent rankings',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Ethical Boundaries // Honest Diagnosis
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            What We{' '}
            <span className="italic text-frame-accent">Guarantee</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            An SEO audit should provide clear, documented findings within the agreed scope. We aim to make the report useful to both technical and non-technical stakeholders.
          </p>
        </div>

        {/* 2-Column Split: What You Receive vs What We Don't Guarantee */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* What You Receive */}
          <div className="rounded-2xl border border-emerald-500/30 bg-[#121614] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Definitive Output
                  </span>
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-white">
                    What You Receive
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3 border-t border-emerald-500/20 pt-5">
                {youReceive.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 font-mono text-[11px] text-zinc-400 italic border-t border-emerald-500/10 pt-4">
              &rarr; You receive documented evidence and practical engineering steps your team can immediately deploy.
            </p>
          </div>

          {/* What We Don't Guarantee */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <ShieldAlert className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Realistic Limitations
                  </span>
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-white">
                    What We Don&apos;t Guarantee
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-5">
                {dontGuarantee.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <X className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 font-mono text-[11px] text-zinc-400 italic border-t border-white/[0.06] pt-4">
              &rarr; Our responsibility is to provide an honest diagnosis, clear evidence, and practical priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
