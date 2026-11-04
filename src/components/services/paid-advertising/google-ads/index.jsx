'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import Campaigns from './Campaigns'
import Includes from './Includes'
import ProblemsWeFix from './ProblemsWeFix'
import WhoFor from './WhoFor'
import Markets from './Markets'
import Process from './Process'
import Results from './Results'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import PerformanceCommitment from './PerformanceCommitment'
import Timeline from './Timeline'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import ServiceCalculatorBanner from '../ServiceCalculatorBanner'
import RelatedAdsPlatforms from '../RelatedAdsPlatforms'

const marqueeItems = [
  "Google Search Ads",
  "Google Shopping",
  "Performance Max",
  "Enhanced Conversions",
  "GA4 Server-Side Tracking",
  "Display & YouTube Ads",
  "Dynamic Remarketing",
  "Quality Score 10/10 Optimization",
  "100% Client Account Ownership",
  "Offline Conversion Imports",
  "Dhaka & Global Media Delivery"
]

export default function PaidAdvertisingGoogleAdsService({ service }) {
  return (
    <main className="min-h-screen bg-[#09090B] text-white selection:bg-purple-500/30 selection:text-white">
      <Hero />
      <div className="border-b border-white/[0.08] bg-[#121214]/60 py-3 font-mono text-xs text-zinc-400">
        <TypeMarquee items={marqueeItems} slow />
      </div>
      <Overview />
      <Campaigns />
      <Includes />
      <ProblemsWeFix />
      <WhoFor />
      <Markets />
      <Process />
      <Results />
      <WhyChoose />
      <Pricing />
      <ServiceCalculatorBanner platform="google" />
      <RelatedAdsPlatforms service={service} />
      <PerformanceCommitment />
      <Timeline />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Includes, Process, Pricing, FAQ, CTA }
