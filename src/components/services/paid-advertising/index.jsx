import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import CaseStudies from './CaseStudies'
import ServiceSubServices from '../ServiceSubServices'
import Offerings from './Offerings'
import Platforms from './Platforms'
import CustomerJourney from './CustomerJourney'
import BudgetDecisions from './BudgetDecisions'
import WhoFor from './WhoFor'
import WhyFail from './WhyFail'
import Process from './Process'
import Included from './Included'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import GettingStarted from './GettingStarted'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'

const marqueeItems = [
  'Paid Media Strategy',
  'Google & Meta Ads',
  'LinkedIn, TikTok & Microsoft Ads',
  'Conversion Tracking & Attribution',
  'Creative & Landing Page Sprints',
  'Free Ad Account Audits',
  'Full Funnel Accountability',
  'Dhaka & Global Delivery',
]

export default function PaidAdvertisingService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero />
      <div className="border-b border-white/[0.08] bg-[#09090B] py-3 text-xs font-mono uppercase tracking-widest text-zinc-400">
        <TypeMarquee items={marqueeItems} slow />
      </div>
      <Overview />
      <CaseStudies />
      <ServiceSubServices service={service} />
      <Offerings />
      <Platforms />
      <CustomerJourney />
      <BudgetDecisions />
      <WhoFor />
      <WhyFail />
      <Process />
      <Included />
      <WhyChoose />
      <Pricing />
      <Timeline />
      <Guarantee />
      <ServiceAreas />
      <FAQ service={service} />
      <GettingStarted />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  CaseStudies,
  Offerings,
  Platforms,
  CustomerJourney,
  BudgetDecisions,
  WhoFor,
  WhyFail,
  Process,
  Included,
  WhyChoose,
  Pricing,
  Timeline,
  Guarantee,
  ServiceAreas,
  FAQ,
  GettingStarted,
  CTA,
}
