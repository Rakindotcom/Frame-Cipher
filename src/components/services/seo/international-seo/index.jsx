'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import WhatsDifferent from './WhatsDifferent'
import Offerings from './Offerings'
import BusinessTypes from './BusinessTypes'
import Markets from './Markets'
import Challenges from './Challenges'
import Process from './Process'
import Measurement from './Measurement'
import CaseStudies from './CaseStudies'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueePhrases = [
  'International SEO',
  'Hreflang Implementation',
  'Market Research',
  'Site Architecture',
  'Content Localization',
  'Technical SEO',
  'ccTLD vs Subfolders',
  'Per-Market Reporting',
  'Dhaka to Global Scale',
]

export default function SeoInternationalSeoService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero service={service} />

      {/* Canonical Marquee Ticker Specification (§5.2) */}
      <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#09090B] py-5 sm:py-6 select-none">
        <p className="sr-only">International SEO core capabilities and benchmarks</p>
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
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#A855F7]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Overview />
      <WhatsDifferent />
      <Offerings />
      <BusinessTypes />
      <Markets />
      <Challenges />
      <Process />
      <Measurement />
      <CaseStudies />
      <WhyChoose />
      <Pricing />
      <Timeline />
      <Guarantee />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  WhatsDifferent,
  Offerings,
  BusinessTypes,
  Markets,
  Challenges,
  Process,
  Measurement,
  CaseStudies,
  WhyChoose,
  Pricing,
  Timeline,
  Guarantee,
  FAQ,
  CTA,
}
