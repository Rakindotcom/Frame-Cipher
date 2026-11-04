import Hero from './Hero'
import CaseStudies from './CaseStudies'
import Services from './Services'
import AppTypes from './AppTypes'
import WhyCustomApps from './WhyCustomApps'
import Capabilities from './Capabilities'
import NativeVsCross from './NativeVsCross'
import UiUxDesign from './UiUxDesign'
import BackendDevelopment from './BackendDevelopment'
import Integrations from './Integrations'
import Security from './Security'
import RealWorldConditions from './RealWorldConditions'
import Testing from './Testing'
import StoreLaunch from './StoreLaunch'
import Process from './Process'
import MvpStartups from './MvpStartups'
import Modernization from './Modernization'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import StartRequirements from './StartRequirements'
import BangladeshWorldwide from './BangladeshWorldwide'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'
import ServiceSubServices from '../ServiceSubServices'

const keywords = [
  'Native Architecture',
  'Scalable Backends',
  'Real-Device QA',
  'Security & SSO',
  'Store Deployment',
  'Ongoing SLA Support',
  'Flutter & React Native',
  'Kotlin & Swift',
]

export default function AppDevelopmentService({ service }) {
  return (
    <main className="service-page min-h-screen bg-[#09090B] text-white selection:bg-[#704bd2]/30 selection:text-white">
      <Hero service={service} />
      <TypeMarquee items={keywords} slow />
      <ServiceSubServices service={service} />

      <CaseStudies />
      <Services />
      <AppTypes />
      <WhyCustomApps />
      <Capabilities />
      <NativeVsCross />
      <UiUxDesign />
      <BackendDevelopment />
      <Integrations />
      <Security />
      <RealWorldConditions />
      <Testing />
      <StoreLaunch />
      <Process />
      <MvpStartups />
      <Modernization />
      <Deliverables />
      <WhyChoose />
      <Pricing />
      <StartRequirements />
      <BangladeshWorldwide />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  CaseStudies,
  Services,
  AppTypes,
  WhyCustomApps,
  Capabilities,
  NativeVsCross,
  UiUxDesign,
  BackendDevelopment,
  Integrations,
  Security,
  RealWorldConditions,
  Testing,
  StoreLaunch,
  Process,
  MvpStartups,
  Modernization,
  Deliverables,
  WhyChoose,
  Pricing,
  StartRequirements,
  BangladeshWorldwide,
  FAQ,
  CTA,
}
