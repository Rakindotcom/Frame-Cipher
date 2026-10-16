import Hero from './Hero'
import Offerings from './Offerings'
import VideoTypes from './VideoTypes'
import ConnectedWorkflow from './ConnectedWorkflow'
import ProductionMultiplier from './ProductionMultiplier'
import BusinessGoals from './BusinessGoals'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import VideoPortfolioPreview from '../../../projects/VideoPortfolioPreview'
import WritingPortfolioPreview from '../../../projects/WritingPortfolioPreview'

const marqueeItems = [
  'Commercial Videos',
  'Brand Films',
  'Corporate Profiles',
  'Product Demos',
  'TVC & OVC',
  '4K Cinema Filming',
  'Cinematic Color Grading',
  'Sound Design & Scoring',
  'Multi-Platform Exports',
  'Studio & Drone Shoots'
]

export default function ContentCreationVideoProductionService({ service }) {
  const currentService = service || {
    pageType: 'Sub Service',
    pillarParent: 'Content Creation Services in Bangladesh',
    pillarSlug: 'content-creation',
    slug: 'content-creation/video-production',
    sheetTitle: 'Video Production Service in Bangladesh'
  }

  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={currentService} />
      <TypeMarquee items={marqueeItems} slow />
      <VideoPortfolioPreview
        category="commercial"
        eyebrow="Our Video Portfolio"
        title="Commercial Films & Promotional Reels"
        description="Cinema-grade brand commercials, dynamic product promotional reels, and corporate films engineered for high visual impact."
        buttonText="Explore Video Projects →"
        buttonHref="/projects#long-video-work"
      />
      <WritingPortfolioPreview
        type="video"
        eyebrow="Script writing samples"
        title="Video script writing portfolio."
        description="Commercial, corporate, product, and documentary scripts written before a single frame is shot."
        archiveHref="https://docs.google.com/spreadsheets/d/1f9-75aR1mWrcEVkKP5CU7JtdQiEbAsIKRlXdybyU5Y4/edit"
        archiveLabel="Browse Script Archive →"
      />
      <Offerings />
      <VideoTypes />
      <ConnectedWorkflow />
      <ProductionMultiplier />
      <BusinessGoals />
      <WhyChoose />
      <Process />
      <Pricing />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Offerings,
  VideoTypes,
  ConnectedWorkflow,
  ProductionMultiplier,
  BusinessGoals,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
