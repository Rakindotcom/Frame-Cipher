import Hero from './Hero'
import Overview from './Overview'
import Problems from './Problems'
import Offerings from './Offerings'
import Process from './Process'
import Platforms from './Platforms'
import WhyChoose from './WhyChoose'
import Results from './Results'
import Pricing from './Pricing'
import Timeline from './Timeline'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import GettingStarted from './GettingStarted'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "On-Page SEO",
  "Search Intent",
  "Content Optimization",
  "Metadata",
  "Internal Linking",
  "Keyword Mapping"
]

export default function SeoOnPageSeoService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Problems />
      <Offerings />
      <Process />
      <Platforms />
      <WhyChoose />
      <Results />
      <Pricing />
      <Timeline />
      <ServiceAreas />
      <FAQ />
      <GettingStarted />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Problems, Offerings, Process, Platforms, WhyChoose, Results, Pricing, Timeline, ServiceAreas, FAQ, GettingStarted, CTA }