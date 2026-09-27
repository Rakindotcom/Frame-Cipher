import { TypeMarquee } from '../../../Kinetic'

import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import WhyGenericFallsShort from './WhyGenericFallsShort'
import HowWeWrite from './HowWeWrite'
import ProductSeo from './ProductSeo'
import Platforms from './Platforms'
import CatalogTypes from './CatalogTypes'
import Deliverables from './Deliverables'
import WhatWeNeed from './WhatWeNeed'
import VsOtherContent from './VsOtherContent'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Proof from './Proof'
import Pricing from './Pricing'
import Timeline from './Timeline'
import QualityControl from './QualityControl'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueeItems = [
  'Buyer-Focused Product Copy',
  'Feature to Benefit',
  'Catalog-Safe Originality',
  'SEO-Aware Product Pages',
  'Marketplace Ready',
  'Bulk SKU Workflows',
]

export default function ContentWritingProductDescriptionsService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <WhyGenericFallsShort />
      <HowWeWrite />
      <ProductSeo />
      <Platforms />
      <CatalogTypes />
      <Deliverables />
      <WhatWeNeed />
      <VsOtherContent />
      <Process />
      <WhyChoose />
      <Proof />
      <Pricing />
      <Timeline />
      <QualityControl />
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
  WhyGenericFallsShort,
  HowWeWrite,
  ProductSeo,
  Platforms,
  CatalogTypes,
  Deliverables,
  WhatWeNeed,
  VsOtherContent,
  Process,
  WhyChoose,
  Proof,
  Pricing,
  Timeline,
  QualityControl,
  ServiceAreas,
  FAQ,
  CTA,
}
