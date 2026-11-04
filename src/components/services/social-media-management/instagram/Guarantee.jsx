'use client'

import React from 'react'
import { Check, X, ShieldAlert, Sparkles, AlertTriangle } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const weControl = [
  'Instagram strategy & research',
  'Audience & competitor benchmarking',
  'Content planning & calendar design',
  'High-fidelity graphic content production',
  'Reels short-form video editing & motion',
  'High-converting captions, hooks & hashtags',
  'Complete profile optimization & bio SEO',
  'Publishing workflow & peak-time scheduling',
  'Community management within agreed scope',
  'Performance reporting & analytics audits',
  'Content format A/B testing & experiments',
  'Creative sprint refinement & revisions',
  'Structured client review & approval workflows',
  'Consistent communication & project coordination',
]

const weDontGuarantee = [
  'Guaranteed viral content on demand',
  'A specific, arbitrary follower count',
  'A guaranteed number of video views',
  'A fixed, artificial engagement rate',
  'Guaranteed commercial leads from organic alone',
  'Guaranteed sales or immediate transactions',
  'Guaranteed revenue numbers from algorithm spikes',
  'Specific algorithmic distribution outcomes outside human control',
]

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Service Governance · Honest Boundaries
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What We Commit To{' '}
            <span className="italic text-frame-accent">&amp; Where We Draw the Line.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We focus on the parts of Instagram management our team can directly control while keeping expectations realistic and transparent.
          </p>
        </div>

        {/* 2-Column Symmetrical Comparison Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: What We Control (Modality 1) */}
          <div className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121c] p-7 md:p-8 shadow-xl shadow-purple-950/20">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-500/20">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Direct Operational Control · </span>
                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    What We Control &amp; Improve
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                  <Check className="h-5 w-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
                We take 100% operational accountability for the strategic, creative, and technical elements of your Instagram presence:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-200">
                {weControl.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/20 text-frame-accent mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 text-xs text-purple-200/80 leading-relaxed">
              <strong>Professional Standard:</strong> Every asset is checked through internal quality review and approved by your team before publication.
            </div>
          </div>

          {/* Card 2: What We Don't Guarantee (Modality 2) */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    Transparent Boundaries · </span>
                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    What We Do Not Guarantee
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                We do not make dishonest promises about algorithmic volatility, vanity numbers, or macroeconomic sales variables:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-400">
                {weDontGuarantee.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-zinc-400 mt-0.5">
                      <X className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs text-zinc-400 leading-relaxed">
              <strong>Why This Matters:</strong> Anyone promising guaranteed follower counts or virality is either using bots or engagement pods that can trigger Instagram shadowbans and permanently compromise account integrity.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
