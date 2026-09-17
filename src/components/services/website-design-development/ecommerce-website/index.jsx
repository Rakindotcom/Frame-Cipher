import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const ecommerceKeywords = [
  'Shopify Stores',
  'WooCommerce',
  'bKash & Nagad Checkout',
  'Catalog Architecture',
  'Product Schema',
  'Courier Integration',
]

export default function WebsiteDesignDevelopmentEcommerceWebsiteService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={ecommerceKeywords} slow />
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
