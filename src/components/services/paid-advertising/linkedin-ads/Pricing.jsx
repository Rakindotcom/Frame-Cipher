'use client'

import React from 'react'
import { CheckCircle2, ShieldCheck, ArrowRight, Zap } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Starter',
    fee: '৳20,000/mo',
    spend: '৳40,000+/month',
    bestFor: 'B2B businesses testing LinkedIn with a focused campaign',
    included: [
      'Account and audience audit',
      'ICP and targeting strategy',
      'Campaign strategy and setup',
      'Creative and messaging strategy',
      'Lead Gen Form setup',
      'Insight Tag configuration',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'Growth',
    fee: '৳35,000/mo',
    spend: '৳80,000+/month',
    bestFor: 'Established B2B campaigns with ongoing optimization',
    popular: true,
    included: [
      'Everything in Starter',
      'Ongoing campaign optimization',
      'Creative testing program',
      'Audience refinement',
      'Retargeting development',
      'CRM or qualified-lead measurement where supported',
      'Bi-weekly performance reporting',
    ],
  },
  {
    name: 'Account-Based Marketing',
    fee: '৳50,000/mo',
    spend: '৳120,000+/month',
    bestFor: 'Businesses targeting defined lists of high-value accounts',
    included: [
      'Everything in Growth',
      'Named target-account setup',
      'Account-based campaign structure',
      'Buying-committee targeting',
      'Conversions API setup where applicable',
      'Sales-aligned pipeline reporting',
    ],
  },
  {
    name: 'Enterprise',
    fee: 'Custom',
    spend: 'Custom',
    bestFor: 'Large B2B budgets and multi-market campaigns',
    included: [
      'Everything in Account-Based Marketing',
      'Dedicated campaign management team',
      'Multi-market campaign structure',
      'Advanced CRM & qualified-lead measurement',
      'CRO & landing page support',
      'Executive reporting & budget visibility',
      'Priority communication & approval workflow',
    ],
  },
]

const standardIncludes = [
  'Audience and account audit',
  'ICP and targeting strategy',
  'Campaign strategy and setup',
  'Creative and messaging strategy',
  'Lead Gen Form setup',
  'Insight Tag configuration',
  'Conversions API setup where applicable',
  'CRM or qualified-lead measurement where supported',
  'Ongoing optimization',
  'Sales-aligned reporting',
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            LinkedIn Ads Management{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            LinkedIn Ads management pricing depends on targeting complexity, campaign format mix, creative requirements, account-based marketing scope, tracking requirements, target markets, and monthly advertising spend.
          </p>
        </div>

        {/* 4-Tier Pricing Grid */}
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
                  <span>Most Selected</span>
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
                    Agency Management Fee
                  </span>
                </div>

                <div className="mt-4 rounded-lg border border-white/[0.06] bg-[#09090B] p-3">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Recommended Minimum Ad Spend
                  </span>
                  <p className="font-mono text-xs font-semibold text-zinc-300 mt-0.5">
                    {pkg.spend}
                  </p>
                </div>

                <div className="mt-3 rounded-lg border border-white/[0.08] bg-[#18181B] p-3">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                    Best For
                  </span>
                  <p className="text-xs font-normal text-zinc-300 mt-0.5 leading-snug">
                    {pkg.bestFor}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-3">
                    Deliverables Included:
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

        {/* Standard Inclusions Ribbon */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <h3 className="font-heading text-lg font-medium text-white mb-4">
            Plans can include:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {standardIncludes.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Transparency Notice */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-xl border border-frame-accent/40 bg-frame-accent/10 p-6 sm:p-8">
          <div className="max-w-3xl space-y-2 text-sm font-normal leading-relaxed text-zinc-300">
            <p>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold mr-1.5">
                Important:
              </span>
              The management fee is separate from your LinkedIn advertising budget. Your media spend is paid directly through your LinkedIn advertising account.
            </p>
            <p className="text-xs text-zinc-400">
              Final pricing depends on campaign complexity, creative volume, number of markets, account-based marketing requirements, tracking setup, and monthly advertising activity.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Get a Custom LinkedIn Ads Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
