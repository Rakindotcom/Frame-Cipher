import Hero from './Hero'
import Overview from './Overview'
import WhenNeed from './WhenNeed'
import RootCause from './RootCause'
import Offerings from './Offerings'
import ManualActions from './ManualActions'
import AlgorithmicRecovery from './AlgorithmicRecovery'
import WhatYouGet from './WhatYouGet'
import Markets from './Markets'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Guarantee from './Guarantee'
import CaseStudies from './CaseStudies'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Google Penalty Recovery',
  'Evidence-First Diagnosis',
  'Dedicated In-House Team',
  'Core Algorithm Rebound',
  'Manual Action Clearance',
  'Empirical Disavow Hygiene',
  '100% Policy-Safe Remediation',
]

export default function SeoPenaltyRecoveryService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-white min-h-screen">
      <Hero service={service} />
      <div className="border-b border-white/[0.08] bg-[#09090B] py-3 text-xs font-mono uppercase tracking-widest text-zinc-400">
        <TypeMarquee items={marqueeItems} slow />
      </div>
      <Overview />
      <WhenNeed />
      <RootCause />
      <Offerings />
      <ManualActions />
      <AlgorithmicRecovery />
      <WhatYouGet />
      <Markets />
      <Process />
      <WhyChoose />
      <Pricing />
      <Guarantee />
      <CaseStudies />
      <FAQ service={service} />
      <CTA />
    </main>
  )
}

export {
  Hero,
  Overview,
  WhenNeed,
  RootCause,
  Offerings,
  ManualActions,
  AlgorithmicRecovery,
  WhatYouGet,
  Markets,
  Process,
  WhyChoose,
  Pricing,
  Guarantee,
  CaseStudies,
  FAQ,
  CTA,
}
