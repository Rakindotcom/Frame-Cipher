'use client'

import React from 'react'
import { Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const audiences = [
  {
    title: 'Ecommerce & Product Brands',
    body: 'For brands that need product education, demonstrations, comparisons, tutorials, and product discovery content that drives buyers toward purchase.',
  },
  {
    title: 'Service Businesses',
    body: 'For businesses that need to explain complex services, answer customer questions, build trust, and generate qualified commercial inquiries.',
  },
  {
    title: 'SaaS & Technology Businesses',
    body: 'For software and technology companies that need product education, tutorials, feature explanations, live demos, and educational onboarding content.',
  },
  {
    title: 'Professional & B2B Businesses',
    body: 'For consultants, agencies, professional firms, and B2B companies that want to communicate expertise and support longer buying journeys.',
  },
  {
    title: 'Education & Training Businesses',
    body: 'For educators, training companies, coaches, and organizations that rely on high-value educational content to attract and engage learners.',
  },
  {
    title: 'Personal Brands & Experts',
    body: 'For founders, professionals, creators, consultants, and subject-matter experts building long-term personal authority around their specialized knowledge.',
  },
  {
    title: 'Podcasts & Media Brands',
    body: 'For podcast and media businesses that need structured video publishing, clips, Shorts, custom thumbnails, metadata, and channel organization.',
  },
  {
    title: 'International Businesses',
    body: 'For businesses targeting audiences outside Bangladesh, including the US, UK, Australia, Canada, UAE, and other global markets.',
    note: 'International channel strategies are adapted around market-specific audiences, language nuances, search behavior, topics, and business goals.',
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Audience Alignment · 08 Segments
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Our YouTube Management{' '}
            <span className="italic text-frame-accent">Service Is For.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We build YouTube strategies around the business model rather than forcing every client into the same content formula.
          </p>
        </div>

        {/* 8 Segments + 9th Honest Consultation Card */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Segment 0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">Commercial Fit</span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {audience.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  <AutoLinks currentPath="/services/social-media-management/youtube-management" allowed={["/services/content-creation", "/services/video-production"]}>
                    {audience.body}
                  </AutoLinks>
                </p>
              </div>

              {audience.note && (
                <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] leading-relaxed text-zinc-400">
                  <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                    Global Delivery
                  </span>
                  {audience.note}
                </div>
              )}
            </article>
          ))}

          {/* 9th Evaluation Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121C] p-6 sm:p-7 space-y-4 shadow-xl shadow-purple-950/20">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-frame-accent border-b border-white/[0.08] pb-3">
                <Sparkles className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-white">
                  Not Sure If YouTube Fits?
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                Honest Channel Fit Assessment
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Ask during the consultation and we will tell you honestly whether YouTube is the right primary channel for your business right now, or if another platform should take priority.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton
                href="/contact"
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                Get a Free Consultation
              </PosterButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
