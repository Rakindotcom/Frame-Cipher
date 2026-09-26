import Hero from './Hero'
import ServiceEcosystem from './ServiceEcosystem'
import WhoNeedsBranding from './WhoNeedsBranding'
import Offerings from './Offerings'
import RealWorldApplications from './RealWorldApplications'
import Deliverables from './Deliverables'
import BrandComparisonTable from './BrandComparisonTable'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Strategic Market Positioning",
  "Visual Identity Systems",
  "Brand Voice & Messaging Frameworks",
  "Actionable Brand Guidelines",
  "Omnichannel Design Governance",
  "Bilingual Bangla-English Adaptation",
  "Enterprise Rebranding Rigor"
]

export default function ContentCreationBrandingService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <ServiceEcosystem />
      <WhoNeedsBranding />
      <Offerings service={service} />
      <RealWorldApplications />
      <Deliverables />
      <BrandComparisonTable />
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
  WhoNeedsBranding,
  Offerings,
  RealWorldApplications,
  Deliverables,
  BrandComparisonTable,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
