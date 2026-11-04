'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 md:p-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1 text-xs text-zinc-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
                Integrity &amp; Guarantee
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              Transparent <span className="italic text-frame-accent">Strategy Guarantee</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              Every strategy document goes through a comprehensive live walkthrough session, so nothing gets handed over without the opportunity to ask questions, resolve edge cases, and clarify exactly how to execute it.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 pt-6 border-t border-white/[0.06]">
            {/* What We Guarantee */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                <span>What We Unconditionally Guarantee</span>
              </div>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                A custom, rigorous SEO strategy genuinely built around your actual business situation, verified team resources, technical constraints, and revenue goals—never a canned template with your business name inserted.
              </p>
            </div>

            {/* Honest Ranking Reality */}
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-3">
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase tracking-wider">
                <AlertCircle className="h-4 w-4 text-frame-accent" />
                <span>Honest Ranking Outcome Policy</span>
              </div>
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                We never make fake guarantees of overnight #1 rankings from strategy alone, as execution quality, dev speed, and competitor counter-moves impact organic outcomes. We guarantee empirical direction that maximizes your probability of sustainable ranking success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
