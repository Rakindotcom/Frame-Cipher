'use client'

import React, { useState } from 'react'
import {
  Settings,
  Palette,
  Users,
  Flame,
  Target,
  Sparkles,
  ShoppingBag,
  Store,
  Layers,
  Activity,
  BarChart2,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    id: 'strategy',
    icon: Settings,
    name: 'Campaign Strategy & Setup',
    subtitle: 'Account Architecture & Setup',
    desc: 'Every campaign starts with the business goal rather than the ad format. We review your offer, audience, sales funnel, landing pages, conversion events, budget, and market before deciding how the account should be structured.',
    deliverables: [
      'Campaign objective and conversion goal selection',
      'TikTok Ads Manager setup and account configuration',
      'Business Center and advertising asset coordination',
      'Campaign and ad group hierarchy taxonomy',
      'Budget pacing and bidding strategy calibration',
      'Geographic and audience tier segmentation',
      'Landing-page and funnel conversion review',
      'Competitor creative analysis and benchmark research',
    ],
    technicalNote:
      'A campaign designed to generate website traffic needs a fundamentally different optimization approach from one designed to generate high-value checkouts or qualified B2B inquiries.',
  },
  {
    id: 'creative',
    icon: Palette,
    name: 'Creative Strategy & Testing',
    subtitle: 'Hook Architecture & Video Scripts',
    desc: 'TikTok users scroll through an endless stream of content, so creative needs to earn attention in the first 2 seconds. We build meaningful variations testing hooks, messages, angles, and formats.',
    deliverables: [
      'Creative concept development tailored to platform culture',
      'Hook testing across the crucial opening 2–3 seconds',
      'Short-form video scripting with high-pacing storytelling',
      'Native-style ad concepts (demonstrations & problem-solution)',
      'Product-in-use showcases and testimonial angles',
      'Offer-led creative variants and seasonal messaging',
      'Multi-angle testing matrices (visuals, copy, audio)',
      'Performance-based creative refresh cycles',
    ],
    technicalNote:
      'We do not resize Instagram ads for TikTok. Creative is engineered natively with 9:16 vertical formatting, safe-zone awareness, and sound-on narrative structure.',
  },
  {
    id: 'ugc',
    icon: Users,
    name: 'UGC & Creator Content',
    subtitle: 'Authentic Peer-to-Peer Storytelling',
    desc: 'User-generated and creator-led content helps brands communicate in a more natural format. We coordinate briefs, hooks, scripts, and paid usage requirements built around conversion performance.',
    deliverables: [
      'UGC concept development and conversion angle planning',
      'Structured creator briefing with specific hook requirements',
      'Product demonstration guides and unboxing scripting',
      'Creator content quality review and revision rounds',
      'Paid media usage rights coordination and contract terms',
      'Paid advertising adaptation with clear text overlays and CTAs',
      'Performance-based creator selection and roster scaling',
      'Direct integration into Spark Ads distribution',
    ],
    technicalNote:
      'A large follower count does not guarantee advertising conversion. We select and evaluate creators based on authentic communication, narrative clarity, and audience resonance.',
  },
  {
    id: 'spark',
    icon: Flame,
    name: 'Spark Ads Management',
    subtitle: 'Amplifying Organic Social Proof',
    desc: 'Spark Ads allow eligible organic TikTok content from your brand or creators to be deployed as paid ads while retaining the original post identity, comments, shares, and music attribution.',
    deliverables: [
      'Spark Ads campaign configuration in Ads Manager',
      'High-performing organic content selection and auditing',
      'Creator authorization workflows and Spark code collection',
      'Creator content A/B testing in paid advertising auctions',
      'Paid amplification of viral organic reach and social proof',
      'Real-time comment sentiment monitoring and response guidance',
      'Creative scaling and refresh schedules for fatigue prevention',
      'Attribution tracking for organic profile lift and direct conversions',
    ],
    technicalNote:
      'Spark Ads preserve all organic interaction metrics (likes, comments, profile visits) directly on the post, generating compound brand equity alongside direct response conversions.',
  },
  {
    id: 'targeting',
    icon: Target,
    name: 'Audience Strategy & Retargeting',
    subtitle: 'First-Party Signals & Lookalikes',
    desc: 'TikTok audience strategy combines broad delivery, interest and behavior signals, custom audiences, lookalike audiences, and automated optimization based on real conversion feedback.',
    deliverables: [
      'Geographic, language, and demographic parameter controls',
      'Interest and category-specific behavioral targeting',
      'Custom audience creation from customer lists and CRM exports',
      'Website visitor segmentation and product-view retargeting',
      'Video engagement custom audiences (watched 25%, 50%, 100%)',
      'Lookalike audience modeling on top 5% revenue customers',
      'Multi-step retargeting sequences moving prospects to checkout',
      'Audience exclusion lists to prevent wasted media spend',
    ],
    technicalNote:
      'We test both broad targeting—giving TikTok’s algorithm room to locate high-intent buyers—and focused first-party retargeting layers to capture warmer demand.',
  },
  {
    id: 'smartplus',
    icon: Sparkles,
    name: 'Smart+ Campaign Management',
    subtitle: 'Automated Auction Intelligence',
    desc: 'TikTok’s Smart+ solutions leverage advanced machine learning to streamline campaign setup and optimize creative delivery across Traffic, App Promotion, Lead Gen, and Sales objectives.',
    deliverables: [
      'Smart+ campaign configuration and objective setup',
      'Automated creative asset combination and testing matrices',
      'Audience signal planning and seed list integration',
      'Automated budget allocation and real-time bid adjustments',
      'Comprehensive performance monitoring and anomaly alerts',
      'A/B evaluation between Smart+ and manual campaign structures',
      'Controlled budget scaling based on downstream ROAS evidence',
      'Strategic manual overrides where data justifies control',
    ],
    technicalNote:
      'Automation does not eliminate strategy. The quality of conversion signals, creative variety, offer strength, and landing-page speed dictates Smart+ algorithmic success.',
  },
  {
    id: 'catalog',
    icon: ShoppingBag,
    name: 'Catalog & Ecommerce Ads',
    subtitle: 'Dynamic Merchant Feed Integration',
    desc: 'For ecommerce brands, TikTok connects dynamic product information and catalog feeds directly with video ads for seamless product discovery, consideration, and purchase.',
    deliverables: [
      'Product catalog setup and merchant feed integration',
      'Data source health checks and inventory sync validation',
      'Product-set organization by category, margin, or bestsellers',
      'Dynamic product advertising with custom video card overlays',
      'Catalog-based retargeting for cart abandoners and viewers',
      'Website sales campaign setup with value-optimized bidding',
      'Product-level creative testing and performance monitoring',
      'Multi-currency and international catalog localization',
    ],
    technicalNote:
      'TikTok supports Smart+ Catalog workflows, dynamically pairing catalog item cards with video creative to serve personalized product recommendations to users.',
  },
  {
    id: 'shop',
    icon: Store,
    name: 'TikTok Shop (Where Supported)',
    subtitle: 'In-Platform Social Commerce',
    desc: 'TikTok Shop provides a frictionless in-app shopping experience in eligible international markets (US, UK, select Southeast Asian and European markets).',
    deliverables: [
      'TikTok Shop advertising setup and account linking',
      'GMV Max campaign management (TikTok default standard)',
      'Video Shopping Ads with direct product anchor tags',
      'Product Shopping Ads across TikTok Shop tab placements',
      'LIVE Shopping Ads strategy and real-time event support',
      'Creator-led affiliate commerce and campaign amplification',
      'Shop-focused inventory and conversion rate optimization',
      'Alternative website/lead funnels for ineligible territories',
    ],
    technicalNote:
      'TikTok Shop is not currently available for Bangladesh-based entity accounts. For clients targeting supported international markets, we manage full in-platform GMV Max campaigns.',
  },
  {
    id: 'tracking',
    icon: Activity,
    name: 'Pixel & Events API (CAPI)',
    subtitle: 'Dual-Layer Signal Infrastructure',
    desc: 'Reliable measurement begins with a resilient data connection. We configure both the browser-based TikTok Pixel and the server-side Events API for complete signal preservation.',
    deliverables: [
      'TikTok Pixel deployment across all website page templates',
      'Server-side Events API implementation and cloud setup',
      'Standard event configuration (ViewContent, AddToCart, Purchase)',
      'Custom event mapping for multi-step conversion funnels',
      'Browser and server event deduplication via event_id',
      'Enhanced data sharing with advanced customer matching',
      'Server-side payload encryption and privacy compliance',
      'Event quality health score audits and diagnostics',
    ],
    technicalNote:
      'Deploying Pixel and Events API together prevents conversion loss caused by browser ad blockers, iOS privacy policies, and cookie expiration, dramatically improving algorithmic optimization.',
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
            What TikTok Ads Management{' '}
            <span className="italic text-frame-accent">Includes.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            From creative scripting and Spark Ads coordination to server-side Events API tracking, Smart+ automated bidding, and international TikTok Shop execution.
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
