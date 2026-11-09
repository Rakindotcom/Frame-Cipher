import Hero from './Hero'
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
import Process from './Process'
import Deliverables from './Deliverables'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import BangladeshWorldwide from './BangladeshWorldwide'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Custom ERP & Workflow Engines',
  'Legacy Database & API Integration',
  'Enterprise RBAC & SAML 2.0 SSO',
  'Audit Logging & SOC2 Compliance',
  'Field Operations & Offline Sync',
  'High-Availability Cloud Architecture',
  'Automated CI/CD & Disaster Recovery',
  '100% In-House Enterprise Engineering',
]

export default function AppDevelopmentEnterpriseAppsService({ service }) {
  return (
    <main className="service-page min-h-screen bg-[#09090B] text-white selection:bg-[#704bd2]/30 selection:text-white">
      <Hero service={service} />
      <TypeMarquee items={keywords} slow />

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
      <Process />
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
  WhatIsEnterprise,
  Services,
  AppsWeBuild,
  WhyMoreThanCoding,
  Architecture,
  SystemsIntegration,
  WorkflowAutomation,
  SecurityCompliance,
  DataReporting,
  MobileOffline,
  ModernizationMigration,
  CloudPerformance,
  DevopsManagement,
  TechStack,
  UiUxAdoption,
  RolloutChange,
  TestingQa,
  DataMigration,
  EngagementModels,
  Process,
  Deliverables,
  WhyChoose,
  Pricing,
  BangladeshWorldwide,
  FAQ,
  CTA,
}
