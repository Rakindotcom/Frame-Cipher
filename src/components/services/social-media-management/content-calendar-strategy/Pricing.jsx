'use client'

import React from 'react'
import { Check, ShieldAlert, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const engagements = [
  {
    name: 'Setup Only',
    price: '৳20,000',
    priceNote: 'One-time setup fee',
    bestFor: 'Businesses with in-house teams that will manage execution internally',
    features: [
      'Cross-platform audit',
      'Strategy framework',
      'Content pillars architecture',
      'Master content calendar',
      'Campaign structure',
      'Repurposing roadmap',
      'Workflow setup & handoff',
    ],
    popular: false,
  },
  {
    name: 'Ongoing Coordination',
    price: '৳18,000',
    priceNote: 'Per month',
    bestFor: 'Businesses managing multiple platforms that need continued coordination',
    features: [
      'Ongoing calendar maintenance',
      'Monthly campaign coordination',
      'Continuous repurposing planning',
      'Content planning support',
      'Performance-informed adjustments',
      'Multi-platform sync checks',
    ],
    popular: true,
  },
  {
    name: 'Bundled With Platform Management',
    price: 'Custom',
    priceNote: 'Bundled retainer rate',
    bestFor: 'Businesses using Framecipher for ongoing social media management',
    features: [
      'Content calendar & strategy coordinated with selected Framecipher platform management services',
      'Full cross-channel publishing & scheduling',
      'Creative production & copywriting integration',
      'Dedicated strategist & monthly reviews',
    ],
    popular: false,
  },
]

const includedScope = [
  'Content strategy framework',
  'Audience and content pillar planning',
  'Master content calendar',
  'Campaign alignment',
  'Platform-specific planning',
  'Repurposing roadmap',
  'CTA direction',
  'Approval workflow',
  'Calendar maintenance',
  'Performance review',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate scroll-mt-20 border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Investment &amp; Plans · Transparent Pricing
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Content Calendar &amp; Strategy{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Pricing depends on the number of platforms, planning depth, campaign complexity, content volume, and whether you need a one-time framework or ongoing coordination.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engagements.map((engagement, index) => (
            <div
              key={engagement.name}
              className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-colors duration-200 ${
                engagement.popular
                  ? 'border-purple-500/40 bg-[#15121C] shadow-2xl shadow-purple-950/20'
                  : 'border-white/[0.08] bg-[#121214] hover:border-purple-500/30'
              }`}
            >
              <div>
                {/* Header row with inline non-clipping badge */}
                <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3 mb-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Tier 0{index + 1}
                  </span>
                  {engagement.popular && (
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      Most Requested
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                  {engagement.name}
                </h3>

                <div className="my-5 border-y border-white/[0.08] py-4">
                  <div className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
                    {engagement.price}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 mt-1 block">
                    {engagement.priceNote}
                  </span>
                </div>

                <div className="mb-6 rounded-lg border border-purple-500/20 bg-purple-500/[0.05] p-3 text-xs text-zinc-300">
                  <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                    Best For
                  </span>
                  {engagement.bestFor}
                </div>

                <div className="space-y-2.5 text-xs text-zinc-300">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-2">
                    What’s Covered:
                  </span>
                  {engagement.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                        <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                      </span>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/[0.08] mt-8">
                <PosterButton
                  href="/contact"
                  variant={engagement.popular ? 'primary' : 'secondary'}
                  size="md"
                  className="w-full text-center"
                >
                  Request a Custom Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included Scope Across All Engagements */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              Included Within the Agreed Scope
            </span>
            <Sparkles className="h-4 w-4 text-frame-accent" />
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
            Core Content Planning Capabilities Included:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {includedScope.map((item) => (
              <div key={item} className="flex items-center gap-2.5 rounded-lg border border-white/[0.04] bg-white/[0.02] p-3 text-xs text-zinc-300">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                  <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-4 border-t border-white/[0.06]">
            Final pricing depends on platform count, content volume, campaign complexity, responsibilities, and delivery requirements. Your proposal confirms the final scope, fee, and delivery schedule before work begins.
          </p>
        </div>
      </div>
    </section>
  )
}
