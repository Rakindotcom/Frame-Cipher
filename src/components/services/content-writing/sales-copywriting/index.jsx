import { TypeMarquee } from '../../../Kinetic'

import Hero from './Hero'
import CaseForBuying from './CaseForBuying'
import Offerings from './Offerings'
import HowWeBuild from './HowWeBuild'
import VsLandingPage from './VsLandingPage'
import BusinessModels from './BusinessModels'
import Deliverables from './Deliverables'
import NoManufacturedSales from './NoManufacturedSales'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Proof from './Proof'
import Pricing from './Pricing'
import Timeline from './Timeline'
import QualityCommitments from './QualityCommitments'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueeItems = [
  'Argument Before Copy',
  'Proof Before Hype',
  'Format-Specific Writing',
  'Offer Clarity',
  'Objection Handling',
  'B2B & Consumer',
]

export default function ContentWritingSalesCopywritingService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <CaseForBuying />
      <Offerings />
      <HowWeBuild />
      <VsLandingPage />
      <BusinessModels />
      <Deliverables />
      <NoManufacturedSales />
      <Process />
      <WhyChoose />
      <Proof />
      <Pricing />
      <Timeline />
      <QualityCommitments />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  CaseForBuying,
  Offerings,
  HowWeBuild,
  VsLandingPage,
  BusinessModels,
  Deliverables,
  NoManufacturedSales,
  Process,
  WhyChoose,
  Proof,
  Pricing,
  Timeline,
  QualityCommitments,
  ServiceAreas,
  FAQ,
  CTA,
}
