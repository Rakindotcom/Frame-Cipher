import Hero from './Hero'
import Overview from './Overview'
import WhenWrong from './WhenWrong'
import Solutions from './Solutions'
import Includes from './Includes'
import Economics from './Economics'
import Attribution from './Attribution'
import WhenNotRight from './WhenNotRight'
import WhoFor from './WhoFor'
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
  "Sponsored Products",
  "Sponsored Brands",
  "Display Ads & DSP",
  "ACOS, TACOS & Profitability",
  "Keyword & Product Targeting",
  "Amazon Attribution",
  "Brand Stores Where Eligible"
]

export default function PaidAdvertisingAmazonAdsService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <WhenWrong />
      <Solutions />
      <Includes />
      <Economics />
      <Attribution />
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