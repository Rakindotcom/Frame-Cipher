import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const wordpressKeywords = [
  'Custom Themes',
  'WooCommerce Builds',
  'Gutenberg Blocks',
  'Speed Optimization',
  'Security Hardening',
  'Editorial Freedom',
]

export default function WebsiteDesignDevelopmentWordpressService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={wordpressKeywords} slow />
      <WebsitePortfolioPreview
        eyebrow="Proven Deployments"
        title="Our WordPress Development Portfolio"
        description="Explore selected WordPress websites built around different business goals, content workflows, and technical requirements. Our WordPress projects may include business websites, WooCommerce stores, content-driven websites, membership platforms, directories, and custom WordPress solutions. For each project, we focus on the site's purpose, content structure, performance, usability, and maintainability rather than simply changing the visual design."
        buttonText="View Project →"
        buttonHref="/projects#website-work"
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
