import Hero from './Hero'
import Overview from './Overview'
import Pillars from './Pillars'
import FullFunnelModel from './FullFunnelModel'
import VsFragmented from './VsFragmented'
import IndustryPlaybooks from './IndustryPlaybooks'
import Deliverables from './Deliverables'
import Process from './Process'
import TechStack from './TechStack'
import ProofMetrics from './ProofMetrics'
import Pricing from './Pricing'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'

const marqueeItems = [
  '360 Marketing Systems',
  'Brand Positioning & Moats',
  'Commercial Video & 1M+ Reels',
  'Meta & Google Ads Engine',
  'Technical & Local SEO',
  'Conversion Rate Web (CRO)',
  'Server-Side Tracking (CAPI)',
  'Lifecycle CRM & WhatsApp',
]

import ServiceCalculatorBanner from '../paid-advertising/ServiceCalculatorBanner'

export default function ThreeSixtyMarketingService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Pillars />
      <FullFunnelModel />
      <VsFragmented />
      <IndustryPlaybooks />
      <Deliverables />
      <Process />
      <TechStack />
      <ServiceCalculatorBanner platform="general" />
      <ProofMetrics />
      <Pricing />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  Pillars,
  FullFunnelModel,
  VsFragmented,
  IndustryPlaybooks,
  Deliverables,
  Process,
  TechStack,
  ProofMetrics,
  Pricing,
  ServiceAreas,
  FAQ,
  CTA,
}
