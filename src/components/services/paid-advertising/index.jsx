import Hero from './Hero'
import Overview from './Overview'
import CaseStudies from './CaseStudies'
import Offerings from './Offerings'
import WhyFail from './WhyFail'
import Included from './Included'
import WhoFor from './WhoFor'
import Platforms from './Platforms'
import CustomerJourney from './CustomerJourney'
import BudgetDecisions from './BudgetDecisions'
import Process from './Process'
import Reporting from './Reporting'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import GettingStarted from './GettingStarted'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'
import ServiceSubServices from '../ServiceSubServices'

const marqueeItems = [
  "Paid Media Strategy",
  "Google & Meta Ads",
  "LinkedIn, TikTok & More",
  "Conversion Tracking",
  "Creative & Landing Pages",
  "Account Audits"
]

export default function PaidAdvertisingService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <CaseStudies />
      <ServiceSubServices service={service} />
      <Offerings />
      <WhyFail />
      <Included />
      <WhoFor />
      <Platforms />
      <CustomerJourney />
      <BudgetDecisions />
      <Process />
      <Reporting />
      <Pricing />
      <Timeline />
      <Guarantee />
      <ServiceAreas />
      <FAQ />
      <GettingStarted />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Offerings, Process, Pricing, FAQ, CTA }