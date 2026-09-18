import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const redesignKeywords = [
  'Website Redesign',
  'SEO Equity Preservation',
  'Audit Before Design',
  '301 Redirect Mapping',
  'UX & Conversion Tuning',
  'Platform Migration',
  'Zero-Downtime Launch',
  'Core Web Vitals Speed',
]

export default function WebsiteDesignDevelopmentRedesignService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={redesignKeywords} slow />
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
