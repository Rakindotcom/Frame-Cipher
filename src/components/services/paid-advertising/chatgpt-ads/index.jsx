import Hero from './Hero'
import Overview from './Overview'
import HowItWorks from './HowItWorks'
import Includes from './Includes'
import BusinessTypes from './BusinessTypes'
import Markets from './Markets'
import AeoGeo from './AeoGeo'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import ServiceAreas from './ServiceAreas'
import Timeline from './Timeline'
import Reporting from './Reporting'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Context Targeting",
  "Conversation-Ready Creative",
  "OpenAI Pixel & Conversions API",
  "Conversion Tracking",
  "Campaign Optimization",
  "AEO / GEO Connection",
  "Eligible International Markets"
]

export default function PaidAdvertisingChatgptAdsService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <HowItWorks />
      <Includes />
      <BusinessTypes />
      <Markets />
      <AeoGeo />
      <WhyChoose />
      <Process />
      <Pricing />
      <ServiceAreas />
      <Timeline />
      <Reporting />
      <Guarantee />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Process, Pricing, FAQ, CTA }