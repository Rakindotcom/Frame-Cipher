import Hero from './Hero'
import AtGlance from './AtGlance'
import TypesOfService from './TypesOfService'
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

export default function VideoEditingService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />

      <VideoPortfolioPreview
        category="commercial"
        eyebrow="Studio Deployments"
        title="Video Editing Portfolio"
        description="Short-form pacing, multi-format cut-downs, and platform-ready edits produced for campaigns and social channels."
        buttonText="Explore Edited Work →"
        buttonHref="/projects#video-work"
      />

      <WritingPortfolioPreview
        type="video"
        category={['Motion & Ads', 'Real Estate']}
        eyebrow="Script writing samples"
        title="Editing & motion script portfolio."
        description="Scripts that guide edit pacing, motion graphics, and cut-downs so the story survives every format."
        archiveHref="https://docs.google.com/spreadsheets/d/1f9-75aR1mWrcEVkKP5CU7JtdQiEbAsIKRlXdybyU5Y4/edit"
        archiveLabel="Browse Script Archive →"
      />

      <AtGlance />
      <TypesOfService />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <PlanningGuide />
      <StudioExtendedSections data={getStudioExtended('video-editing')} />
      <FAQ service={service} />
      <RelatedServices />
      <CTA service={service} />
      <div id="booking">
        <StudioBookingForm defaultService="Professional Video Editing & Color Grading" />
      </div>
    </main>
  )
}

export {
  Hero,
  AtGlance,
  TypesOfService,
  Offerings,
  Process,
  Pricing,
  PlanningGuide,
  FAQ,
  RelatedServices,
  CTA
}
