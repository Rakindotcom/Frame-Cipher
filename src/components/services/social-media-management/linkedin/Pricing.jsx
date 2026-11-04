'use client'

import React from 'react'
import { Check, ShieldAlert, Sliders, Clock, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Company Page',
    price: '৳15,000',
    priceNote: 'Per month',
    bestFor: 'Businesses building a stronger company presence',
    features: [
      'Company Page strategic architecture',
      'Profile & About section optimization',
      'Content planning & calendar design',
      'Regular post drafting & scheduling',
      'Monthly B2B performance reporting',
    ],
    popular: false,
  },
  {
    name: 'Executive Profile',
    price: '৳25,000',
    priceNote: 'Per month',
    bestFor: 'Founders and executives building professional authority',
    features: [
      'One executive profile management',
      'Personal voice & narrative discovery',
      'Ghostwritten thought leadership posts',
      'Publishing support & scheduling cadence',
      'Strategic commenting & engagement plan',
    ],
    popular: false,
  },
  {
    name: 'Combined Management',
    price: '৳40,000',
    priceNote: 'Per month',
    bestFor: 'Businesses building both corporate and executive presence',
    features: [
      'Company Page + 1 executive profile',
      'Harmonized cross-posting strategy',
      'Thought leadership & corporate updates',
      'Consolidated monthly B2B reporting',
      'Integrated B2B content production',
    ],
    popular: true,
  },
  {
    name: 'Multi-Executive',
    price: 'Custom Quote',
    priceNote: 'Scoped per engagement',
    bestFor: 'Leadership teams and larger organizations',
    features: [
      'Multiple executive leadership profiles',
      'Company Page & Showcase Pages',
      'Coordinated multi-channel positioning',
      'Custom SLA & dedicated account strategist',
      'Enterprise reporting & pipeline influence',
    ],
    popular: false,
  },
]

const includedEveryTier = [
  'LinkedIn presence & profile audit',
  'Commercial content strategy roadmap',
  'Editorial content calendar',
  'Original graphic & text content creation',
  'Formal client review & approval workflow',
  'Publishing & peak-time scheduling',
  'Performance analytics reporting',
  'Ongoing strategy & topic refinement',
]

const priceFactors = [
  'Number of executive profiles included',
  'Weekly post cadence & content volume',
  'Total graphic, carousel & document requirements',
  'Executive ghostwriting depth & interview time',
  'Custom visual design & technical illustration',
  'Video editing or animation requirements',
  'Community management & comment reply scope',
  'Employee advocacy program management',
  'Number of international target markets',
  'Multiple company handles or Showcase Pages',
  'LinkedIn Events or Newsletter execution',
  'Additional on-location content capture needs',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Commercial Retainers · Pricing Matrix
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            LinkedIn Management{' '}
            <span className="italic text-frame-accent">Pricing &amp; Plans.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            LinkedIn management pricing depends on the scope of work, content volume, whether company pages or executive profiles are included, the number of executives, engagement requirements, and content-production needs.
          </p>
        </div>

        {/* 4 Package Tiers Grid (Guaranteed Non-clipping headers) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 md:p-8 transition-colors ${
                pkg.popular
                  ? 'border-purple-500/50 bg-[#15121c] ring-1 ring-purple-500/30 shadow-2xl shadow-purple-950/40'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              <div>
                {/* Header row with non-clipping featured badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Tier 0{index + 1} · </span>
                  {pkg.popular && (
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-violet-300">
                      Most Requested
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-heading text-xl font-medium tracking-tight text-white">
                  {pkg.name}
                </h3>

                <p className="mt-4 font-mono text-2xl md:text-3xl font-medium text-frame-accent">
                  {pkg.price}
                </p>

                <p className="mt-1 font-mono text-xs text-zinc-400">
                  {pkg.priceNote}
                </p>

                <p className="mt-4 text-xs font-normal leading-relaxed text-zinc-300 min-h-[36px]">
                  {pkg.bestFor}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-white mb-3">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2.5 text-xs font-normal text-zinc-200">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'primary' : 'secondary'}
                  size="md"
                  className="w-full text-center"
                >
                  {pkg.price === 'Custom Quote' ? 'Request Custom Quote' : 'Select Plan'}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Ledger: Universal Inclusions vs Price Variation Factors */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Universal Inclusions */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                <Check className="h-4 w-4" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                Included at Every Applicable Tier
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {includedEveryTier.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                    <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Variation Factors */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-300">
                <Sliders className="h-4 w-4" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                Factors That Influence Pricing
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {priceFactors.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scope Note Banner */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-[#121214] p-5 text-xs text-zinc-400">
          <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-zinc-200">B2B Retainer Notice:</strong> These reference packages reflect typical organizational structures. Final retainers are scoped around your executive bench, posting frequency, carousel requirements, and community management coverage.
          </p>
        </div>
      </div>
    </section>
  )
}
