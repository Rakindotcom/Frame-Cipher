'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               STRATEGIC OVERVIEW 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Social Media Management Built Around Your Brand &amp;{' '}
            <span className="italic text-[#A855F7]">Business Goals.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A strong social presence needs more than regular posting. It needs a clear strategy, useful content, consistent execution, and active community management.
          </p>
        </div>

        {/* 2-Column Split: Editorial Prose vs. Audit Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-start border-t border-white/[0.08] pt-12">
          {/* Left Column (7 cols): Exact User Copy */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            <p>
              Framecipher provides social media management for SMEs, startups, ecommerce businesses, local companies, B2B brands, established businesses, and personal brands. We align your social content with your brand voice, audience, business goals, and the platforms where your customers spend time.
            </p>
            <p>
              Every platform has different content formats, audience behavior, and engagement patterns. We plan and manage your presence accordingly instead of publishing the same content everywhere.
            </p>
            <p>
              Our in-house team handles strategy, content planning, creation, publishing, community management, and reporting. You stay involved through a clear review and approval process before content goes live.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#121214] p-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A855F7]" />
                <span>Audience &amp; Voice Alignment</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#121214] p-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A855F7]" />
                <span>Platform-Specific Formats</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#121214] p-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A855F7]" />
                <span>Complete In-House Execution</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#121214] p-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A855F7]" />
                <span>Pre-Publishing Sign-Off</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Audit Invitation Card */}
          <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                Free Social Media Audit
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                See What Is Working, What Is Missing
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                We review your existing profiles, content quality, audience engagement, and platform mix to identify where your social presence can improve before any commitment is made.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton href="/contact" variant="accent" className="w-full justify-center">
                Get Your Free Social Audit
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
