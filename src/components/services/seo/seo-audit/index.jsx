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
  'Technical Audit',
  'On-Page Review',
  'Content Analysis',
  'Backlink Review',
  'Competitor Analysis',
  'Prioritized Roadmap',
]

export default function SeoSeoAuditService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
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