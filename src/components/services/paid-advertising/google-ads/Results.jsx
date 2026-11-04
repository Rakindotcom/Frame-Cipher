'use client'

import React from 'react'
import { CheckCircle2, ShieldCheck, ArrowRight, TrendingUp, BarChart3 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import Link from 'next/link'

const caseStudyMetrics = [
  'Business objective & commercial model',
  'Target market & geographic scope',
  'Campaign type (Search, Shopping, PMax)',
  'Starting challenge & account baseline',
  'Strategy & campaign structure implemented',
  'Conversion tracking & attribution approach',
  'Campaign testing & optimization period',
  'Relevant media spend range',
  'Measured outcome (CPA, ROAS, pipeline)',
  'Key lessons & scaling framework',
]

const recentResults = [
  {
    client: 'Dhaka Luxury Furniture Manufacturer',
    type: 'Search & PMax',
    outcome: '+310% Qualified Inquiries',
    stat: '৳480 CPQL',
    desc: 'Eliminated broad-match waste, isolated high-intent residential and corporate search themes, and integrated WhatsApp direct click-to-chat conversion tracking.',
  },
  {
    client: 'Cross-Border Apparel Brand (US/Canada)',
    type: 'Shopping & PMax',
    outcome: '4.6x Verified ROAS',
    stat: '$14.20 CPA',
    desc: 'Restructured Merchant Center product feed, enriched custom labels by margin tier, and deployed target ROAS bidding with Enhanced Conversions.',
  },
  {
    client: 'Fintech & Enterprise Software SaaS',
    type: 'Search Intent Silos',
    outcome: '-44% Cost Per Demo',
    stat: '10/10 Quality Score',
    desc: 'Engineered 1:1 message-matched Next.js landing pages, implemented HubSpot CRM offline conversion imports, and pruned competitor click arbitrage.',
  },
]

export default function Results() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Google Ads Results &amp;{' '}
            <span className="italic text-frame-accent">Case Studies.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We believe paid advertising results should be presented with context, not isolated screenshots or headline numbers.
          </p>
        </div>

        {/* Live Case Study Snapshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {recentResults.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-medium text-white">
                  {item.client}
                </h3>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-2xl font-bold text-white">
                    {item.outcome}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">({item.stat})</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 10 Documented Evidence Criteria & Context Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-start">
          {/* Left Column: 10 Criteria (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-white/[0.08] bg-[#121214] p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Our 10 Case Study Verification Standards
              </span>
              <BarChart3 className="h-4 w-4 text-frame-accent" />
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Where a verified case study is published, we document every variable so you understand the exact conditions behind the performance:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300">
              {caseStudyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 rounded-lg border border-white/[0.04] bg-[#09090B] p-3"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                  <span className="leading-snug">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Context Matters & Ethics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 space-y-4">
              <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                Why Context Matters
              </h3>
              <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                For businesses considering Google Ads management, this makes it easier to understand not only what changed, but why the campaign was structured that way and what conditions influenced the result.
              </p>
            </div>

            <div className="rounded-xl border-l-2 border-frame-accent border-white/[0.08] bg-[#121214] p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-frame-accent">
                <ShieldCheck className="h-4 w-4 text-frame-accent" />
                <span>Zero Fake Screenshots</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We only publish performance figures that can be supported by the underlying account data or client-approved analytics exports.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton href="/case-studies" variant="accent" className="w-full justify-center">
                Explore Full Case Studies &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
