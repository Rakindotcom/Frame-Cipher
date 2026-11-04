'use client'

import React, { useState } from 'react'
import {
  Settings,
  Target,
  Palette,
  ShoppingBag,
  Activity,
  MousePointerClick,
  Sliders,
  Calendar,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    id: 'strategy',
    icon: Settings,
    name: 'Campaign Strategy & Setup',
    subtitle: 'Account Architecture & Readiness',
    desc: 'The right campaign structure starts with the business objective. We review your offer, market, audience, website, existing Pinterest presence, budget, and conversion path before deciding how the account should be structured.',
    deliverables: [
      'Campaign and ad-group structure aligned to business economics',
      'Objective selection (Consideration, Leads, Sales, Brand Awareness)',
      'Budget and schedule planning with realistic test pacing',
      'Geographic targeting and product/service segmentation',
      'Account setup, readiness checks, and billing validation',
      'Landing-page alignment and destination experience review',
      'Standardized campaign naming and organizational taxonomy',
      'Pre-launch verification and structured initial testing plan',
    ],
    technicalNote:
      "Pinterest's updated Ads Manager supports Consideration, Leads, and Sales objectives, replacing legacy Conversions and Catalog Sales buckets. We build campaigns on the current framework.",
  },
  {
    id: 'targeting',
    icon: Target,
    name: 'Audience & Performance+',
    subtitle: 'Search Intent & Interest Graph',
    desc: 'Pinterest combines search behavior, interests, audience data, and automated optimization. We treat Pinterest search differently from a broad social audience—capturing both active search queries and broader visual inspiration.',
    deliverables: [
      'Keyword targeting built on active Pinterest search behavior',
      'Interest targeting leveraging Pinterest visual discovery graph',
      'Site visitor custom audiences and customer list matching',
      'Engagement audiences from previous Pin interactions',
      'Actalike audiences modeled on highest-value customers',
      'Age, gender, language, and geographic parameter controls',
      'Placement considerations (Browse vs. Search feeds)',
      'Pinterest Performance+ evaluation and controlled integration',
    ],
    technicalNote:
      'Pinterest Performance+ introduces automation across targeting, bidding, and creative selection. We test automated algorithms while retaining strategic manual controls where data demands it.',
  },
  {
    id: 'creative',
    icon: Palette,
    name: 'Pin Creative & Ad Formats',
    subtitle: 'Native High-Utility Visuals',
    desc: 'Pinterest advertising starts with the Pin. A user should understand the idea, product, benefit, or inspiration quickly enough to want to stop, save, explore, or click. We never simply resize Facebook ads.',
    deliverables: [
      'Platform-native Static Pins with vertical 2:3 aspect ratio',
      'Video Pins engineered for stopping power in the feed',
      'Carousel Ads for multi-product or step-by-step showcase',
      'Collection Ads combining hero video with product grids',
      'Idea Ads and high-utility educational Pin formats',
      'On-Pin text overlays and legible value propositions',
      'Search-optimized Pin titles, rich descriptions, and clear CTAs',
      'Seasonal creative variations testing different visual hooks',
    ],
    technicalNote:
      'For Performance+ campaigns, Pinterest recommends providing diverse creative options (~10 ads per ad group) to give the algorithmic auction sufficient material to identify winning variants.',
  },
  {
    id: 'shopping',
    icon: ShoppingBag,
    name: 'Shopping & Catalog Ads',
    subtitle: 'Connecting Discovery with Commerce',
    desc: 'For ecommerce brands, Pinterest seamlessly bridges product inspiration with purchase. We structure catalogs and Product Groups to turn passive saves into active checkouts.',
    deliverables: [
      'Product catalog setup and merchant feed preparation',
      'Data source validation and catalog health monitoring',
      'Product Group organization by category, margin, or season',
      'Product titles, availability, and pricing data review',
      'Shopping campaign architecture with dedicated bids',
      'Collection campaigns pairing lifestyle imagery with products',
      'Dynamic retargeting for site visitors and cart abandoners',
      'Product-level ROAS and conversion performance tracking',
    ],
    technicalNote:
      'Pinterest supports Product Catalog as an automated creative source for Consideration and Sales campaigns. Product Groups enable precise promotional control across inventory segments.',
  },
  {
    id: 'tracking',
    icon: Activity,
    name: 'Conversion Tracking & CAPI',
    subtitle: 'Dual-Layer Measurement Infrastructure',
    desc: 'Pinterest advertising needs reliable conversion data. We implement browser-based Pinterest Tag and server-side Conversions API to ensure signals are preserved despite privacy shifts.',
    deliverables: [
      'Pinterest Tag deployment across all website templates',
      'Pinterest Conversions API (CAPI) server-side implementation',
      'Standard event mapping (PageVisit, AddToCart, Checkout, Lead)',
      'Custom event setup for bespoke business actions',
      'Rigorous event deduplication between Tag and CAPI',
      'Granular UTM tracking and Google Analytics 4 alignment',
      'Test mode validation and data-quality health score audits',
      'Server-side payload encryption and privacy compliance',
    ],
    technicalNote:
      'Sending events via both Tag and Conversions API requires strict event_id deduplication to avoid double-counting conversions in Ads Manager and analytics.',
  },
  {
    id: 'landing',
    icon: MousePointerClick,
    name: 'Landing Page & Funnel Match',
    subtitle: 'Frictionless Conversion Experience',
    desc: 'The Pin earns the click; the landing page must earn the conversion. We audit and optimize the full post-click experience so visitors land exactly where their visual search intended.',
    deliverables: [
      'Message match review between Pin creative and landing page',
      'Direct product page routing rather than generic homepages',
      'Mobile UX, site speed, and responsive layout inspection',
      'CTA visibility, pricing clarity, and trust signal validation',
      'Checkout and enquiry form friction reduction',
      'Visual consistency between Pin aesthetic and destination',
      'Post-click conversion path audit and dropout diagnostics',
      'Landing-page recommendations for higher conversion rates',
    ],
    technicalNote:
      'A continuous journey from Pin to product page drastically reduces bounce rates and increases Pinterest Relevance scores, lowering overall cost per outbound click.',
  },
  {
    id: 'optimization',
    icon: Sliders,
    name: 'Bidding & Optimization',
    subtitle: 'Disciplined Performance Scaling',
    desc: 'Launching is only day one. We continuously analyze search queries, audience response, and ROAS data to make controlled adjustments without disrupting algorithmic learning.',
    deliverables: [
      'Budget pacing and reallocation to top-performing Product Groups',
      'Audience refinement and negative keyword pruning',
      'Systematic creative refreshing to prevent visual fatigue',
      'Evaluation of Performance+ automated bidding vs. custom bids',
      'Bid adjustments based on conversion volume and margin',
      'Product-group segmentation based on return thresholds',
      'Conversion rate optimization recommendations across the funnel',
      'Controlled change management protecting active learning cycles',
    ],
    technicalNote:
      'Frequent early adjustments reset Pinterest learning phases. We adhere to Pinterest guidance by allowing campaigns at least 10 days of stable data collection before major revisions.',
  },
  {
    id: 'seasonal',
    icon: Calendar,
    name: 'Seasonal Campaign Planning',
    subtitle: 'Capitalizing on Early Planning Windows',
    desc: 'Seasonality matters profoundly on Pinterest. Users search and curate ideas months in advance of holidays, life milestones, and seasonal updates. We position your brand early in the journey.',
    deliverables: [
      'Seasonal demand forecasting leveraging Pinterest Trends data',
      'Occasion-based campaign calendars (Weddings, Holidays, Summer)',
      'Early planning window launches (building saves before peak buy)',
      'Budget pacing scaled to peak intent and transaction weeks',
      'Holiday-specific creative bundles and gift guides',
      'Evergreen baseline campaigns paired with seasonal sprints',
      'Post-season performance analysis and year-over-year benchmarks',
      'Clear timelines protecting production and review lead times',
    ],
    technicalNote:
      'Pinterest Trends reveal that planning searches spike 60 to 90 days before peak holiday spending. Early campaign deployment builds high-intent consideration at lower initial CPMs.',
  },
]

export default function Includes() {
  const [activeTab, setActiveTab] = useState(services[0].id)
  const currentService = services.find((s) => s.id === activeTab) || services[0]

  return (
    <section id="services" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Pinterest Ads Management{' '}
            <span className="italic text-frame-accent">Services.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Full-spectrum campaign management from strategic account architecture, Pin creative production, and catalog feeds to server-side tracking, Performance+ automation, and seasonal scaling.
          </p>
        </div>

        {/* Interactive Vertical Y-Axis Tabs Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left Column: Interactive Vertical Y-Axis Tab Buttons (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = service.id === activeTab
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveTab(service.id)}
                  className={`group flex w-full items-center justify-between rounded-xl border p-4 text-left transition-colors duration-200 ${
                    isActive
                      ? 'border-frame-accent/60 bg-[#18181B] text-white'
                      : 'border-white/[0.06] bg-[#121214] hover:border-white/[0.14] hover:bg-[#18181B]/70 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-mono transition-colors ${
                        isActive
                          ? 'border-frame-accent/40 bg-frame-accent/10 text-frame-accent'
                          : 'border-white/[0.08] bg-white/[0.04] text-zinc-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p
                        className={`font-heading text-sm font-medium uppercase tracking-wide truncate ${
                          isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                        }`}
                      >
                        {service.name}
                      </p>
                      <p className="font-mono text-[10px] uppercase text-zinc-400 truncate">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isActive
                        ? 'translate-x-1 text-frame-accent'
                        : 'text-zinc-600 group-hover:translate-x-0.5 group-hover:text-zinc-400'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Active Tab Detailed Deliverables Panel (8 cols) */}
          <div className="lg:col-span-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:p-10 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-frame-accent/30 bg-frame-accent/10 text-frame-accent">
                {React.createElement(currentService.icon, { className: 'h-5 w-5' })}
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
                  {currentService.name}
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-6">
              {currentService.desc}
            </p>

            <div className="border-t border-white/[0.08] pt-6 mb-6">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-4">
                What We Deliver:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-300 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Verification Note */}
            <div className="rounded-lg border border-white/[0.06] bg-[#18181B] p-4 text-xs font-mono text-zinc-400">
              <span className="text-frame-accent font-bold mr-1.5">TECHNICAL NOTE:</span>
              <span>{currentService.technicalNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
