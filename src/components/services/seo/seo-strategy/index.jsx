'use client'

import React from 'react'
import Hero from './Hero'
import WhyRightTeam from './WhyRightTeam'
import Offerings from './Offerings'
import EngagementModels from './EngagementModels'
import WhyStrategyWork from './WhyStrategyWork'
import WhyDifferent from './WhyDifferent'
import WhatYouGet from './WhatYouGet'
import CaseStudies from './CaseStudies'
import Process from './Process'
import Pricing from './Pricing'
import ServiceAreas from './ServiceAreas'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import StandardEngagement from './StandardEngagement'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueePhrases = [
  'SEO Strategy & Consulting',
  'Fractional SEO Leadership',
  'Audit-to-Roadmap Translation',
  'Team Training & Enablement',
  'Ongoing Strategic Advisory',
  'Resource-Realistic Roadmapping',
  'Dhaka to Global Scale',
  '30/60/90-Day Milestones',
]

export default function SeoSeoStrategyService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero service={service} />

      {/* Canonical Marquee Ticker Specification (§5.2) */}
      <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#09090B] py-5 sm:py-6 select-none">
        <p className="sr-only">SEO Strategy &amp; Consulting Core Capabilities</p>
        <div
          aria-hidden="true"
          className="flex w-max items-center kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]"
        >
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex shrink-0 items-center">
              {marqueePhrases.map((phrase, pIdx) => (
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

      <WhyRightTeam />
      <Offerings />
      <EngagementModels />
      <WhyStrategyWork />
      <WhyDifferent />
      <WhatYouGet />
      <Process />
      <CaseStudies />
      <Pricing />
      <ServiceAreas />
      <Timeline />
      <Guarantee />
      <StandardEngagement />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  WhyRightTeam,
  Offerings,
  EngagementModels,
  WhyStrategyWork,
  WhyDifferent,
  WhatYouGet,
  Process,
  Pricing,
  ServiceAreas,
  Timeline,
  Guarantee,
  StandardEngagement,
  FAQ,
  CTA,
}
