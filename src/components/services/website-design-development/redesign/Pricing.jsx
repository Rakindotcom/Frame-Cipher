'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const pricingTiers = [
  {
    name: 'Visual Refresh',
    price: '৳35,000',
    bestFor: 'Best for websites where the existing platform and structure work but the visual experience feels outdated.',
    timeline: '~2 to 3 weeks',
    scope: [
      'Visual redesign',
      'Responsive UI improvements',
      'Selected UX improvements',
      'Existing-platform implementation',
      'Basic SEO review',
      'Testing and launch support',
    ],
    featured: false,
  },
  {
    name: 'Standard Redesign',
    price: '৳75,000',
    bestFor: 'Best for websites that need broader design, UX, structural, and technical improvements.',
    timeline: '~4 to 6 weeks',
    scope: [
      'Site audit',
      'UX and information architecture',
      'Visual redesign',
      'Structural improvements',
      'Up to 15 pages',
      'Redirect planning',
      'Content migration',
      'Testing and launch',
    ],
    featured: true,
  },
  {
    name: 'Platform Migration Redesign',
    price: '৳150,000',
    bestFor: 'Best when the existing CMS or platform is limiting the website.',
    timeline: '~6 to 10 weeks',
    scope: [
      'Full audit',
      'New platform setup',
      'Design implementation',
      'Content migration',
      'URL and redirect mapping',
      'SEO migration',
      'Integration setup',
      'QA and launch support',
    ],
    featured: false,
  },
  {
    name: 'Complex / Ecommerce Redesign',
    price: 'Custom Quote',
    bestFor: 'For larger websites, ecommerce stores, extensive catalogs, complex integrations, or technically demanding migrations.',
    timeline: '~8 to 14+ weeks',
    scopeTitle: 'Pricing depends on:',
    scope: [
      'Number of pages or products',
      'Platform',
      'Migration complexity',
      'Integrations',
      'Payment systems',
      'Content volume',
      'SEO requirements',
      'Custom functionality',
      'Timeline',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Website Redesign{' '}
            <span className="italic text-frame-accent">Pricing in Bangladesh.</span>
          </h2>

          <div className="space-y-3 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            <p>
              Website redesign pricing depends on how much of the current website needs to change, the platform being used, page count, content migration, SEO requirements, integrations, and overall project complexity.
            </p>
            <p>
              The following packages provide a starting reference. Final pricing is confirmed after reviewing the existing website and project requirements.
            </p>
          </div>
        </div>

        {/* 4 Pricing Tier Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-colors ${
                tier.featured
                  ? 'border-frame-accent/40 bg-[#14121a] ring-1 ring-frame-accent/30'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                {tier.featured && (
                  <span className="mb-3 inline-block font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-medium text-white">
                  {tier.name}
                </h3>
                <div className="mt-3 font-heading text-3xl font-medium text-white">
                  {tier.price}
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Timeline: {tier.timeline}
                </p>
                <p className="mt-4 text-xs sm:text-sm text-zinc-400 border-t border-white/[0.08] pt-4 leading-relaxed">
                  {tier.bestFor}
                </p>

                <div className="mt-5 border-t border-white/[0.08] pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-3">
                    {tier.scopeTitle || 'Included Scope:'}
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {tier.scope.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08]">
                <PosterButton
                  href="/contact"
                  variant={tier.featured || tier.price === 'Custom Quote' ? 'accent' : 'outline'}
                  className="w-full"
                >
                  {tier.price === 'Custom Quote' ? 'Get a Custom Quote' : 'Request Quote'}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
