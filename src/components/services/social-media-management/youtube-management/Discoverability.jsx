'use client'

import React from 'react'
import { Search, Eye, TrendingUp, Sparkles, Compass } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const searchSignals = [
  'Search intent',
  'Topic relevance',
  'Video titles',
  'Descriptions',
  'Video content',
  'Audience needs',
  'Competitive results',
  'Content quality',
]

const packagingTraits = [
  'Clear',
  'Relevant',
  'Compelling',
  'Consistent with the actual video',
  'Appropriate for the target audience',
]

const retentionSignals = [
  'Intro performance',
  'Early drop-offs',
  'Audience retention',
  'Average view duration',
  'Content pacing',
  'Repeated drop-off points',
  'Strong moments',
  'Viewer response',
]

const externalFactors = [
  'Topic interest',
  'Competition',
  'Seasonality',
]

export default function Discoverability() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Platform Algorithms · Viewer Signals
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            YouTube Search, Recommendations &amp;{' '}
            <span className="italic text-frame-accent">Viewer Behavior.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            YouTube discovery does not depend on one universal ranking factor. Search and recommendation systems use different signals and surfaces to connect viewers with content they are likely to watch and enjoy. YouTube describes search around relevance, engagement, and quality, while recommendations consider viewer behavior, content performance, personalization, and satisfaction.
          </p>

          <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
            Our strategy therefore focuses on the complete viewer experience: something worth searching for, something worth clicking, and something worth watching to the end.
          </p>
        </div>

        {/* 4 Core Signal Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Search Discovery */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Intent-Driven Traffic
                </span>
                <Search className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                YouTube Search Discovery
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                YouTube Search helps viewers find videos related to their queries. We consider the signals that shape how a video matches search queries:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 pt-2">
                {searchSignals.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Human-First Search Optimization:</strong>
              Search optimization is not about inserting keywords everywhere. It is about creating a useful video that clearly addresses the topic a viewer is looking for.
            </div>
          </article>

          {/* Card 2: Packaging (Titles & Thumbnails) */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  First Impression Architecture
                </span>
                <Eye className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Video Packaging: Titles &amp; Thumbnails
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Your title and thumbnail form the first impression of a video. We work to make the packaging meet five essential quality standards:
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {packagingTraits.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-frame-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Avoiding Misleading Clickbait:</strong>
              We avoid misleading clickbait because a strong click means little if the video fails to deliver what the viewer expected. YouTube identifies titles and thumbnails as important parts of content packaging and recommends evaluating them in the context of audience response and performance.
            </div>
          </article>

          {/* Card 3: Retention & Engagement */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Post-Click Watch Time
                </span>
                <TrendingUp className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Viewer Retention &amp; Engagement
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Getting someone to click is only the beginning. The video must then deliver enough value to keep viewers engaged. We analyze:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 pt-2">
                {retentionSignals.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Retention Data Iteration:</strong>
              YouTube provides retention data to help creators understand where viewers stay, leave, rewatch, or lose interest. These insights influence future scripts, editing, hooks, structure, and content topics.
            </div>
          </article>

          {/* Card 4: Satisfaction & External Factors */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Algorithm Satisfaction Triad
                </span>
                <Sparkles className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Viewer Satisfaction &amp; Content Value
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Views alone do not tell the whole story. A successful content strategy considers whether viewers found the video useful, enjoyable, relevant, or worth returning to.
              </p>

              {/* The Triad */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {['Appeal', 'Engagement', 'Satisfaction'].map((area) => (
                  <div key={area} className="rounded-xl border border-white/[0.06] bg-[#09090B] p-3 text-center">
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-frame-accent">
                      Metric
                    </span>
                    <span className="font-heading text-xs sm:text-sm uppercase font-semibold text-white mt-0.5 block">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">External Market Factors:</strong>
              YouTube specifically identifies topic interest, competition, and seasonality as external factors that affect reach. We use these factors when planning content rather than treating every performance change as an SEO issue.
            </div>
          </article>
        </div>

        {/* Discovery Action Ledger */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              The Complete Viewer Experience
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Our strategy focuses on the entire journey: something worth searching for, something worth clicking, and something worth watching to the end.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get a Free Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
