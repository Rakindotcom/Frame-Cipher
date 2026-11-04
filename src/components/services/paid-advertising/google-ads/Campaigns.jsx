'use client'

import React, { useState } from 'react'
import { CheckCircle2, Search, ShoppingBag, Sparkles, Video, RefreshCw, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const campaigns = [
  {
    id: 'search',
    title: 'Google Search Ads',
    label: 'Capture commercial intent',
    icon: Search,
    body: [
      'Google Search campaigns target people actively searching for products, services, solutions, or information related to your offer.',
      'We structure Search campaigns around commercial intent, relevant keyword themes, geographic targeting, negative keywords, ad messaging, and conversion goals.',
    ],
    listLabel: 'Our Search campaign management includes',
    bullets: [
      'Keyword and search-intent research',
      'Match-type strategy',
      'Negative keyword management',
      'Responsive Search Ads',
      'Ad asset optimization',
      'Location targeting',
      'Audience observation and targeting where appropriate',
      'Bid and budget management',
      'Search-term analysis',
      'Conversion-focused landing-page alignment',
    ],
    tail: 'The objective is not to generate the largest possible volume of traffic. It is to increase the amount of relevant traffic that has a realistic path to conversion.',
    metric: 'High Commercial Intent',
  },
  {
    id: 'shopping',
    title: 'Google Shopping Ads',
    label: 'Built around your product data',
    icon: ShoppingBag,
    body: [
      'Google Shopping campaigns are built around product information rather than traditional keyword-based ad copy alone.',
      'For ecommerce businesses, we manage the relationship between product data, Merchant Center, Google Ads, campaign structure, and the buying experience.',
    ],
    listLabel: 'Our Shopping management can include',
    bullets: [
      'Merchant Center setup and review',
      'Product feed management',
      'Product title and attribute optimization',
      'Product categorization',
      'Feed error and disapproval review',
      'Product segmentation',
      'Shopping campaign structure',
      'Budget allocation',
      'Conversion-value optimization',
      'Landing-page and product-page relevance',
    ],
    tail: 'Accurate product data matters because Google uses information such as product titles, prices, images, availability, and other attributes to understand and match products to relevant searches.',
    metric: 'Direct Product Visuals',
  },
  {
    id: 'pmax',
    title: 'Performance Max Campaigns',
    label: 'Goal-based automation',
    icon: Sparkles,
    body: [
      'Performance Max is a goal-based campaign type that uses automation to access Google’s advertising inventory across multiple surfaces, including Search, YouTube, Display, Discover, Gmail, and Maps. It is designed around defined conversion or conversion-value goals rather than operating as a traditional keyword-only campaign.',
    ],
    listLabel: 'We manage Performance Max with attention to the inputs that influence performance',
    bullets: [
      'Conversion goals',
      'Campaign structure',
      'Asset groups',
      'Creative assets',
      'Product feeds where relevant',
      'Audience signals',
      'Budget allocation',
      'Location and market targeting',
      'Conversion values',
      'Performance analysis',
    ],
    tail: 'Performance Max is not something we switch on simply because it is automated. We assess whether it fits the account, what role it should play alongside Search, and which business outcomes the campaign should optimize toward.',
    metric: 'Multi-Surface AI Reach',
  },
  {
    id: 'display-youtube',
    title: 'Display & YouTube Ads',
    label: 'Support the journey',
    icon: Video,
    body: [
      'Display and YouTube campaigns can support different parts of the customer journey, from brand exposure and consideration to remarketing and conversion activity.',
    ],
    listLabel: 'Depending on your goals, we can manage',
    bullets: [
      'Audience targeting',
      'Remarketing',
      'Video campaigns',
      'Display creative',
      'Geographic targeting',
      'Frequency considerations',
      'Conversion tracking',
      'Creative testing',
      'Landing-page alignment',
    ],
    tail: 'These campaigns are particularly useful when your customers need more than one interaction before they are ready to purchase or enquire.',
    metric: 'Visual Brand Recall',
  },
  {
    id: 'remarketing',
    title: 'Remarketing Campaigns',
    label: 'Reconnect with interested visitors',
    icon: RefreshCw,
    body: [
      'Not every visitor converts during their first session. Remarketing helps you reconnect with people who have already interacted with your website, products, content, or other digital touchpoints.',
    ],
    listLabel: 'We can structure remarketing around actions such as',
    bullets: [
      'Viewed a product but did not purchase',
      'Visited a service page',
      'Started but did not complete a form',
      'Added products to cart',
      'Engaged with key website content',
      'Previously became a lead or customer',
    ],
    tail: 'Remarketing strategy depends on the audience, buying cycle, privacy requirements, and business objective. We focus on useful audience segmentation rather than repeatedly showing the same ad to everyone.',
    metric: 'Second-Chance Conversions',
  },
]

export default function Campaigns() {
  const [activeTab, setActiveTab] = useState(campaigns[0].id)
  const currentCampaign = campaigns.find((c) => c.id === activeTab) || campaigns[0]
  const IconComponent = currentCampaign.icon

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-12">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Google Ads Campaigns{' '}
            <span className="italic text-frame-accent">We Manage.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Different campaign types solve different advertising problems. We select campaign types based on your business model, buying journey, conversion data, product catalog, and market.
          </p>
        </div>

        {/* Modality 3 Architectural Blueprint Matrix */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden">
          {/* Navigation Tab Bar */}
          <div className="flex items-center border-b border-white/[0.08] bg-[#09090B] overflow-x-auto scrollbar-none">
            {campaigns.map((camp, idx) => {
              const isActive = camp.id === activeTab
              const TabIcon = camp.icon
              return (
                <button
                  key={camp.id}
                  type="button"
                  onClick={() => setActiveTab(camp.id)}
                  className={`flex items-center gap-2.5 px-5 py-4 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors duration-200 border-r border-white/[0.08] cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#121214] text-white border-b-2 border-b-frame-accent'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  <TabIcon className={`h-4 w-4 ${isActive ? 'text-frame-accent' : 'text-zinc-500'}`} />
                  <span>0{idx + 1}. {camp.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Campaign Detail Stage */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Narrative & Intent (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-white">
                  {currentCampaign.title}
                </h3>

                <div className="space-y-4 text-base font-normal leading-relaxed text-zinc-300">
                  {currentCampaign.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Strategy Philosophy Callout */}
                <div className="rounded-xl border border-white/[0.08] bg-[#09090B] p-5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-frame-accent mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                    <span>Commercial Strategy Focus</span>
                  </div>
                  <p className="text-sm font-normal leading-relaxed text-zinc-300">
                    {currentCampaign.tail}
                  </p>
                </div>
              </div>

              {/* Right Column: Execution Checklist (6 cols) */}
              <div className="lg:col-span-6 rounded-xl border border-white/[0.08] bg-[#09090B] p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    {currentCampaign.listLabel}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    {currentCampaign.bullets.length} Core Signals
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

                <div className="pt-2 flex items-center justify-between border-t border-white/[0.08] text-xs font-mono text-zinc-400">
                  <span>Channel Focus: {currentCampaign.metric}</span>
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
