import Hero from './Hero'
import CoreServices from './CoreServices'
import AppsWeBuild from './AppsWeBuild'
import WhyChooseCrossPlatform from './WhyChooseCrossPlatform'
import CrossVsNative from './CrossVsNative'
import FlutterVsReact from './FlutterVsReact'
import FeaturesIntegrations from './FeaturesIntegrations'
import Architecture from './Architecture'
import NativeModules from './NativeModules'
import UiUxDesign from './UiUxDesign'
import TechStack from './TechStack'
import Security from './Security'
import AccessibilityLocalization from './AccessibilityLocalization'
import OfflineConditions from './OfflineConditions'
import PerformanceCompatibility from './PerformanceCompatibility'
import Testing from './Testing'
import StoreDeployment from './StoreDeployment'
import Process from './Process'
import MigrationModernization from './MigrationModernization'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import CaseStudies from './CaseStudies'
import Pricing from './Pricing'
import BangladeshWorldwide from './BangladeshWorldwide'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Flutter 3.x Engine',
  'React Native New Architecture',
  'Unified Dart & TypeScript Codebase',
  'Native Swift & Kotlin Bridges',
  'Apple App Store & Google Play Dual Release',
  'Sub-Second Hot Reload & Sync',
  'Cross-Platform Material 3 & Apple HIG',
  '100% In-House Mobile Team',
]

export default function AppDevelopmentCrossPlatformService({ service }) {
  return (
    <main className="service-page min-h-screen bg-[#09090B] text-white selection:bg-[#704bd2]/30 selection:text-white">
      <Hero service={service} />
      <TypeMarquee items={keywords} slow />

      <CoreServices />
      <AppsWeBuild />
      <WhyChooseCrossPlatform />
      <CrossVsNative />
      <FlutterVsReact />
      <FeaturesIntegrations />
      <Architecture />
      <NativeModules />
      <UiUxDesign />
      <TechStack />
      <Security />
      <AccessibilityLocalization />
      <OfflineConditions />
      <PerformanceCompatibility />
      <Testing />
      <StoreDeployment />
      <Process />
      <MigrationModernization />
      <Deliverables />
      <WhyChoose />
      <CaseStudies />
      <Pricing />
      <BangladeshWorldwide />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  CoreServices,
  AppsWeBuild,
  WhyChooseCrossPlatform,
  CrossVsNative,
  FlutterVsReact,
  FeaturesIntegrations,
  Architecture,
  NativeModules,
  UiUxDesign,
  TechStack,
  Security,
  AccessibilityLocalization,
  OfflineConditions,
  PerformanceCompatibility,
  Testing,
  StoreDeployment,
  Process,
  MigrationModernization,
  Deliverables,
  WhyChoose,
  CaseStudies,
  Pricing,
  BangladeshWorldwide,
  FAQ,
  CTA,
}
