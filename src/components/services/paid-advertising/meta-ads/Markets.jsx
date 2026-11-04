'use client'

import React from 'react'
import { CheckCircle2, Globe, MapPin, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const areas = [
  {
    eyebrow: 'Domestic Market',
    title: 'Meta Ads for Businesses in Bangladesh',
    icon: MapPin,
    badge: 'Dhaka HQ & Nationwide',
    body: [
      'Framecipher is based in Dhaka and manages Meta Ads campaigns for businesses targeting customers across Bangladesh.',
      'Our local approach accounts for bilingual Bangla and English creative, mobile-first user behavior, local purchasing patterns, regional targeting, local offers, Messenger and WhatsApp enquiries, ecommerce conversion flows, and Cash on Delivery (COD) or mobile banking checkout considerations where relevant.',
    ],
    bullets: [
      'Bilingual Bangla & English ad copywriting',
      'Mobile-first high-speed conversion flows',
      'Direct Click-to-WhatsApp & Messenger checkout',
      'COD & local payment friction reduction',
      'Dhaka metro & tier-2 district geo-targeting',
      'Local seasonal & festive promotional bursts',
      'Nationwide D2C eCommerce catalog scaling',
    ],
    tail: 'The campaign strategy is built around actual Bangladeshi consumer behavior rather than importing assumptions from Western markets.',
  },
  {
    eyebrow: 'Global Delivery',
    title: 'International Meta Ads Campaigns',
    icon: Globe,
    badge: 'Tier-1 English Markets & GCC',
    body: [
      'We also manage Meta campaigns for businesses targeting international customers across the US, UK, Australia, Canada, UAE, and other global regions.',
      'Our international strategy includes country-specific audience research, localized creative, market-level campaign structures, currency and offer localization, local landing pages, and country-level performance analysis.',
    ],
    bullets: [
      'Country-specific creative & hook localization',
      'Market-level Advantage+ campaign silos',
      'Localized pricing, tax & currency displays',
      'Western consumer trust badge engineering',
      'Time-zone synchronized ad scheduling',
      'High-velocity UGC creator coordination',
      'Multi-currency ROAS & CAC analytics',
      'GDPR & international privacy compliance',
    ],
    tail: 'The goal is not simply to increase international impressions, but to build localized funnels that acquire customers profitably.',
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Meta Ads for Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">International Markets.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Campaign structure, creative tone, language, and conversion flows are calibrated to the actual buying psychology of each region.
          </p>
        </div>

        {/* Modality 2 Symmetrical Two-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.eyebrow}
                className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
                      <Icon className="h-4 w-4 text-frame-accent" />
                      <span>{area.eyebrow}</span>
                    </div>
                    <span className="rounded-full border border-white/[0.08] bg-[#09090B] px-3 py-0.5 font-mono text-[11px] text-zinc-400">
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    {area.title}
                  </h3>

                  <div className="space-y-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {area.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block mb-3">
                      Target Capabilities &amp; Localization:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                      {area.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08] bg-[#09090B]/50 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl">
                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    <span className="font-semibold text-zinc-200">Execution Standard: </span>
                    {area.tail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Market Assessment Action Banner */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <p className="text-base sm:text-lg font-normal text-zinc-200 max-w-2xl leading-relaxed">
            Tell us your target audience and monthly growth goals, and we will model the ad spend, creative volume, and conversion flow needed to acquire customers profitably.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Get a Free Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
