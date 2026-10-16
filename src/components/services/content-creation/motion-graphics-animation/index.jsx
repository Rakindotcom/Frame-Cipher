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
import VideoPortfolioPreview from '../../../projects/VideoPortfolioPreview'
import WritingPortfolioPreview from '../../../projects/WritingPortfolioPreview'

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
      <VideoPortfolioPreview
        category="commercial"
        eyebrow="Selected motion work"
        title="Motion Graphics & Video Portfolio"
        description="Kinetic typography, animated brand assets, and motion-led commercial edits produced in-house."
        buttonText="Explore Video Work →"
        buttonHref="/projects#video-work"
      />
      <WritingPortfolioPreview
        type="video"
        category="Motion & Ads"
        eyebrow="Script writing samples"
        title="Motion & ad script portfolio."
        description="Explainer, motion graphic, and paid-ad scripts written to pair tightly with animation and edit pacing."
        archiveHref="https://docs.google.com/spreadsheets/d/1f9-75aR1mWrcEVkKP5CU7JtdQiEbAsIKRlXdybyU5Y4/edit"
        archiveLabel="Browse Script Archive →"
      />
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
