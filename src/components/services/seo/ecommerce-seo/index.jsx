import Hero from './Hero'
import Overview from './Overview'
import WhyDifferent from './WhyDifferent'
import Offerings from './Offerings'
import Platforms from './Platforms'
import StoreTypes from './StoreTypes'
import Process from './Process'
import Measurement from './Measurement'
import CaseStudies from './CaseStudies'
import WhyChoose from './WhyChoose'
import ServiceAreas from './ServiceAreas'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Ecommerce SEO',
  'Buyer-Intent Optimization',
  'Product Schema Markup',
  'Category Architecture',
  'Google Merchant Center Feeds',
  'Shopify & WooCommerce',
  'Faceted Navigation Control',
  'Organic Revenue Growth',
  'Rank #1 Rich Snippets',
  'Dhaka to Global Markets',
]

export default function SeoEcommerceSeoService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <WhyDifferent />
      <Offerings />
      <Platforms />
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

export {
  Hero,
  Overview,
  WhyDifferent,
  Offerings,
  Platforms,
  StoreTypes,
  Process,
  Measurement,
  CaseStudies,
  WhyChoose,
  ServiceAreas,
  Pricing,
  Timeline,
  Guarantee,
  FAQ,
  CTA,
}
