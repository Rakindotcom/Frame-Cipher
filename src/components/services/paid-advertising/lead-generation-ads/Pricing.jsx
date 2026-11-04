'use client'

import React from 'react'
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'Single Platform',
    tag: 'Focused Channel Testing',
    fee: '৳18,000',
    feeNote: 'per month + ad spend',
    adSpend: 'Recommended starting ad spend: ৳30,000+/mo',
    bestFor: 'Businesses testing lead generation on a single primary platform (e.g. Google Search or Meta Lead Ads).',
    included: [
      'Single-platform campaign strategy & account setup',
      'Lead destination strategy (landing page or native form)',
      'Basic qualification field & form planning',
      'Tracking pixel and conversion event configuration',
      'Basic CRM webhook connection or email routing',
      'Negative keyword and audience exclusion lists',
      'Weekly bid and ad copy optimization',
      'Monthly lead volume & CPL performance reporting',
    ],
    cta: 'Start Single Platform',
    popular: false,
  },
  {
    name: 'Multi-Platform',
    tag: 'Omnichannel Lead Capture',
    fee: '৳35,000',
    feeNote: 'per month + ad spend',
    adSpend: 'Recommended starting ad spend: ৳60,000+/mo',
    bestFor: 'Growing companies scaling qualified inquiries across multiple networks (e.g. Google Search + Meta or LinkedIn).',
    included: [
      'Everything in Single Platform',
      'Multi-channel strategy (Google + Meta + LinkedIn)',
      'Advanced multi-tier qualification form design',
      'Real-time automated CRM lead routing & notifications',
      'Server-side Conversion API (CAPI) implementation',
      'A/B testing of lead hooks, offers, and creative',
      'Cost Per Qualified Lead (CPQL) reporting',
      'Bi-weekly sales pipeline strategy reviews',
    ],
    cta: 'Start Multi-Platform',
    popular: true,
  },
  {
    name: 'CRM-Integrated Growth',
    tag: 'Full Pipeline & Offline Feedback',
    fee: '৳50,000',
    feeNote: 'per month + ad spend',
    adSpend: 'Recommended starting ad spend: ৳90,000+/mo',
    bestFor: 'Established B2B and high-ticket service companies requiring deep CRM automation, qualification, and closed-loop offline sales feedback.',
    included: [
      'Everything in Multi-Platform Plan',
      'Deep CRM integration (HubSpot, Salesforce, Zoho)',
      'Offline conversion feedback (Google Data Manager / Meta)',
      'Enhanced Conversions for Leads configuration',
      'Opportunity-stage tracking & sales feedback loop',
      'Automated sales rep round-robin lead distribution',
      'Customer Acquisition Cost (CAC) and revenue reporting',
      'Dedicated senior growth director & weekly reviews',
    ],
    cta: 'Start CRM Growth Plan',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Lead Generation Ads{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Transparent, monthly retainer pricing based on platform count, CRM depth, qualification requirements, and reporting scope. Zero media spend markups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-colors duration-300 ${
                pkg.popular
                  ? 'border-frame-accent bg-[#141218]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-frame-accent px-3 py-0.5 font-mono text-[10px] uppercase font-bold tracking-wider text-black">
                  <Sparkles className="h-3 w-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="font-heading text-2xl font-medium text-white mt-1">
                  {pkg.name}
                </h3>
                <div className="mt-4 mb-2">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-white">
                    {pkg.fee}
                  </span>
                  <span className="block font-mono text-xs text-zinc-400 mt-1">
                    {pkg.feeNote}
                  </span>
                </div>

                <div className="rounded-lg border border-white/[0.06] bg-black/40 px-3 py-1.5 font-mono text-[11px] text-frame-accent mb-4">
                  {pkg.adSpend}
                </div>

                <div className="rounded-lg border border-white/[0.06] bg-black/30 p-3.5 mb-6 text-xs text-zinc-300 leading-relaxed font-normal">
                  <span className="font-semibold text-frame-accent block mb-0.5">Best For:</span>
                  {pkg.bestFor}
                </div>

                <div className="space-y-2.5 mb-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                    What&apos;s Included:
                  </p>
                  {pkg.included.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="/contact"
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-6 font-mono text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  pkg.popular
                    ? 'bg-frame-accent text-black hover:bg-white hover:text-black'
                    : 'border border-white/[0.12] bg-white/[0.04] text-white hover:border-frame-accent hover:bg-frame-accent hover:text-black'
                }`}
              >
                <span>{pkg.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
