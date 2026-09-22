import { growthCaseStudies } from '../../../data/growthWork'
import { SectionIntro, PosterButton } from '../../Kinetic'
import CaseStudyPortfolioCard from '../../case-studies/CaseStudyPortfolioCard'

const paidAdsCaseStudies = growthCaseStudies.filter((study) => study.category === 'Paid Ads')

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Verified paid media work"
          title="Paid Advertising Case Studies"
        >
          Real paid campaigns with documented starting points, the work performed, and
          measurable outcomes tracked through platform and analytics reporting.
        </SectionIntro>

        <div className="grid gap-8 sm:grid-cols-2">
          {paidAdsCaseStudies.map((study, index) => (
            <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 border-t-2 border-frame-border pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Each case study explains the starting situation, the campaign structure, the
            optimization decisions, and the measurable outcome reported through platform and
            analytics data.
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