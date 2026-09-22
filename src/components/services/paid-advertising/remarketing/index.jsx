import Hero from './Hero'
import Overview from './Overview'
import WhenWrong from './WhenWrong'
import Segmentation from './Segmentation'
import VsRetargeting from './VsRetargeting'
import Tracking from './Tracking'
import Privacy from './Privacy'
import Includes from './Includes'
import Metrics from './Metrics'
import WhyChoose from './WhyChoose'
import Process from './Process'
import WhoFor from './WhoFor'
import WhenNotRight from './WhenNotRight'
import Pricing from './Pricing'
import Markets from './Markets'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Audience Segmentation",
  "Suppression & Exclusions",
  "Dynamic Catalog Remarketing",
  "Cross-Platform Coordination",
  "Sequential Messaging",
  "Privacy-Aware Tracking",
  "First-Party Data"
]

export default function PaidAdvertisingRemarketingService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <WhenWrong />
      <Segmentation />
      <VsRetargeting />
      <Tracking />
      <Privacy />
      <Includes />
      <Metrics />
      <WhyChoose />
      <Process />
      <WhoFor />
      <WhenNotRight />
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