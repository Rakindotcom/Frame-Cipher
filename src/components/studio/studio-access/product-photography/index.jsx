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

export default function ProductPhotographyService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />

      <VideoPortfolioPreview
        category="product-promotion"
        eyebrow="Studio Deployments"
        title="Product Film & Content Portfolio"
        description="Product reveals, catalogue motion, and e-commerce content shot in our studio for brands and online stores."
        buttonText="Explore Product Work →"
        buttonHref="/projects#video-work"
      />

      <AtGlance />
      <TypesOfService />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <PlanningGuide />
      <StudioExtendedSections data={getStudioExtended('product-photography')} />
      <FAQ service={service} />
      <RelatedServices />
      <CTA service={service} />
      <div id="booking">
        <StudioBookingForm defaultService="Commercial Product Photography Studio" />
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
