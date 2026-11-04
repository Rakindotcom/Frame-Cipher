'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import WhenWrong from './WhenWrong'
import Segmentation from './Segmentation'
import VsRetargeting from './VsRetargeting'
import Tracking from './Tracking'
import Privacy from './Privacy'
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
  'Audience Segmentation',
  'Dynamic Catalog Retargeting',
  'Frequency Cap Controls',
  'Server-Side CAPI',
  'Purchaser Suppression',
  'Sequential Messaging',
  'Cross-Platform Alignment',
  'Incremental ROAS Lift',
]

export default function PaidAdvertisingRemarketingService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <WhenWrong />
      <Segmentation />
      <VsRetargeting />
      <Tracking />
      <Privacy />
      <Includes />
      <Metrics />
      <CaseStudies />
      <WhyChoose />
      <Process />
      <Pricing />
      <ServiceCalculatorBanner platform="remarketing" />
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
