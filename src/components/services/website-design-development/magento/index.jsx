import Hero from './Hero'
import PortfolioShowcase from './PortfolioShowcase'
import Offerings from './Offerings'
import TechStack from './TechStack'
import WhyMagento from './WhyMagento'
import Comparison from './Comparison'
import Markets from './Markets'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import Support from './Support'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

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
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Our Magento Development Portfolio"
        description="Real implementations provide a better picture of Magento expertise than a technology list alone. Our portfolio should show the ecommerce problem, architecture, functionality, and work completed for each project."
        buttonText="View More Projects →"
        buttonHref="/projects#website-work"
      />
      <PortfolioShowcase />
      <Offerings />
      <TechStack />
      <WhyMagento />
      <Comparison />
      <Markets />
      <WhyChoose />
      <Process />
      <Pricing />
      <Support />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }