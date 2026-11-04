'use client'

import React from 'react'
import { Check, X } from 'lucide-react'

const commitments = [
  'You receive a defined review and preparation process based on the scope of your project.',
  'That includes documented findings, prioritized recommendations, agreed implementation work, and a pre-application check where included in your package.',
  'We also commit to giving you a clear assessment rather than telling you to apply simply because you have paid for the service.',
]

const nonGuarantees = [
  'We cannot guarantee AdSense approval, a specific review time, a particular revenue level, or a specific advertising outcome.',
  'Google makes the final eligibility and site-review decisions, and publishers remain responsible for complying with Google’s policies.',
  'We also cannot guarantee approval based on a fixed number of articles, traffic level, domain age, or any other unofficial formula because Google does not publish such a universal approval formula.',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Honest Integrity // Clear Expectations</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            What We <span className="italic text-frame-accent">Guarantee</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We are explicit about what is promised and what isn&apos;t, so deliverables match
            expectations rather than promoting an unsupported outcome.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* What We Deliver */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 space-y-6">
            <div>
              <span className="font-mono text-xs font-semibold text-emerald-400 tracking-widest uppercase">
                What We Deliver
              </span>
              <h3 className="mt-2 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                A defined preparation process
              </h3>
            </div>
            <ul className="space-y-3.5 border-t border-white/[0.06] pt-5">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Cannot Guarantee */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 space-y-6">
            <div>
              <span className="font-mono text-xs font-semibold text-zinc-400 tracking-widest uppercase">
                What We Cannot Guarantee
              </span>
              <h3 className="mt-2 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Outcomes we don&apos;t control
              </h3>
            </div>
            <ul className="space-y-3.5 border-t border-white/[0.06] pt-5">
              {nonGuarantees.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
                    <X className="h-2.5 w-2.5" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 text-xs sm:text-sm leading-relaxed text-zinc-400 border-l-4 border-l-frame-accent">
          <p>
            Google&apos;s review process sits outside any provider&apos;s control. Our responsibility
            is to prepare your site as thoroughly as possible, document the work, and check it again
            before you submit.
          </p>
        </div>
      </div>
    </section>
  )
}
