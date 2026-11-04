'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'

const standards = [
  {
    title: 'One In-House Team',
    body: 'Your social media strategy, content, publishing, and community management are coordinated through one in-house team. This reduces the disconnect that can happen when different parts of your social presence are handled by unrelated freelancers or vendors.',
  },
  {
    title: 'Platform-Specific Strategy',
    body: 'We do not treat every platform as the same. Content is planned around each platform\'s audience, format, communication style, and role within your marketing strategy.',
  },
  {
    title: 'Client Approval Before Publishing',
    body: 'You remain in control of your brand communication. Content is prepared for your review and approval before it is published, so you know what is going live under your brand name.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'We work with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. This allows us to account for differences in audience behavior, language, culture, market positioning, and platform usage. For Bangladeshi businesses, we can also develop Bangla-English content where it fits the audience and brand.',
  },
  {
    title: 'Transparent Reporting',
    body: 'You receive clear performance reporting with context around what the numbers mean. Instead of focusing only on follower counts, we look at the metrics that matter to your selected platforms and business objectives.',
  },
  {
    title: 'No Vanity-Metric Promises',
    body: 'We do not promise a specific follower count, engagement rate, or viral result. Platform algorithms, audience behavior, competition, content quality, offers, and market conditions all influence social performance. Our focus is consistent execution, useful content, active community management, measurement, and continuous improvement.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               THE FRAMECIPHER ADVANTAGE 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-[#A855F7]">Social Media Management.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Content, publishing, community care, and reporting coordinated by one in-house team rather than passed between separate vendors.
          </p>
        </div>

        {/* 6 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {standards.map((standard, index) => (
            <article
              key={standard.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                    Advantage 0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">
                    Execution Pillar
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-white leading-snug">
                  {standard.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {standard.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Sustainable Social Growth
            </span>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Our focus is consistent execution, useful content, active community management, measurement, and continuous improvement without unverified vanity promises.
            </p>
          </div>
          <PosterButton href="/contact" variant="accent" className="shrink-0">
            Talk to Our Social Media Team
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
