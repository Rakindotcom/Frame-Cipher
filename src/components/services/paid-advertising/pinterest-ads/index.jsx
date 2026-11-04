'use client'

import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import Includes from './Includes'
import BusinessTypes from './BusinessTypes'
import Markets from './Markets'
import WhyChoose from './WhyChoose'
import Results from './Results'
import Process from './Process'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Reporting from './Reporting'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import ServiceCalculatorBanner from '../ServiceCalculatorBanner'
import RelatedAdsPlatforms from '../RelatedAdsPlatforms'

const marqueeItems = [
  'Visual Discovery',
  'Shopping & Catalog Ads',
  'Performance+ Automation',
  'Keyword & Search Intent',
  'Dynamic Retargeting',
  'Pinterest Tag & CAPI',
  'Seasonal Campaign Planning',
]

export default function PaidAdvertisingPinterestAdsService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Includes />
      <BusinessTypes />
      <Markets />
      <WhyChoose />
      <Results />
      <Process />
      <Pricing />
      <ServiceCalculatorBanner platform="pinterest" />
      <RelatedAdsPlatforms service={service} />
      <Timeline />
      <Reporting />
      <Guarantee />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Process, Pricing, FAQ, CTA }
