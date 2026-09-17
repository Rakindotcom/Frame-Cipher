import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

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
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
