import Hero from './Hero'
import Overview from './Overview'
import Includes from './Includes'
import Formats from './Formats'
import CreativeTesting from './CreativeTesting'
import Tracking from './Tracking'
import WhoFor from './WhoFor'
import WhenNotRight from './WhenNotRight'
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
  "Native Creative Testing",
  "Spark Ads",
  "UGC & Creator Content",
  "Smart+ Automation",
  "TikTok Pixel & Events API",
  "TikTok Shop Where Available",
  "Audience Strategy & Retargeting"
]

export default function PaidAdvertisingTiktokAdsService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Includes />
      <Formats />
      <CreativeTesting />
      <Tracking />
      <WhoFor />
      <WhenNotRight />
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

export { Hero, Overview, Process, Pricing, FAQ, CTA }