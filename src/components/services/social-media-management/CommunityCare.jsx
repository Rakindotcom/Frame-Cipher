'use client'

import React from 'react'
import Link from 'next/link'
import PosterButton from '../../home/PosterButton'
import { CheckCircle2, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react'

const managedItems = [
  'Comments and replies',
  'Direct messages',
  'Brand mentions',
  'Basic customer questions',
  'Review monitoring',
  'Spam moderation',
  'Community interactions',
  'Lead or customer-service escalation',
]

export default function CommunityCare() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               SOCIAL CUSTOMER CARE 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Community Management &amp;{' '}
            <span className="italic text-[#A855F7]">Social Customer Care.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Your audience expects more than scheduled content. They may ask questions, request pricing, comment on a post, send a direct message, mention your business, or raise a concern. Our community management service helps keep those interactions organized and timely.
          </p>
        </div>

        {/* 2-Column Split: Philosophy & Standards vs. Managed Inclusions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-start border-t border-white/[0.08] pt-12">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              <p>
                Depending on your plan, we manage the day-to-day conversation around your brand so an unanswered question does not sit publicly for days. That kind of silence reflects on the business as much as the content itself does.
              </p>
              <p>
                Your team remains involved whenever a response requires internal information, approval, or a business decision. We respond in your approved brand voice and flag anything that needs you rather than guessing on your behalf.
              </p>
            </div>

            <div className="rounded-xl border-l-2 border-[#A855F7]/40 border-white/[0.08] bg-[#121214] p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A855F7]">
                <ShieldCheck className="h-4 w-4" />
                <span>First Impression Reality</span>
              </div>
              <p className="text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
                An unanswered comment or a slow response on a service question shapes how people judge your business, often before they ever speak to you directly.
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Managed Deliverables Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                Depending on your plan, we can manage:
              </span>
              <MessageSquare className="h-4 w-4 text-[#A855F7]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {managedItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-[#121214] p-4 transition-colors hover:border-white/[0.14]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-white leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <PosterButton href="/contact" variant="accent">
                Improve Your Social Customer Care
              </PosterButton>
              <Link
                href="/services/social-media-management/community-management"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#A855F7] hover:text-white transition-colors"
              >
                <span>Community Management Detail</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
