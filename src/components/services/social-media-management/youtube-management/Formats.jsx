'use client'

import React from 'react'
import { Play, Sparkles, ArrowRight, Video } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const longForm = [
  'Tutorials & walkthroughs',
  'Product education & features',
  'Expert commentary & analysis',
  'Case studies & breakdowns',
  'In-depth reviews',
  'Software demonstrations',
  'Interviews & discussions',
  'Educational video series',
  'B2B thought leadership',
  'Detailed problem-solving content',
]

const shorts = [
  'Quick actionable tips',
  'Short conceptual explanations',
  'Product feature highlights',
  'Expert insights & soundbites',
  'Frequently asked questions',
  'Repurposed moments from long-form',
  'Quick demonstrations',
  'Trend-aware content experiments',
]

const pathway = [
  { label: 'YouTube Short', desc: 'Fast top-of-funnel reach' },
  { label: 'Long-Form Video', desc: 'In-depth education & trust' },
  { label: 'Related Playlist', desc: 'Extended viewing & watch time' },
  { label: 'Website / Business CTA', desc: 'Inquiry, lead or conversion' },
]

export default function Formats() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Format Strategy · Two Complementary Engines
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Long-Form &amp; Shorts:{' '}
            <span className="italic text-frame-accent">One Channel, Two Formats.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Long-form videos and Shorts can play different roles within the same YouTube strategy. YouTube does not state that one format is universally preferred. Different formats serve different viewer behaviors, and individual viewers may respond differently to each.
          </p>
        </div>

        {/* 2 Formats Comparison Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Long-Form Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Evergreen Depth &amp; Authority
                </span>
                <Video className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Long-Form Video Content
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Long-form videos are useful when your audience needs more depth, nuanced explanations, and structured learning:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 pt-2">
                {longForm.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Right-Sized Length:</strong>
              The focus is on delivering the right amount of information without adding unnecessary fluff. YouTube notes that there is no universal ideal video length; content should only be as long as necessary to deliver value.
            </div>
          </article>

          {/* Shorts Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  High-Velocity Reach
                </span>
                <Play className="h-4 w-4 fill-current text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                YouTube Shorts Strategy
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Shorts provide a faster content format for reaching new viewers with concise ideas and platform-native hooks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 pt-2">
                {shorts.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Native Short-Form Creative:</strong>
              Shorts should have their own creative approach rather than simply becoming chopped-up excerpts of every long-form video.
            </div>
          </article>
        </div>

        {/* Connected Conversion Pathway */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              Synergistic Content Ecosystem
            </span>
            <span className="font-mono text-[10px] text-zinc-500">Connected Customer Journey</span>
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
            Connecting Shorts and Long-Form Into One Pathway
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {pathway.map((step, idx) => (
              <div
                key={step.label}
                className="relative rounded-xl border border-white/[0.08] bg-[#15121C] p-4 space-y-1"
              >
                <div className="flex items-center justify-between text-zinc-500 font-mono text-[10px]">
                  <span>Step 0{idx + 1}</span>
                  {idx < pathway.length - 1 && (
                    <ArrowRight className="h-3 w-3 text-frame-accent hidden lg:block" />
                  )}
                </div>
                <div className="font-heading text-sm font-semibold uppercase text-white">
                  {step.label}
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl pt-2">
            This creates multiple opportunities for viewers to discover your content while allowing interested viewers to explore deeper topics. YouTube also notes that viewer interests can connect across Shorts and long-form, although viewers do not automatically engage with every format.
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
