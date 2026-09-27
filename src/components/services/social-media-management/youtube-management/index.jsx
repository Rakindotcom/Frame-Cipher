import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import Discoverability from './Discoverability'
import LongTerm from './LongTerm'
import Formats from './Formats'
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
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Channel Strategy',
  'Long-Form Production',
  'YouTube SEO',
  'Thumbnails & Titles',
  'Shorts',
  'Publishing',
  'Community Management',
  'Analytics',
]

export default function SocialMediaManagementYoutubeManagementService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <Discoverability />
      <LongTerm />
      <Formats />
      <Outcomes />
      <WhoFor />
      <VsAds />
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
  Discoverability,
  LongTerm,
  Formats,
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
