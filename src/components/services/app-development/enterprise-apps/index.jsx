import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Legacy Modernization',
  'ERP & CRM Integration',
  'Role-Based Access Control',
  'Single Sign-On (SSO)',
  'High Availability Architecture',
  'Automated CI/CD',
  'Enterprise Mobile & Offline-First',
  'Mission-Critical SLA Support',
]

export default function AppDevelopmentEnterpriseAppsService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={keywords} slow />
      
      <Offerings />
      <Process />
      <Pricing />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
