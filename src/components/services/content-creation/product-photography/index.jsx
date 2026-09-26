import Hero from './Hero'
import Principles from './Principles'
import Offerings from './Offerings'
import PlatformBreakdown from './PlatformBreakdown'
import TargetAudience from './TargetAudience'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Ecommerce Catalog Photography",
  "Pure White Amazon & Daraz Compliance",
  "High-Magnification Macro Details",
  "Lifestyle Contextual Staging",
  "Calibrated Color Fidelity",
  "360° Rotational Capture",
  "Pixel-Perfect Commercial Retouching"
]

export default function ContentCreationProductPhotographyService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Principles />
      <Offerings service={service} />
      <PlatformBreakdown />
      <TargetAudience />
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
  Principles,
  Offerings,
  PlatformBreakdown,
  TargetAudience,
  Deliverables,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
