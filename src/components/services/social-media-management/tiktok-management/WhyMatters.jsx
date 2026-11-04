'use client'

import React from 'react'
import { Check, Repeat, ArrowRight, TrendingUp, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const brokenLoop = ['Idea', 'Post', 'Wait', 'Repeat']
const workingLoop = ['Research', 'Plan', 'Create', 'Publish', 'Measure', 'Improve']

const learn = [
  'Which topics attract attention',
  'Which formats encourage interaction',
  'Which hooks retain viewers',
  'Which products receive interest',
  'Which questions keep appearing',
  'Which messages fail to connect',
]

const mixedContent = [
  'Educational content',
  'Entertaining content',
  'Product content',
  'Community content',
  'Brand-building content',
  'Founder content',
  'Customer-focused content',
]

const improve = [
  'Topics',
  'Hooks',
  'Formats',
  'Storytelling approaches',
  'Editing styles',
  'Creative angles',
  'Calls to action',
]

const reasons = [
  {
    number: '01',
    title: 'Build a Repeatable Content System',
    lead: 'Without a system, TikTok becomes unpredictable guessing. We replace sporadic posting with a structured operational engine.',
    body: 'This creates a repeatable workflow for developing and managing content. It also gives every content cycle a clear purpose.',
  },
  {
    number: '02',
    title: 'Learn From Audience Response',
    lead: 'Every content cycle provides valuable signal. You learn which topics, hooks, and formats actually resonate with target buyers.',
    body: 'We use those observations to refine future content. The objective is not to assume what your audience wants, but to improve based on real evidence.',
  },
  {
    number: '03',
    title: 'Reduce Reliance on Viral Hits',
    lead: 'Viral spikes create temporary attention, but a business cannot build sustainable revenue on unpredictable algorithmic surges.',
    body: 'We build a diverse content ecosystem across education, product, and founder storytelling so your account consistently generates value.',
  },
  {
    number: '04',
    title: 'Improve Content Over Time',
    lead: 'Your first month should not look like your sixth month. As performance data accumulates, creative execution sharpens.',
    body: 'We identify winning hooks, retention curves, and formats to systematically compound results month over month.',
  },
]

export default function WhyMatters() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Compounding Growth · Methodology
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Consistent TikTok Management{' '}
            <span className="italic text-frame-accent">Matters.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            One successful video does not create a complete TikTok strategy. Consistent management gives your business a structured way to publish, learn, improve, and build a recognizable presence over time.
          </p>
        </div>

        {/* Loop Comparison */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block mb-3">
              Unstructured Posting · Without a System
            </span>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {brokenLoop.map((item, idx) => (
                <React.Fragment key={item}>
                  <span className="rounded-md border border-white/[0.08] bg-[#18181B] px-3 py-1.5 font-mono text-xs text-zinc-400">
                    {item}
                  </span>
                  {idx < brokenLoop.length - 1 && (
                    <span className="text-zinc-600 text-xs">&rarr;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-4 text-xs text-zinc-400 leading-relaxed">
              Sporadic posting, unpredictable views, zero compounding retention, and endless waiting for a lucky algorithmic hit.
            </p>
          </div>

          <div className="rounded-2xl border border-purple-500/30 bg-[#15121c] p-7 md:p-8 shadow-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent block mb-3">
              Repeatable Content System · The Framecipher Engine
            </span>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {workingLoop.map((item, idx) => (
                <React.Fragment key={item}>
                  <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 font-mono text-xs text-purple-200 font-semibold">
                    {item}
                  </span>
                  {idx < workingLoop.length - 1 && (
                    <span className="text-frame-accent text-xs">&rarr;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-4 text-xs text-purple-200/90 leading-relaxed">
              Every content cycle has a defined commercial purpose, rigorous tracking, audience feedback capture, and continuous optimization.
            </p>
          </div>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((reason, idx) => (
            <article
              key={reason.number}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Principle {reason.number} · </span>
                  <span className="font-mono text-xs text-zinc-500">
                    0{idx + 1} of 04
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {reason.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {reason.lead}
                </p>

                {/* Specific lists per reason */}
                {idx === 1 && (
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                      What Audience Signals Reveal:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                      {learn.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {idx === 2 && (
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                      Diverse Pillar Mix:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {mixedContent.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/[0.08] bg-[#18181B] px-2.5 py-1 font-mono text-[10px] text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {idx === 3 && (
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                      Compounding Variables:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {improve.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[10px] text-purple-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#09090B] p-4 text-xs text-zinc-400 leading-relaxed">
                {reason.body}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              The Account You Have in Month Six Should Outperform Month One
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              That is what a disciplined operational content system achieves for your brand.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get Your Free TikTok Audit
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
