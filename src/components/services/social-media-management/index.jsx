import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../Kinetic'
import ServiceSubServices from '../ServiceSubServices'

const marqueeItems = [
  "Social Media Management",
  "Strategic Execution",
  "Dedicated In-House Team",
  "Built For Conversion",
  "Quality Assured",
  "Ongoing Support"
]

export default function SocialMediaManagementService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <ServiceSubServices service={service} />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <FAQ service={service} />
      <CTA service={service} />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
