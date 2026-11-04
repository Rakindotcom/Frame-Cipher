'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import CaseStudies from './CaseStudies'
import Offerings from './Offerings'
import WhyNotRanking from './WhyNotRanking'
import Included from './Included'
import WhoFor from './WhoFor'
import Platforms from './Platforms'
import Conversions from './Conversions'
import Process from './Process'
import Reporting from './Reporting'
import Pricing from './Pricing'
import Timeline from './Timeline'
import VsPaid from './VsPaid'
import Guarantee from './Guarantee'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import GettingStarted from './GettingStarted'
import CTA from './CTA'
import ServiceSubServices from '../ServiceSubServices'

const marqueeItems = [
  'Technical SEO',
  'On-Page SEO',
  'Content Strategy',
  'Local & Ecommerce SEO',
  'AI Search Optimization',
  'Authority Building',
  'Free SEO Audit',
]

export default function SeoService({ service }) {
  return (
    <main className="service-page seo-service-page bg-[#09090B] text-white min-h-screen selection:bg-purple-500/30 selection:text-white">
      {/* 01: Canonical Hero with Search Animation */}
      <Hero service={service} />

      {/* 02: Canonical Marquee Ticker (§5.2 Standard) */}
      <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#09090B] py-5 sm:py-6">
        <p className="sr-only">Core SEO capabilities and performance benchmarks</p>
        <div
          aria-hidden="true"
          className="flex w-max items-center kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]"
        >
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex shrink-0 items-center">
              {marqueeItems.map((phrase, pIdx) => (
                <div key={pIdx} className="flex items-center">
                  <span className="mx-6 text-2xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white">
                    {phrase}
                  </span>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-frame-accent" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 03: Overview & Strategic Approach */}
      <Overview />

      {/* 04: Verified SEO Case Studies */}
      <CaseStudies />

      {/* 05: Pillar Sub-Services Directory */}
      <ServiceSubServices service={service} />

      {/* 06: Core SEO Capabilities & Keyword Research */}
      <Offerings />

      {/* 07: Diagnostics: Why Is Your Website Not Ranking */}
      <WhyNotRanking />

      {/* 08: Scope & Architectural Deliverables Table */}
      <Included />

      {/* 09: Growth Stages & Industry Verticals */}
      <WhoFor />

      {/* 10: Platform & CMS SEO + Launch Migration */}
      <Platforms />

      {/* 11: Conversion Engineering & Results */}
      <Conversions />

      {/* 12: 7-Step Sprint Process Framework */}
      <Process />

      {/* 13: Reporting & Tool Ecosystem */}
      <Reporting />

      {/* 14: Clear Engagement Pricing Tiers */}
      <Pricing />

      {/* 15: Realistic Timelines */}
      <Timeline />

      {/* 16: SEO vs Paid Search Channel Comparison */}
      <VsPaid />

      {/* 17: Integrity Standard & Guarantees */}
      <Guarantee />

      {/* 18: Dual-Market Geographic Delivery */}
      <ServiceAreas />

      {/* 19: Canonical Center-Aligned FAQ (§5.3 Standard) */}
      <FAQ service={service} />

      {/* 20: Onboarding Prerequisites & Free Audit Journey */}
      <GettingStarted />

      {/* 21: Canonical Final Conversion Banner (§5.7 Standard) */}
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
