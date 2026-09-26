import { TypeMarquee } from '../../../Kinetic'
import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import VsStrategy from './VsStrategy'
import CrossPlatform from './CrossPlatform'
import WhereFits from './WhereFits'
import Outcomes from './Outcomes'
import WhoFor from './WhoFor'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueeItems = [
  'Content Strategy',
  'Content Pillars',
  'Master Calendar',
  'Campaign Planning',
  'Repurposing',
  'Platform Adaptation',
  'Approval Workflows',
  'Performance Review',
]

export default function SocialMediaManagementContentCalendarStrategyService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <VsStrategy />
      <CrossPlatform />
      <WhereFits />
      <Outcomes />
      <WhoFor />
      <Process />
      <WhyChoose />
      <Pricing />
      <Timeline />
      <Guarantee />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  Offerings,
  VsStrategy,
  CrossPlatform,
  WhereFits,
  Outcomes,
  WhoFor,
  Process,
  WhyChoose,
  Pricing,
  Timeline,
  Guarantee,
  ServiceAreas,
  FAQ,
  CTA,
}
