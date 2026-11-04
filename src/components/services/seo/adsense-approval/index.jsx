'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import ReadinessCheck from './ReadinessCheck'
import Offerings from './Offerings'
import CommonIssues from './CommonIssues'
import WebsiteTypes from './WebsiteTypes'
import Markets from './Markets'
import WhatYouGet from './WhatYouGet'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Guarantee from './Guarantee'
import CaseStudies from './CaseStudies'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueePhrases = [
  'Google AdSense Approval',
  'Policy & Compliance Audit',
  'Fix Low Value Content',
  'Original Content Strategy',
  'Site Structure & Navigation',
  'Technical Access Verification',
  'Re-Application Diagnosis',
  'Bangla & English Publishing',
  'Turnkey Monetization Readiness',
]

export default function SeoAdsenseApprovalService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero service={service} />

      {/* Canonical Marquee Ticker Specification (§5.2) */}
      <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#09090B] py-5 sm:py-6 select-none">
        <p className="sr-only">Google AdSense approval capabilities and benchmarks</p>
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
                  <span className="h-2 w-2 rounded-full bg-frame-accent" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Overview />
      <ReadinessCheck />
      <Offerings />
      <CommonIssues />
      <WebsiteTypes />
      <Markets />
      <WhatYouGet />
      <Process />
      <WhyChoose />
      <Pricing />
      <Guarantee />
      <CaseStudies />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  ReadinessCheck,
  Offerings,
  CommonIssues,
  WebsiteTypes,
  Markets,
  WhatYouGet,
  Process,
  WhyChoose,
  Pricing,
  Guarantee,
  CaseStudies,
  FAQ,
  CTA,
}
