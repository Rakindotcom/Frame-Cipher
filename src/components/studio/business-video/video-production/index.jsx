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
import WritingPortfolioPreview from '../../../projects/WritingPortfolioPreview'

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

export default function VideoProductionService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />

      <VideoPortfolioPreview
        category="commercial"
        eyebrow="Studio Deployments"
        title="Our Video Production Portfolio"
        description="Commercials, brand films, and social video produced end-to-end at FrameCipher Studio in Dhaka."
        buttonText="Explore Video Work →"
        buttonHref="/projects#video-work"
      />

      <WritingPortfolioPreview
        type="video"
        eyebrow="Script writing samples"
        title="Video script writing portfolio."
        description="A sample of scripts written for our studio productions — product videos, brand films, motion ads, and documentaries."
        archiveHref="https://docs.google.com/spreadsheets/d/1f9-75aR1mWrcEVkKP5CU7JtdQiEbAsIKRlXdybyU5Y4/edit"
        archiveLabel="Browse Script Archive →"
      />

      <AtGlance />
      <TypesOfVideo />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <PlanningGuide />
      <StudioExtendedSections data={getStudioExtended('video-production')} />
      <FAQ service={service} />
      <RelatedServices />
      <CTA service={service} />
      <div id="booking">
        <StudioBookingForm defaultService="Video Production" />
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
