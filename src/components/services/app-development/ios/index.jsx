import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Swift 6 & SwiftUI',
  'Human Interface Guidelines',
  'App Store Connect',
  'TestFlight Distribution',
  'CoreData & SwiftData',
  'Ecosystem Integration',
]

export default function AppDevelopmentIosService({ service }) {
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
