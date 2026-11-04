'use client'

import React, { useState } from 'react'
import {
  TrendingUp,
  Target,
  ShoppingBag,
  Film,
  RotateCcw,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'

const campaigns = [
  {
    id: 'sales',
    num: '01',
    title: 'Sales & Advantage+ Sales Campaigns',
    label: 'Ecommerce & Direct Response',
    icon: ShoppingBag,
    body: [
      'For ecommerce and other businesses where the desired outcome is a purchase or measurable sales action, we build campaigns around conversion and value signals.',
      'We use Advantage+ sales campaigns where the account and catalog structure support it, alongside structured testing for creative angles, product sets, and seasonal promotions.',
    ],
    listLabel: 'Sales & Advantage+ Core Capabilities:',
    bullets: [
      'Advantage+ shopping & manual sales campaigns',
      'Catalog & dynamic product ads (DPA)',
      'Multi-variant creative angle testing',
      'High-intent purchase & value optimization',
      'Target ROAS & cost-per-acquisition bidding',
      'Seasonal sale & promotional event structures',
    ],
    metric: 'Purchase ROAS / Cost per Acquisition',
    tail: 'Structured specifically around high-value customer journeys and profitable return on ad spend.',
  },
  {
    id: 'leads',
    num: '02',
    title: 'Lead Generation Campaigns',
    label: 'Qualified Inquiries & Pipeline',
    icon: Target,
    body: [
      'When the goal is inquiries, consultation requests, quotes, or business leads, we focus on lead quality rather than raw volume alone.',
      'We test Meta instant forms, landing-page lead funnels, qualification questions, and follow-up paths to reduce spam and keep the sales pipeline relevant.',
    ],
    listLabel: 'Lead Generation Core Capabilities:',
    bullets: [
      'Meta Instant Forms with custom qualifying logic',
      'Direct landing page lead capture funnels',
      'Intent-filtering questionnaire workflows',
      'CRM & Zapier instant webhook integrations',
      'High-intent B2B & professional targeting',
      'Low-quality lead disqualification rules',
    ],
    metric: 'Cost per Qualified Lead / Pipeline Velocity',
    tail: 'Engineered to reduce tire-kickers and feed your sales team prospects ready for a commercial conversation.',
  },
  {
    id: 'catalog',
    num: '03',
    title: 'Catalog & Product Ads',
    label: 'Inventory Synchronization',
    icon: TrendingUp,
    body: [
      'For businesses with a product catalog, catalog ads can automatically present relevant products to prospective buyers based on what they viewed, added to cart, or might be interested in.',
      'We structure catalog campaigns around product categories, inventory priorities, and audience behavior to maintain relevance and efficiency.',
    ],
    listLabel: 'Catalog & Product Core Capabilities:',
    bullets: [
      'Real-time Meta Commerce Manager feed sync',
      'Dynamic product sets categorized by margins',
      'Automated out-of-stock product exclusions',
      'Custom catalog creative overlays & frames',
      'Viewed-not-purchased dynamic recovery',
      'Cross-sell & up-sell algorithmic recommendations',
    ],
    metric: 'Catalog Conversion Rate / Add-to-Cart Value',
    tail: 'Ensures your entire inventory is represented dynamically without manual individual ad uploads.',
  },
  {
    id: 'creative',
    num: '04',
    title: 'Reels, Stories & Feed Creative Campaigns',
    label: 'Attention & Visual Storytelling',
    icon: Film,
    body: [
      'Creative is one of the most important performance levers on Meta. We structure campaigns around assets designed for how users consume content across Feed, Stories, and Reels.',
      'That includes static ads, carousels, short-form video concepts, benefit-led hooks, customer proof, and offer variations built for mobile attention.',
    ],
    listLabel: 'Creative Testing Core Capabilities:',
    bullets: [
      '9:16 vertical video & UGC style scripts',
      'High-CTR 3-second hook variations',
      'Carousel feature & product storyboards',
      'Direct-response visual offer styling',
      'Placement-tailored aspect ratio exports',
      'Weekly creative fatigue & drop-off monitoring',
    ],
    metric: '3-Sec Hook Rate / Hold Rate / Outbound CTR',
    tail: 'Engineered to stop the endless scroll and communicate your unique value proposition in the first three seconds.',
  },
  {
    id: 'retargeting',
    num: '05',
    title: 'Retargeting & Remarketing Campaigns',
    label: 'First-Party Audience Recovery',
    icon: RotateCcw,
    body: [
      'People rarely buy the first time they see an ad. We build retargeting campaigns around website visits, video engagement, social interactions, cart abandonment, and customer lists.',
      'The objective is not to show the same ad repeatedly, but to answer the objections that prevented someone from converting the first time.',
    ],
    listLabel: 'Retargeting Core Capabilities:',
    bullets: [
      'Cart & checkout abandoner dynamic sequences',
      'High-engagement video viewer follow-ups',
      'Objection-handling & social proof creatives',
      'Customer list VIP & win-back campaigns',
      'Strict frequency capping to avoid burn-out',
      'First-party server-side CAPI matched lists',
    ],
    metric: 'Win-Back ROAS / Frequency / Re-Engagement',
    tail: 'Delivers the exact missing proof needed to close hesitant visitors without annoying them.',
  },
  {
    id: 'messaging',
    num: '06',
    title: 'Messenger & WhatsApp Campaigns',
    label: 'Conversational Commerce',
    icon: MessageCircle,
    body: [
      'In markets like Bangladesh and for many international service categories, direct conversations convert better than forms or web checkouts.',
      'We build click-to-WhatsApp and click-to-Messenger campaigns with automated qualifying prompts and clear conversation flows.',
    ],
    listLabel: 'Conversational Core Capabilities:',
    bullets: [
      'Click-to-WhatsApp Business direct routing',
      'Automated Messenger interactive icebreakers',
      'Lead qualification conversational scripts',
      'Local payment & cash-on-delivery flows',
      'Team conversation tagging & handoff',
      'Cost-per-messaging-conversation optimization',
    ],
    metric: 'Cost per Started Chat / Conversation-to-Sale %',
    tail: 'Transforms social interactions into immediate two-way sales discussions directly on WhatsApp and Messenger.',
  },
]

export default function Campaigns() {
  const [activeTab, setActiveTab] = useState(campaigns[0].id)
  const currentCampaign = campaigns.find((c) => c.id === activeTab) || campaigns[0]
  const IconComponent = currentCampaign.icon

  return (
    <section id="campaigns" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-12">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Meta Ads Campaigns{' '}
            <span className="italic text-frame-accent">We Manage.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We select campaign types around your business objective rather than forcing every account into the same structure.
          </p>
        </div>

        {/* Master Y-Axis Vertical Split Architecture (Tabs on Left, Content on Right) */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {/* Left Column: Vertical Y-Axis Tab Navigation (4 cols) */}
            <div className="lg:col-span-4 bg-[#09090B] flex flex-col divide-y divide-white/[0.06]">
              <div className="p-4 sm:p-5 border-b border-white/[0.08] bg-[#121214]/60">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block">
                  Select Campaign Structure
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {campaigns.length} Specialized Architectures
                </span>
              </div>

              {campaigns.map((camp) => {
                const isActive = camp.id === activeTab
                const TabIcon = camp.icon
                return (
                  <button
                    key={camp.id}
                    type="button"
                    onClick={() => setActiveTab(camp.id)}
                    className={`w-full text-left p-5 sm:p-6 transition-colors duration-200 cursor-pointer select-none group relative ${
                      isActive
                        ? 'bg-[#121214] border-l-4 border-l-frame-accent'
                        : 'bg-transparent hover:bg-white/[0.02] border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs ${isActive ? 'text-frame-accent font-semibold' : 'text-zinc-500'}`}>
                        {camp.num} · {camp.label}
                      </span>
                      <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isActive ? 'text-frame-accent translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'}`} />
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isActive
                          ? 'border-white/[0.08] bg-purple-500/10 text-frame-accent'
                          : 'border-white/[0.08] bg-[#18181B] text-zinc-400 group-hover:text-white'
                      }`}>
                        <TabIcon className="h-4 w-4" />
                      </div>
                      <h3 className={`font-heading text-sm sm:text-base font-medium uppercase tracking-tight leading-snug transition-colors ${
                        isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                      }`}>
                        {camp.title}
                      </h3>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right Column: Active Campaign Detail Content Stage (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12 space-y-8 bg-[#121214]">
              {/* Active Header Badge & Title */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-white">
                  {currentCampaign.title}
                </h3>

                <div className="space-y-4 text-base font-normal leading-relaxed text-zinc-300">
                  {currentCampaign.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Strategic Focus Box */}
              <div className="rounded-xl border border-white/[0.08] bg-[#09090B] p-5 sm:p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-frame-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  <span>Strategic Execution Focus</span>
                </div>
                <p className="text-sm font-normal leading-relaxed text-zinc-300">
                  {currentCampaign.tail}
                </p>
              </div>

              {/* Execution Checklist Grid */}
              <div className="rounded-xl border border-white/[0.08] bg-[#09090B] p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    {currentCampaign.listLabel}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    {currentCampaign.bullets.length} Core Levers
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentCampaign.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-2.5 rounded-lg border border-white/[0.04] bg-[#121214] p-3 text-xs font-medium text-zinc-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
                  <span>Channel Focus: <strong className="text-white">{currentCampaign.metric}</strong></span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-frame-accent hover:text-white transition-colors"
                  >
                    <span>Audit this campaign</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
