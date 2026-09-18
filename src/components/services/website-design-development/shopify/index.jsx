import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const shopifyKeywords = [
  'Custom Liquid Themes',
  'Online Store 2.0',
  'Disciplined App Architecture',
  'Shopify Plus & B2B',
  'Conversion Rate Optimization',
  'Shopify Markets Global',
  'Zero-Downtime Migration',
  'Sub-Second Mobile Speeds',
]

export default function WebsiteDesignDevelopmentShopifyService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={shopifyKeywords} slow />
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
