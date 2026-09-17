import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

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
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
