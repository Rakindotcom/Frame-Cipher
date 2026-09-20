import Hero from './Hero'
import Offerings from './Offerings'
import Included from './Included'
import Features from './Features'
import SeoReady from './SeoReady'
import Solutions from './Solutions'
import Markets from './Markets'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const businessKeywords = [
  'Strategy & Architecture',
  'UI/UX Design',
  'CRM Integration',
  'Lead Capture',
  'Speed Optimization',
  'Conversion Tracking',
]

export default function WebsiteDesignDevelopmentBusinessWebsiteService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={businessKeywords} slow />
      <WebsitePortfolioPreview
        eyebrow="Case Studies / Verified Builds"
        title="Our Business Website Development Portfolio"
        description="Explore selected business websites developed around real business goals, customer journeys, and technical requirements. Our projects may include business websites, corporate websites, service-based websites, eCommerce experiences, landing pages, and custom web solutions. For each project, we focus on clear information architecture, responsive UX, lead generation, performance, and a strong technical foundation for future growth."
        buttonText="View Project →"
        buttonHref="/projects?view=website"
      />
      <Offerings />
      <Included />
      <Features />
      <SeoReady />
      <Solutions />
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
