import { TypeMarquee } from '../../../Kinetic'
import WritingPortfolioPreview from '../../../projects/WritingPortfolioPreview'

import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import PagesWeWrite from './PagesWeWrite'
import VsWebsiteContent from './VsWebsiteContent'
import Structure from './Structure'
import MessageMatch from './MessageMatch'
import MobileFirst from './MobileFirst'
import Deliverables from './Deliverables'
import WhatWeNeed from './WhatWeNeed'
import Process from './Process'
import VsDesign from './VsDesign'
import WhyChoose from './WhyChoose'
import Proof from './Proof'
import Pricing from './Pricing'
import Timeline from './Timeline'
import QualityStandard from './QualityStandard'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueeItems = [
  'Landing Page Copy',
  'One Conversion Goal',
  'Message Match',
  'Objection Handling',
  'Ad-Ready Copy',
  'Test Variants',
]

export default function ContentWritingLandingPageCopyService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <WritingPortfolioPreview
        type="content"
        category="Landing Page Copy"
        eyebrow="Published writing samples"
        title="Landing page copy portfolio."
        description="Conversion-focused landing and product page copy built around one goal, clear structure, and message match."
      />
      <Overview />
      <Offerings />
      <PagesWeWrite />
      <VsWebsiteContent />
      <Structure />
      <MessageMatch />
      <MobileFirst />
      <Deliverables />
      <WhatWeNeed />
      <Process />
      <VsDesign />
      <WhyChoose />
      <Proof />
      <Pricing />
      <Timeline />
      <QualityStandard />
      <ServiceAreas />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  Offerings,
  PagesWeWrite,
  VsWebsiteContent,
  Structure,
  MessageMatch,
  MobileFirst,
  Deliverables,
  WhatWeNeed,
  Process,
  VsDesign,
  WhyChoose,
  Proof,
  Pricing,
  Timeline,
  QualityStandard,
  ServiceAreas,
  FAQ,
  CTA,
}
