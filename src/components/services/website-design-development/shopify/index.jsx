import Hero from './Hero'
import PortfolioShowcase from './PortfolioShowcase'
import Offerings from './Offerings'
import TechStack from './TechStack'
import WhyShopify from './WhyShopify'
import Comparison from './Comparison'
import Markets from './Markets'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

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
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Our Shopify Development Portfolio"
        description="Real implementations provide a better picture of Shopify expertise than a technology list alone. Our portfolio should show the ecommerce problem, the Shopify implementation, and the work completed by the development team."
        buttonText="View More Projects →"
        buttonHref="/projects#website-work"
      />
      <PortfolioShowcase />
      <Offerings />
      <TechStack />
      <WhyShopify />
      <Comparison />
      <Markets />
      <WhyChoose />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }