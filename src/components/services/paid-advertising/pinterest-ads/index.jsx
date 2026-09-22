import Hero from './Hero'
import Overview from './Overview'
import Includes from './Includes'
import BusinessTypes from './BusinessTypes'
import Markets from './Markets'
import WhyChoose from './WhyChoose'
import Results from './Results'
import Process from './Process'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Reporting from './Reporting'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Visual Discovery",
  "Keyword Targeting",
  "Catalog & Shopping Ads",
  "Pinterest Tag & Conversions API",
  "Performance+ Automation",
  "Dynamic Retargeting",
  "Seasonal Planning"
]

export default function PaidAdvertisingPinterestAdsService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Includes />
      <BusinessTypes />
      <Markets />
      <WhyChoose />
      <Results />
      <Process />
      <Pricing />
      <Timeline />
      <Reporting />
      <Guarantee />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Process, Pricing, FAQ, CTA }