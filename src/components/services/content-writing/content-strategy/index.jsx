import Hero from './Hero'
import StrategyFirst from './StrategyFirst'
import Offerings from './Offerings'
import WhyItMatters from './WhyItMatters'
import VsCalendar from './VsCalendar'
import Deliverables from './Deliverables'
import Process from './Process'
import SearchLandscape from './SearchLandscape'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Timeline from './Timeline'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Content Audits',
  'Audience Research',
  'Topic Clusters',
  'Content Gaps',
  'Editorial Calendars',
  'Content Briefs',
  'Measurable Priorities',
  'Ongoing Refinement',
]

export default function ContentWritingContentStrategyService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <StrategyFirst />
      <Offerings service={service} />
      <WhyItMatters />
      <VsCalendar />
      <Deliverables />
      <Process service={service} />
      <SearchLandscape />
      <WhyChoose />
      <Pricing service={service} />
      <Timeline />
      <ServiceAreas />
      <FAQ service={service} />
      <CTA service={service} />
    </main>
  )
}

export {
  Hero,
  StrategyFirst,
  Offerings,
  WhyItMatters,
  VsCalendar,
  Deliverables,
  Process,
  SearchLandscape,
  WhyChoose,
  Pricing,
  Timeline,
  ServiceAreas,
  FAQ,
  CTA,
}
