import Hero from './Hero'
import Offerings from './Offerings'
import VideoTypes from './VideoTypes'
import ConnectedWorkflow from './ConnectedWorkflow'
import ProductionMultiplier from './ProductionMultiplier'
import BusinessGoals from './BusinessGoals'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Commercial Videos',
  'Brand Films',
  'Corporate Profiles',
  'Product Demos',
  'TVC & OVC',
  '4K Cinema Filming',
  'Cinematic Color Grading',
  'Sound Design & Scoring',
  'Multi-Platform Exports',
  'Studio & Drone Shoots'
]

export default function ContentCreationVideoProductionService({ service }) {
  const currentService = service || {
    pageType: 'Sub Service',
    pillarParent: 'Content Creation Services in Bangladesh',
    pillarSlug: 'content-creation',
    slug: 'content-creation/video-production',
    sheetTitle: 'Video Production Service in Bangladesh'
  }

  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={currentService} />
      <TypeMarquee items={marqueeItems} slow />
      <Offerings />
      <VideoTypes />
      <ConnectedWorkflow />
      <ProductionMultiplier />
      <BusinessGoals />
      <WhyChoose />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Offerings,
  VideoTypes,
  ConnectedWorkflow,
  ProductionMultiplier,
  BusinessGoals,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
