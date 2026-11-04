'use client'

import React, { useState } from 'react'
import {
  Settings,
  GitBranch,
  Search,
  Sparkles,
  Monitor,
  Radio,
  CheckCircle2,
  ChevronRight,
  ShoppingBag,
  Sliders,
} from 'lucide-react'

const services = [
  {
    id: 'strategy',
    icon: Settings,
    name: 'Campaign Strategy & Account Setup',
    subtitle: 'Account Architecture & Profitability Framework',
    desc: 'The account structure affects how easily performance can be understood, isolated, and scaled. We start with product economics, category dynamics, profit margins, and historical advertising data before launching or restructuring any campaign.',
    deliverables: [
      'Marketplace and product category competitive assessment',
      'Account hierarchy, portfolio structure, and naming taxonomy',
      'Target ACOS and Break-Even ACOS modeling per SKU/ASIN',
      'Budget pacing and initial testing capital allocation',
      'Brand Registry verification and format eligibility checks',
      'Conversion tracking and attribution setup verification',
      'Competitor listing benchmarks and price-positioning analysis',
      'Structured 90-day growth and testing roadmap',
    ],
    technicalNote:
      'We set targets based on individual product margins and business goals rather than applying a blanket ACOS target across every ASIN in the catalog.',
  },
  {
    id: 'structure',
    icon: GitBranch,
    name: 'Automatic & Manual Campaign Structure',
    subtitle: 'Discovery, Isolation & Scale Workflows',
    desc: 'Amazon campaigns require a deliberate balance between algorithmic discovery and manual control. Automatic campaigns harvest new customer search queries and ASIN targets, while manual campaigns isolate proven high-converting keywords.',
    deliverables: [
      'Automatic targeting campaigns (Close Match, Loose Match, Substitutes, Complements)',
      'Single-keyword ad groups (SKAGs) for top-converting hero terms',
      'Exact-match campaigns for maximum bid control and impression share',
      'Phrase and Broad match campaigns for targeted query discovery',
      'Product targeting campaigns targeting competitor detail pages',
      'Category targeting refined by price range, star rating, and Prime status',
      'Negative keyword and ASIN harvesting routines to eliminate wasted ad spend',
      'Search-term migration pipeline moving winners from auto to manual exact',
    ],
    technicalNote:
      'Continuous search-term harvesting prevents budget bleed while systematically uncovering high-intent long-tail search queries.',
  },
  {
    id: 'sponsored-products',
    icon: Search,
    name: 'Sponsored Products & Keywords',
    subtitle: 'The Primary Marketplace Revenue Engine',
    desc: 'Sponsored Products represent the highest-converting real estate on Amazon. We manage keyword research, negative matching, placement bid adjustments, and SKU-level profitability with relentless daily discipline.',
    deliverables: [
      'Deep keyword research across Amazon Brand Analytics and search tools',
      'Exact, phrase, and broad match targeting deployment',
      'Competitor ASIN defense and offensive targeting campaigns',
      'Top-of-search (first page) placement multiplier optimization',
      'Product pages placement multiplier controls',
      'Negative exact and negative phrase search term pruning',
      'Bid adjustments based on conversion velocity and ACOS targets',
      'Hero ASIN prioritization and low-performing variant suppression',
    ],
    technicalNote:
      'The objective is not simply to generate more impressions or clicks; it is to concentrate ad spend exclusively on search queries with demonstrable buying intent.',
  },
  {
    id: 'sponsored-brands',
    icon: Sparkles,
    name: 'Sponsored Brands & Storefronts',
    subtitle: 'High-Impact Brand Presence & Multi-Product Showcases',
    desc: 'For Brand Registry enrolled accounts, Sponsored Brands build brand equity, capture top-of-search headline banners, and funnel qualified shoppers into branded storefronts free from competitor distractions.',
    deliverables: [
      'Sponsored Brands headline banners with custom copy and creative imagery',
      'Sponsored Brands Video campaign creation and performance testing',
      'Store Spotlight ads routing shoppers directly to specific Brand Store sub-pages',
      'Amazon Brand Store layout, navigation, and conversion optimization',
      'New-to-brand (NTB) customer acquisition analysis',
      'Brand defense campaigns preventing competitors from bidding on your brand name',
      'Competitor brand conquesting targeting adjacent market leaders',
      'Creative asset A/B testing (imagery, headlines, product selections)',
    ],
    technicalNote:
      'New-to-brand (NTB) metrics allow us to measure the true customer acquisition efficiency of Sponsored Brands vs. existing customer repeat orders.',
  },
  {
    id: 'display-ads',
    icon: Monitor,
    name: 'Display Ads & Retargeting',
    subtitle: 'Shopper Remarketing & Competitor Conquesting',
    desc: 'Display advertising (previously Sponsored Display) reaches shoppers across their entire consideration journey—on product detail pages beneath competitor buy boxes, in customer review sections, and across off-Amazon partner destinations.',
    deliverables: [
      'Purchases remarketing targeting past buyers for replenishment or cross-sell',
      'Views remarketing re-engaging shoppers who viewed your detail pages without buying',
      'Similar product view retargeting capturing lost competitor traffic',
      'Custom image creative and automated promotional badge testing',
      'Detail page placement conquesting directly beneath competitor Buy Boxes',
      'Cross-category audience interest and lifestyle targeting',
      'vCPM (viewable CPM) and CPC cost model optimization',
      'Off-Amazon audience reach extensions to capture consideration early',
    ],
    technicalNote:
      'Detail page placements are ideal for cross-selling complementary accessories or offering a superior price-to-feature value against direct alternatives.',
  },
  {
    id: 'amazon-dsp',
    icon: Radio,
    name: 'Amazon DSP (Programmatic)',
    subtitle: 'Exclusive First-Party Shopper Audiences at Scale',
    desc: 'Amazon DSP gives established brands programmatic access to Amazon first-party audience segments across Amazon sites, Prime Video, Twitch, Freevee, Fire TV, and top open-web exchanges.',
    deliverables: [
      'Account eligibility and DSP opportunity assessment',
      'Custom audience segmentation based on Amazon browsing and buying behavior',
      'In-market, lifestyle, and demographic programmatic audience targeting',
      'Video and interactive display ad creative deployment across connected TV and web',
      'Cross-device attribution and full-funnel customer journey analysis',
      'Off-Amazon traffic generation driving back to Amazon or direct-to-consumer DTC',
      'Frequency capping and programmatic supply path optimization',
      'Consolidated DSP reporting and incremental reach measurement',
    ],
    technicalNote:
      'Amazon DSP is recommended when the product portfolio, marketing budget, and business lifecycle justify programmatic brand building alongside search capture.',
  },
  {
    id: 'retail-readiness',
    icon: ShoppingBag,
    name: 'Listing Readiness & Retail Health',
    subtitle: 'Detail Page Foundation & Buy Box Protection',
    desc: 'Ads can only convert when the underlying listing is retail-ready. We monitor and advise on title optimization, bullet benefits, image gallery compliance, A+ content, pricing competitiveness, and Buy Box stability.',
    deliverables: [
      'Comprehensive listing retail-readiness audit prior to scaling ad spend',
      'Product title, bullet points, and search-term backend keyword alignment',
      'A+ Content and Brand Story structure recommendations',
      'Featured Offer (Buy Box) win percentage monitoring and suppression alerts',
      'Price competitiveness audits against adjacent category leaders',
      'Review velocity and negative feedback risk flagging',
      'FBA/FBM inventory availability monitoring to avoid ad outages',
      'Parent-child variation structure review for optimal review pooling',
    ],
    technicalNote:
      'A bid increase cannot compensate for poor listing quality or a suppressed Buy Box. We ensure retail foundations are intact before increasing media budgets.',
  },
  {
    id: 'bid-optimization',
    icon: Sliders,
    name: 'Bid, Placement & Budget Optimization',
    subtitle: 'Dynamic Algorithmic & Manual Bidding Control',
    desc: 'Managing Amazon PPC requires continuous calibration of bids, placement adjustments (Top of Search vs. Product Pages), dayparting pacing, and budget allocation between high-margin hero SKUs and emerging products.',
    deliverables: [
      'Dynamic bidding strategy configuration (Up and Down, Down Only, Fixed Bids)',
      'Placement bid multipliers for Top of Search (first page) and Product Pages',
      'Hourly budget pacing and dayparting schedule calibration',
      'Rule-based and algorithmic bid adjustments tied to target ACOS',
      'Budget re-allocation from unprofitable search terms to proven converters',
      'Seasonal and promotional event bid pacing (Prime Day, Q4 Black Friday, Cyber Monday)',
      'Inventory-aware bidding that lowers bids as inventory levels deplete',
      'Transparent weekly bid change logs and performance impact tracking',
    ],
    technicalNote:
      'We combine Amazon dynamic bidding options with calculated placement multipliers to capture premium top-of-search ad real estate profitably.',
  },
]

export default function Includes() {
  const [activeTab, setActiveTab] = useState(services[0].id)
  const currentService = services.find((s) => s.id === activeTab) || services[0]

  return (
    <section id="services" className="scroll-mt-20 relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Amazon Ads Management{' '}
            <span className="italic text-frame-accent">Services.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Everything required to launch, scale, and protect Amazon advertising around measurable business profit, qualified sales, and marketplace rank.
          </p>
        </div>

        {/* Desktop Y-Axis Interactive Tabs Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Left Vertical Tab Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {services.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between gap-3 p-4 rounded-xl border text-left transition-colors duration-200 ${
                    isActive
                      ? 'border-frame-accent bg-[#18181B] text-white'
                      : 'border-white/[0.06] bg-[#121214] text-zinc-400 hover:border-white/[0.12] hover:bg-[#151518] hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-9 w-9 rounded-lg flex items-center justify-center border transition-colors ${
                        isActive
                          ? 'border-frame-accent/40 bg-frame-accent/10 text-frame-accent'
                          : 'border-white/[0.08] bg-white/[0.02] text-zinc-400'
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-medium leading-snug">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isActive ? 'text-frame-accent translate-x-0.5' : 'text-zinc-600'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Active Content Panel (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg border border-frame-accent/40 bg-frame-accent/10 flex items-center justify-center text-frame-accent">
                <currentService.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-medium text-white">
                  {currentService.name}
                </h3>
              </div>
            </div>

            <p className="text-base text-zinc-300 font-normal leading-relaxed mb-8">
              {currentService.desc}
            </p>

            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-4">
                Key Deliverables &amp; Technical Execution:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentService.deliverables.map((del) => (
                  <div key={del} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {currentService.technicalNote && (
              <div className="rounded-xl border border-frame-accent/30 bg-frame-accent/[0.04] p-4 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold block mb-1">
                  Strategy Rule:
                </span>
                {currentService.technicalNote}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-3">
          {services.map((item) => {
            const Icon = item.icon
            const isOpen = activeTab === item.id
            return (
              <div
                key={item.id}
                className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveTab(isOpen ? '' : item.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-heading text-base font-medium text-white">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 text-zinc-400 transition-transform ${
                      isOpen ? 'rotate-90 text-frame-accent' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] p-5 pt-3 space-y-4">
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                    <div className="space-y-2">
                      <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                        Deliverables:
                      </p>
                      {item.deliverables.map((del) => (
                        <div key={del} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                    {item.technicalNote && (
                      <div className="rounded-lg border border-frame-accent/30 bg-frame-accent/[0.04] p-3 text-xs text-zinc-300">
                        {item.technicalNote}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
