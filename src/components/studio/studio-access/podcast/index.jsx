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

import StudioBookingForm from '../../StudioBookingForm'

const marqueeItems = [
  'Acoustic Soundstage',
  'Shure SM7B Microphones',
  '4K Cinema Cameras',
  'Multi-Angle Switching',
  'YouTube Video Podcasts',
  'Spotify & Apple Audio',
  'Vertical Reels & Shorts',
  'Real-Time Audio Tech',
  'Matikata ECB Chattar',
  'Fast Turnaround Delivery'
]

export default function PodcastService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />

      <AtGlance />
      <TypesOfService />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <PlanningGuide />
      <StudioExtendedSections data={getStudioExtended('podcast')} />
      <FAQ service={service} />
      <RelatedServices />
      <CTA service={service} />
      <div id="booking">
        <StudioBookingForm defaultService="Podcast Recording Studio & Production" />
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
