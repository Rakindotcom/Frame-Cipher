'use client'

import React from 'react'
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'Single Platform',
    tag: 'Focused Channel Program',
    fee: '৳15,000',
    feeNote: 'per month + ad spend',
    bestFor: 'Businesses starting with a focused remarketing program on a single primary network (e.g. Meta or Google).',
    included: [
      'Single-platform pixel/tag tracking review & setup',
      'Funnel-stage audience segmentation (up to 4 tiers)',
      'Basic recency window setup (7-day, 30-day)',
      'Purchaser & converted lead suppression rules',
      'Remarketing campaign setup & bid management',
      'Manual frequency cap configuration & exposure checks',
      'Creative rotation & ad fatigue monitoring',
      'Monthly performance reporting by audience cohort',
    ],
    cta: 'Start Single Platform',
    popular: false,
  },
  {
    name: 'Cross-Platform',
    tag: 'Multi-Channel Omnichannel',
    fee: '৳25,000',
    feeNote: 'per month + ad spend',
    bestFor: 'Growing businesses running cohesive remarketing across up to three platforms (e.g. Meta + Google + TikTok or LinkedIn).',
    included: [
      'Everything in Single Platform',
      'Multi-platform tracking & Server-Side CAPI setup',
      'Advanced audience architecture across up to 3 networks',
      'Sequential creative narrative staging (Days 1–3, 4–14, 15–30)',
      'Cross-platform audience suppression & deduplication',
      'CRM customer list synchronization and offline matching',
      'Holdout incrementality testing & attribution analysis',
      'Bi-weekly performance reviews and strategy calls',
    ],
    cta: 'Start Cross-Platform',
    popular: true,
  },
  {
    name: 'Dynamic Catalog Add-On',
    tag: 'Ecommerce Product-Level DPA',
    fee: '৳10,000',
    feeNote: 'per month add-on',
    bestFor: 'Ecommerce and multi-product brands requiring real-time product-specific dynamic catalog ads and replenishment loops.',
    included: [
      'Product catalog feed health review & sync',
      'Dynamic product ads (DPA) on Meta, Google & TikTok',
      'Product-view and abandoned cart dynamic matching',
      'Cross-sell and upsell automated recommendation logic',
      'Usage-cycle replenishment reminder campaigns',
      'Promotional overlay badges & dynamic pricing feeds',
      'Out-of-stock automatic suppression management',
      'Dedicated ecommerce feed troubleshooting support',
    ],
    cta: 'Add Dynamic Catalog',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Remarketing Services{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Transparent, monthly retainer pricing based on platform count, audience tier depth, tracking complexity, and catalog scale. Zero media spend markups or hidden fees.
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
