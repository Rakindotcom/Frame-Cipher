import Hero from './Hero'
import FormatComparison from './FormatComparison'
import Offerings from './Offerings'
import ApproachComparison from './ApproachComparison'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import Commitment from './Commitment'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Explainer Animation",
  "Kinetic Typography",
  "Logo Motion & Brand Stings",
  "SaaS & UI Walkthroughs",
  "Data & Infographic Animation",
  "2D Character Motion",
  "3D Product Visualization",
  "Animated Digital Ad Creatives",
  "One In-House Creative Team",
  "Turnkey Multi-Format Delivery"
]

export default function ContentCreationMotionGraphicsAnimationService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <FormatComparison service={service} />
      <Offerings service={service} />
      <ApproachComparison service={service} />
      <Deliverables service={service} />
      <WhyChoose service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <Commitment service={service} />
      <FAQ service={service} />
      <CTA service={service} />
    </main>
  )
}

export {
  Hero,
  FormatComparison,
  Offerings,
  ApproachComparison,
  Deliverables,
  WhyChoose,
  Process,
  Pricing,
  Commitment,
  FAQ,
  CTA
}
