import { TypeMarquee } from '../../../Kinetic'
import WritingPortfolioPreview from '../../../projects/WritingPortfolioPreview'

import Hero from './Hero'
import ProvesResults from './ProvesResults'
import Offerings from './Offerings'
import TypesOfCaseStudies from './TypesOfCaseStudies'
import Credibility from './Credibility'
import BuyerJourney from './BuyerJourney'
import MultiFormat from './MultiFormat'
import WhatWeNeed from './WhatWeNeed'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import Timeline from './Timeline'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueeItems = [
  'Research Before Writing',
  'Interview-Led Stories',
  'Verified Metrics',
  'Approval Coordinated',
  'One Research, Many Formats',
  'No Invented Results',
]

export default function ContentWritingCaseStudyWritingService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <WritingPortfolioPreview
        type="content"
        eyebrow="Published writing samples"
        title="Writing samples archive."
        description="Real delivered documents — long-form guides, service content, product copy, and content strategy work."
      />
      <ProvesResults />
      <Offerings />
      <TypesOfCaseStudies />
      <Credibility />
      <BuyerJourney />
      <MultiFormat />
      <WhatWeNeed />
      <WhyChoose />
      <Process />
      <Pricing />
      <Timeline />
      <ServiceAreas />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  ProvesResults,
  Offerings,
  TypesOfCaseStudies,
  Credibility,
  BuyerJourney,
  MultiFormat,
  WhatWeNeed,
  WhyChoose,
  Process,
  Pricing,
  Timeline,
  ServiceAreas,
  FAQ,
  CTA,
}
