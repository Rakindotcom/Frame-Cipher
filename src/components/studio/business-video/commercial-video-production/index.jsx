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
  "Acoustic Soundstage",
  "Cinema 4K Optics",
  "Ceiling Lighting Grid",
  "DaVinci Resolve Suite",
  "Multi-Ratio Architecture",
  "Matikata ECB Chattar",
  "In-House Production Team",
  "Fast Turnaround Delivery"
]

export default function CommercialVideoProductionService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <VideoPortfolioPreview
        category="commercial"
        eyebrow="Studio Deployments"
        title="Our Commercial Video Portfolio"
        description="Cinema-grade commercials, product reveals, and high-impact advertising campaigns produced for multi-channel broadcast and social ads."
        buttonText="Explore Video Work →"
        buttonHref="/projects#video-work"
      />
      <AtGlance />
      <TypesOfVideo />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <PlanningGuide />
      <StudioExtendedSections data={getStudioExtended('commercial-video-production')} />
      <FAQ service={service} />
      <RelatedServices />
      <CTA service={service} />
      <div id="booking">
        <StudioBookingForm defaultService="Commercial Video & TVC Production" />
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
