'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Starter',
    fee: '৳15,000',
    period: '/month',
    spend: '৳20,000+/month',
    bestFor: 'Businesses starting Meta Ads with a focused campaign structure',
    included: [
      'Account audit & competitor review',
      'Focused campaign strategy & setup',
      'Audience strategy & core targeting',
      'Meta Pixel tracking setup & validation',
      'Creative strategy & static/carousel ads',
      'Ad copy variations & hook testing',
      'Monthly performance analysis report',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    fee: '৳25,000',
    period: '/month',
    spend: '৳45,000+/month',
    bestFor: 'Established campaigns with ongoing optimization, testing & scaling',
    included: [
      'Everything in Starter tier',
      'Multi-campaign account management',
      'Advantage+ campaign optimization',
      'Server-side Conversions API (CAPI)',
      'Regular creative refreshes & hook tests',
      'Audience segmentation & custom retargeting',
      'Bi-weekly performance reporting & roadmap',
    ],
    popular: true,
  },
  {
    name: 'Creative-Intensive',
    fee: '৳40,000',
    period: '/month',
    spend: '৳70,000+/month',
    bestFor: 'Businesses requiring frequent original video & UGC creative development',
    included: [
      'Everything in Growth tier',
      'High-volume original video ad concepts',
      'Reels & Stories 9:16 vertical production',
      'Weekly creative testing & hook rotations',
      'Catalog & dynamic product ads (DPA)',
      'Post-click landing-page CRO reviews',
      'Weekly performance reporting & slack sync',
    ],
    popular: false,
  },
  {
    name: 'Enterprise',
    fee: 'Custom',
    period: ' quote',
    spend: 'Custom ad spend',
    bestFor: 'Large, complex, or multi-market Meta Ads accounts',
    included: [
      'Everything in Creative-Intensive tier',
      'Dedicated multi-disciplinary team',
      'Multi-market international campaign setup',
      'Custom CRM & offline conversion sync',
      'Advanced first-party attribution modeling',
      'Executive dashboard & real-time spend alerts',
      'Priority direct communication & approval SLA',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Meta Ads Management{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Meta Ads management pricing depends on campaign complexity, creative requirements, ecommerce or lead-generation scope, market coverage, and monthly advertising spend.
          </p>
        </div>

        {/* Modality 5 Symmetrical Pricing Grid (4 Tiers) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mb-12">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between rounded-xl border p-7 transition-colors duration-200 ${
                pkg.popular
                  ? 'border-[#A855F7]/40 bg-[#121214] relative'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-white/[0.08] bg-purple-600 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Plan 0{idx + 1}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {pkg.name}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
                    {pkg.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      {pkg.fee}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">{pkg.period}</span>
                  </div>
                </div>

                {/* Recommended Ad Spend Box */}
                <div className="rounded-lg border border-white/[0.06] bg-[#09090B] p-3 space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block">
                    Recommended Minimum Ad Spend:
                  </span>
                  <p className="font-mono text-xs font-semibold text-zinc-200">
                    {pkg.spend}
                  </p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-normal min-h-[36px]">
                  {pkg.bestFor}
                </p>

                {/* Inclusions */}
                <div className="pt-2 border-t border-white/[0.08] space-y-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent block mb-3">
                    What&apos;s Included:
                  </span>
                  {pkg.included.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full justify-center text-xs"
                >
                  Choose {pkg.name} Plan &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Disclaimer */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-frame-accent shrink-0" />
            <span>Ad spend is billed directly by Meta to your own dual-currency card. Management fees are billed monthly with zero hidden retainers.</span>
          </div>
          <Link href="/calculators/meta-ads" className="inline-flex items-center gap-1.5 text-frame-accent hover:text-white transition-colors shrink-0">
            <span>Model Your Meta Ad Spend &amp; ROAS</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}
