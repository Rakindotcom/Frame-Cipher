import Hero from './Hero'
import ServiceComparison from './ServiceComparison'
import Offerings from './Offerings'
import SafeZonesAndCarousels from './SafeZonesAndCarousels'
import Deliverables from './Deliverables'
import TargetAudience from './TargetAudience'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Platform Safe-Zone Compliance",
  "High-Retention Carousel Sequences",
  "Thumb-Stopping Feed Typography",
  "9:16 Vertical Story Engineering",
  "Figma & Canva Master Templates",
  "Bilingual Bangla-English Layouts",
  "Omnichannel Multi-Crop Production"
]

export default function ContentCreationSocialMediaGraphicsService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <ServiceComparison />
      <Offerings service={service} />
      <SafeZonesAndCarousels />
      <Deliverables />
      <TargetAudience />
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
  ServiceComparison,
  Offerings,
  SafeZonesAndCarousels,
  Deliverables,
  TargetAudience,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
