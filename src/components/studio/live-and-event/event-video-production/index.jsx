import Hero from './Hero'
import AtGlance from './AtGlance'
import TypesOfCoverage from './TypesOfCoverage'
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

export default function EventVideoProductionService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />

      <VideoPortfolioPreview
        category="event"
        eyebrow="Studio Deployments"
        title="Event Video Portfolio"
        description="Event recaps, highlight reels, and speaker coverage filmed and edited for corporate and brand moments."
        buttonText="Explore Event Work →"
        buttonHref="/projects#video-work"
      />

      <AtGlance />
      <TypesOfCoverage />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <PlanningGuide />
      <StudioExtendedSections data={getStudioExtended('event-video-production')} />
      <FAQ service={service} />
      <RelatedServices />
      <CTA service={service} />
      <div id="booking">
        <StudioBookingForm defaultService="Event Videography & Conference Coverage" />
      </div>
    </main>
  )
}

export {
  Hero,
  AtGlance,
  TypesOfCoverage,
  Offerings,
  Process,
  Pricing,
  PlanningGuide,
  FAQ,
  RelatedServices,
  CTA
}
