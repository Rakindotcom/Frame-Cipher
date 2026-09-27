import { TypeMarquee } from '../../../Kinetic'
import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import Platforms from './Platforms'
import WhyMatters from './WhyMatters'
import VsSupport from './VsSupport'
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
  'Comment Management',
  'DM Handling',
  'Review Response',
  'Moderation',
  'Social Listening',
  'Escalation',
  'Proactive Engagement',
  'Community Reporting',
]

export default function SocialMediaManagementCommunityManagementService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <Platforms />
      <WhyMatters />
      <VsSupport />
      <WhoFor />
      <Process />
      <WhyChoose />
      <Pricing />
      <Timeline />
      <Guarantee />
      <ServiceAreas />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  Offerings,
  Platforms,
  WhyMatters,
  VsSupport,
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
