import Hero from './Hero'
import CaseStudies from './CaseStudies'
import Offerings from './Offerings'
import UxAudit from './UxAudit'
import ProductTypes from './ProductTypes'
import WhyChoose from './WhyChoose'
import Deliverables from './Deliverables'
import DeveloperHandoff from './DeveloperHandoff'
import Comparison from './Comparison'
import ServiceAreas from './ServiceAreas'
import Process from './Process'
import Pricing from './Pricing'
import Revisions from './Revisions'
import PostLaunch from './PostLaunch'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const uiUxKeywords = [
  'UI/UX Design',
  'User Research',
  'Information Architecture',
  'Interactive Wireframes',
  'Figma Design Systems',
  'Usability Testing',
  'Responsive UI',
  'Developer Handoff',
]

export default function WebsiteDesignDevelopmentUiUxDesignService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={uiUxKeywords} slow />

      {/* PORTFOLIO PREVIEW */}
      <WebsitePortfolioPreview
        eyebrow="Portfolio & Case Studies"
        title="UI/UX Design Portfolio & Case Studies"
        description="A strong UI/UX portfolio should show more than attractive screens. It should show the problem, the design decisions, and how the final experience was structured."
        buttonText="Explore UI/UX Projects →"
        buttonHref="/projects#website-work"
      />

      <CaseStudies />
      <Offerings />
      <UxAudit />
      <ProductTypes />
      <WhyChoose />
      <Deliverables />
      <DeveloperHandoff />
      <Comparison />
      <ServiceAreas />
      <Process />
      <Pricing />
      <Revisions />
      <PostLaunch />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }