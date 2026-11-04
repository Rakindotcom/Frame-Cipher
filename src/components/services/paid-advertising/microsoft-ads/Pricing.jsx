'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'
import { Check, ShieldAlert } from 'lucide-react'

const tiers = [
  {
    name: 'Standard Search',
    price: '৳20,000',
    cadence: '/ month',
    badge: 'Core Search',
    popular: false,
    desc: 'For businesses launching focused Microsoft Search campaigns targeting high-intent commercial keywords on Bing and Yahoo networks.',
    features: [
      'Search campaign architecture & management',
      'Commercial keyword research & match-type setup',
      'Continuous search-term audit & negative pruning',
      'UET tag setup & primary conversion tracking',
      'Responsive Search Ad copywriting & testing',
      'Desktop vs. mobile bid calibration',
      'Monthly performance report & strategic sync',
    ],
    ctaText: 'Get Started with Standard',
    ctaHref: '/contact',
  },
  {
    name: 'Full Account & LinkedIn',
    price: '৳30,000',
    cadence: '/ month',
    badge: 'Most Popular',
    popular: true,
    desc: 'Comprehensive management covering Search, Shopping, Audience Network remarketing, and native LinkedIn Profile Targeting.',
    features: [
      'Everything in Standard Search',
      'LinkedIn Profile Targeting (Company, Industry, Seniority)',
      'Microsoft Merchant Center & Shopping Ads',
      'Audience Network display & site remarketing',
      'Performance Max & AI Max for Search evaluation',
      'Enhanced conversion tracking & CRM integration',
      'Bi-weekly strategy calls & custom dashboards',
    ],
    ctaText: 'Launch Full Account',
    ctaHref: '/contact',
  },
  {
    name: 'Google Ads Migration',
    price: '৳15,000',
    cadence: 'One-Time Setup',
    badge: 'Deliberate Migration',
    popular: false,
    desc: 'Structured migration of an established Google Ads account into Microsoft Advertising, with complete keyword cleanup and platform adaptation.',
    features: [
      'Official Google Ads API account import',
      'Complete keyword match-type & bid audit',
      'Removal of irrelevant or zero-volume keywords',
      'Search partner network placement controls',
      'UET tag & conversion goal re-mapping',
      'Ad copy adaptation for Microsoft audiences',
      'Pair with Standard or Full Account retainer',
    ],
    ctaText: 'Plan Your Migration',
    ctaHref: '/contact',
  },
]

export default function Pricing() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Microsoft Ads Management{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Predictable fixed management fees without percentage markups on your media spend. Advertising budget is billed directly to your own Microsoft Advertising account.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-colors duration-300 ${
                tier.popular
                  ? 'border-frame-accent/60 bg-[#18181B]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14] hover:bg-[#18181B]/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    {tier.badge}
                  </span>
                  {tier.popular && (
                    <span className="rounded-full bg-frame-accent/20 px-2 py-0.5 font-mono text-[10px] text-frame-accent border border-frame-accent/30 uppercase">
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  {tier.desc}
                </p>

                <div className="mb-6 flex items-baseline gap-1 border-b border-white/[0.08] pb-6">
                  <span className="font-heading text-3xl sm:text-4xl font-medium text-white">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {tier.cadence}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-300 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <PosterButton
                  href={tier.ctaHref}
                  variant={tier.popular ? 'accent' : 'outline'}
                  className="w-full justify-center"
                >
                  {tier.ctaText} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-white/[0.06] bg-[#121214] p-5 font-mono text-xs text-zinc-400 flex items-start sm:items-center gap-3">
          <ShieldAlert className="h-4 w-4 text-frame-accent shrink-0 mt-0.5 sm:mt-0" />
          <span>
            Advertising spend is billed directly through the client's Microsoft Advertising account. Migration package covers audit, conversion alignment, and clean redeployment.
          </span>
        </div>
      </div>
    </section>
  )
}
