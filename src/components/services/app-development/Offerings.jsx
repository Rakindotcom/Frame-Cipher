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
import MvpStartups from './MvpStartups'
import Modernization from './Modernization'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import StartRequirements from './StartRequirements'
import BangladeshWorldwide from './BangladeshWorldwide'

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
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
        <MvpStartups />
        <Modernization />
        <Deliverables />
        <WhyChoose />
        <StartRequirements />
        <BangladeshWorldwide />
      </div>
    </section>
  )
}