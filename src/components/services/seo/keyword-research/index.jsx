import Hero from './Hero'
import Overview from './Overview'
import WhenNeed from './WhenNeed'
import Offerings from './Offerings'
import BusinessTypes from './BusinessTypes'
import Markets from './Markets'
import WhatYouGet from './WhatYouGet'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Guarantee from './Guarantee'
import CaseStudies from './CaseStudies'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Keyword Research',
  'Search Intent',
  'Competitor Gaps',
  'Keyword Mapping',
  'Long-Tail Keywords',
  'Semantic Keywords',
  'Topic Clusters',
]

export default function SeoKeywordResearchService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <WhenNeed />
      <Offerings />
      <BusinessTypes />
      <Markets />
      <WhatYouGet />
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
  Offerings,
  BusinessTypes,
  Markets,
  WhatYouGet,
  Process,
  WhyChoose,
  Pricing,
  Guarantee,
  CaseStudies,
  FAQ,
  CTA,
}