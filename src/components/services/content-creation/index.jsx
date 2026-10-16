import Hero from './Hero'
import Offerings from './Offerings'
import MarketingStages from './MarketingStages'
import ProductionLibrary from './ProductionLibrary'
import ContentVsStrategy from './ContentVsStrategy'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'
import VideoPortfolioPreview from '../../projects/VideoPortfolioPreview'
import WritingPortfolioPreview from '../../projects/WritingPortfolioPreview'
import ServiceSubServices from '../ServiceSubServices'

const marqueeItems = [
  'Video Production',
  'Reels, Shorts & TikTok',
  'YouTube Video Production',
  'Motion Graphics & 2D Animation',
  'Commercial Photography',
  'Graphic Design & Marketing Collaterals',
  'Logo Design & Visual Identity',
  'Social Media Graphics',
  'UGC & Creator Content',
  'Multi-Platform Delivery'
]

export default function ContentCreationService({ service }) {
  const currentService = service || {
    pageType: 'Pillar Service',
    slug: 'content-creation',
    sheetTitle: 'Content Creation Services in Bangladesh'
  }

  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={currentService} />
      <TypeMarquee items={marqueeItems} slow />
      <VideoPortfolioPreview
        category="all"
        eyebrow="Selected content work"
        title="Content Creation Portfolio"
        description="Commercial video, social reels, and brand content produced end-to-end by our in-house team."
        buttonText="Explore Content Work →"
        buttonHref="/projects#video-work"
      />
      <WritingPortfolioPreview
        type="video"
        eyebrow="Script writing samples"
        title="Video script portfolio."
        description="Real scripts written for product videos, brand films, motion ads, documentaries, and shorts — many in Bangla and English."
        archiveHref="https://docs.google.com/spreadsheets/d/1f9-75aR1mWrcEVkKP5CU7JtdQiEbAsIKRlXdybyU5Y4/edit"
        archiveLabel="Browse Script Archive →"
      />
      <ServiceSubServices service={currentService} />
      <Offerings />
      <MarketingStages />
      <ProductionLibrary />
      <ContentVsStrategy />
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
  MarketingStages,
  ProductionLibrary,
  ContentVsStrategy,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
