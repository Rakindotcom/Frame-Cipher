import Hero from './Hero'
import Overview from './Overview'
import RankingFactors from './RankingFactors'
import WhoFor from './WhoFor'
import Offerings from './Offerings'
import Strategies from './Strategies'
import Process from './Process'
import Measurement from './Measurement'
import CaseStudies from './CaseStudies'
import WhyChoose from './WhyChoose'
import ServiceAreas from './ServiceAreas'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Local SEO",
  "Google Business Profile",
  "Google Maps Visibility",
  "Citations & Reviews",
  "Service-Area Pages",
  "Geo-Grid Tracking",
  "Local Authority"
]

export default function SeoLocalSeoService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <RankingFactors />
      <WhoFor />
      <Offerings />
      <Strategies />
      <Process />
      <Measurement />
      <CaseStudies />
      <WhyChoose />
      <ServiceAreas />
      <Pricing />
      <Timeline />
      <Guarantee />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  RankingFactors,
  WhoFor,
  Offerings,
  Strategies,
  Process,
  Measurement,
  CaseStudies,
  WhyChoose,
  ServiceAreas,
  Pricing,
  Timeline,
  Guarantee,
  FAQ,
  CTA,
}