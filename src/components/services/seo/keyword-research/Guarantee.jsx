'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2, AlertCircle, Check, Minus } from 'lucide-react'

const received = [
  'Structured, multi-platform keyword research dataset',
  'Search-intent classification (Informational, Commercial, Transactional)',
  'Direct & indirect competitor gap analysis',
  'Topical cluster & SILO hierarchy maps',
  '1-to-1 Keyword-to-URL architectural mapping',
  'RICE-scored priority keyword opportunity list',
  'Granular content planning inputs & editorial angles',
  'Market-specific keyword recommendations (Bangladesh & Global)',
  'A clear, defensible final delivery ready for writers & devs',
]

const nonGuarantees = [
  'An automatic #1 ranking for any specific keyword',
  'A guaranteed ranking position within an arbitrary timeline',
  'A fixed percentage traffic increase without content execution',
  'A fixed number of inbound leads or conversions',
  'Guaranteed commercial revenue without execution quality',
  'A fixed ranking timeframe that ignores competitor velocity',
  'Permanent search visibility immune to core algorithm updates',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              Clear Expectations
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            What We <span className="italic text-frame-accent">Guarantee</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Keyword research must equip your team with a structured, defensible, and empirically grounded search strategy within the agreed scope.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* What You Receive Card */}
          <div className="rounded-2xl border border-emerald-500/30 bg-[#121415] p-7 sm:p-9 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                <span>What You Receive</span>
              </div>
              <h3 className="mt-2 font-heading text-2xl font-medium tracking-tight text-white">
                Deliverables Within Our Direct Control
              </h3>
            </div>

            <ul className="space-y-3">
              {received.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Don't Guarantee Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-9 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase tracking-wider">
                <AlertCircle className="h-4 w-4 text-frame-accent" />
                <span>Outcomes We Don&apos;t Control</span>
              </div>
              <h3 className="mt-2 font-heading text-2xl font-medium tracking-tight text-white">
                Honest Ranking &amp; Commercial Realities
              </h3>
            </div>

            <ul className="space-y-3">
              {nonGuarantees.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.04] text-zinc-500 border border-white/[0.08] mt-0.5">
                    <Minus className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Reality Note */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#14121A] p-7 md:p-8">
          <p className="text-sm font-normal leading-relaxed text-zinc-300">
            Keyword research identifies and prioritizes market opportunities. Actual organic ranking performance depends on technical code execution, content depth, domain authority acquisition, competition counter-moves, search demand seasonality, and ongoing conversion optimization. Our responsibility is to deliver a rigorous, strategically prioritized keyword framework your developers and writers can execute with certainty.
          </p>
        </div>
      </div>
    </section>
  )
}
