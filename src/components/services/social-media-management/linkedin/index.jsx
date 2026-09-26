import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import PageVsExecutive from './PageVsExecutive'
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
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Company Page Management',
  'Executive Profiles',
  'Thought Leadership',
  'Profile & Page SEO',
  'Carousels & Documents',
  'Employee Advocacy',
  'Community Engagement',
  'Events & Newsletters',
  'Reporting',
]

export default function SocialMediaManagementLinkedInService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <PageVsExecutive />
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
  PageVsExecutive,
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
