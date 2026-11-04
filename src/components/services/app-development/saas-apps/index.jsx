import Hero from './Hero'
import WhatIsSaas from './WhatIsSaas'
import OurServices from './OurServices'
import TypesOfSaas from './TypesOfSaas'
import WhyBuildSaas from './WhyBuildSaas'
import MultiTenantArchitecture from './MultiTenantArchitecture'
import BillingMonetization from './BillingMonetization'
import UserRoleManagement from './UserRoleManagement'
import OnboardingActivation from './OnboardingActivation'
import AnalyticsDashboards from './AnalyticsDashboards'
import ApisWebhooksIntegrations from './ApisWebhooksIntegrations'
import BackgroundJobsAutomation from './BackgroundJobsAutomation'
import SecurityPrivacyCompliance from './SecurityPrivacyCompliance'
import TechnologyStack from './TechnologyStack'
import PerformanceScalability from './PerformanceScalability'
import UiUxProductDesign from './UiUxProductDesign'
import MvpDevelopment from './MvpDevelopment'
import ScalingModernization from './ScalingModernization'
import WebMobileDevelopment from './WebMobileDevelopment'
import TestingQualityAssurance from './TestingQualityAssurance'
import DeploymentHandoff from './DeploymentHandoff'
import Process from './Process'
import ProjectDeliverables from './ProjectDeliverables'
import WhyChooseFramecipher from './WhyChooseFramecipher'
import CaseStudies from './CaseStudies'
import Pricing from './Pricing'
import BangladeshWorldwide from './BangladeshWorldwide'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Multi-Tenant SaaS Architecture',
  'PostgreSQL Row-Level Security',
  'Stripe & Metered Subscriptions',
  'Enterprise RBAC & SSO',
  'Background Job Queues & Redis',
  'Real-Time Customer Telemetry',
  'Docker & Kubernetes Cloud CI/CD',
  '100% In-House SaaS Engineering',
]

export default function AppDevelopmentSaasAppsService({ service }) {
  return (
    <main className="service-page min-h-screen bg-[#09090B] text-white selection:bg-[#704bd2]/30 selection:text-white">
      <Hero service={service} />
      <TypeMarquee items={keywords} slow />

      <WhatIsSaas />
      <OurServices />
      <TypesOfSaas />
      <WhyBuildSaas />
      <MultiTenantArchitecture />
      <BillingMonetization />
      <UserRoleManagement />
      <OnboardingActivation />
      <AnalyticsDashboards />
      <ApisWebhooksIntegrations />
      <BackgroundJobsAutomation />
      <SecurityPrivacyCompliance />
      <TechnologyStack />
      <PerformanceScalability />
      <UiUxProductDesign />
      <MvpDevelopment />
      <ScalingModernization />
      <WebMobileDevelopment />
      <TestingQualityAssurance />
      <DeploymentHandoff />
      <Process />
      <ProjectDeliverables />
      <WhyChooseFramecipher />
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
  WhatIsSaas,
  OurServices,
  TypesOfSaas,
  WhyBuildSaas,
  MultiTenantArchitecture,
  BillingMonetization,
  UserRoleManagement,
  OnboardingActivation,
  AnalyticsDashboards,
  ApisWebhooksIntegrations,
  BackgroundJobsAutomation,
  SecurityPrivacyCompliance,
  TechnologyStack,
  PerformanceScalability,
  UiUxProductDesign,
  MvpDevelopment,
  ScalingModernization,
  WebMobileDevelopment,
  TestingQualityAssurance,
  DeploymentHandoff,
  Process,
  ProjectDeliverables,
  WhyChooseFramecipher,
  CaseStudies,
  Pricing,
  BangladeshWorldwide,
  FAQ,
  CTA,
}
