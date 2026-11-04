'use client'

import React from 'react'
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'Standard',
    tag: 'Sponsored Products Focus',
    fee: '৳25,000',
    feeNote: 'per month + ad spend',
    bestFor: 'Focused product catalogs (up to 10 active ASINs) running primarily Sponsored Products and keyword targeting.',
    included: [
      'Campaign architecture and portfolio structure',
      'Keyword and product-targeting strategy',
      'Weekly search-term harvesting routines',
      'Negative keyword and ASIN sculpting',
      'Dynamic bid and budget optimization',
      'Monthly ACOS and TACOS executive reporting',
      'Listing health & Buy Box loss monitoring',
      'Ongoing performance tracking & strategy',
    ],
    cta: 'Start Standard Plan',
    popular: false,
  },
  {
    name: 'Full Account',
    tag: 'Sponsored Products + Brands + Display',
    fee: '৳40,000',
    feeNote: 'per month + ad spend',
    bestFor: 'Growing brands needing Sponsored Products, Sponsored Brands, Video Ads, Display Ads, and Storefront coordination.',
    included: [
      'Everything in the Standard Plan',
      'Sponsored Brands headline banners management',
      'Sponsored Brands Video campaign creation & testing',
      'Display Ads (retargeting & competitor conquesting)',
      'Amazon Brand Store layout & conversion alignment',
      'Multi-marketplace structure coordination',
      'Amazon Attribution setup for external traffic',
      'Bi-weekly performance reviews and strategy calls',
    ],
    cta: 'Start Full Account Plan',
    popular: true,
  },
  {
    name: 'DSP Add-On',
    tag: 'Enterprise Programmatic DSP',
    fee: 'Custom',
    feeNote: 'assessed per catalog scope',
    bestFor: 'Established brands with large catalogs seeking programmatic display, audio, and connected TV advertising at scale.',
    included: [
      'Everything in Full Account Plan',
      'Amazon DSP account access & campaign configuration',
      'Amazon exclusive 1st-party audience segmentation',
      'Off-Amazon programmatic display & video retargeting',
      'Connected TV (Prime Video, Freevee, Twitch) ads',
      'Cross-device attribution and incremental reach reports',
      'Custom creative production & frequency capping',
      'Dedicated senior programmatic advertising director',
    ],
    cta: 'Request DSP Custom Quote',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Amazon Ads Management{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Transparent, monthly retainer pricing based on active ASIN count, ad format scope, marketplace volume, and reporting requirements. No media spend markups or hidden fees.
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
                <div className="mt-4 mb-4">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-white">
                    {pkg.fee}
                  </span>
                  <span className="block font-mono text-xs text-zinc-400 mt-1">
                    {pkg.feeNote}
                  </span>
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
