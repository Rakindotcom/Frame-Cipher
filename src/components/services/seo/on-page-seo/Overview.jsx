'use client'

import React from 'react'
import { Search, CheckCircle2, Sliders, Target } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const intentChecklist = [
  'What users are trying to accomplish with the search',
  'What types of pages currently appear for the query',
  'What information those pages provide',
  'Which important topics your page currently misses',
  'How the content should be organized',
  'Which keywords and related concepts belong on the page',
  'Which internal pages should support or receive authority from the page',
  'How metadata can improve search visibility and click-through potential',
  'Whether the page provides a clear next step for the visitor',
]

export default function Overview() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Search Intent First // Content Architecture
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            On-Page SEO Built Around{' '}
            <span className="italic text-frame-accent">Search Intent</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            On-page SEO is more than adding keywords to a page. A strong page needs to answer the right question, cover the right topics, use a clear structure, and make it easy for users to take the next step.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Full Verbatim Paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-zinc-300">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-5">
              <p>
                We begin by analyzing the search intent behind the target query. The same keyword can require very different content depending on whether someone wants an answer, comparison, service, product, location, or solution.
              </p>
              <p>
                For example, a user searching for a product may expect product information, pricing, reviews, specifications, and a clear path to purchase. Someone searching for an informational topic may instead want an explanation, examples, supporting evidence, and answers to related questions.
              </p>
              <p className="border-l-2 border-frame-accent/40 pl-4 text-zinc-200">
                Our on-page SEO work connects those expectations with the page itself.
              </p>
            </div>

            {/* Quick Intent Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-white/[0.06] bg-[#121214]/60 p-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-frame-accent">
                  <Target className="h-4 w-4" />
                  <span>Right Result for the Query</span>
                </div>
                <p className="mt-2 text-xs text-zinc-400">
                  The goal is not to make a page look optimized on paper. The goal is to make the page the right result for the search intent it targets.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#121214]/60 p-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-frame-accent">
                  <Sliders className="h-4 w-4" />
                  <span>Frictionless Decision Flow</span>
                </div>
                <p className="mt-2 text-xs text-zinc-400">
                  Every section guides visitors towards informed choices, connecting search queries with relevant conversion paths.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: We Look At Checklist (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
              <Search className="h-3.5 w-3.5" />
              <span>Diagnostic Checklist</span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug">
              We look at:
            </h3>

            <div className="space-y-2.5">
              {intentChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-normal">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/[0.08] pt-6">
              <PosterButton href="/contact">
                Get Free Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
