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
import Modernization from './Modernization'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import BangladeshWorldwide from './BangladeshWorldwide'

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
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
        <Modernization />
        <Deliverables />
        <WhyChoose />
        <BangladeshWorldwide />
      </div>
    </section>
  )
}