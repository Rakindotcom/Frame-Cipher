'use client'

import React from 'react'
import { CheckCircle2, Zap } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'ChatGPT Ads Setup',
    fee: '৳12,000',
    feeNote: 'one-time setup',
    bestFor: 'Getting an initial ChatGPT Ads campaign structured, tracked, and verified for launch',
    included: [
      'Campaign & ad-group structure',
      'Context hints definition',
      'Initial creative direction & copy',
      'Tracking & Pixel/CAPI preparation',
      'Pre-launch readiness validation',
    ],
  },
  {
    name: 'ChatGPT Ads Management',
    fee: '৳15,000',
    feeNote: 'per month',
    bestFor: 'Focused ongoing management and optimization of active campaigns',
    popular: true,
    included: [
      'Campaign monitoring & delivery checks',
      'Context-hint refinement',
      'Ongoing creative angle testing',
      'Budget & bid optimization',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'ChatGPT Ads Growth',
    fee: '৳25,000',
    feeNote: 'per month',
    bestFor: 'Multi-campaign scaling with aggressive conversion optimization',
    included: [
      'Multiple concurrent campaigns',
      'Deep context & intent testing',
      'Full conversion tracking & CAPI review',
      'Iterative creative testing program',
      'Monthly strategic alignment session',
    ],
  },
  {
    name: 'International / Multi-Market',
    fee: '৳40,000+',
    feeNote: 'per month',
    bestFor: 'Businesses targeting multiple eligible international regions simultaneously',
    included: [
      'Multi-market campaign management',
      'Country-specific localization',
      'Market-level segmentation & ad groups',
      'Cross-region budget reallocation',
      'Market-level performance attribution',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            ChatGPT Ads Management{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            ChatGPT Ads management pricing depends on campaign scope, market coverage, conversion requirements, creative volume, tracking complexity, and ongoing management needs. Framecipher uses fixed service pricing rather than tying the management fee directly to media spend.
          </p>
        </div>

        {/* 4-Column Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between rounded-xl border p-6 sm:p-7 transition-colors duration-300 ${
                pkg.popular
                  ? 'border-frame-accent bg-[#18181B]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full border border-frame-accent/60 bg-purple-950 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                  <Zap className="h-3 w-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="font-heading text-xl font-medium text-white mt-3">
                  {pkg.name}
                </h3>

                <div className="mt-4">
                  <span className="font-heading text-3xl font-medium text-white tracking-tight">
                    {pkg.fee}
                  </span>
                  <span className="block font-mono text-[11px] text-zinc-400 mt-0.5">
                    {pkg.feeNote}
                  </span>
                </div>

                <div className="mt-4 rounded-lg border border-white/[0.08] bg-[#18181B] p-3">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                    Best For
                  </span>
                  <p className="text-xs font-normal text-zinc-300 mt-0.5 leading-snug">
                    {pkg.bestFor}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-3">
                    What's Included:
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {pkg.included.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  Request This Plan &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Important Transparency Notice */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-xl border border-frame-accent/40 bg-frame-accent/10 p-6 sm:p-8">
          <div className="max-w-3xl space-y-2 text-sm font-normal leading-relaxed text-zinc-300">
            <p>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold mr-1.5">
                Important:
              </span>
              Advertising spend is separate from management fees and paid directly through your OpenAI advertising account.
            </p>
            <p className="text-xs text-zinc-400">
              The final scope depends on market eligibility, number of campaigns, tracking requirements, creative workload, and management depth.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Request a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
