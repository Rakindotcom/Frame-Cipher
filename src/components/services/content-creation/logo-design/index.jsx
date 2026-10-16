import Hero from './Hero'
import ServiceEcosystem from './ServiceEcosystem'
import WhatMakesALogoWork from './WhatMakesALogoWork'
import Offerings from './Offerings'
import Deliverables from './Deliverables'
import RedesignVsNew from './RedesignVsNew'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import DesignPortfolioPreview from '../../../projects/DesignPortfolioPreview'

const marqueeItems = [
  "Distinctive Visual Marks",
  "Scalable Master Vectors",
  "Wordmarks & Symbol Lockups",
  "Monochrome & Reversed Performance",
  "Favicon & App Icon Suites",
  "Clear Usage Guidelines",
  "Brand Architecture Rigor"
]

export default function ContentCreationLogoDesignService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <DesignPortfolioPreview
        startIndex={8}
        eyebrow="Selected logo work"
        title="Logo design portfolio."
        description="Distinctive marks, wordmarks, and scalable master vectors that hold up across print, screen, and favicon sizes."
        buttonText="View Creative Archive →"
        buttonHref="/projects#branding-work"
      />
      <ServiceEcosystem />
      <WhatMakesALogoWork />
      <Offerings service={service} />
      <Deliverables />
      <RedesignVsNew />
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
  ServiceEcosystem,
  WhatMakesALogoWork,
  Offerings,
  Deliverables,
  RedesignVsNew,
  WhyChoose,
  Process,
  Pricing,
  FAQ,
  CTA
}
