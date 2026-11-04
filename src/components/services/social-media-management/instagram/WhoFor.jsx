'use client'

import React from 'react'
import { Check, ShoppingCart, Store, Briefcase, Sparkles, Building2, User, Globe2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const audiences = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce & Product Brands',
    body: 'For brands that need consistent product content, Reels, social proof, product education, launches, UGC, and customer communication.',
    points: [
      'Product-focused Reels',
      'Educational & lifestyle Carousels',
      'New collection launches',
      'UGC & customer unboxings',
      'Purchase-focused DMs & inquiries',
    ],
  },
  {
    icon: Store,
    title: 'Local Businesses',
    body: 'For restaurants, salons, clinics, retail stores, service providers, and other businesses that want to build local visibility and stronger customer relationships through Instagram.',
    points: [
      'Location discoverability',
      'Local customer FAQ resolution',
      'Visual ambiance & menu showcases',
      'Customer reviews & check-in highlights',
      'Local seasonal promotions',
    ],
  },
  {
    icon: Briefcase,
    title: 'Service Businesses',
    body: 'For businesses that need to explain services, demonstrate expertise, answer customer questions, build trust, and generate inquiries.',
    points: [
      'Detailed service breakdowns',
      'Case study highlights',
      'Expertise proof & client testimonials',
      'Process transparency',
      'High-intent inquiry generation',
    ],
  },
  {
    icon: Sparkles,
    title: 'Fashion, Beauty & Lifestyle Brands',
    body: 'For visually driven brands that benefit from Reels, product storytelling, creator content, UGC, visual consistency, and community engagement.',
    points: [
      'Aesthetic visual consistency',
      'Trend-adapted Reels production',
      'Creator gifting & collaboration coordination',
      'Story styling & behind-the-scenes',
      'High-frequency community engagement',
    ],
  },
  {
    icon: Building2,
    title: 'Professional & B2B Businesses',
    body: 'For professional firms and B2B brands that want to communicate expertise, people, company culture, services, case studies, and industry insights.',
    points: [
      'Executive thought leadership',
      'Company culture & talent recruitment',
      'Industry insights & market commentary',
      'B2B partnership visibility',
      'Credibility and trust reinforcement',
    ],
  },
  {
    icon: User,
    title: 'Founders & Personal Brands',
    body: 'For founders, consultants, professionals, and creators who want a consistent content system built around their expertise, personality, experience, and business goals.',
    points: [
      'Personal story & vision amplification',
      'Speaker & podcast clip cutdowns',
      'Framework & advice carousels',
      'Audience DM relationship building',
      'Monetization & lead funnel alignment',
    ],
  },
  {
    icon: Globe2,
    title: 'International Businesses',
    body: 'For businesses targeting audiences outside Bangladesh. Content planning is adapted to the target market, audience, language, cultural context, competitors, publishing patterns, and business objectives.',
    points: [
      'Target market timezone scheduling',
      'Culturally native visual messaging',
      'Regional competitor gap analysis',
      'Market-specific content themes',
      'Multi-currency / regional offer alignment',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               AUDIENCE FIT · TAILORED WORKFLOWS 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Our Instagram Management{' '}
            <span className="italic text-[#A855F7]">Service Is For.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We adapt the Instagram management strategy to your audience, offer, sales process, content requirements, and business goals.
          </p>
        </div>

        {/* 7 Audience Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon
            return (
              <article
                key={aud.title}
                className={`flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.16] ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A855F7]">
                      Segment 0{idx + 1} · </span>
                    <Icon className="h-4 w-4 text-[#A855F7]" />
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    {aud.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {aud.body}
                  </p>

                  <div className="space-y-2 border-t border-white/[0.06] pt-4">
                    {aud.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="font-heading text-lg font-medium uppercase text-white">
            Find out how our team would structure Instagram for your business model.
          </p>
          <PosterButton href="/contact">
            Discuss Your Instagram Strategy
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
