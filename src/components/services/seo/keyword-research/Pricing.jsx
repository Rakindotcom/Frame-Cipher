'use client'

import React from 'react'
import { Check, Sparkles, Clock, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    name: 'Core Keyword Map',
    price: '৳12,000+',
    period: 'one-time',
    delivery: '~1 week',
    bestFor: 'Focused starting set for a single product line or service niche',
    description:
      'A defined sprint establishing priority keywords, intent mapping, and immediate low-hanging fruit.',
    covered: 'Seed discovery, search demand, competition, and search-intent analysis',
    features: [
      'Seed keyword discovery & expansion',
      'Search demand & difficulty scoring',
      'Search-intent classification (Commercial/Info)',
      'Priority target keyword list',
      'Initial keyword-to-page recommendations',
    ],
    highlight: false,
  },
  {
    name: 'Standard Research Package',
    price: '৳25,000+',
    period: 'one-time',
    delivery: '~1–2 weeks',
    bestFor: 'Growing sites needing competitor gap analysis and organized topic clusters',
    description:
      'Expands core research into an execution-ready architecture with competitor intelligence and SILO clusters.',
    covered: 'Core research plus competitor gaps, topic clustering, and cannibalization audit',
    features: [
      'Everything in Core Keyword Map',
      'In-depth competitor keyword gap analysis',
      'Topical cluster & SILO hierarchy mapping',
      'Long-tail & buying-intent question queries',
      'Full architectural Keyword-to-URL Map',
      'Internal keyword cannibalization resolution',
    ],
    highlight: true,
  },
  {
    name: 'Comprehensive Research',
    price: '৳45,000+',
    period: 'one-time',
    delivery: '~2–3 weeks',
    bestFor: 'Large portals, multi-category ecommerce, and enterprise content roadmaps',
    description:
      'Deep, multi-topic research with extensive competitor benchmarking and ready-to-write content planning briefs.',
    covered: 'Multi-topic research, extensive competitor analysis, clustering, and page-planning inputs',
    features: [
      'Everything in Standard Research Package',
      'Multi-category & cross-market research scope',
      'Exhaustive competitor SERP share benchmark',
      'Semantic entity & Knowledge Graph modeling',
      'Granular content briefs with H2/H3 outlines',
      'Internal linking graph & anchor text guidance',
      'Executive strategy walkthrough & handover call',
    ],
    highlight: false,
  },
  {
    name: 'Ongoing Keyword Monitoring',
    price: '৳10,000',
    period: '/month',
    delivery: 'Monthly Retainer',
    bestFor: 'Businesses tracking evolving search trends, seasonality, and competitor moves',
    description:
      'Continuous monthly surveillance of emerging search terms, competitor ranking changes, and algorithm updates.',
    covered: 'New opportunities, keyword ranking changes, and ongoing search-trend monitoring',
    features: [
      'Monthly discovery of emerging industry search queries',
      'Competitor ranking shift & new content alerts',
      'Search Console impression spike & striking distance audits',
      'Seasonal query optimization calendar updates',
      'Monthly executive opportunity report & consultation',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Investment &amp; Timelines
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Keyword Research <span className="italic text-frame-accent">Pricing &amp; Delivery</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Keyword research pricing depends on the number of topics, target markets, competitors, keyword volume, business model, and whether architectural mapping or ongoing monitoring is included.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 md:p-8 ${
                plan.highlight
                  ? 'border-frame-accent/60 bg-[#16141F] shadow-[0_0_40px_rgba(159,103,255,0.12)] ring-1 ring-frame-accent/40'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16] hover:bg-[#151518]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full border border-frame-accent/50 bg-frame-accent px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  <Sparkles className="h-3 w-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                    {plan.name}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                    <Clock className="h-3 w-3" />
                    <span>{plan.delivery}</span>
                  </div>
                </div>

                <p className="mt-3 text-xs font-normal leading-relaxed text-zinc-400">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-5 border-y border-white/[0.08] py-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="font-mono text-xs text-zinc-400 uppercase">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs font-mono text-emerald-400">
                    Best for: {plan.bestFor}
                  </p>
                </div>

                {/* Features List */}
                <div className="mt-5 space-y-2.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <PosterButton
                  href="/contact"
                  variant={plan.highlight ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  Choose {plan.name} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Scope Card */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
              <ShieldCheck className="h-4 w-4" />
              <span>Tailored Scoping</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Need a Custom Enterprise Research Scope?
            </h3>
            <p className="text-sm font-normal text-zinc-400 max-w-2xl">
              Final pricing depends on website scale, active target markets, competitor density, and the required depth of keyword-to-URL mapping.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get a Custom Keyword Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
