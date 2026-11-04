import Hero from './Hero'
import Overview from './Overview'
import Problems from './Problems'
import Offerings from './Offerings'
import Process from './Process'
import Measurement from './Measurement'
import Results from './Results'
import CaseStudies from './CaseStudies'
import WhyChoose from './WhyChoose'
import ServiceAreas from './ServiceAreas'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import GettingStarted from './GettingStarted'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Off-Page SEO',
  'Manual Outreach',
  'Editorial Backlinks',
  'Digital PR',
  'Link Reclamation',
  'Competitor Link Gap',
  'Citation Building',
  'PageRank Flow',
  'Zero Link Spam',
  'Authority Engineering',
]

export default function SeoLinkBuildingService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Problems />
      <Offerings />
      <Process />
      <Measurement />
      <Results />
      <CaseStudies />
      <WhyChoose />
      <ServiceAreas />
      <Pricing />
      <Timeline />
      <Guarantee />
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
  Measurement,
  Results,
  WhyChoose,
  ServiceAreas,
  Pricing,
  Timeline,
  Guarantee,
  GettingStarted,
  FAQ,
  CTA,
}
