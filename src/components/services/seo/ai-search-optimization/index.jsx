'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import WhenNeed from './WhenNeed'
import Offerings from './Offerings'
import BusinessTypes from './BusinessTypes'
import HowTheyWork from './HowTheyWork'
import Markets from './Markets'
import WhatYouGet from './WhatYouGet'
import Process from './Process'
import Measurement from './Measurement'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import CaseStudies from './CaseStudies'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueePhrases = [
  'AI Search Optimization',
  'Answer Engine Optimization (AEO)',
  'Generative Engine Optimization (GEO)',
  'Entity & Knowledge Graph',
  'AI Visibility Tracking',
  'Perplexity & ChatGPT Citations',
  'Google AI Overviews',
  'Technical SEO Foundations',
  'Prompt-Level Research',
]

export default function SeoAiSearchOptimizationService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero service={service} />

      {/* Canonical Marquee Ticker Specification (§5.2) */}
      <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#09090B] py-5 sm:py-6 select-none">
        <p className="sr-only">AI Search Optimization capabilities and benchmarks</p>
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
      <WhenNeed />
      <Offerings />
      <BusinessTypes />
      <HowTheyWork />
      <Markets />
      <WhatYouGet />
      <Process />
      <Measurement />
      <WhyChoose />
      <Pricing />
      <Timeline />
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
  WhenNeed,
  Offerings,
  BusinessTypes,
  HowTheyWork,
  Markets,
  WhatYouGet,
  Process,
  Measurement,
  WhyChoose,
  Pricing,
  Timeline,
  Guarantee,
  CaseStudies,
  FAQ,
  CTA,
}
