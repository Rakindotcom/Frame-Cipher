'use client'

import React from 'react'
import { CheckCircle2, Compass, Layers, Target } from 'lucide-react'

const factors = [
  'Search Demand & Volume',
  'Commercial Relevance',
  'Search Intent Classification',
  'SERP Competitiveness',
  'Current Website Authority',
  'Existing Rankings & CTR',
  'Competitor SERP Visibility',
  'Content Architecture Needs',
  'Bottom-Line Conversion Potential',
  'Market & Language Differences',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              The Right Search Demand
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Find the Search Terms <span className="italic text-frame-accent">Worth Targeting</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Keyword research must answer significantly more than raw search volume. It should reveal what the searcher genuinely wants, who currently ranks, and whether your website can realistically compete and convert.
          </p>
        </div>

        {/* Executive Comparison Card */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-frame-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:divide-x md:divide-white/[0.08]">
            <div className="space-y-3 pr-0 md:pr-8">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Traditional Agency Question
              </span>
              <blockquote className="font-heading text-2xl sm:text-3xl font-medium uppercase tracking-tight text-zinc-400 line-through decoration-zinc-600">
                &ldquo;How many people search for this term?&rdquo;
              </blockquote>
              <p className="text-xs text-zinc-500 font-normal">
                Chasing raw volume often leads to empty vanity clicks that never translate to commercial revenue.
              </p>
            </div>

            <div className="space-y-3 pl-0 md:pl-8 pt-6 md:pt-0 border-t md:border-t-0 border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent flex items-center gap-1.5">
                <Target className="h-4 w-4" />
                <span>The Framecipher Commercial Question</span>
              </span>
              <blockquote className="font-heading text-2xl sm:text-3xl font-medium uppercase tracking-tight text-white">
                &ldquo;Is this search relevant, what does the searcher want, who ranks, and can we realistically win?&rdquo;
              </blockquote>
              <p className="text-xs text-zinc-300 font-normal">
                Targeting intent-aligned queries where your domain has a mathematical edge to rank and generate revenue.
              </p>
            </div>
          </div>
        </div>

        {/* 10 Core Evaluation Factors */}
        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            Framecipher evaluates keyword opportunities using 10 empirical signals:
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {factors.map((factor, index) => (
              <div
                key={factor}
                className="group rounded-xl border border-white/[0.08] bg-[#121214] p-5 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
              >
                <span className="font-mono text-xs font-bold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 font-heading text-sm font-medium uppercase tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {factor}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Beyond Isolated Keywords Callout */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#14121A] p-7 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-frame-accent/20 text-frame-accent border border-frame-accent/30">
              <Layers className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h4 className="font-heading text-lg font-medium tracking-tight text-white">
                Looking Beyond Isolated Keywords
              </h4>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                Related terms, long-tail questions, entities, semantic subtopics, and search variations reveal broad topical clusters that single-keyword lists miss. The result is a structured search strategy that dictates exactly what to target, which page targets it, and how to sequence work for maximum velocity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
