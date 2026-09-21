import Hero from './Hero'
import WhyRightTeam from './WhyRightTeam'
import Offerings from './Offerings'
import EngagementModels from './EngagementModels'
import WhyStrategyWork from './WhyStrategyWork'
import WhyDifferent from './WhyDifferent'
import WhatYouGet from './WhatYouGet'
import Process from './Process'
import Pricing from './Pricing'
import ServiceAreas from './ServiceAreas'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import StandardEngagement from './StandardEngagement'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'SEO Strategy',
  'Fractional SEO Leadership',
  'Audit-to-Roadmap',
  'Team Training',
  'Strategic Advisory',
  'Roadmap Development',
  'Consulting',
]

export default function SeoSeoStrategyService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <WhyRightTeam />
      <Offerings />
      <EngagementModels />
      <WhyStrategyWork />
      <WhyDifferent />
      <WhatYouGet />
      <Process />
      <Pricing />
      <ServiceAreas />
      <Timeline />
      <Guarantee />
      <StandardEngagement />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  WhyRightTeam,
  Offerings,
  EngagementModels,
  WhyStrategyWork,
  WhyDifferent,
  WhatYouGet,
  Process,
  Pricing,
  ServiceAreas,
  Timeline,
  Guarantee,
  StandardEngagement,
  FAQ,
  CTA,
}