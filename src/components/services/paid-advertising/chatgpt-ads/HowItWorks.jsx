'use client'

import React, { useState } from 'react'
import {
  Layers,
  Compass,
  TrendingUp,
  Bot,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const steps = [
  {
    id: 'placements',
    num: '01',
    title: 'Where ChatGPT Ads Appear',
    label: 'Placements & User Interface',
    icon: Layers,
    body: [
      'ChatGPT Ads appear below ChatGPT responses and are clearly identified as advertisements. An ad can include the advertiser name, favicon or logo, headline, description, landing page, and image creative. The advertisement remains separate from the ChatGPT-generated answer.',
      'That distinction matters. Your ad should support the user’s decision without being confused with ChatGPT’s response. The landing page should then deliver the information, offer, proof, product details, or next step promised by the advertisement.',
      'Framecipher plans the ad and landing-page experience together instead of treating the creative as an isolated asset.',
    ],
    metric: 'Ad Clarity & User Trust',
    tail: 'Keeping ad placements clearly distinguishable from AI answers preserves organic trust while directing high-intent users to dedicated landing pages.',
  },
  {
    id: 'targeting',
    num: '02',
    title: 'How Ad Matching & Context Targeting Work',
    label: 'Context Hints & Conversational Intent',
    icon: Compass,
    body: [
      'ChatGPT Ads do not rely on conventional exact-match keywords alone. Advertisers can provide context hints at the ad-group level. These hints describe the situations, customer needs, topics, products, or conversations where an offering may be relevant. OpenAI states that context hints are not exact-match keywords and do not guarantee delivery for specific conversations.',
      'That changes how campaigns should be structured.',
    ],
    listLabel: 'We develop context around:',
    bullets: [
      'What the product or service offers',
      'Who it is designed to help',
      'When the offering becomes useful',
      'Customer problems and decision situations',
      'Relevant use cases and product categories',
      'Geographic or service-area considerations',
    ],
    metric: 'Contextual Relevance & Quality',
    tail: 'The goal is not to create the longest possible keyword list. The goal is to communicate useful context that helps the platform understand when your offering may be relevant.',
  },
  {
    id: 'buying',
    num: '03',
    title: 'ChatGPT Ads Buying & Optimization',
    label: 'Campaign Objectives & Bidding',
    icon: TrendingUp,
    body: [
      'OpenAI Ads Manager currently supports campaign objectives including Views, Clicks, and Conversions. Depending on the campaign setup, advertisers can use impression-based or click-based buying and eligible conversion-optimized campaigns.',
      'We connect the campaign objective to the business outcome:',
    ],
    bullets: [
      'Awareness → build qualified visibility',
      'Traffic → generate relevant website visits',
      'Leads → drive completed enquiry actions',
      'Sales → optimize toward supported purchase events',
    ],
    metric: 'Cost per Conversion / ROAS',
    tail: 'Conversion-focused campaigns can optimize toward supported events such as purchases, registrations, and lead submissions. We monitor delivery, clicks, conversions, costs, creative performance, and other available campaign signals. Where automated bidding is available, we assess whether it fits the campaign objective, conversion volume, budget, and account structure rather than assuming one bidding approach works for every business.',
  },
  {
    id: 'agents',
    num: '04',
    title: 'Sponsored Agents and Emerging Formats',
    label: 'Interactive Conversational Units',
    icon: Bot,
    body: [
      'OpenAI is also testing Sponsored Agents, an advertising format that allows people to start a conversation with an AI representative of a business after interacting with an advertisement. Sponsored Agents are currently available only to selected advertisers in a limited alpha test.',
      'Framecipher monitors emerging formats without building your strategy around features you cannot currently access.',
    ],
    metric: 'Conversational Engagement Depth',
    tail: 'That keeps your advertising plan grounded in what is available today while leaving room to evaluate new opportunities as the platform develops.',
  },
]

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0)
  const current = steps[activeTab]
  const Icon = current.icon

  return (
    <section id="how-it-works" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            How ChatGPT Ads{' '}
            <span className="italic text-frame-accent">Work.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            ChatGPT Ads require a different approach from traditional keyword-led advertising. The campaign still needs a clear objective, budget, creative, targeting, tracking, and measurement. The difference is that ad delivery operates within a conversational environment where context can play an important role.
          </p>
        </div>

        {/* Master Y-Axis Tabbed Layout: Left Sidebar + Right Display Panel */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Vertical Y-Axis Navigation Tabs (4 cols on desktop) */}
          <div className="flex flex-col space-y-2 lg:col-span-4">
            <div className="mb-2 hidden lg:flex items-center justify-between px-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              <span>Select Dimension</span>
              <span>04 Pillars</span>
            </div>

            {steps.map((st, index) => {
              const TabIcon = st.icon
              const isActive = activeTab === index

              return (
                <button
                  key={st.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex w-full items-center justify-between rounded-xl border p-4 text-left transition-colors duration-200 ${
                    isActive
                      ? 'border-frame-accent bg-[#18181B] text-white'
                      : 'border-white/[0.08] bg-[#121214]/70 text-zinc-400 hover:border-white/[0.16] hover:bg-[#121214] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isActive
                          ? 'border-frame-accent bg-frame-accent/10 text-frame-accent'
                          : 'border-white/[0.08] bg-[#09090B] text-zinc-500 group-hover:text-white'
                      }`}
                    >
                      <TabIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                          {st.num}
                        </span>
                        <span className="truncate text-xs font-mono uppercase tracking-wider text-zinc-400">
                          {st.label}
                        </span>
                      </div>
                      <p className="truncate font-heading text-sm font-medium text-white mt-0.5">
                        {st.title}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isActive
                        ? 'translate-x-0 text-frame-accent'
                        : '-translate-x-1 text-zinc-600 group-hover:translate-x-0 group-hover:text-white'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Active Step Detail Panel (8 cols on desktop) */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:p-10 lg:col-span-8 space-y-8">
            {/* Top Detail Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div className="space-y-1.5">
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
                  {current.title}
                </h3>
              </div>

              {/* Metric Tag */}
              <div className="rounded-lg border border-white/[0.08] bg-[#18181B] px-3.5 py-2 shrink-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Core Metric
                </span>
                <span className="font-mono text-xs font-semibold text-frame-accent">
                  {current.metric}
                </span>
              </div>
            </div>

            {/* Step Narrative */}
            <div className="space-y-3 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              {current.body.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Bullets if available */}
            {current.bullets?.length > 0 && (
              <div className="space-y-4 rounded-xl border border-white/[0.06] bg-[#18181B]/70 p-6">
                {current.listLabel && (
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                    <h4 className="font-mono text-xs tracking-wider text-zinc-300">
                      {current.listLabel}
                    </h4>
                  </div>
                )}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {current.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tail Context Note */}
            {current.tail && (
              <div className="border-l-2 border-frame-accent bg-frame-accent/10 p-4 rounded-r-lg">
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {current.tail}
                </p>
              </div>
            )}

            {/* Bottom CTA for Active Tab */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
              <span className="font-mono text-xs text-zinc-400">
                Have questions about {current.title.toLowerCase()}?
              </span>
              <PosterButton href="/contact" variant="accent">
                Request a Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
