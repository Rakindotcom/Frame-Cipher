'use client'

import React, { useState } from 'react'
import {
  Settings,
  Search,
  ShoppingBag,
  Briefcase,
  Users,
  Sparkles,
  Activity,
  ArrowRightLeft,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    id: 'strategy',
    icon: Settings,
    name: 'Campaign Strategy & Setup',
    subtitle: 'Account Architecture & Planning',
    desc: 'Effective Microsoft Ads management starts with understanding the business, market, offer, conversion path, and available search demand rather than blindly importing a Google Ads setup.',
    deliverables: [
      'Campaign objective and multi-tier account hierarchy setup',
      'Search, Shopping, and Audience campaign-type selection',
      'Budget allocation and target CPA/ROAS bidding calibration',
      'Geographic targeting and localized keyword match-type planning',
      'Landing-page message-match and funnel review',
      'UET and server conversion tracking blueprint',
      'Competitor search query landscape and benchmark analysis',
      'Standardized naming conventions and reporting dashboards',
    ],
    technicalNote:
      'We assess whether campaigns are structured for high-intent B2B inquiries, ecommerce purchases, or remarketing, applying platform-specific network parameters.',
  },
  {
    id: 'search',
    icon: Search,
    name: 'Search Ads Management',
    subtitle: 'Bing & Syndicated Network Reach',
    desc: 'Search is the commercial core of Microsoft Ads. We engineer Search campaigns around high-intent queries, responsive text variations, and aggressive negative keyword filtering.',
    deliverables: [
      'In-depth commercial keyword research on Bing and Yahoo networks',
      'Strategic match-type allocation (Exact, Phrase, Broad)',
      'High-converting Responsive Search Ads (RSA) copywriting',
      'Continuous search-term audit and negative keyword pruning',
      'Ad asset optimization (sitelinks, callouts, structured snippets)',
      'Network distribution management (Bing vs. Search Partners)',
      'Device bid adjustments (desktop-skew optimization)',
      'Landing-page relevance score enhancement',
    ],
    technicalNote:
      'Desktop users dominate Bing search traffic in many high-ticket B2B and financial verticals, providing higher average order values at 20–35% lower cost per click.',
  },
  {
    id: 'shopping',
    icon: ShoppingBag,
    name: 'Shopping & Ecommerce Ads',
    subtitle: 'Microsoft Merchant Center Integration',
    desc: 'Microsoft Shopping connects product catalogs with visual product listing ads across Bing search results, Edge browser shopping hubs, and retail placements.',
    deliverables: [
      'Microsoft Merchant Center catalog setup and feed integration',
      'Feed health diagnostics, attribute validation, and sync scheduling',
      'Product-group organization by margin, category, and season',
      'Product title, description, and pricing data optimization',
      'Dedicated Shopping campaign structures with tiered bidding',
      'Ecommerce revenue, checkout, and cart addition tracking',
      'Search-term query audits tailored for product SKUs',
      'Dynamic product retargeting for previous store visitors',
    ],
    technicalNote:
      'Microsoft Shopping integrates seamlessly with Edge browser shopping assists, putting your products in front of consumers during final checkout comparisons.',
  },
  {
    id: 'linkedin',
    icon: Briefcase,
    name: 'LinkedIn Profile Targeting',
    subtitle: 'Native B2B Professional Signals',
    desc: 'Exclusively available through Microsoft Advertising, LinkedIn Profile Targeting overlays professional attributes—company, industry, job function, and seniority—directly onto search queries.',
    deliverables: [
      'Target company list integration and ABM tiering',
      'Industry sector segmentation matching your ideal customer profile',
      'Job function targeting (e.g., Engineering, Finance, Operations)',
      'Job Seniority targeting (Director, VP, CXO, Owner)',
      'Bid adjustment multipliers (+10% to +50%) for target executives',
      'Audience exclusions to filter non-decision makers',
      'Search + LinkedIn professional audience layered experiments',
      'Pipeline quality measurement and MQL-to-SQL analytics',
    ],
    technicalNote:
      'Unlike costly LinkedIn Sponsored Content, Microsoft Ads lets you target specific companies and job functions at search-engine CPC rates when they actively research solutions.',
  },
  {
    id: 'audience',
    icon: Users,
    name: 'Audience Ads & Remarketing',
    subtitle: 'MSN, Edge & Outlook Inventory',
    desc: 'Audience campaigns extend reach beyond active search into native display placements across MSN, Microsoft Edge, Outlook, and syndicated partner media.',
    deliverables: [
      'Audience campaign setup with native visual asset curation',
      'Website visitor remarketing lists and cart-abandoner pools',
      'First-party customer list matching and CRM segment uploads',
      'In-market audience targeting across commercial categories',
      'Predictive targeting and similar audience exploration',
      'Strict placement exclusions protecting brand safety',
      'Cross-device frequency capping to prevent ad fatigue',
      'View-through and click-through conversion attribution analysis',
    ],
    technicalNote:
      'We use Microsoft Audience Ads selectively to support remarketing and demand capture rather than inflating vanity impressions on low-relevance placements.',
  },
  {
    id: 'automation',
    icon: Sparkles,
    name: 'Performance Max & AI Max',
    subtitle: 'Machine-Learned Search Expansion',
    desc: 'Microsoft Performance Max and AI Max for Search bring automated machine learning into standard campaigns—expanding query reach while respecting strict business thresholds.',
    deliverables: [
      'Microsoft Performance Max campaign setup and asset group creation',
      'AI Max for Search configuration (search-term matching & URL expansion)',
      'Audience signal planning to guide algorithmic machine learning',
      'Target CPA and Target ROAS bid strategy governance',
      'Negative keyword list application to prevent budget waste',
      'Asset performance monitoring (headlines, images, video assets)',
      'Dynamic Search Ads (DSA) deployment for large site catalogs',
      'Controlled A/B testing against manual campaign structures',
    ],
    technicalNote:
      'AI Max for Search dynamically matches relevant new queries and customizes ad headlines. We enforce negative keyword guardrails so automation stays on brand.',
  },
  {
    id: 'tracking',
    icon: Activity,
    name: 'Conversion Tracking & UET',
    subtitle: 'Accurate Revenue & Lead Attribution',
    desc: 'Universal Event Tracking (UET) is the measurement backbone of Microsoft Advertising. We ensure events, purchases, and leads are accurately captured and attributed.',
    deliverables: [
      'UET tag implementation across site headers and checkout pages',
      'Conversion goal configuration (Destination, Event, Pages/Visit)',
      'Variable revenue and currency tracking for ecommerce checkouts',
      'Enhanced conversion tracking with hashed first-party user data',
      'UET Tag Helper testing and conversion QA verification',
      'Google Analytics 4 and UTM tracking alignment',
      'CRM offline conversion import setup for closed B2B deals',
      'Data-loss troubleshooting and attribution window calibration',
    ],
    technicalNote:
      'Enhanced conversions through UET send privacy-compliant customer identifiers, recovering conversion signals lost to browser tracking restrictions.',
  },
  {
    id: 'migration',
    icon: ArrowRightLeft,
    name: 'Google Ads Migration',
    subtitle: 'Deliberate Platform Adaptation',
    desc: 'Microsoft provides an official Google Ads import workflow, but an unmonitored import creates severe budget waste. We review, clean, and adapt imported campaigns for Microsoft.',
    deliverables: [
      'Structured Google Ads campaign import via official API',
      'Detailed audit of imported match types, bids, and budgets',
      'Pruning of irrelevant keywords with low Microsoft search volume',
      'Search partner network setting review and placement controls',
      'Conversion goal re-mapping and UET verification',
      'Re-writing ad copy to match Microsoft audience demographics',
      'Removal of duplicate or conflicting campaign elements',
      'Post-migration launch monitoring and bid calibration',
    ],
    technicalNote:
      'Never treat a one-click Google import as ready to run. Differences in syndicated partner networks and search query behavior require manual optimization.',
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
            Microsoft Ads Management{' '}
            <span className="italic text-frame-accent">Services.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            From search keyword strategy and LinkedIn profile overlays to merchant product shopping feeds, UET tracking, and clean Google Ads account migration.
          </p>
        </div>

        {/* Interactive Vertical Y-Axis Tabs Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left Column: Interactive Vertical Y-Axis Tab Buttons (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {services.map((service) => {
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
