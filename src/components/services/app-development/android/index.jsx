import Hero from './Hero'
import Services from './Services'
import AppsWeBuild from './AppsWeBuild'
import WhyRealPartner from './WhyRealPartner'
import FeaturesIntegrations from './FeaturesIntegrations'
import NativeKotlin from './NativeKotlin'
import TechStack from './TechStack'
import StrategyArchitecture from './StrategyArchitecture'
import CodeQuality from './CodeQuality'
import UiUxDesign from './UiUxDesign'
import Security from './Security'
import RealWorldConditions from './RealWorldConditions'
import Testing from './Testing'
import StoreLaunch from './StoreLaunch'
import Process from './Process'
import Modernization from './Modernization'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import BangladeshWorldwide from './BangladeshWorldwide'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Native Kotlin Core',
  'Jetpack Compose 60 FPS',
  'Room & Coroutines',
  'Google Play Console',
  'Firebase Cloud Messaging',
  'Device Matrix QA',
  'LeakCanary & ANR Tuning',
  'Target API 34+ Ready',
]

export default function AppDevelopmentAndroidService({ service }) {
  return (
    <main className="service-page android-service-page min-h-screen bg-[#09090B] text-white selection:bg-[#704bd2]/30 selection:text-white">
      <Hero service={service} />
      <TypeMarquee items={keywords} slow />

      <Services />
      <AppsWeBuild />
      <WhyRealPartner />
      <FeaturesIntegrations />
      <NativeKotlin />
      <TechStack />
      <StrategyArchitecture />
      <CodeQuality />
      <UiUxDesign />
      <Security />
      <RealWorldConditions />
      <Testing />
      <StoreLaunch />
      <Process />
      <Modernization />
      <Deliverables />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <BangladeshWorldwide />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Services,
  AppsWeBuild,
  WhyRealPartner,
  FeaturesIntegrations,
  NativeKotlin,
  TechStack,
  StrategyArchitecture,
  CodeQuality,
  UiUxDesign,
  Security,
  RealWorldConditions,
  Testing,
  StoreLaunch,
  Process,
  Modernization,
  Deliverables,
  WhyChoose,
  Testimonials,
  Pricing,
  BangladeshWorldwide,
  FAQ,
  CTA,
}
