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
  'Built For Recovery',
  'Quality Assured',
  'Ongoing Support',
]

export default function SeoPenaltyRecoveryService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
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
      <FAQ />
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