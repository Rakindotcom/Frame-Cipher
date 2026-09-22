import Hero from './Hero'
import Overview from './Overview'
import WhyUnderperform from './WhyUnderperform'
import Platforms from './Platforms'
import Includes from './Includes'
import Metrics from './Metrics'
import WhoFor from './WhoFor'
import WhenNotRight from './WhenNotRight'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import Markets from './Markets'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Qualified Lead Generation",
  "CRM Integration & Routing",
  "Lead Qualification",
  "Cost Per Qualified Lead",
  "Offline Conversion Feedback",
  "Sales-Aligned Reporting",
  "Multi-Platform Strategy"
]

export default function PaidAdvertisingLeadGenerationAdsService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <WhyUnderperform />
      <Platforms />
      <Includes />
      <Metrics />
      <WhoFor />
      <WhenNotRight />
      <WhyChoose />
      <Process />
      <Pricing />
      <Markets />
      <Timeline />
      <Guarantee />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Process, Pricing, FAQ, CTA }