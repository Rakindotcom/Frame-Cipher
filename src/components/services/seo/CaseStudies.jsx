import { growthCaseStudies } from '../../../data/growthWork'
import { SectionIntro, PosterButton } from '../../Kinetic'
import CaseStudyPortfolioCard from '../../case-studies/CaseStudyPortfolioCard'

const seoCaseStudies = growthCaseStudies.filter((study) => study.category === 'SEO')

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Verified SEO work"
          title="SEO Case Studies"
        >
          Real SEO campaigns with documented starting points, the work performed, and measurable
          outcomes tracked through first-party search reporting.
        </SectionIntro>

        <div className="grid gap-8 sm:grid-cols-2">
          {seoCaseStudies.map((study, index) => (
            <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 border-t-2 border-frame-border pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Each case study explains the starting situation, the SEO work performed, and the
            measurable outcome reported through tools such as Google Search Console and analytics
            platforms.
          </p>
          <div className="shrink-0">
            <PosterButton href="/case-studies" variant="outline">
              View All Case Studies
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}