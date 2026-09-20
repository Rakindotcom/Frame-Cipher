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
import PortingMigration from './PortingMigration'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import BangladeshWorldwide from './BangladeshWorldwide'

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
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
        <PortingMigration />
        <Deliverables />
        <WhyChoose />
        <BangladeshWorldwide />
      </div>
    </section>
  )
}