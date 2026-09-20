import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  "OS & SDK Compatibility",
  "Root-Cause Bug Resolution",
  "Continuous Health Monitoring",
  "Dependency & Security Patching",
  "API & Third-Party Reliability",
  "App Store Release Management",
  "Performance Optimization",
  "Proactive Maintenance SLA"
]

export default function AppDevelopmentMaintenanceService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <FAQ service={service} />
      <CTA service={service} />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
