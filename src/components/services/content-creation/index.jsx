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
      <ServiceSubServices service={currentService} />
      <Offerings />
      <MarketingStages />
      <ProductionLibrary />
      <ContentVsStrategy />
      <WhyChoose />
      <Process />
      <Pricing />
      <FAQ />
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
