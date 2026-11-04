'use client'

import React from 'react'
import { Clock, Calendar, Check, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const phases = [
  {
    phase: '01',
    label: 'Weeks 1 to 3',
    title: 'Initial Setup & First Content Batch',
    body: 'Most projects begin with channel review, strategy development, content planning, production, and the first publishing cycle:',
    points: [
      'Channel & competitor review',
      'Strategy & positioning roadmap',
      'Search-aware content planning',
      'Scripting & asset collection',
      'First video batch production & editing',
      'Initial packaging (titles & thumbnails)',
      'Client review & approval cycle',
      'First publishing cycle & optimization',
    ],
    note: 'For a standard project, the first content batch typically takes around 2 to 3 weeks, depending on client feedback speed and production complexity.',
  },
  {
    phase: '02',
    label: 'First Several Months',
    title: 'Ongoing Growth & Optimization',
    body: 'The first several months are used to establish a consistent publishing rhythm, collect meaningful analytics, identify winning topics, and refine strategy:',
    points: [
      'Consistent publishing schedule execution',
      'Audience retention & drop-off analysis',
      'Thumbnail CTR & impression monitoring',
      'Iterative packaging tweaks on back catalog',
      'Identifying high-converting topics & formats',
      'Refining SEO & discovery keyword targets',
    ],
    note: 'There is no universal timeline for a specific number of views, subscribers, leads, or rankings. We focus on building the system and using real performance data to continuously improve.',
  },
]

const factors = [
  'Audience & Market',
  'Topic Relevance',
  'Competition Level',
  'Content Quality',
  'Publishing Consistency',
  'Viewer Retention Response',
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Engagement Lifecycle · Realism
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            YouTube Management{' '}
            <span className="italic text-frame-accent">Timeline &amp; Cadence.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            YouTube growth is a longer-term process because content performance depends on your audience, topic, competition, content quality, publishing consistency, and viewer response.
          </p>
        </div>

        {/* 2 Phases Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {phases.map((phase) => (
            <article
              key={phase.title}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                    {phase.label}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    Phase {phase.phase}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                  {phase.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  <AutoLinks currentPath="/services/social-media-management/youtube-management" allowed={["/services/content-creation", "/services/video-production"]}>
                    {phase.body}
                  </AutoLinks>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 pt-1">
                  {phase.points.map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
                <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                  Timeline Reality
                </span>
                {phase.note}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Realistic Factor Ledger */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block">
              Core Performance Determinants
            </span>
            <h4 className="font-heading text-lg sm:text-xl font-medium text-white">
              What Real Channel Performance Depends On
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {factors.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl border-t border-white/[0.06] pt-4">
            We focus on building the repeatable content system and using real performance data to continuously improve it. Start with a consultation and we will review your channel, your goals, and your production capacity before proposing a scope.
          </p>

          <div className="pt-2">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
            >
              Get a Free Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
