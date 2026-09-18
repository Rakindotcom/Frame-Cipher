import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

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
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
