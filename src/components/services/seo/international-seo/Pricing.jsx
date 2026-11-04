'use client'

import React from 'react'
import { Check, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    name: 'International SEO Audit',
    price: '$325',
    period: '+',
    scope: 'Single detailed review',
    bestFor: 'Existing international or multi-region website',
    features: [
      'International SEO audit',
      'Market research',
      'Technical review',
      'Site structure review',
      'Hreflang checks',
      'Report and recommendations',
    ],
    note: 'A detailed review of your website’s current international setup.',
  },
  {
    name: 'Single-Market Expansion',
    price: '$650',
    period: '+',
    scope: 'One priority market',
    bestFor: 'Adding one new country or language market',
    features: [
      'Everything in the International SEO Audit',
      'Market-specific keyword research',
      'Country and language targeting',
      'Content localization',
      'Implementation support',
      'Reporting',
    ],
    note: 'A focused expansion plan for entering one new market.',
    highlight: true,
  },
  {
    name: 'Multi-Market SEO Setup',
    price: '$1,225',
    period: '+',
    scope: 'Multiple markets',
    bestFor: 'Launching or restructuring 2–4 markets',
    features: [
      'Everything in Single-Market Expansion',
      'Multi-market site architecture',
      'Hreflang implementation',
      'Country-level keyword research',
      'Tracking setup',
      'Ongoing optimization',
    ],
    note: 'Comprehensive international SEO setup across several priority markets.',
  },
  {
    name: 'Enterprise International SEO',
    price: 'Custom',
    period: '',
    scope: 'Custom scope',
    bestFor: '5+ markets, large sites, or complex migrations',
    features: [
      'Everything in Multi-Market SEO Setup',
      'Complex international migrations',
      'Custom technical projects',
      'Dedicated international SEO team',
      'A custom scope agreed with your team',
    ],
    note: 'Built for large, complex, or enterprise international operations.',
  },
]

const typicalScope = [
  'International market research',
  'Competitor and SERP analysis',
  'Site structure strategy',
  'Hreflang implementation',
  'Technical SEO',
  'Market-specific keyword research',
  'Content localization strategy',
  'International internal linking',
  'Migration planning',
  'Authority-building strategy',
  'Performance reporting',
]

const notes = [
  'Final pricing is confirmed after reviewing the website, target markets, technical setup, content requirements, and implementation scope.',
  'Complex structures, large multi-language catalogs, or technical migrations may require customized scoping.',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Transparent Investment</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            International SEO{' '}
            <span className="italic text-frame-accent">Pricing in Bangladesh</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            International SEO pricing depends on the number of markets, languages, URLs, technical complexity, localization requirements, migration scope, and ongoing SEO workload.
          </p>
        </div>

        {/* 4 Pricing Tiers */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-xl p-7 transition-colors duration-200 ${
                plan.highlight
                  ? 'border-2 border-frame-accent/80 bg-[#15121b] shadow-xl'
                  : 'border border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Tier // 0{index + 1}
                  </span>
                  {plan.highlight && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-frame-accent/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-frame-accent border border-frame-accent/40">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                  {plan.name}
                </h3>

                <div className="mt-5 border-y border-white/[0.08] py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="font-mono text-xs text-zinc-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-xs">
                  <div>
                    <span className="font-mono uppercase tracking-wider text-frame-accent block">
                      Best For
                    </span>
                    <p className="text-sm font-medium text-white mt-0.5">{plan.bestFor}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 block mb-3">
                    Deliverables Included:
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-zinc-400 mb-4">{plan.note}</p>
                <PosterButton
                  href="/contact"
                  variant={plan.highlight ? 'accent' : 'outline'}
                  className="w-full justify-center"
                >
                  Choose {plan.name} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Typical Scope Checklist */}
        <div className="mt-14 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-9">
          <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Comprehensive Coverage // Standard Scope
          </span>
          <h3 className="mt-2 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
            Typical Scope Can Include
          </h3>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 border-t border-white/[0.06] pt-5 text-sm text-zinc-300">
            {typicalScope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1 text-xs text-zinc-400 max-w-2xl">
              {notes.map((note, idx) => (
                <p key={idx}>{note}</p>
              ))}
            </div>
            <PosterButton href="/contact">
              Get a Custom International SEO Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
