import Hero from './Hero'
import PortfolioShowcase from './PortfolioShowcase'
import Offerings from './Offerings'
import TechStack from './TechStack'
import WhyWebflow from './WhyWebflow'
import Comparison from './Comparison'
import Markets from './Markets'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const webflowKeywords = [
  'Webflow Development',
  'Figma to Webflow',
  'Client-First Architecture',
  'Dynamic CMS Collections',
  'Custom Interactions',
  'Fastly CDN Hosting',
  'Webflow Localization',
  'Zero-Bloat Code',
]

export default function WebsiteDesignDevelopmentWebflowService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={webflowKeywords} slow />
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Our Webflow Development Portfolio"
        description="Real Webflow implementations provide stronger evidence than a list of technologies. Our portfolio should show the business requirement, the Webflow architecture, and the work completed by our team."
        buttonText="View More Projects →"
        buttonHref="/projects#website-work"
      />
      <PortfolioShowcase />
      <Offerings />
      <TechStack />
      <WhyWebflow />
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