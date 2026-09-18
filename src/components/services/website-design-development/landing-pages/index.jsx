import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const landingKeywords = [
  'Paid Ad Campaigns',
  'Google Ads Match',
  'Meta & Instagram',
  'Lead Generation',
  'A/B Test Structure',
  'High-Speed Performance',
]

export default function WebsiteDesignDevelopmentLandingPagesService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={landingKeywords} slow />
      <WebsitePortfolioPreview
        eyebrow="Case Studies / Verified Campaigns"
        title="Our Landing Page Development Portfolio"
        description="Explore selected landing pages developed for campaigns, lead generation, product offers, and other conversion-focused goals. Each project is structured around the campaign objective, target audience, traffic source, offer, and primary conversion action. Where relevant, we show the strategy behind the page, the platform used, the integrations implemented, and the specific work Frame Cipher handled."
        buttonText="View Project →"
        buttonHref="/projects?view=website"
      />
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
