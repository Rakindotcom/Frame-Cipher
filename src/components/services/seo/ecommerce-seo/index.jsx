import Hero from './Hero'
import WhyDifferent from './WhyDifferent'
import StoreTypes from './StoreTypes'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Measurement from './Measurement'
import CaseStudies from './CaseStudies'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import Overview from './Overview'
import Offerings from './Offerings'
import ServiceAreas from './ServiceAreas'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Ecommerce SEO",
  "Buyer-Intent Optimization",
  "Product & Category Optimization",
  "Technical SEO",
  "Site Architecture",
  "Structured Data",
  "Ongoing Support"
]

export default function SeoEcommerceSeoService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <WhyDifferent />
      <Offerings />
      <StoreTypes />
      <Process />
      <Measurement />
      <CaseStudies />
      <WhyChoose />
      <ServiceAreas />
      <Pricing />
      <Timeline />
      <Guarantee />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, WhyDifferent, StoreTypes, Offerings, Process, Measurement, CaseStudies, WhyChoose, Pricing, FAQ, CTA, ServiceAreas, Timeline, Guarantee }