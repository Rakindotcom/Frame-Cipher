'use client'

import React from 'react'
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const controlled = [
  'Content strategy framework',
  'Content pillars mapping',
  'Master content calendar',
  'Campaign coordination',
  'Platform-specific planning',
  'Repurposing roadmap',
  'Approval workflow setup',
  'Planning & review process',
  'Calendar maintenance where included',
]

const notGuaranteed = [
  'Specific algorithmic reach',
  'Specific engagement rates',
  'Guaranteed follower growth',
  'Guaranteed incoming leads',
  'Guaranteed direct sales',
  'Guaranteed commercial revenue',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Service Commitments · Integrity
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What We <span className="italic text-frame-accent">Commit To.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A content calendar alone cannot guarantee specific business results. We separate what we control from what depends on execution, audience response, and broader marketing activity.
          </p>
        </div>

        {/* 2-Column Ledger Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* What We Control */}
          <div className="rounded-2xl border border-purple-500/30 bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/50 hover:bg-[#15121C]">
            <div className="space-y-2 border-b border-white/[0.08] pb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  100% Operational Accountability
                </span>
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                What We Control &amp; Deliver
              </h3>
              <p className="text-xs text-zinc-400">
                Within the agreed scope, we commit to delivering an organized content planning system:
              </p>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              {controlled.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              We communicate scope, responsibilities, timelines, and deliverables before work begins so there are zero surprises.
            </div>
          </div>

          {/* What We Don't Guarantee */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#15121C]">
            <div className="space-y-2 border-b border-white/[0.08] pb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  External Variables
                </span>
                <span className="font-mono text-[10px] text-zinc-500">No False Claims</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                What We Don’t Guarantee
              </h3>
              <p className="text-xs text-zinc-400">
                A content calendar alone cannot guarantee:
              </p>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              {notGuaranteed.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-white/[0.02] text-zinc-500 mt-0.5">
                    <X className="h-2.5 w-2.5 stroke-[2.5]" />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              Actual performance depends on factors including content quality, audience response, platform distribution, competition, offer strength, creative execution, account history, market conditions, and other marketing activities.
            </div>
          </div>
        </div>

        {/* Commitment Statement Footer */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Our Core Operational Role
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Our role is to create a clear and practical content system that gives your business a stronger foundation for consistent execution, measurement, and improvement.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get a Content Strategy Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
