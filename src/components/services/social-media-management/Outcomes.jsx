'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const outcomes = [
  {
    title: 'Brand Awareness',
    body: 'Consistent, recognizable content helps your business stay visible to relevant audiences over time.',
  },
  {
    title: 'Engagement',
    body: 'Useful and platform-appropriate content can encourage conversations, reactions, shares, saves, replies, and other meaningful interactions.',
  },
  {
    title: 'Customer Trust',
    body: 'Active profiles, useful information, visible customer interactions, and consistent communication can help potential customers understand and evaluate your business.',
  },
  {
    title: 'Website Traffic',
    body: 'Relevant social content can direct interested audiences to your website, product pages, landing pages, blog content, or other useful resources.',
  },
  {
    title: 'Leads & Inquiries',
    body: 'Social profiles can support customer inquiries through comments, direct messages, profile links, calls to action, and other conversion paths.',
    note: 'Social media alone does not guarantee leads. Results depend on the offer, audience, content, platform, and wider conversion system.',
  },
  {
    title: 'Community & Retention',
    body: 'Ongoing interaction can help businesses maintain relationships with existing audiences and give customers more opportunities to stay connected with the brand.',
  },
]

export default function Outcomes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               BUSINESS OUTCOMES 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Social Media Management{' '}
            <span className="italic text-[#A855F7]">Can Help Achieve.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Social media management is not only about follower counts. A well-managed presence can support several parts of your broader marketing strategy.
          </p>
        </div>

        {/* 6 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {outcomes.map((outcome, index) => (
            <article
              key={outcome.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                    Outcome 0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">
                    Commercial Impact
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-white leading-snug">
                  {outcome.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {outcome.body}
                </p>
              </div>

              {outcome.note && (
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="rounded-lg border-l-2 border-[#A855F7]/40 border-white/[0.04] bg-[#18181B] p-2.5 text-[11px] text-zinc-300 leading-relaxed font-normal">
                    {outcome.note}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Action Link Footer */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Measurement Philosophy
            </span>
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              We measure the metrics that support these outcomes rather than reporting follower counts in isolation.
            </p>
          </div>
          <Link
            href="/services/social-media-management/reporting"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#A855F7] hover:text-white transition-colors shrink-0"
          >
            <span>See How Social Media Reporting Works</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
