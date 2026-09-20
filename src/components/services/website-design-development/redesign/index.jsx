import Hero from './Hero'
import CaseStudies from './CaseStudies'
import Offerings from './Offerings'
import WhyChoose from './WhyChoose'
import Included from './Included'
import SeoEquity from './SeoEquity'
import Niches from './Niches'
import Outcomes from './Outcomes'
import Mistakes from './Mistakes'
import ServiceAreas from './ServiceAreas'
import WhyFramecipher from './WhyFramecipher'
import Process from './Process'
import Pricing from './Pricing'
import Timeline from './Timeline'
import ReviewSupport from './ReviewSupport'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const redesignKeywords = [
  'Website Redesign',
  'SEO Equity Preservation',
  'Audit Before Design',
  '301 Redirect Mapping',
  'UX & Conversion Tuning',
  'Platform Migration',
  'Zero-Downtime Launch',
  'Core Web Vitals Speed',
]

export default function WebsiteDesignDevelopmentRedesignService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={redesignKeywords} slow />

      {/* PORTFOLIO PREVIEW */}
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Website Redesign Case Studies"
        description="A redesign is easier to evaluate when you can see what changed, why it changed, and what happened afterward."
        buttonText="Explore Redesign Projects →"
        buttonHref="/projects#website-work"
      />

      <CaseStudies />
      <Offerings />
      <WhyChoose />
      <Included />
      <SeoEquity />
      <Niches />
      <Outcomes />
      <Mistakes />
      <ServiceAreas />
      <WhyFramecipher />
      <Process />
      <Pricing />
      <Timeline />
      <ReviewSupport />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }