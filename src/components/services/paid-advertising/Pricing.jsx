'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PosterButton from '../../home/PosterButton'

const packages = [
  {
    name: 'Starter',
    fee: '৳20,000',
    cycle: '/month',
    spend: '৳30,000+/month',
    bestFor: 'Businesses testing paid advertising for the first time',
    features: [
      'Paid media strategy & platform selection',
      'Campaign setup & account management',
      'Audience & targeting configuration',
      'Conversion tracking setup & validation',
      'Creative coordination',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'Growth',
    popular: true,
    fee: '৳35,000',
    cycle: '/month',
    spend: '৳60,000+/month',
    bestFor: 'Businesses scaling an already validated campaign',
    features: [
      'Multi-platform media planning',
      'Campaign setup & account management',
      'Audience refinement & remarketing',
      'Conversion tracking & attribution',
      'Creative testing & variations',
      'Landing page alignment review',
      'Bi-weekly performance reporting',
    ],
  },
  {
    name: 'Ecommerce / Multi-Platform',
    fee: '৳55,000',
    cycle: '/month',
    spend: '৳100,000+/month',
    bestFor: 'Ecommerce businesses running multiple paid channels',
    features: [
      'Multi-channel media planning (Google, Meta, Amazon, more)',
      'Campaign management across platforms',
      'Catalog / product feed coordination',
      'Conversion tracking & attribution',
      'Creative coordination & testing',
      'Landing page & checkout flow alignment',
      'Remarketing & retargeting campaigns',
      'Weekly performance reporting',
    ],
  },
  {
    name: 'Enterprise',
    fee: 'Custom Quote',
    cycle: '',
    spend: 'Custom ad spend',
    bestFor: 'Large budgets, multi-platform or multi-market campaigns',
    features: [
      'Dedicated campaign management team',
      'Multi-market / multi-platform campaign structure',
      'Custom conversion & attribution setup',
      'Full creative & testing program',
      'Landing page & conversion optimization support',
      'Executive reporting & budget visibility',
      'Priority communication & approval workflow',
    ],
  },
]

const typicalScope = [
  'Strategy and media planning',
  'Campaign setup and management',
  'Audience and targeting configuration',
  'Conversion tracking',
  'Creative coordination',
  'Ongoing optimization',
  'Performance reporting',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Paid Advertising{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Paid advertising costs have two separate components:
            <br />
            <strong>1. Framecipher management fee:</strong> strategy, setup, management, optimization, and reporting.
            <br />
            <strong>2. Advertising spend:</strong> the budget paid directly to the advertising platform.
            <br />
            Keeping them separate gives you clearer control over what you are paying for media and what you are paying for management.
          </p>
        </div>

        {/* 4 Pricing Cards (Modality 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`group relative flex flex-col justify-between rounded-xl border p-7 transition-colors duration-300 ${
                pkg.popular
                  ? 'border-[#A855F7]/40 bg-[#121214]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14] hover:bg-[#18181B]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-6 rounded-full border border-white/[0.08] bg-purple-500/20 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div className="border-b border-white/[0.06] pb-3">
                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    {pkg.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-zinc-400">
                    {pkg.bestFor}
                  </p>
                </div>

                {/* Price Display */}
                <div>
                  <span className="font-mono text-3xl font-bold text-white">
                    {pkg.fee}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {pkg.cycle}
                  </span>
                </div>

                {/* Minimum Spend Callout */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 font-mono text-[11px] text-zinc-300">
                  <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">
                    Recommended Min Spend:
                  </span>
                  <span className="text-frame-accent font-semibold">{pkg.spend}</span>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full justify-center"
                >
                  Select {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Typical Scope Breakdown Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 md:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Typical Scope Included Across All Retainers
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-400">
                The exact scope depends on your platform mix, number of campaigns, creative requirements, tracking needs, landing-page work, and market coverage.
              </p>
            </div>
            <PosterButton href="/contact" variant="accent">
              Request a Custom Media Plan &rarr;
            </PosterButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {typicalScope.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
