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
import MigrationModernization from './MigrationModernization'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import BangladeshWorldwide from './BangladeshWorldwide'

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
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
        <MigrationModernization />
        <Deliverables />
        <WhyChoose />
        <BangladeshWorldwide />
      </div>
    </section>
  )
}