'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    name: 'AI Visibility Audit',
    price: '৳20,000',
    period: '+',
    type: 'One-time',
    delivery: '~1 week',
    bestFor: 'Businesses wanting a baseline picture of their current AI visibility',
    features: [
      'Visibility baseline',
      'Prompt and query research',
      'Brand and competitor mention analysis',
      'Citation source review',
      'Prioritized recommendations',
      'Actionable next steps',
    ],
    note: 'A defined starting point for understanding where your brand currently stands.',
    highlight: false,
  },
  {
    name: 'Standard AEO/GEO Package',
    price: '৳50,000',
    period: '+',
    type: 'One-time',
    delivery: '~3–4 weeks',
    bestFor: 'Businesses ready to optimize priority content and structure for AI visibility',
    features: [
      'Everything in AI Visibility Audit',
      'Content restructuring for priority pages',
      'Answer-ready content structure',
      'Entity strengthening',
      'Prompt-level testing',
      'Implementation guidance',
      'FAQ and direct-answer optimization',
    ],
    note: 'Focuses on getting priority answers and pages into a retrieval-ready state.',
    highlight: true,
  },
  {
    name: 'Comprehensive AI Visibility Build',
    price: '৳90,000',
    period: '+',
    type: 'One-time',
    delivery: '~6–8 weeks',
    bestFor: 'Businesses needing broad AI visibility across content, entities, sources, and technical foundations',
    features: [
      'Everything in Standard AEO/GEO Package',
      'Topical authority and coverage strategy',
      'Advanced entity and knowledge graph work',
      'Third-party source and authority strategy',
      'Technical SEO for AI accessibility',
      'Source-citation opportunities',
      'Digital PR inputs',
    ],
    note: 'Designed for businesses building a complete AI-search presence.',
    highlight: false,
  },
  {
    name: 'Ongoing AI Visibility Monitoring',
    price: '৳20,000',
    period: '/month',
    type: 'Ongoing',
    delivery: 'Ongoing',
    bestFor: 'Businesses wanting continuous tracking and refinement of AI visibility',
    features: [
      'Everything in AI Visibility Audit',
      'Prompt and prompt-set tracking',
      'Brand and competitor visibility monitoring',
      'Classification tracking',
      'New opportunity identification',
      'Monthly reporting',
      'Ongoing refinement',
    ],
    note: 'Monitors how AI visibility shifts as AI systems, prompts, and competitors change.',
    highlight: false,
  },
]

const notes = [
  'AI Search Optimization pricing depends on the number of pages, prompt sets, markets, entity work, content restructuring, technical scope, and ongoing monitoring required.',
  'Ongoing AI visibility monitoring runs month to month and builds on an initial research foundation.',
]

export default function Pricing() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Investment Structure // Transparent Plans</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            AI Search Optimization{' '}
            <span className="italic text-frame-accent">Pricing &amp; Timeline</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            AI Search Optimization pricing depends on the number of pages, prompt sets, markets,
            entity work, content restructuring, technical scope, and ongoing monitoring required.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-xl p-6 sm:p-8 transition-all ${
                plan.highlight
                  ? 'border-2 border-frame-accent bg-[#18181B] relative ring-1 ring-frame-accent/40'
                  : 'border border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                {plan.highlight && (
                  <span className="mb-3 inline-block rounded-full bg-frame-accent/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-medium tracking-tight text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">{plan.period}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <span>{plan.type}</span>
                  <span>•</span>
                  <span>{plan.delivery}</span>
                </div>

                <p className="mt-4 text-xs font-normal leading-relaxed text-zinc-300 border-t border-white/[0.06] pt-3">
                  {plan.bestFor}
                </p>

                <ul className="mt-5 space-y-2 text-xs text-zinc-300">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-4">
                <p className="text-xs text-zinc-400 italic">
                  {plan.note}
                </p>
                <PosterButton href="/contact" variant={plan.highlight ? 'default' : 'outline'} className="w-full justify-center">
                  Get Started &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notes */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-2">
          {notes.map((note, nIdx) => (
            <p key={nIdx} className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2">
              <span className="text-frame-accent">•</span>
              <span>{note}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
