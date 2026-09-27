import Hero from './Hero'
import Overview from './Overview'
import Campaigns from './Campaigns'
import Includes from './Includes'
import ProblemsWeFix from './ProblemsWeFix'
import WhoFor from './WhoFor'
import Markets from './Markets'
import Process from './Process'
import Results from './Results'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import PerformanceCommitment from './PerformanceCommitment'
import Timeline from './Timeline'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Google Search",
  "Google Shopping",
  "Performance Max",
  "Display & YouTube",
  "Remarketing",
  "Conversion Tracking",
  "Ongoing Optimization"
]

import ServiceCalculatorBanner from '../ServiceCalculatorBanner'
import RelatedAdsPlatforms from '../RelatedAdsPlatforms'

export default function PaidAdvertisingGoogleAdsService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Campaigns />
      <Includes />
      <ProblemsWeFix />
      <WhoFor />
      <Markets />
      <Process />
      <Results />
      <WhyChoose />
      <Pricing />
      <ServiceCalculatorBanner platform="google" />
      <RelatedAdsPlatforms service={service} />
      <PerformanceCommitment />
      <Timeline />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Includes, Process, Pricing, FAQ, CTA }