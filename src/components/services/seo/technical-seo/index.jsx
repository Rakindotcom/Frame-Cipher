import Hero from './Hero'
import Overview from './Overview'
import Problems from './Problems'
import Offerings from './Offerings'
import Process from './Process'
import Platforms from './Platforms'
import WhyChoose from './WhyChoose'
import Results from './Results'
import CaseStudies from './CaseStudies'
import Pricing from './Pricing'
import Timeline from './Timeline'
import ServiceAreas from './ServiceAreas'
import GettingStarted from './GettingStarted'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Technical SEO',
  'Core Web Vitals',
  'Crawlability',
  'Indexation Hygiene',
  'JavaScript SEO',
  'Structured Data',
  'Canonicalization',
  'SEO Migrations',
  'Server Log Analysis',
  'Next.js SSR Optimization',
]

export default function SeoTechnicalSeoService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Problems />
      <Offerings />
      <Process />
      <Platforms />
      <ServiceAreas />
      <WhyChoose />
      <Results />
      <CaseStudies />
      <Pricing />
      <Timeline />
      <GettingStarted />
      <FAQ service={service} />
      <CTA service={service} />
    </main>
  )
}

export {
  Hero,
  Overview,
  Problems,
  Offerings,
  Process,
  Platforms,
  WhyChoose,
  Results,
  Pricing,
  Timeline,
  ServiceAreas,
  GettingStarted,
  FAQ,
  CTA,
}
