'use client'

import React, { useState } from 'react'
import {
  Server,
  Users,
  Globe2,
  ShoppingBag,
  FileText,
  Repeat,
  Gauge,
  Palette,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    id: 'infrastructure',
    icon: Server,
    name: 'Tracking & Audience Infrastructure',
    subtitle: 'Foundation, CAPI & Signal Integrity',
    desc: 'Before scaling audience campaigns, we engineer the tracking foundation across browser pixels, server-side Conversion APIs (CAPI), and CRM data pipelines to guarantee signal fidelity.',
    deliverables: [
      'Multi-platform pixel and tag implementation audit',
      'Standardized business event taxonomy configuration',
      'Server-side CAPI implementation for Meta and TikTok',
      'First-party CRM audience integration and offline conversions',
      'Audience suppression logic and conversion deduplication',
      'End-to-end event payload verification and QA testing',
      'Data-quality match scoring (EMQ) optimization',
    ],
    technicalNote:
      'Robust server-to-browser event deduplication with matching event_id tokens prevents double-counting while preserving signals lost to ad-blockers.',
  },
  {
    id: 'segmentation',
    icon: Users,
    name: 'Audience Segmentation & List Building',
    subtitle: 'Intent, Depth & Recency Architecture',
    desc: 'We construct a multi-tiered audience hierarchy based on on-site behavior, page depth, recency windows, customer status, and commercial buying intent.',
    deliverables: [
      'Funnel-stage segmentation (bounces vs. high-intent researchers)',
      'Product and service specific viewer custom audiences',
      'Cart and checkout abandoner high-priority lists',
      'Lead form and quote request abandoner segments',
      'In-platform video and engagement audience harvesting',
      'Recency window tiers (1-day, 7-day, 14-day, 30-day, 90-day)',
      'Customer lifetime value (LTV) and VIP segment creation',
      'Automated audience hygiene and exclusion routines',
    ],
    technicalNote:
      'We set recency windows according to your actual sales cycle and product margin rather than relying on default 30-day buckets.',
  },
  {
    id: 'cross-platform',
    icon: Globe2,
    name: 'Cross-Platform Remarketing',
    subtitle: 'Omnichannel Retargeting Alignment',
    desc: 'Translating the unified customer journey across Google, Meta, TikTok, Pinterest, LinkedIn, and Amazon while respecting the unique bidding and audience mechanics of each platform.',
    deliverables: [
      'Google Display Network (GDN) and YouTube video remarketing',
      'Meta (Facebook & Instagram) dynamic feed and story retargeting',
      'TikTok custom audience and Spark Ads re-engagement',
      'Pinterest consideration and shopping catalog retargeting',
      'LinkedIn website demographic and matched CRM audiences',
      'Amazon Sponsored Display view and purchase remarketing',
      'Unified cross-channel messaging and promotional alignment',
      'Cross-platform budget pacing and attribution comparison',
    ],
    technicalNote:
      'Our objective is unified strategic alignment, not forcing identical creative formats onto platforms that reward distinct native aesthetics.',
  },
  {
    id: 'dynamic-catalog',
    icon: ShoppingBag,
    name: 'Dynamic Catalog Remarketing',
    subtitle: 'Product-Level Precision for Ecommerce',
    desc: 'For ecommerce brands with expanding catalogs, dynamic retargeting serves personalized ad units featuring the exact products or complementary accessories a shopper previously browsed.',
    deliverables: [
      'Merchant product feed audit and catalog synchronization',
      'Product-view and cart-abandoner dynamic product ad (DPA) setups',
      'Automated product pricing, inventory, and promo badge overlays',
      'Post-purchase cross-sell and related category recommendation logic',
      'Replenishment reminder campaigns timed to average product usage cycles',
      'Feed error diagnosis and attribute enrichment (titles, Google product category)',
      'Out-of-stock item automatic suppression from active ad delivery',
    ],
    technicalNote:
      'Dynamic catalog ads drastically lower effective CPAs by displaying the exact variant, size, and price the customer was considering seconds before exit.',
  },
  {
    id: 'lead-service',
    icon: FileText,
    name: 'Lead & Service-Based Remarketing',
    subtitle: 'High-Consideration B2B & Service Funnels',
    desc: 'Remarketing for B2B and high-ticket service businesses focuses on overcoming friction, answering unspoken objections, demonstrating case studies, and driving calendar bookings.',
    deliverables: [
      'Service-page and solutions-pillar visitor segmentation',
      'Pricing-page visitor high-intent follow-up sequences',
      'Consultation form start and abandonment retargeting',
      'Case study and testimonial social proof video deployments',
      'Webinar attendee and gated content re-engagement workflows',
      'Direct WhatsApp and calendar booking call-to-action integration',
      'Account-based marketing (ABM) support for key enterprise accounts',
    ],
    technicalNote:
      'For complex services, remarketing replaces hard sales pitches with authority-building proof, client video testimonials, and de-risking guarantees.',
  },
  {
    id: 'sequential',
    icon: Repeat,
    name: 'Sequential Messaging Strategy',
    subtitle: 'Narrative Storytelling Across Time',
    desc: 'One creative never carries the entire burden of conversion. We deploy timed creative sequences that walk prospects through distinct cognitive stages of buying.',
    deliverables: [
      'Day 1–3: High-urgency objection handling and primary value reinforcement',
      'Day 4–10: Social proof, third-party press, customer reviews, and video case studies',
      'Day 11–21: Unspoken barrier resolution, comparison charts, and risk-reversal offers',
      'Day 22–30: Final conversion incentive or transition to low-frequency brand re-engagement',
      'Post-Conversion: Automated transition to onboarding, cross-sell, or referral loops',
    ],
    technicalNote:
      'Sequential creative prevents ad fatigue by ensuring a prospect sees an evolving story rather than the identical graphic on a continuous loop.',
  },
  {
    id: 'frequency',
    icon: Gauge,
    name: 'Frequency & Exposure Management',
    subtitle: 'Preventing Ad Burnout & Preserving Brand Trust',
    desc: 'Maintaining high recall without annoying your prospective customers. We actively calibrate frequency caps, audience window decay, and creative rotation to prevent ad blindness.',
    deliverables: [
      'Platform manual frequency cap configuration where supported',
      'Impression velocity monitoring per audience segment',
      'Audience decay windows that lower bids as time from visit elapses',
      'Dynamic creative variation rotation within active ad sets',
      'Exclusion rules preventing duplicate cross-campaign impression waste',
      'Fatigue alert triggers (CTR drop > 25% or frequency > 4x weekly)',
      'Impression distribution balancing between mobile feed and desktop placements',
    ],
    technicalNote:
      'Where platforms lack direct frequency caps, we govern exposure through tight recency windows, strict audience exclusions, and rotating creative variants.',
  },
  {
    id: 'creative-testing',
    icon: Palette,
    name: 'Creative Testing & Refresh Cycles',
    subtitle: 'Continuous Visual & Copy Iteration',
    desc: 'Remarketing creative burns out 3x faster than prospecting ads. We execute structured creative refreshes testing fresh hooks, visual formats, and value propositions.',
    deliverables: [
      'Offer variation testing (free shipping vs. percentage off vs. bundled value)',
      'Customer review quotes and UGC video testimonial integration',
      'Comparison graphics contrasting your solution against competitors',
      'Static, carousel, collection, and short-form video format diversification',
      'Call-to-action (CTA) testing (Shop Now vs. Learn More vs. Claim Offer)',
      'Seasonal and holiday promotional creative refreshes',
      'Monthly creative fatigue audits and underperforming asset sunsetting',
    ],
    technicalNote:
      'Testing different cognitive angles (emotional reassurance vs. empirical ROI vs. urgent scarcity) ensures we find the exact hook that unlocks the conversion.',
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
            Remarketing Services{' '}
            <span className="italic text-frame-accent">We Deliver.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Everything required to build, orchestrate, and optimize an omnichannel remarketing engine that re-engages qualified prospects and maximizes customer lifetime value.
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
                What We Do &amp; Deliver:
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
