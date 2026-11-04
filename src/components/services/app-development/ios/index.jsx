import Hero from './Hero'
import CaseStudies from './CaseStudies'
import Services from './Services'
import AppTypes from './AppTypes'
import WhyRealPartner from './WhyRealPartner'
import Capabilities from './Capabilities'
import SwiftSwiftUi from './SwiftSwiftUi'
import AppleEcosystem from './AppleEcosystem'
import TechStack from './TechStack'
import StrategyArchitecture from './StrategyArchitecture'
import ArchitectureCodeQuality from './ArchitectureCodeQuality'
import UiUxDesign from './UiUxDesign'
import Security from './Security'
import AccessibilityLocalization from './AccessibilityLocalization'
import PerformanceCompatibility from './PerformanceCompatibility'
import TestFlightValidation from './TestFlightValidation'
import Testing from './Testing'
import StoreLaunch from './StoreLaunch'
import Process from './Process'
import PortingMigration from './PortingMigration'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import BangladeshWorldwide from './BangladeshWorldwide'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Swift 6 & SwiftUI Core',
  'Apple Human Interface Guidelines',
  'App Store Connect & TestFlight',
  'CoreData & SwiftData Sync',
  'Metal 120Hz ProMotion Engine',
  'WatchOS & iPadOS Adaptive Matrix',
  'Apple Pay & Keychain Biometrics',
  '100% In-House iOS Engineering',
]

export default function AppDevelopmentIosService({ service }) {
  return (
    <main className="service-page min-h-screen bg-[#09090B] text-white selection:bg-[#704bd2]/30 selection:text-white">
      <Hero service={service} />
      <TypeMarquee items={keywords} slow />

      <CaseStudies />
      <Services />
      <AppTypes />
      <WhyRealPartner />
      <Capabilities />
      <SwiftSwiftUi />
      <AppleEcosystem />
      <TechStack />
      <StrategyArchitecture />
      <ArchitectureCodeQuality />
      <UiUxDesign />
      <Security />
      <AccessibilityLocalization />
      <PerformanceCompatibility />
      <TestFlightValidation />
      <Testing />
      <StoreLaunch />
      <Process />
      <PortingMigration />
      <Deliverables />
      <WhyChoose />
      <Pricing />
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
  WhyRealPartner,
  Capabilities,
  SwiftSwiftUi,
  AppleEcosystem,
  TechStack,
  StrategyArchitecture,
  ArchitectureCodeQuality,
  UiUxDesign,
  Security,
  AccessibilityLocalization,
  PerformanceCompatibility,
  TestFlightValidation,
  Testing,
  StoreLaunch,
  Process,
  PortingMigration,
  Deliverables,
  WhyChoose,
  Pricing,
  BangladeshWorldwide,
  FAQ,
  CTA,
}
