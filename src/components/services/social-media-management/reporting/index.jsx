import { TypeMarquee } from '../../../Kinetic'
import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import ReportSections from './ReportSections'
import AnalyticsModel from './AnalyticsModel'
import WhyMatters from './WhyMatters'
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
  'KPI Tracking',
  'Cross-Platform Reporting',
  'Audience Analysis',
  'Content Analysis',
  'Campaign Analysis',
  'Organic vs Paid',
  'Community Metrics',
  'Conversion Analysis',
  'Benchmarking',
  'Recommendations',
]

export default function SocialMediaManagementReportingService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <ReportSections />
      <AnalyticsModel />
      <WhyMatters />
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
  ReportSections,
  AnalyticsModel,
  WhyMatters,
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
