import Hero from './Hero'
import Offerings from './Offerings'
import VideoTypes from './VideoTypes'
import ProductionMultiplier from './ProductionMultiplier'
import WhyDifferent from './WhyDifferent'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Instagram Reels",
  "TikTok Videos",
  "YouTube Shorts",
  "Hook-Led Concepts",
  "Vertical-First 9:16",
  "Batch Filming Sessions",
  "Mobile Pacing & Cuts",
  "Dynamic Subtitles & Motion",
  "Paid Social Creatives",
  "Turnkey Production Delivery"
]

export default function ContentCreationShortFormVideoService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Offerings service={service} />
      <VideoTypes service={service} />
      <ProductionMultiplier service={service} />
      <WhyDifferent service={service} />
      <WhyChoose service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <FAQ service={service} />
      <CTA service={service} />
    </main>
  )
}

export {
  Hero,
  Offerings,
  VideoTypes,
  ProductionMultiplier,
  WhyDifferent,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
