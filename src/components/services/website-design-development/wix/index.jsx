import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

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
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
