'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'
import { Check, ShieldAlert } from 'lucide-react'

const tiers = [
  {
    name: 'Standard Management',
    price: '৳25,000',
    cadence: '/ month',
    badge: 'Core Performance',
    popular: false,
    desc: 'For brands seeking structured campaign management, keyword targeting, and routine creative testing without catalog feeds.',
    features: [
      'Full campaign management & structure',
      'Audience & active keyword targeting',
      'Pinterest Tag & browser conversion setup',
      'Ongoing A/B creative testing & refreshes',
      'Controlled bidding & budget allocation',
      'Bi-weekly performance reporting & analysis',
      'Direct client account ownership',
    ],
    ctaText: 'Get Started with Standard',
    ctaHref: '/contact',
  },
  {
    name: 'Catalog & Shopping Ads',
    price: '৳40,000',
    cadence: '/ month',
    badge: 'Most Popular for Ecommerce',
    popular: true,
    desc: 'Full-funnel ecommerce management including merchant feed curation, Product Groups, Shopping Ads, and dynamic retargeting.',
    features: [
      'Everything in Standard Management',
      'Product catalog setup & merchant feed health',
      'Custom Product Groups segmentation',
      'Automated Shopping Ads & Collection Ads',
      'Dynamic retargeting for cart abandoners',
      'Pinterest Conversions API (CAPI) deduplication',
      'Product-level ROAS tracking & bid optimization',
      'Seasonal planning & Pinterest Trends integration',
    ],
    ctaText: 'Launch Catalog & Shopping',
    ctaHref: '/contact',
  },
  {
    name: 'Pinterest Creative Support',
    price: '৳15,000',
    cadence: '/ month',
    badge: 'Creative Only',
    popular: false,
    desc: 'Dedicated Pin design and copywriting asset production for brands managing their own media buying in-house.',
    features: [
      'Up to 8 static or video Pin creatives / mo',
      'High-utility on-Pin text overlays & branding',
      'Search-optimized titles & rich descriptions',
      'Multi-variant testing assets (angles & hooks)',
      'Monthly creative refresh roadmap',
      'Figma & Adobe source file delivery',
      'No media campaign management included',
    ],
    ctaText: 'Order Creative Support',
    ctaHref: '/contact',
  },
]

export default function Pricing() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Pinterest Ads Management{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Framecipher uses predictable fixed service tiers rather than taking a percentage of your media spend. Ad spend is billed directly through your own Pinterest Ads Manager account.
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
            Advertising spend is paid directly by the client to Pinterest. Management fees vary based on scope, number of international territories, creative volume, catalog size, and tracking complexity.
          </span>
        </div>
      </div>
    </section>
  )
}
