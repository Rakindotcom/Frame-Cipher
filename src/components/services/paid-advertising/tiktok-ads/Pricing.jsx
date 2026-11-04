'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'
import { Check, ShieldAlert } from 'lucide-react'

const tiers = [
  {
    name: 'Standard Management',
    price: '৳30,000',
    cadence: '/ month',
    badge: 'Starter Tier',
    popular: false,
    desc: 'For businesses starting structured TikTok advertising, needing core campaign setup, audience testing, and conversion tracking.',
    features: [
      'Campaign architecture & setup',
      'Audience & interest targeting',
      'TikTok Pixel & Events API setup',
      'Initial creative testing plan & review',
      'Budget pacing & bid adjustments',
      'Bi-weekly performance reporting',
      'Direct account ownership',
    ],
    ctaText: 'Get Started with Standard',
    ctaHref: '/contact',
  },
  {
    name: 'Growth Performance',
    price: '৳45,000',
    cadence: '/ month',
    badge: 'Most Popular',
    popular: true,
    desc: 'For scaling brands needing frequent creative iterations, hook variations, Spark Ads testing, and hands-on optimization.',
    features: [
      'Everything in Standard Tier',
      'High-velocity creative testing (hooks & scripts)',
      'Spark Ads campaign configuration',
      'Smart+ automated campaign workflows',
      'Dynamic retargeting & lookalike scaling',
      'Weekly strategy calls & KPI dashboard',
      'Conversion rate optimization feedback',
    ],
    ctaText: 'Launch Growth Tier',
    ctaHref: '/contact',
  },
  {
    name: 'Scale & Creator Hub',
    price: 'Custom',
    cadence: 'Retainer / Month',
    badge: 'Enterprise / Commerce',
    popular: false,
    desc: 'For high-volume DTC and international brands requiring extensive creator rosters, Spark code management, or TikTok Shop.',
    features: [
      'Full-funnel creator & UGC briefing',
      'End-to-end Spark code authorization',
      'TikTok Shop & GMV Max (supported markets)',
      'Dynamic merchant product catalog setup',
      'Multi-region international execution (US/UK/UAE)',
      'Dedicated media buyer & creative lead',
      'Custom CRM pipeline attribution integration',
    ],
    ctaText: 'Request Custom Proposal',
    ctaHref: '/contact',
  },
]

export default function Pricing() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            TikTok Ads Management{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Transparent fixed service retainers without taking cuts of your media spend. Ad spend is billed directly through your own TikTok Ads Manager account.
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
            Ad spend is paid directly to TikTok via client billing cards. TikTok Shop-specific management is available only in officially supported markets (US, UK, and select regional territories).
          </span>
        </div>
      </div>
    </section>
  )
}
