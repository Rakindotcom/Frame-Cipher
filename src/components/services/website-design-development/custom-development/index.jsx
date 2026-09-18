import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

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
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
