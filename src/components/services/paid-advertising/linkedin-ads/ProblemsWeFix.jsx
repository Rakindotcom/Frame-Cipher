'use client'

import React from 'react'
import { AlertCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const problems = [
  {
    title: 'Poor ICP Definition',
    body: [
      'A LinkedIn campaign cannot target the right professional audience if the business has not clearly defined whom it wants to acquire. We translate the sales team’s understanding of the ideal customer into practical targeting criteria.',
    ],
  },
  {
    title: 'Overly Broad Professional Targeting',
    body: [
      'Adding more job titles, industries, and company sizes does not automatically produce a better audience. We review whether targeting reflects the actual customer profile and buying committee without creating unnecessary audience fragmentation.',
    ],
  },
  {
    title: 'High Lead Volume but Low Lead Quality',
    body: [
      'A large number of submissions can hide a weak campaign. We evaluate leads against the business’s actual qualification criteria so reporting can distinguish between form volume and commercially relevant prospects.',
    ],
  },
  {
    title: 'Weak B2B Creative & Messaging',
    body: [
      'Professional audiences still need a reason to engage. We identify whether the campaign clearly communicates the problem, value, proof, differentiation, and next step for the audience being targeted.',
    ],
  },
  {
    title: 'Campaigns Disconnected From Sales',
    body: [
      'Stopping measurement at the form submission makes it difficult to understand whether advertising is producing useful opportunities. Where CRM or qualified-lead data is available, we connect campaign measurement with the downstream sales process.',
    ],
  },
  {
    title: 'Fragmented Account Structure',
    body: [
      'Too many campaigns or narrow audience segments can divide budget and make performance harder to interpret. We consolidate or restructure campaigns where the available data and objectives support a simpler account structure.',
    ],
  },
  {
    title: 'Weak Conversion & Attribution Measurement',
    body: [
      'Incomplete tracking can lead to misleading reporting and weaker optimization signals. We review the Insight Tag, conversion definitions, CRM or CAPI connections, UTM structure, and data flow where applicable.',
    ],
  },
]

export default function ProblemsWeFix() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Common LinkedIn Ads{' '}
            <span className="italic text-frame-accent">Problems We Fix.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Underperforming LinkedIn accounts are usually not failing because the platform is weak. They are failing because of targeting, creative, structure, or measurement problems inside the account.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    Problem 0{index + 1}
                  </span>
                  <AlertCircle className="h-4 w-4 text-zinc-600 group-hover:text-frame-accent transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {problem.title}
                </h3>
                <div className="space-y-2 text-sm font-normal leading-relaxed text-zinc-300">
                  {problem.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Audit CTA Card */}
          <div className="relative flex flex-col justify-between bg-[#121214] bg-frame-accent/10 p-6 md:p-7 space-y-4">
            <div className="space-y-3">
              <h3 className="font-heading text-xl font-medium text-white">
                Not sure which problem your account has?
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                Every engagement starts with an account review that identifies what is actually happening before any changes are made.
              </p>
            </div>
            <div className="pt-2">
              <PosterButton href="/contact" variant="accent" className="w-full">
                Get Your Account Reviewed &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
