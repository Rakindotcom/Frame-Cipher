'use client'

import { CTASection } from '../components/Kinetic'
import { growthCaseStudies } from '../data/growthWork'
import {
  CaseStudyDetailNav,
  CaseStudyDetailHero,
  CaseStudyDetailSnapshot,
  CaseStudyDetailBreakdown,
  CaseStudyDetailNext,
} from '../components/case-studies'

export default function CaseStudyDetailPage({ study }) {
  const currentIndex = growthCaseStudies.findIndex((s) => s.slug === study.slug)
  const nextStudy =
    currentIndex >= 0 && currentIndex < growthCaseStudies.length - 1
      ? growthCaseStudies[currentIndex + 1]
      : growthCaseStudies[0]

  const studyNumber = String(currentIndex >= 0 ? currentIndex + 1 : 1).padStart(2, '0')

  return (
    <main className="bg-frame-bg text-frame-fg">
      <CaseStudyDetailNav study={study} />
      <CaseStudyDetailHero study={study} studyNumber={studyNumber} />
      <CaseStudyDetailSnapshot study={study} />
      <CaseStudyDetailBreakdown study={study} />
      <CaseStudyDetailNext nextStudy={nextStudy} />

      <CTASection title="Want measurable results like this for your business?">
        Frame Cipher connects positioning, content, SEO, paid media, and software into one unified
        growth engine. Book a strategy call to evaluate your channels.
      </CTASection>
    </main>
  )
}
