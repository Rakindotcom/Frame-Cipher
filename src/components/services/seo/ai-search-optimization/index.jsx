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
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'AI Search Optimization (AEO/GEO)',
  'Strategic Execution',
  'Dedicated In-House Team',
  'Built For Conversion',
  'Quality Assured',
  'Ongoing Support'
]

export default function SeoAiSearchOptimizationService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
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
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Overview, WhenNeed, Offerings, BusinessTypes, HowTheyWork, Markets, WhatYouGet, Process, Measurement, WhyChoose, Pricing, Timeline, Guarantee, CaseStudies, FAQ, CTA }