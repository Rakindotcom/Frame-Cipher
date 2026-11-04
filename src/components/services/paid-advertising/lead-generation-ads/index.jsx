'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import WhyUnderperform from './WhyUnderperform'
import Platforms from './Platforms'
import Includes from './Includes'
import Metrics from './Metrics'
import CaseStudies from './CaseStudies'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import ServiceCalculatorBanner from '../ServiceCalculatorBanner'
import RelatedAdsPlatforms from '../RelatedAdsPlatforms'
import WhoFor from './WhoFor'
import WhenNotRight from './WhenNotRight'
import Markets from './Markets'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Qualified Inquiries',
  'CRM Real-Time Routing',
  'Quality-Weighted Bidding',
  'Cost Per Qualified Lead (CPQL)',
  'Multi-Channel Lead Ads',
  'Offline Conversion Sync',
  'High-Intent Commercial Offers',
  'Customer Acquisition Cost (CAC)',
]

export default function PaidAdvertisingLeadGenAdsService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <WhyUnderperform />
      <Platforms />
      <Includes />
      <Metrics />
      <CaseStudies />
      <WhyChoose />
      <Process />
      <Pricing />
      <ServiceCalculatorBanner platform="lead-gen" />
      <RelatedAdsPlatforms service={service} />
      <WhoFor />
      <WhenNotRight />
      <Markets />
      <Timeline />
      <Guarantee />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Process, Pricing, FAQ, CTA }
