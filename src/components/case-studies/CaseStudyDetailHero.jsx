import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import { ChevronRight } from 'lucide-react'

export default function CaseStudyDetailHero({ study, studyNumber }) {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Breadcrumb & Back Link Header Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <Link href="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-frame-accent">{study.category}</span>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-white truncate max-w-xs">{study.client}</span>
          </nav>

          <Link
            href="/case-studies"
            className="group inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:border-white/40 hover:bg-white/10 shrink-0"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
            <span>All Case Studies</span>
          </Link>
        </div>

        <div className="space-y-6 max-w-5xl">
          {/* Architectural Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-frame-accent border border-white/[0.08]">
              {study.category} &bull; Case #{studyNumber}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-zinc-400 border border-white/[0.08]">
              {study.client} &bull; {study.industry}
            </span>
          </div>

          {/* Display Heading */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            {study.title}
          </h1>

          {/* Editorial Description */}
          <p className="max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
            {study.summary}
          </p>

          {/* Symmetrical Button Pair (52px Height + Arrows) */}
          <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PosterButton href="/contact">
              Book a Strategy Call
            </PosterButton>
            <PosterButton href="/case-studies" variant="outline">
              All Case Studies
            </PosterButton>
          </div>
        </div>

        {/* Modality 2: Architectural Column Band for Key Performance Metrics */}
        {study.metrics?.length > 0 && (
          <div className="mt-14 border-t border-white/[0.08] pt-10">
            <div className={`rounded-xl border border-white/[0.08] overflow-hidden grid gap-px bg-white/[0.08] ${
              study.metrics.length === 6
                ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
                : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'
            }`}>
              {study.metrics.map(([value, label]) => (
                <div
                  key={label}
                  className="bg-[#121214] p-5 sm:p-6 transition-colors duration-200 hover:bg-white/[0.02]"
                >
                  <p className="font-heading text-3xl sm:text-4xl font-medium leading-none tracking-tight text-white">
                    {value}
                  </p>
                  <p className="mt-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
