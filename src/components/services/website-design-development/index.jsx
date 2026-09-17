import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'

const subServiceNames = [
  'Business Websites',
  'Ecommerce Stores',
  'Landing Pages',
  'WordPress',
  'Wix',
  'Magento',
  'Webflow',
  'Shopify',
  'Custom Next.js',
  'Website Redesign',
  'Maintenance',
  'UI/UX Design',
]

export default function WebsiteDesignDevelopmentService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={subServiceNames} slow />
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
