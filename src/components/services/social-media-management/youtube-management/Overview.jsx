'use client'

import React from 'react'
import { Check, Sparkles, Compass, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const goals = [
  'Brand awareness and discovery',
  'Educational content and thought leadership',
  'Product and service education',
  'Website traffic',
  'Lead generation',
  'Ecommerce discovery',
  'Customer education',
  'Audience building',
  'Expert positioning',
  'Long-term content discovery',
]

const workflowPillars = [
  'Channel strategy and positioning',
  'Content planning and scripting',
  'Video production and editing',
  'Titles, thumbnails, and YouTube SEO',
  'Publishing and channel organization',
  'Community management',
  'Performance analysis',
  'Ongoing optimization',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Commercial Alignment · Strategy
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            YouTube Management Built Around{' '}
            <span className="italic text-frame-accent">Your Business Goals.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A YouTube channel needs more than regular uploads. The right strategy connects your business objectives with topics your audience actually wants to watch. That means deciding what to publish, who it is for, how each video should be packaged, and what action viewers should take next.
          </p>

          <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
            <AutoLinks currentPath="/services/social-media-management/youtube-management" allowed={["/services/content-creation", "/services/video-production"]}>
              Our YouTube management approach brings strategy, content, optimization, publishing, and reporting into one unified workflow.
            </AutoLinks>
          </p>
        </div>

        {/* 2-Column Strategic Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: 10 Supported Business Goals */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Depending on your goals, your channel can support:
              </span>
              <span className="font-mono text-[11px] text-zinc-500">10 Core Levers</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {goals.map((goal, idx) => (
                <div
                  key={goal}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-medium leading-snug text-white">
                      {goal}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 mt-1">
                      Objective 0{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Repeatable Content System Banner */}
            <div className="rounded-2xl border border-white/[0.12] bg-[#15121C] p-6 sm:p-7 space-y-2">
              <div className="flex items-center gap-2 text-frame-accent">
                <Sparkles className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-white">
                  Sustainable Growth Principle
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
                We focus on building a sustainable content system rather than chasing individual viral videos. That is what allows a channel to keep earning views, searches, and trust long after an upload date.
              </p>
            </div>
          </div>

          {/* Right Column: Unified In-House Workflow Ledger Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  One Unified Workflow
                </span>
                <Compass className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                Our Management Approach Connects:
              </h3>

              <ul className="space-y-2.5">
                {workflowPillars.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/[0.04] bg-white/[0.02] p-2.5 text-xs text-zinc-300"
                  >
                    <span className="font-mono text-[10px] text-frame-accent font-semibold w-5">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/[0.08] pt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero fragmentation — everything handled by one in-house team.</span>
              </div>

              <PosterButton
                href="/contact"
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                Discuss Your YouTube Strategy
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
