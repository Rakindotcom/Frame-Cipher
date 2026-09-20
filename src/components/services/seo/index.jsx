import Hero from './Hero'
import Overview from './Overview'
import CaseStudies from './CaseStudies'
import Offerings from './Offerings'
import WhyNotRanking from './WhyNotRanking'
import Included from './Included'
import WhoFor from './WhoFor'
import Platforms from './Platforms'
import Conversions from './Conversions'
import Process from './Process'
import Reporting from './Reporting'
import Pricing from './Pricing'
import Timeline from './Timeline'
import VsPaid from './VsPaid'
import Guarantee from './Guarantee'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import GettingStarted from './GettingStarted'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'
import ServiceSubServices from '../ServiceSubServices'

const marqueeItems = [
  "Technical SEO",
  "On-Page SEO",
  "Content Strategy",
  "Local & Ecommerce SEO",
  "AI Search Optimization",
  "Authority Building",
  "Free SEO Audit"
]

export default function SeoService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <CaseStudies />
      <ServiceSubServices service={service} />
      <Offerings />
      <WhyNotRanking />
      <Included />
      <WhoFor />
      <Platforms />
      <Conversions />
      <Process />
      <Reporting />
      <Pricing />
      <Timeline />
      <VsPaid />
      <Guarantee />
      <ServiceAreas />
      <FAQ />
      <GettingStarted />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }