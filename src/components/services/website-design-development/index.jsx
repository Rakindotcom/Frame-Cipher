import Hero from './Hero'
import Offerings from './Offerings'
import WhoFor from './WhoFor'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'
import WebsitePortfolioPreview from '../../projects/WebsitePortfolioPreview'
import ServiceSubServices from '../ServiceSubServices'

const marqueeItems = [
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
      <TypeMarquee items={marqueeItems} slow />
      <WebsitePortfolioPreview
        eyebrow="Our Website Design & Development Portfolio"
        title="Practical, User-Focused Websites"
        description="See how we turn business goals into practical, user-focused websites. Our portfolio includes business websites, eCommerce stores, landing pages, and custom web solutions built around each client's requirements. For each project, we focus on clear structure, responsive design, usability, and a strong foundation for future marketing and growth."
        buttonText="View Project →"
        buttonHref="/projects#website-work"
      />
      <ServiceSubServices service={{ pageType: 'Pillar Service', slug: 'website-design-development', sheetTitle: 'Website Design & Development Services' }} />
      <Offerings />
      <WhoFor />
      <WhyChoose />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }