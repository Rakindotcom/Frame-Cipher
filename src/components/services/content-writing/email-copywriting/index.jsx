import { TypeMarquee } from '../../../Kinetic'

import Hero from './Hero'
import AttentionClarityAction from './AttentionClarityAction'
import Offerings from './Offerings'
import HowWeBuild from './HowWeBuild'
import VsEmailMarketing from './VsEmailMarketing'
import BusinessGoals from './BusinessGoals'
import Deliverables from './Deliverables'
import WhatWeNeed from './WhatWeNeed'
import Proof from './Proof'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import Timeline from './Timeline'
import QualityCommitments from './QualityCommitments'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'

const marqueeItems = [
  'Attention Before Persuasion',
  'Sequence Thinking',
  'Inbox-Aware Writing',
  'One Job Per Email',
  'Subject & Preview Strategy',
  'Lifecycle Messaging',
]

export default function ContentWritingEmailCopywritingService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <AttentionClarityAction />
      <Offerings />
      <HowWeBuild />
      <VsEmailMarketing />
      <BusinessGoals />
      <Deliverables />
      <WhatWeNeed />
      <Proof />
      <WhyChoose />
      <Process />
      <Pricing />
      <Timeline />
      <QualityCommitments />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </main>
  )
}

export {
  Hero,
  AttentionClarityAction,
  Offerings,
  HowWeBuild,
  VsEmailMarketing,
  BusinessGoals,
  Deliverables,
  WhatWeNeed,
  Proof,
  WhyChoose,
  Process,
  Pricing,
  Timeline,
  QualityCommitments,
  ServiceAreas,
  FAQ,
  CTA,
}
