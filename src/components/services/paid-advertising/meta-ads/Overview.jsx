'use client'

import React from 'react'
import { Sparkles, CheckCircle2, TrendingUp, Layers, Target, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const fourPillars = [
  {
    num: '01',
    title: 'Creative Strategy',
    desc: 'Earn attention in high-velocity social feeds and communicate the value proposition within the first 3 seconds.',
    tag: 'Stop The Scroll',
  },
  {
    num: '02',
    title: 'Irresistible Offer',
    desc: 'Give users a compelling, friction-free commercial reason to click, enquire, or purchase on the spot.',
    tag: 'Commercial Value',
  },
  {
    num: '03',
    title: 'Conversion Data',
    desc: 'Feed Meta’s AI algorithms with accurate Pixel and Conversions API signals to bid on buyers, not lurkers.',
    tag: 'Signal Resilience',
  },
  {
    num: '04',
    title: 'Funnel Alignment',
    desc: 'Connect the ad promise with fast mobile landing pages or seamless WhatsApp/Messenger chat checkout flows.',
    tag: 'Post-Click CRO',
  },
]

const supportedOutcomes = [
  'Ecommerce sales & revenue scaling',
  'Qualified B2B lead generation',
  'Local service inquiries & walk-ins',
  'Appointment & consultation bookings',
  'Direct incoming phone calls',
  'Click-to-Messenger sales flows',
  'Click-to-WhatsApp direct commerce',
  'Catalog & dynamic product purchases',
  'Full-funnel custom retargeting',
  'International customer acquisition',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Meta Ads Management Built Around Creative,{' '}
            <span className="italic text-frame-accent">Conversion Data &amp; Buyer Behavior.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Meta advertising differs from search advertising because users are usually not searching for your product or service when your ad appears. The campaign has to earn attention, communicate the offer quickly, create enough interest to continue the journey, and give Meta useful signals about which users are more likely to take the desired action.
          </p>
        </div>

        {/* 4 Pillars Modality 2 Divided Column Band */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-12">
          {fourPillars.map((pillar) => (
            <div key={pillar.num} className="p-7 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 10 Supported Outcomes Ledger & Advantage+ AI Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-start">
          {/* Left Column: 10 Core Business Outcomes (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-white/[0.08] bg-[#121214] p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Outcomes We Build Around
              </span>
              <Target className="h-4 w-4 text-frame-accent" />
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              We build campaigns around the outcome that matters to your business, whether that means purchases, qualified leads, calls, messages, bookings, or another measurable commercial action:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300">
              {supportedOutcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-lg border border-white/[0.04] bg-[#09090B] p-3 text-xs"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Advantage+ Automation & Strategic Levers (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-[#121214] p-8 space-y-5">
            <h3 className="font-heading text-xl font-medium text-white">
              Why Automation Requires Stronger Strategy
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              Meta&apos;s current Advantage+ tools use AI and automation across areas such as audience, placements, budget, creative, and end-to-end sales or lead campaigns. That makes accurate conversion signals and strong creative inputs increasingly important to campaign management.
            </p>

            {/* Core Ribbon */}
            <div className="pt-2 border-t border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-400">
                <span className="rounded-md border border-white/[0.06] bg-[#09090B] px-2 py-1 text-zinc-300">
                  Creative Strategy
                </span>
                <span>•</span>
                <span className="rounded-md border border-white/[0.06] bg-[#09090B] px-2 py-1 text-zinc-300">
                  Conversion Data
                </span>
                <span>•</span>
                <span className="rounded-md border border-white/[0.06] bg-[#09090B] px-2 py-1 text-frame-accent">
                  Advantage+ Tuning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
