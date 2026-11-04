'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import HowItWorks from './HowItWorks'
import Includes from './Includes'
import BusinessTypes from './BusinessTypes'
import Markets from './Markets'
import AeoGeo from './AeoGeo'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import ServiceAreas from './ServiceAreas'
import Timeline from './Timeline'
import Reporting from './Reporting'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import ServiceCalculatorBanner from '../ServiceCalculatorBanner'
import RelatedAdsPlatforms from '../RelatedAdsPlatforms'

const marqueeItems = [
  "Conversational Intent Targeting",
  "OpenAI Ads Manager Workflows",
  "Context Hints & Relevance",
  "OpenAI Pixel & Conversions API",
  "High-Converting Landing Pages",
  "Coordinated AEO & GEO Strategy",
  "Eligible International Markets",
  "Transparent B2B Attribution",
]

export default function PaidAdvertisingChatgptAdsService({ service }) {
  return (
    <main className="min-h-screen bg-[#09090B] text-white selection:bg-purple-500/30 selection:text-white">
      <Hero />
      <div className="border-b border-white/[0.08] bg-[#121214]/60 py-3 font-mono text-xs text-zinc-400">
        <TypeMarquee items={marqueeItems} slow />
      </div>
      <Overview />
      <HowItWorks />
      <Includes />
      <BusinessTypes />
      <Markets />
      <AeoGeo />
      <WhyChoose />
      <Process />
      <Pricing />
      <ServiceCalculatorBanner platform="openai" />
      <RelatedAdsPlatforms service={service} />
      <ServiceAreas />
      <Timeline />
      <Reporting />
      <Guarantee />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Process, Pricing, FAQ, CTA }
