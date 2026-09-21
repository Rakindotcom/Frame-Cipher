import Hero from './Hero'
import Overview from './Overview'
import ReadinessCheck from './ReadinessCheck'
import Offerings from './Offerings'
import CommonIssues from './CommonIssues'
import WebsiteTypes from './WebsiteTypes'
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
  'Google AdSense Approval',
  'Policy-Ready Review',
  'Dedicated In-House Team',
  'Built For Trust',
  'Quality Assured',
  'Ongoing Support',
]

export default function SeoAdsenseApprovalService({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <ReadinessCheck />
      <Offerings />
      <CommonIssues />
      <WebsiteTypes />
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
  ReadinessCheck,
  Offerings,
  CommonIssues,
  WebsiteTypes,
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