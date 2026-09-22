import Link from 'next/link'
import { growthCaseStudies } from '../../data/growthWork'
import CaseStudyPortfolioCard from '../case-studies/CaseStudyPortfolioCard'
import { PosterButton } from '../Kinetic'

export default function ServicesCaseStudies() {
  const featured = growthCaseStudies.slice(0, 3)

  return (
    <section className="border-b-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
          Case studies / proof, not promises
        </p>
        <h2 className="max-w-4xl font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
          See how we&apos;ve built, marketed &amp; grown real brands.
        </h2>
        <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
          Every metric below comes from live reporting data—not estimates. Explore a few ways the
          Frame Cipher system shows up in the real world.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((study, index) => (
            <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/case-studies"
            className="group inline-flex min-h-14 items-center gap-3 border-2 border-frame-border bg-frame-bg px-7 text-sm font-black uppercase tracking-[0.18em] text-frame-fg transition-colors duration-300 hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg md:min-h-16"
          >
            View All Case Studies
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
          <PosterButton href="/contact" variant="accent" className="whitespace-nowrap">
            Start Your Own Growth Story
          </PosterButton>
        </div>
      </div>
    </section>
  )
}