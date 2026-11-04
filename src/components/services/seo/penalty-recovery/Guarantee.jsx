import React from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Honest Terms &amp; Scope
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            What We Guarantee
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            We promise a documented, evidence-based recovery process. We do not make false promises on outcomes that Google alone decides.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: What We Deliver */}
          <div className="rounded-2xl border border-emerald-500/30 bg-[#121214] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="h-5 w-5" />
              <span>What We Deliver</span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
              Documented, Evidence-Based Process
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed">
              We commit to a documented, evidence-based process within the agreed scope of your engagement.
            </p>

            <div className="rounded-xl border border-white/[0.06] bg-[#18181B] p-4 text-xs text-zinc-300 leading-relaxed">
              Depending on the selected service, that can include a root-cause investigation, written findings, prioritized remediation plan, implementation work, reconsideration documentation, and recovery monitoring.
            </div>
          </div>

          {/* Card 2: What We Cannot Guarantee */}
          <div className="rounded-2xl border border-rose-500/30 bg-[#121214] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <XCircle className="h-5 w-5" />
              <span>What We Cannot Guarantee</span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
              No Fabricated Timelines or Ranking Promises
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed">
              We do not guarantee restored rankings, recovered traffic, successful reconsideration, a specific Google review time, or a specific recovery date.
            </p>

            <div className="rounded-xl border border-white/[0.06] bg-[#18181B] p-4 text-xs text-zinc-300 leading-relaxed space-y-2">
              <p>
                A manual-action decision remains with Google, while algorithmic recovery depends on how Google&apos;s systems reassess the site after improvements.
              </p>
              <p className="font-medium text-white">
                Our commitment is to diagnose the issue carefully, address the identified cause within the agreed scope, document the work, and report the evidence honestly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
