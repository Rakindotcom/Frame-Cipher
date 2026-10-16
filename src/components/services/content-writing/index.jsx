import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import ContentJobs from './ContentJobs'
import SeoWriting from './SeoWriting'
import VsCopywriting from './VsCopywriting'
import WhatGoodContentDoes from './WhatGoodContentDoes'
import WhoFor from './WhoFor'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Timeline from './Timeline'
import QualityStandard from './QualityStandard'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'
import WritingPortfolioPreview from '../../projects/WritingPortfolioPreview'
import ServiceSubServices from '../ServiceSubServices'

const marqueeItems = [
  'SEO & Blog Writing',
  'Website Content',
  'Landing Page Copy',
  'Product Descriptions',
  'Sales Copywriting',
  'Email Copywriting',
  'Case Studies',
  'Rewriting & Refresh',
  'Content Strategy',
]

export default function ContentWritingService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <WritingPortfolioPreview
        type="content"
        eyebrow="Selected writing work"
        title="Content writing portfolio."
        description="Real blogs, website copy, product content, ad copy, and campaigns written for clients across e-commerce, SaaS, and service businesses."
        archiveHref="https://drive.google.com/drive/folders/16GbMEgPjttm-DMNeI55fINNl-kYjIdDP"
        archiveLabel="Browse Writing Archive →"
      />
      <Overview />
      <ServiceSubServices service={service} />
      <Offerings />
      <ContentJobs />
      <SeoWriting />
      <VsCopywriting />
      <WhatGoodContentDoes />
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

export { Hero, Overview, Offerings, Process, WhyChoose, Pricing, FAQ, CTA }
