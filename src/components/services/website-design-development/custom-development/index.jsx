import Hero from './Hero'
import CaseStudyStandards from './CaseStudyStandards'
import Offerings from './Offerings'
import Solutions from './Solutions'
import Migrations from './Migrations'
import HeadlessCms from './HeadlessCms'
import SeoArchitecture from './SeoArchitecture'
import Performance from './Performance'
import Accessibility from './Accessibility'
import Devops from './Devops'
import TechStack from './TechStack'
import WhoFor from './WhoFor'
import Comparison from './Comparison'
import Markets from './Markets'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const customKeywords = [
  'Next.js 15 & React',
  'App Router Architecture',
  'Server Components',
  'Full-Stack TypeScript',
  'Tailored SaaS Portals',
  'REST & GraphQL APIs',
  'Sub-Second Speed',
  'Zero Vendor Lock-In',
]

export default function WebsiteDesignDevelopmentCustomDevelopmentService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={customKeywords} slow />
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Our Custom & Next.js Development Portfolio"
        description="Our portfolio should show how custom development solved a real business requirement rather than simply displaying attractive interfaces."
        buttonText="View More Projects →"
        buttonHref="/projects#website-work"
      />
      <CaseStudyStandards />
      <Offerings />
      <Solutions />
      <Migrations />
      <HeadlessCms />
      <SeoArchitecture />
      <Performance />
      <Accessibility />
      <Devops />
      <TechStack />
      <WhoFor />
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