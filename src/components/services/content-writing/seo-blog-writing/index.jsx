import { TypeMarquee } from '../../../Kinetic'

import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import ContentTypes from './ContentTypes'
import Approach from './Approach'
import VsGeneric from './VsGeneric'
import NewOrRefresh from './NewOrRefresh'
import WorthPublishing from './WorthPublishing'
import WhoFor from './WhoFor'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Timeline from './Timeline'
import QualityStandard from './QualityStandard'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueeItems = [
  'SEO & Blog Writing',
  'Search Intent First',
  'Content Briefs',
  'Internal Linking',
  'Content Refreshes',
  'Ongoing Blog Support',
]

export default function ContentWritingSeoBlogWritingService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <ContentTypes />
      <Approach />
      <VsGeneric />
      <NewOrRefresh />
      <WorthPublishing />
      <WhoFor />
      <Process />
      <WhyChoose />
      <Pricing />
      <Timeline />
      <QualityStandard />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  Offerings,
  ContentTypes,
  Approach,
  VsGeneric,
  NewOrRefresh,
  WorthPublishing,
  WhoFor,
  Process,
  WhyChoose,
  Pricing,
  Timeline,
  QualityStandard,
  ServiceAreas,
  FAQ,
  CTA,
}
