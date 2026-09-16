import { CTASection } from '../components/Kinetic'
import Testimonials from '../components/Testimonials'
import {
  CaseStudiesHero,
  CaseStudiesFeatured,
  CaseStudyNavigation,
  GrowthCaseStudyLibrary,
} from '../components/case-studies'

export default function CaseStudiesPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <CaseStudiesHero />

      <Testimonials
        eyebrow="Client voice"
        title="The proof before the breakdown."
        description="Before the process details, here is the client-side signal: public mentions, direct feedback, and the reactions that show the work landed."
      />

      <div>
        <CaseStudyNavigation />
        <CaseStudiesFeatured />
        <GrowthCaseStudyLibrary />
      </div>

      <CTASection title="Want a growth system built around measurable outcomes?">
        Frame Cipher connects content, paid media, SEO, websites, and measurement into one
        practical system for growth.
      </CTASection>
    </main>
  )
}
