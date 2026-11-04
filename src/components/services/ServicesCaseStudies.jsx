import Link from 'next/link'
import { growthCaseStudies } from '../../data/growthWork'
import CaseStudyPortfolioCard from '../case-studies/CaseStudyPortfolioCard'
import PosterButton from '../home/PosterButton'

export default function ServicesCaseStudies() {
  const featured = growthCaseStudies.slice(0, 3)

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 fc-grid-pattern opacity-15"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              See how we&apos;ve built, marketed &amp;{' '}
              <span className="italic text-frame-accent">
                grown real brands.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Every metric below comes from live reporting data, not estimates. Explore a few ways the
              Frame Cipher system shows up in the real world.
            </p>
          </div>

          <div className="shrink-0">
            <PosterButton href="/case-studies" variant="outline">
              View All Case Studies
            </PosterButton>
          </div>
        </div>

        {/* 3-Column Luxury Case Studies Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((study, index) => (
            <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        {/* Symmetrical Action Button Pair */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <PosterButton href="/contact">
            Start Your Own Growth Story
          </PosterButton>
          <PosterButton href="/case-studies" variant="outline">
            Browse All Case Studies
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
