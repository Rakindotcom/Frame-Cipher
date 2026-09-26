import Hero from './Hero'
import ManagementComparison from './ManagementComparison'
import VideoTypes from './VideoTypes'
import Offerings from './Offerings'
import RetentionStrategy from './RetentionStrategy'
import ProductionMultiplier from './ProductionMultiplier'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Long-Form YouTube 4K",
  "Audience Retention Strategy",
  "Multi-Camera Filming",
  "Broadcast Audio & Lighting",
  "High-CTR Custom Thumbnails",
  "Batch Shoot Sessions",
  "Founder & Expert Masterclasses",
  "Turnkey Post-Production",
  "Shorts & Reels Cutdowns",
  "One In-House Creative Team"
]

export default function ContentCreationYoutubeVideosService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <ManagementComparison service={service} />
      <VideoTypes service={service} />
      <Offerings service={service} />
      <RetentionStrategy service={service} />
      <ProductionMultiplier service={service} />
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
  ManagementComparison,
  VideoTypes,
  Offerings,
  RetentionStrategy,
  ProductionMultiplier,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
