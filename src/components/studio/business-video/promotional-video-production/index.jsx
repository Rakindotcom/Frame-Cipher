import Hero from './Hero'
import AtGlance from './AtGlance'
import TypesOfVideo from './TypesOfVideo'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import PlanningGuide from './PlanningGuide'
import FAQ from './FAQ'
import RelatedServices from './RelatedServices'
import StudioExtendedSections from '../../StudioExtendedSections'
import { getStudioExtended } from '../../../../data/studioExtended'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import VideoPortfolioPreview from '../../../projects/VideoPortfolioPreview'
import StudioBookingForm from '../../StudioBookingForm'

const marqueeItems = [
  'Product Reveal Videos',
  'Commercial Launch Films',
  'Urgent Flash Sale Promos',
  'Website Landing Page Videos',
  'Vertical Reels & TikToks',
  'Kinetic Motion Graphics',
  'Macro Product Optics',
  'High-CRI Studio Lighting',
  'Unicode Bangla & English Subtitles',
  'Fast Turnaround Delivery'
]

export default function PromotionalVideoProductionService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <VideoPortfolioPreview
        category="product-promotion"
        eyebrow="Commercial Deployments"
        title="Our Promotional Video Portfolio"
        description="Real promotional videos, product reveals, and high-converting commercial reels produced for leading consumer and retail brands."
        buttonText="View Promotional Video Work →"
        buttonHref="/projects#video-work"
      />
      <AtGlance />
      <TypesOfVideo />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <PlanningGuide />
      <StudioExtendedSections data={getStudioExtended('promotional-video-production')} />
      <FAQ service={service} />
      <RelatedServices />
      <CTA service={service} />
      <div id="booking">
        <StudioBookingForm defaultService="Promotional Video & Brand Story Films" />
      </div>
    </main>
  )
}

export {
  Hero,
  AtGlance,
  TypesOfVideo,
  Offerings,
  Process,
  Pricing,
  PlanningGuide,
  FAQ,
  RelatedServices,
  CTA
}
