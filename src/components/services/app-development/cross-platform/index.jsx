import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const keywords = [
  'Flutter Development',
  'React Native',
  'Shared Business Logic',
  'Platform-Aware UI/UX',
  'Native Modules',
  'Dual Store Deployment',
  'Real-Device QA',
  'Post-Launch Support',
]

export default function AppDevelopmentCrossPlatformService({ service }) {
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
