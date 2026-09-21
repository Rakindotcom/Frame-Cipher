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
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'International SEO',
  'Hreflang',
  'Market Research',
  'Site Architecture',
  'Content Localization',
  'Technical SEO',
  'Per-Market Reporting',
]

export default function SeoInternationalSeoService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
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
      <FAQ />
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