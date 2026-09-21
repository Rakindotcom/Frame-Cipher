import Hero from './Hero'
import Overview from './Overview'
import Problems from './Problems'
import Offerings from './Offerings'
import Process from './Process'
import Measurement from './Measurement'
import Results from './Results'
import WhyChoose from './WhyChoose'
import ServiceAreas from './ServiceAreas'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import FAQ from './FAQ'
import GettingStarted from './GettingStarted'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "Off-Page SEO",
  "Link Building",
  "Manual Outreach",
  "Editorial Quality",
  "Backlink Monitoring",
  "Digital PR"
]

export default function SeoLinkBuildingService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Problems />
      <Offerings />
      <Process />
      <Measurement />
      <Results />
      <WhyChoose />
      <ServiceAreas />
      <Pricing />
      <Timeline />
      <Guarantee />
      <FAQ />
      <GettingStarted />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Problems, Offerings, Process, Measurement, Results, WhyChoose, ServiceAreas, Pricing, Timeline, Guarantee, FAQ, GettingStarted, CTA }