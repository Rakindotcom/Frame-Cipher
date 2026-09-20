import WhatIsEnterprise from './WhatIsEnterprise'
import Services from './Services'
import AppsWeBuild from './AppsWeBuild'
import WhyMoreThanCoding from './WhyMoreThanCoding'
import Architecture from './Architecture'
import SystemsIntegration from './SystemsIntegration'
import WorkflowAutomation from './WorkflowAutomation'
import SecurityCompliance from './SecurityCompliance'
import DataReporting from './DataReporting'
import MobileOffline from './MobileOffline'
import ModernizationMigration from './ModernizationMigration'
import CloudPerformance from './CloudPerformance'
import DevopsManagement from './DevopsManagement'
import TechStack from './TechStack'
import UiUxAdoption from './UiUxAdoption'
import RolloutChange from './RolloutChange'
import TestingQa from './TestingQa'
import DataMigration from './DataMigration'
import EngagementModels from './EngagementModels'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import BangladeshWorldwide from './BangladeshWorldwide'

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <WhatIsEnterprise />
        <Services />
        <AppsWeBuild />
        <WhyMoreThanCoding />
        <Architecture />
        <SystemsIntegration />
        <WorkflowAutomation />
        <SecurityCompliance />
        <DataReporting />
        <MobileOffline />
        <ModernizationMigration />
        <CloudPerformance />
        <DevopsManagement />
        <TechStack />
        <UiUxAdoption />
        <RolloutChange />
        <TestingQa />
        <DataMigration />
        <EngagementModels />
        <Deliverables />
        <WhyChoose />
        <BangladeshWorldwide />
      </div>
    </section>
  )
}