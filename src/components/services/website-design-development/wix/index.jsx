import Hero from './Hero'
import PortfolioShowcase from './PortfolioShowcase'
import Offerings from './Offerings'
import Solutions from './Solutions'
import PlatformFit from './PlatformFit'
import Comparison from './Comparison'
import Markets from './Markets'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import Handover from './Handover'
import Maintenance from './Maintenance'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const wixKeywords = [
  'Wix Development',
  'Wix Studio Builds',
  'Velo Custom Code',
  'Wix CMS Architecture',
  'Speed Optimization',
  'Wix Ecommerce',
  'Easy Self-Editing',
  'Managed Hosting',
]

export default function WebsiteDesignDevelopmentWixService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={wixKeywords} slow />

      {/* PORTFOLIO PREVIEW */}
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Our Wix Development Portfolio"
        description="See how we apply Wix development to real business requirements. Each project should show more than a homepage screenshot. We highlight the business type, project scope, Wix technology used, key functionality, and the work completed by our team."
        buttonText="View More Projects →"
        buttonHref="/projects#website-work"
      />

      <PortfolioShowcase />
      <Offerings />
      <Solutions />
      <PlatformFit />
      <Comparison />
      <Markets />
      <WhyChoose />
      <Process />
      <Pricing />
      <Handover />
      <Maintenance />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }