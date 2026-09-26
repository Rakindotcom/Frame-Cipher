import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import Platforms from './Platforms'
import ContentStrategy from './ContentStrategy'
import CommunityCare from './CommunityCare'
import VsPaid from './VsPaid'
import Outcomes from './Outcomes'
import WhoFor from './WhoFor'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import ServiceAreas from './ServiceAreas'
import Expectations from './Expectations'
import FAQ from './FAQ'
import GettingStarted from './GettingStarted'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'
import ServiceSubServices from '../ServiceSubServices'

const marqueeItems = [
  'Social Media Strategy',
  'Monthly Content Calendar',
  'Facebook & Instagram',
  'LinkedIn & TikTok',
  'YouTube & Shorts',
  'Community Management',
  'Reporting & Insights',
  'One In-House Team',
]

export default function SocialMediaManagementService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <ServiceSubServices service={service} />
      <Offerings />
      <Platforms />
      <ContentStrategy />
      <CommunityCare />
      <VsPaid />
      <Outcomes />
      <WhoFor />
      <WhyChoose />
      <Process />
      <Pricing />
      <ServiceAreas />
      <Expectations />
      <FAQ />
      <GettingStarted />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
