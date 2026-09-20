import Hero from './Hero'
import Offerings from './Offerings'
import Features from './Features'
import Payments from './Payments'
import SeoReady from './SeoReady'
import Models from './Models'
import Markets from './Markets'
import Platforms from './Platforms'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

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
      <WebsitePortfolioPreview
        eyebrow="Case Studies / Verified Commerce"
        title="Our E-commerce Website Development Portfolio"
        description="Explore selected ecommerce projects built around real products, customer journeys, and business requirements. Our ecommerce work may include Shopify stores, WooCommerce websites, custom storefronts, product catalogs, payment integrations, and conversion-focused shopping experiences. For each project, we focus on product discovery, mobile usability, checkout flow, performance, and the operational requirements that support the business behind the store."
        buttonText="View Project →"
        buttonHref="/projects?view=website"
      />
      <Offerings />
      <Features />
      <Payments />
      <SeoReady />
      <Models />
      <Markets />
      <Platforms />
      <WhyChoose />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }