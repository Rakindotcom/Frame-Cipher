'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    name: 'Foundation',
    price: '৳25,000',
    frequency: '/month',
    bestFor: 'Small businesses building their first structured off-page campaign',
    covered: 'Backlink audit, foundational citations, targeted prospecting, and initial outreach.',
    features: [
      'Comprehensive backlink audit & baseline',
      'Local & foundational directory citations',
      'Targeted prospect research & vetting',
      'Initial manual outreach placements',
      'Monthly backlink performance reporting',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '৳50,000',
    frequency: '/month',
    bestFor: 'Businesses building stronger authority in competitive markets',
    covered: 'Competitor gap analysis, targeted editorial outreach, guest content, reclamation, and ongoing reporting.',
    features: [
      'Everything in Foundation plan',
      'Competitor link gap analysis & tracking',
      'Personalized editorial outreach pitches',
      'Guest content creation & placement',
      'Broken link building & reclamation',
      'Ongoing backlink health monitoring',
    ],
    popular: true,
  },
  {
    name: 'Authority',
    price: '৳90,000',
    frequency: '/month',
    bestFor: 'Competitive industries requiring a deeper outreach program',
    covered: 'Digital PR, content-based outreach, stronger publisher campaigns, and broader authority-building work.',
    features: [
      'Everything in Growth plan',
      'Digital PR & linkable asset promotion',
      'High-tier publisher editorial pitching',
      'Original research & survey outreach',
      'Unlinked brand mention reclamation',
      'Algorithmic link risk review & disavow',
    ],
    popular: false,
  },
  {
    name: 'Custom Campaign',
    price: 'Custom Quote',
    frequency: '',
    bestFor: 'Larger websites and international expansion',
    covered: 'Large-scale outreach, dedicated content development, multi-market campaigns, or complex requirements.',
    features: [
      'Everything in Authority plan',
      'Multi-country international outreach (US/UK/CA/AU)',
      'Dedicated content & asset creation team',
      'Enterprise publisher relationship management',
      'Custom SLA & executive weekly reporting',
    ],
    popular: false,
  },
]

const includedAcross = [
  'Backlink audit',
  'Prospect research',
  'Outreach & placement work',
  'Campaign reporting',
  'Backlink monitoring',
  'Risk review',
]

export default function Pricing() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Investment Options
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Link Building Pricing in{' '}
            <span className="italic text-frame-accent">Bangladesh</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Link building pricing depends on campaign scope, target market, publisher quality criteria, content requirements, and the amount of outreach involved.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'border-frame-accent bg-frame-accent/[0.08] relative'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/20'
              }`}
            >
              <div>
                {plan.popular && (
                  <div className="absolute -top-3 left-6 rounded-full bg-frame-accent px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black">
                    Most Popular
                  </div>
                )}

                <div className="space-y-1">
                  <h3 className="font-heading text-xl font-medium text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400 min-h-[36px]">
                    {plan.bestFor}
                  </p>
                </div>

                <div className="mt-5 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.frequency && (
                      <span className="font-mono text-xs text-zinc-400">
                        {plan.frequency}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                    <span className="text-frame-accent font-semibold">Scope: </span>
                    {plan.covered}
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <PosterButton
                  href="/contact"
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  Choose {plan.name} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included Across Plans Checklist */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Core Service Foundation
          </span>
          <h3 className="mt-2 font-heading text-lg sm:text-xl font-medium text-white">
            Included across all campaigns, based on scope:
          </h3>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {includedAcross.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <Check className="h-4 w-4 text-frame-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 pt-5 border-t border-white/[0.06] text-xs text-zinc-400">
            Final pricing is confirmed after reviewing the website, backlink profile, target market, competition, content requirements, and campaign goals.
          </p>
        </div>
      </div>
    </section>
  )
}
