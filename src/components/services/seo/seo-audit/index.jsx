import Hero from './Hero'
import Overview from './Overview'
import WhenToAudit from './WhenToAudit'
import Offerings from './Offerings'
import AuditTypes from './AuditTypes'
import Deliverables from './Deliverables'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Guarantee from './Guarantee'
import CaseStudies from './CaseStudies'
import Markets from './Markets'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'SEO Audit',
  'Technical Crawl & Indexation',
  'On-Page & Keyword Mapping',
  'Cannibalization Analysis',
  'Backlink & Authority Diagnostic',
  'Competitor SERP Gaps',
  'GA4 & Search Console Verification',
  'AI Overview Signals',
  '30/60/90 Action Roadmap',
  'Dhaka to Global Markets',
]

export default function SeoSeoAuditService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <WhenToAudit />
      <Offerings />
      <AuditTypes />
      <Deliverables />
      <Process />
      <WhyChoose />
      <Pricing />
      <Guarantee />
      <CaseStudies />
      <Markets />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  WhenToAudit,
  Offerings,
  AuditTypes,
  Deliverables,
  Process,
  WhyChoose,
  Pricing,
  Guarantee,
  CaseStudies,
  Markets,
  FAQ,
  CTA,
}
