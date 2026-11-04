'use client'

import React from 'react'
import { Check, Sparkles, FolderArchive, RefreshCw, Compass, Award } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const libraryTopics = [
  'Customer questions',
  'Industry topics',
  'Product education',
  'Service explanations',
  'Comparisons',
  'Tutorials',
  'Common problems',
  'Expert insights',
]

const updateChecks = [
  'Topic relevance',
  'Title',
  'Thumbnail',
  'Introduction',
  'Retention',
  'Search intent',
  'Traffic sources',
  'Audience response',
]

const entryPoints = [
  'YouTube Search',
  'Recommended content',
  'Shorts',
  'Channel browsing',
  'Playlists',
  'Related videos',
  'External website traffic',
  'Social media distribution',
]

const authorityApproach = [
  'Customer problems',
  'Recurring questions',
  'Products & services',
  'Areas of expertise',
]

export default function LongTerm() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Compounding Digital Asset · Back Catalog
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why YouTube Content Creates{' '}
            <span className="italic text-frame-accent">Long-Term Discovery.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Unlike fast-moving social feeds, YouTube videos can continue generating discovery opportunities after publication when the topic remains relevant and viewers continue to find value in the content. That makes a well-managed video library a potential long-term business asset.
          </p>
        </div>

        {/* 4 Compounding Value Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 01: Valuable Library */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  01 · Evergreen Foundation
                </span>
                <FolderArchive className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Build a Valuable Video Library
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Every useful video can become another entry point into your brand. Over time, a well-organized library covers:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 pt-1">
                {libraryTopics.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Deeper Channel Exploration:</strong>
              A larger library gives new viewers more relevant content to explore after discovering your channel. YouTube recommends building a substantial library of high-quality content to help viewers go deeper into a channel.
            </div>
          </article>

          {/* 02: Update Underperforming */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  02 · Iterative Optimization
                </span>
                <RefreshCw className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Update Underperforming Content
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Not every video performs as expected. Instead of immediately abandoning it, we systematically review:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 pt-1">
                {updateChecks.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Repackaging Back Catalogs:</strong>
              Where appropriate, updating packaging can change how viewers respond to a video. YouTube notes that changing titles or thumbnails can affect performance because it changes how viewers interact with the video.
            </div>
          </article>

          {/* 03: Entry Points */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  03 · Omnichannel Inflow
                </span>
                <Compass className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Create Multiple Discovery Entry Points
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Your channel should not depend on one type of viewer discovery. We build content tailored around multiple surfaces:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {entryPoints.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Diversified Audience Inflow:</strong>
              Different discovery paths allow different audiences to enter your content ecosystem, creating resiliency against algorithmic adjustments on any single surface.
            </div>
          </article>

          {/* 04: Topic Authority */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  04 · Category Leadership
                </span>
                <Award className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Build Topic Authority Over Time
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Consistently covering relevant topics can establish your brand as a useful source of information within its niche. That does not mean publishing the same topic repeatedly; we build connected content around:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {authorityApproach.map((item) => (
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
              <strong className="text-white block font-medium mb-1">Strategic Depth:</strong>
              We build connected content around important customer problems, questions, products, and areas of expertise to cement long-term topical authority.
            </div>
          </article>
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Turn Your Video Catalog Into an Asset
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Build a video library that works for your business every single day, long after the upload date.
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
