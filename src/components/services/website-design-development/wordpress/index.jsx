import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

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
      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
