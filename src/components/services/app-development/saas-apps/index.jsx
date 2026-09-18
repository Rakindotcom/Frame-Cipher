import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Multi-Tenant Architecture',
  'Subscription Billing',
  'Role-Based Access Control',
  'Stripe & Local Gateways',
  'Cloud Infrastructure',
  'Automated CI/CD',
  'Real-Time Analytics',
  'Continuous SLA Support',
]

export default function AppDevelopmentSaasAppsService({ service }) {
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
