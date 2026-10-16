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
import VideoPortfolioPreview from '../../../projects/VideoPortfolioPreview'

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
      <VideoPortfolioPreview
        category="short"
        eyebrow="Our Short-Form Portfolio"
        title="Vertical Reels & Product Promos"
        description="Explore vertical short-form video edits, dynamic product promotional reels, and viral creator cuts built for maximum retention on Instagram Reels, TikTok, and YouTube Shorts."
        buttonText="Explore Video Work →"
        buttonHref="/projects#short-video-work"
      />
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
