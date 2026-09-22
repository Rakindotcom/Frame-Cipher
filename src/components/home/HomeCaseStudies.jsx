import Link from 'next/link'
import { growthCaseStudies } from '../../data/growthWork'
import CaseStudyPortfolioCard from '../case-studies/CaseStudyPortfolioCard'

export default function HomeCaseStudies() {
  const featuredStudies = growthCaseStudies.slice(0, 3)

  return (
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              Case studies / Results
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              The receipts, documented.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 border-2 border-frame-border bg-transparent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-fg transition-all duration-200 hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg active:scale-95 sm:text-sm md:min-h-14 md:px-8"
          >
            <span>Browse all case studies</span>
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStudies.map((study, index) => (
            <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}