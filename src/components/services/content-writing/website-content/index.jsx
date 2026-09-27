import { TypeMarquee } from '../../../Kinetic'

import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import Deliverables from './Deliverables'
import Approach from './Approach'
import VsBlogLanding from './VsBlogLanding'
import NewRewriteRefresh from './NewRewriteRefresh'
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
  'Website Content',
  'Homepage & About',
  'Service Pages',
  'Brand Voice',
  'SEO-Aware Structure',
  'Cross-Page Consistency',
]

export default function ContentWritingWebsiteContentService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <Deliverables />
      <Approach />
      <VsBlogLanding />
      <NewRewriteRefresh />
      <WhoFor />
      <Process />
      <WhyChoose />
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
  Deliverables,
  Approach,
  VsBlogLanding,
  NewRewriteRefresh,
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
