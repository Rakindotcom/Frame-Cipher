'use client'

import React from 'react'
import { Search, Check, Sparkles, UserCheck, ArrowRight, Video } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const searchAngles = [
  'Customer Questions',
  'Real-World Problems',
  'Product Comparisons',
  'Practical Use Cases',
  'Step-by-Step Tutorials',
  'Product Decisions',
  'Service-Related Topics',
]

const captions = [
  'Clarify the specific topic within 3 seconds',
  'Reinforce the audio message visually',
  'Support accessibility across sound-off viewing',
  'Improve full content comprehension',
  'Naturally incorporate relevant search terminology',
]

const profileAnswers = [
  'Who you are',
  'What you offer',
  'Who you serve',
  'Why someone should follow you',
  'What action someone can take next',
]

const profileElements = [
  'Bio messaging',
  'Brand positioning',
  'Profile information',
  'Visual consistency',
  'Available calls to action',
  'Link strategy where available',
  'Pinned-video planning',
]

const pinnedQuestions = [
  'Who are we?',
  'What do we offer?',
  'Why should you trust us?',
  'What should you watch first?',
]

const research = [
  'Customer questions',
  'Product-related searches',
  'Service topics',
  'Industry terminology',
  'Problem-based searches',
  'Comparison topics',
  'Educational opportunities',
  'Competitor content gaps',
]

const feedInto = [
  'Video ideas',
  'Scripts',
  'Hooks',
  'Captions',
  'On-screen text',
  'Publishing plans',
]

const relationship = ['What people want', 'What they search or explore', 'What your content answers']

export default function Discoverability() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Organic Discovery · Search Optimization
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            TikTok Search &amp; Content{' '}
            <span className="italic text-frame-accent">Discoverability.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            TikTok is not only a scrolling environment. People also use the platform to discover information, products, businesses, creators, and ideas. That makes discoverability an essential part of professional TikTok management.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Search-Aware Content */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121c] p-7 md:p-8 shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-500/20">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Intent-Driven Creation · </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                  <Search className="h-4 w-4" />
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Search-Aware Content
              </h3>

              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Instead of producing generic videos, we build content around the exact questions, comparisons, and problems your audience actively searches:
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {searchAngles.map((entry) => (
                  <span
                    key={entry}
                    className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-200"
                  >
                    {entry}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-frame-accent mb-2.5">
                  Clear Discovery Alignment:
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {relationship.map((entry, idx) => (
                    <React.Fragment key={entry}>
                      <span className="rounded-md border border-white/[0.08] bg-[#18181B] px-2.5 py-1 font-mono text-[10px] text-zinc-200">
                        {entry}
                      </span>
                      {idx < relationship.length - 1 && (
                        <span aria-hidden="true" className="text-frame-accent text-xs">
                          &rarr;
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: Captions & On-Screen Text */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Contextual Anchors · </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                  <Video className="h-4 w-4" />
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Captions &amp; On-Screen Text
              </h3>

              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                Captions and on-screen text provide crucial algorithmic and human context around a video:
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                {captions.map((entry) => (
                  <li key={entry} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/20 text-frame-accent mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{entry}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#09090B] p-4 text-xs text-zinc-400 leading-relaxed">
              <strong className="text-zinc-200">Editorial Standard: </strong>
              We avoid forcing keywords into captions or on-screen text. The goal is useful, readable content first.
            </div>
          </article>

          {/* Card 3: Profile & Bio Optimization */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Landing Hub Optimization · </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                  <UserCheck className="h-4 w-4" />
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Profile &amp; Bio Optimization
              </h3>

              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                Your profile must immediately communicate your value to first-time visitors:
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {profileAnswers.map((entry) => (
                  <div
                    key={entry}
                    className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#18181B] p-2.5 text-xs text-zinc-200"
                  >
                    <Check className="h-3 w-3 text-frame-accent shrink-0" />
                    <span>{entry}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2">
                  Key Profile Elements:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {profileElements.map((entry) => (
                    <span
                      key={entry}
                      className="rounded-md border border-white/[0.08] bg-[#18181B] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                    >
                      {entry}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-frame-accent mb-2">
                  Strategic Pinned-Video Architecture:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {pinnedQuestions.map((entry) => (
                    <span
                      key={entry}
                      className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] text-purple-300"
                    >
                      {entry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Card 4: Topic & Keyword Research */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Discovery Research · </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                  <Search className="h-4 w-4" />
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Topic &amp; Keyword Research
              </h3>

              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                TikTok keyword research is not simply about collecting high-volume terms; it connects genuine audience interest with your commercial offer:
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                {research.map((entry) => (
                  <div key={entry} className="flex items-start gap-2">
                    <Check className="h-3 w-3 text-frame-accent shrink-0 mt-0.5" />
                    <span>{entry}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2">
                  Insights Feed Directly Into:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {feedInto.map((entry) => (
                    <span
                      key={entry}
                      className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[10px] text-purple-300"
                    >
                      {entry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#09090B] p-4 text-xs text-zinc-400 leading-relaxed">
              <strong className="text-zinc-200">Continuous Loop: </strong>
              Discoverability is embedded at the concept and scripting stages, never bolted on as an afterthought.
            </div>
          </article>
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Discoverability Treated as Standard Operating Procedure
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Not an optional extra added after production, but engineered into your profile and video concepts.
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
