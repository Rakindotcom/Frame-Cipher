import Hero from './Hero'
import Overview from './Overview'
import Includes from './Includes'
import WhoFor from './WhoFor'
import WhenNotRight from './WhenNotRight'
import Strategy from './Strategy'
import Tracking from './Tracking'
import Comparison from './Comparison'
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
  "Microsoft Search Network",
  "LinkedIn Profile Targeting",
  "Microsoft Shopping",
  "Google Ads Migration",
  "UET & Conversion Tracking",
  "AI Max for Search",
  "Remarketing & Audience Ads"
]

export default function PaidAdvertisingMicrosoftAdsService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Includes />
      <WhoFor />
      <WhenNotRight />
      <Strategy />
      <Tracking />
      <Comparison />
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