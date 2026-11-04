'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import Includes from './Includes'
import WhoFor from './WhoFor'
import WhenNotRight from './WhenNotRight'
import Strategy from './Strategy'
import Tracking from './Tracking'
import Comparison from './Comparison'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import Markets from './Markets'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import ServiceCalculatorBanner from '../ServiceCalculatorBanner'
import RelatedAdsPlatforms from '../RelatedAdsPlatforms'

const marqueeItems = [
  'Microsoft Search Network',
  'LinkedIn Profile Targeting',
  'Microsoft Shopping & Feeds',
  'Google Ads Migration',
  'UET & Conversion Tracking',
  'Performance Max & AI Max',
  'High-Income Desktop Reach',
]

export default function PaidAdvertisingMicrosoftAdsService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Includes />
      <WhoFor />
      <WhenNotRight />
      <Strategy />
      <Tracking />
      <Comparison />
      <WhyChoose />
      <Process />
      <Pricing />
      <ServiceCalculatorBanner platform="microsoft" />
      <RelatedAdsPlatforms service={service} />
      <Markets />
      <Timeline />
      <Guarantee />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Process, Pricing, FAQ, CTA }
