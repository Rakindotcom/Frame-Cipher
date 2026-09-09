import Link from 'next/link'
import { growthCaseStudies } from '../data/growthWork'

export default function GrowthCaseStudyLibrary() {
  return (
    <section className="border-t-2 border-frame-border px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 grid gap-8 border-b-2 border-frame-border pb-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              More work. Full evidence.
            </p>
            <h2 className="mt-5 font-heading text-[clamp(2.8rem,7vw,7rem)] font-bold uppercase leading-[0.82] tracking-tighter text-frame-fg">
              Performance case library.
            </h2>
          </div>
          <p className="max-w-4xl text-lg font-medium leading-tight text-frame-muted-fg md:text-2xl">
            Twelve in-depth studies document the problem, strategy, execution, measurement,
            and lessons behind our paid-media and organic-search work. Select any study to view
            the complete breakdown and original reporting images.
          </p>
        </div>

        <div className="grid gap-4">
          {growthCaseStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({ study, index }) {
  return (
    <Link
      id={study.slug}
      href={`/case-studies/${study.slug}`}
      className="group block scroll-mt-28 border-2 border-frame-border bg-frame-bg p-5 transition-all duration-200 hover:border-frame-accent hover:bg-frame-muted/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent md:p-7"
    >
      <div className="grid gap-5 lg:grid-cols-[auto_0.3fr_1fr_auto] lg:items-center">
        <span className="font-heading text-2xl font-bold leading-none text-frame-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="w-fit border-2 border-frame-accent px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.2em] text-frame-accent">
          {study.category}
        </span>
        <div>
          <span className="block text-xs font-black uppercase tracking-[0.22em] text-frame-muted-fg">
            {study.client} · {study.industry}
          </span>
          <span className="mt-2 block font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors group-hover:text-frame-accent md:text-4xl">
            {study.title}
          </span>
        </div>
        <span className="flex items-center gap-3 text-sm font-black uppercase tracking-tighter text-frame-fg group-hover:text-frame-accent">
          <span>Read study</span>
          <span
            className="text-2xl text-frame-accent transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
