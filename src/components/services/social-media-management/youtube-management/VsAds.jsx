'use client'

import React from 'react'
import { Sparkles, Video, Target, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const organic = [
  'Content strategy',
  'Video production',
  'YouTube SEO',
  'Titles and thumbnails',
  'Publishing & chapters',
  'Audience engagement',
  'Analytics & retention tracking',
  'Long-term content development',
]

const paidGoals = [
  'Faster immediate audience reach',
  'Direct product promotion',
  'High-intent lead generation',
  'Viewer remarketing',
  'Campaign-specific landing page traffic',
  'Targeted brand awareness surges',
]

const paidRequirements = [
  'Paid media strategy',
  'Google Ads campaign architecture',
  'In-market & custom intent targeting',
  'Ad creative & hook variations',
  'Conversion tracking & pixels',
  'Dedicated advertising budget',
]

export default function VsAds() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Scope Clarity · Organic vs Paid
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Organic YouTube vs.{' '}
            <span className="italic text-frame-accent">YouTube Ads.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Organic YouTube management and YouTube advertising serve different purposes. Keeping the distinction clear prevents confusion around scope, budget, and expectations.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Organic Column */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/50 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Compounding Asset
                </span>
                <Video className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Organic YouTube Management
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Organic management focuses on building the channel and its content library through consistent production and audience engagement:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300 pt-1">
                {organic.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Long-Term Objective:</strong>
              The objective is to create useful content that can continue generating discovery, organic search traffic, and audience value over time.
            </div>
          </article>

          {/* Paid Column */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Accelerated Reach
                </span>
                <Target className="h-4 w-4 text-zinc-400" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                YouTube Ads Management
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                YouTube Ads use paid media to place targeted video advertising in front of selected audiences through Google’s advertising ecosystem:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300 pt-1">
                {paidGoals.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Separate Scope &amp; Budget:</strong>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {paidRequirements.map((req) => (
                  <span
                    key={req}
                    className="rounded-full border border-white/[0.06] bg-[#09090B] px-2.5 py-0.5 font-mono text-[10px] text-zinc-400"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Synergy Banner */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              How Organic and Paid Work Together
            </span>
            <Sparkles className="h-4 w-4 text-frame-accent" />
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
            Organic Content and Paid Campaigns Can Complement Each Other
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
            <AutoLinks currentPath="/services/social-media-management/youtube-management" allowed={["/services/paid-advertising"]}>
              For example, a business may use paid campaigns to promote a specific product or offer while continuing to build organic educational content that supports long-term discovery and trust. We can coordinate both strategies when they are included in the agreed scope.
            </AutoLinks>
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <PosterButton
              href="/contact"
              variant="primary"
              size="md"
            >
              Request a Custom Strategy
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
