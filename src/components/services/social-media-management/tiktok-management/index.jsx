import { TypeMarquee } from '../../../Kinetic'
import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import WhyMatters from './WhyMatters'
import Discoverability from './Discoverability'
import Outcomes from './Outcomes'
import WhoFor from './WhoFor'
import VsAds from './VsAds'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueeItems = [
  'TikTok Strategy',
  'Video Production',
  'TikTok SEO',
  'Trend Research',
  'Publishing',
  'Community Management',
  'TikTok LIVE',
  'Creator & UGC',
  'Repurposing',
  'Reporting',
]

export default function SocialMediaManagementTiktokService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <WhyMatters />
      <Discoverability />
      <Outcomes />
      <WhoFor />
      <VsAds />
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
  WhyMatters,
  Discoverability,
  Outcomes,
  WhoFor,
  VsAds,
  Process,
  WhyChoose,
  Pricing,
  Timeline,
  Guarantee,
  ServiceAreas,
  FAQ,
  CTA,
}
