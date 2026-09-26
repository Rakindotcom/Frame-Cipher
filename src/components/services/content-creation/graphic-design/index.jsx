import Hero from './Hero'
import ServiceEcosystem from './ServiceEcosystem'
import Offerings from './Offerings'
import SystemVsOneOff from './SystemVsOneOff'
import ProductionStandards from './ProductionStandards'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Pitch Decks & Presentations",
  "Company Profiles & Publications",
  "Packaging & Dieline Engineering",
  "Print Collateral & Signage",
  "Digital Advertising Creatives",
  "Design Systems & Reusable Templates",
  "CMYK & RGB Production Precision"
]

export default function ContentCreationGraphicDesignService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <ServiceEcosystem />
      <Offerings service={service} />
      <SystemVsOneOff />
      <ProductionStandards />
      <Deliverables />
      <WhyChoose />
      <Process service={service} />
      <Pricing service={service} />
      <FAQ service={service} />
      <CTA service={service} />
    </main>
  )
}

export {
  Hero,
  ServiceEcosystem,
  Offerings,
  SystemVsOneOff,
  ProductionStandards,
  Deliverables,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
