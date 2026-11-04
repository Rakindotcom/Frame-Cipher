import Hero from './Hero'
import Services from './Services'
import ApiTypes from './ApiTypes'
import Integrations from './Integrations'
import ArchitectureDesign from './ArchitectureDesign'
import Security from './Security'
import Reliability from './Reliability'
import PerformanceScalability from './PerformanceScalability'
import Documentation from './Documentation'
import AuditModernization from './AuditModernization'
import TechTooling from './TechTooling'
import UseCases from './UseCases'
import WhyPartner from './WhyPartner'
import Process from './Process'
import Pricing from './Pricing'
import WhyChoose from './WhyChoose'
import CaseStudies from './CaseStudies'
import BangladeshWorldwide from './BangladeshWorldwide'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Contract-First OpenAPI 3.1 & GraphQL',
  'Sub-10ms High-Throughput Microservices',
  'OAuth 2.0, JWT & HMAC Webhook Verification',
  'Idempotent Retries & Circuit Breakers',
  'Redis Caching & Connection Pooling',
  'Interactive Swagger & Postman Collections',
  'Docker, Kubernetes & Cloud Deployment',
  '100% In-House API Engineering',
]

export default function AppDevelopmentApiDevelopmentService({ service }) {
  return (
    <main className="service-page min-h-screen bg-[#09090B] text-white selection:bg-[#704bd2]/30 selection:text-white">
      <Hero service={service} />
      <TypeMarquee items={keywords} slow />

      <Services />
      <ApiTypes />
      <Integrations />
      <ArchitectureDesign />
      <Security />
      <Reliability />
      <PerformanceScalability />
      <Documentation />
      <AuditModernization />
      <TechTooling />
      <UseCases />
      <WhyPartner />
      <Process />
      <Pricing />
      <WhyChoose />
      <CaseStudies />
      <BangladeshWorldwide />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Services,
  ApiTypes,
  Integrations,
  ArchitectureDesign,
  Security,
  Reliability,
  PerformanceScalability,
  Documentation,
  AuditModernization,
  TechTooling,
  UseCases,
  WhyPartner,
  Process,
  Pricing,
  WhyChoose,
  CaseStudies,
  BangladeshWorldwide,
  FAQ,
  CTA,
}
