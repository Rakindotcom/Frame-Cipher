'use client'

import React from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const objectives = [
  'Increase brand visibility and content discovery',
  'Build trust with potential customers',
  'Showcase products or services',
  'Generate direct messages and inquiries',
  'Support ecommerce product discovery',
  'Strengthen customer relationships',
  'Communicate your expertise',
  'Build a recognizable visual identity',
  'Drive website visits and other customer actions',
]

const approach = [
  'Instagram strategy, audience & competitor research',
  'Profile optimization & Instagram SEO',
  'Multi-format content strategy',
  'Reels strategy, production & optimization',
  'Feed, Carousel & visual branded assets',
  'Stories & Highlights management',
  'Community & direct message (DM) management',
  'UGC, creator & collaboration management',
  'Instagram ecommerce & product content',
  'Publishing & content calendar management',
  'Performance tracking & monthly optimization',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               STRATEGIC ROLE · CUSTOMER JOURNEY 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Instagram Management Built Around{' '}
            <span className="italic text-[#A855F7]">Your Business Goals.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Your Instagram account should have a clear role in your customer journey. Framecipher builds your Instagram management strategy around defined business objectives rather than applying the same posting formula to every account.
          </p>
        </div>

        {/* 2-Column Strategic Matrix Layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Depending on your business, Instagram may need to (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Core Account Objectives
              </span>
              <span className="font-mono text-[11px] uppercase text-[#A855F7]">
                09 Pillars
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {objectives.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-4 transition-colors duration-200 hover:border-white/[0.16]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#A855F7]/30 bg-[#A855F7]/10 text-[#A855F7] mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed text-zinc-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Strategic Differentiation Callout */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#A855F7]">
                Purpose-Driven Architecture
              </p>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                That means using the right format for the right objective instead of forcing every idea into the same type of post. Our team connects strategy, content, Reels, profile optimization, publishing, community management, and performance analysis, giving every piece of content a clear commercial function.
              </p>
            </div>
          </div>

          {/* Right Column: Approach Overview Card (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Coordinated Management Scope
              </span>
              <span className="font-mono text-[11px] uppercase text-[#A855F7]">
                In-House Team
              </span>
            </div>

            <ul className="space-y-3">
              {approach.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7] shrink-0 mt-2" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-col gap-3">
              <PosterButton href="/contact">
                Discuss Your Instagram Strategy
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Get Your Free Account Audit
              </PosterButton>
            </div>

            <p className="text-xs text-zinc-500 pt-2 border-t border-white/[0.06] flex items-center justify-between">
              <span>Looking for broad social coverage?</span>
              <Link
                href="/services/social-media-management"
                className="text-[#A855F7] hover:text-white transition-colors inline-flex items-center gap-1 font-mono uppercase text-[11px]"
              >
                <span>Full Social Suite</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
