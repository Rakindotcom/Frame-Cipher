'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const keyAlignments = [
  'Customer need behind the conversation',
  'Conversational context and intent signals',
  'Focused ad-group structure and context hints',
  'High-clarity ad creative and value propositions',
  'Landing-page message and conversion alignment',
  'Accurate conversion tracking and attribution',
]

const focusPoints = [
  'Relevance',
  'Measurement',
  'Controlled testing',
  'Ongoing optimization',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            ChatGPT Ads Built for{' '}
            <span className="italic text-frame-accent">High-Intent AI Conversations.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Traditional advertising often starts with a keyword, audience, or placement. ChatGPT Ads start with a conversation.
          </p>
        </div>

        {/* 2-Column Split: Editorial Narrative vs. Campaign Alignment Ledger */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start pb-14 border-b border-white/[0.08]">
          {/* Left Column: Narrative Copy */}
          <div className="space-y-6 text-base sm:text-lg font-normal leading-relaxed text-zinc-300 lg:col-span-7">
            <p>
              People use ChatGPT to research products, compare services, evaluate alternatives, solve problems, and decide what to do next. That creates a different advertising environment where relevance depends on conversational context as well as campaign settings and ad information.
            </p>
            <p className="text-sm sm:text-base text-zinc-400">
              OpenAI says ChatGPT Ads can consider the context and intent of the current conversation, the ad&rsquo;s landing page, title and copy, advertiser-provided context hints, and, where applicable, selected signals from a user&rsquo;s broader ChatGPT experience. That makes campaign structure especially important.
            </p>
            <p className="text-sm sm:text-base text-zinc-400">
              Framecipher builds ChatGPT advertising campaigns around the customer need behind the conversation. We align campaign objectives, ad groups, context hints, creative, landing pages, and conversion goals so each campaign has a clear commercial purpose.
            </p>

            {/* Focus Ribbon Badges */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {focusPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Surface Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:col-span-5 space-y-6">
            <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
              What We Align in Every Campaign:
            </h3>
            <ul className="space-y-3">
              {keyAlignments.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-white/[0.04] pb-2 text-sm text-zinc-300 group hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-mono text-[11px] text-frame-accent font-semibold">
                      0{index + 1}
                    </span>
                    <span>{item}</span>
                  </span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-zinc-600 group-hover:text-frame-accent transition-colors" />
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <PosterButton href="/contact" variant="accent" className="w-full">
                Request a Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

        {/* Closing Footnote Banner */}
        <div className="pt-8">
          <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-400">
            Whether you are launching your first ChatGPT Ads test or adding the channel to an existing paid media strategy, our focus stays on relevance, measurement, controlled testing, and ongoing optimization.
          </p>
        </div>
      </div>
    </section>
  )
}
