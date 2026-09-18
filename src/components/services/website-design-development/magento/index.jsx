import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const magentoKeywords = [
  'Magento 2 & Adobe Commerce',
  'Hyvä Theme Performance',
  'B2B Wholesale Portals',
  '100k+ SKU Architecture',
  'ERP & PIM Integrations',
  'Multi-Store & Regional Views',
  'Elasticsearch Catalogs',
  'Upgrade-Safe Modules',
]

export default function WebsiteDesignDevelopmentMagentoService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={magentoKeywords} slow />
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
