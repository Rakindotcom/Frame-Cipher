import Link from 'next/link'

export default function CaseStudyDetailNav({ study }) {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      className="sticky top-[74px] z-40 border-b border-white/[0.08] bg-[#09090B]/95 backdrop-blur-xl px-4 py-3  md:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          href="/case-studies"
          className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
          <span>Back to Case Studies</span>
        </Link>

        <div className="hidden items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-400 sm:flex">
          <Link href="/case-studies" className="hover:text-white transition-colors">
            Case Studies
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-violet-400">{study.category}</span>
          <span className="text-zinc-600">/</span>
          <span className="max-w-xs truncate text-white">{study.client}</span>
        </div>

        <Link
          href="/contact"
          className="group hidden h-10 items-center justify-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-950 shadow-sm transition-all hover:bg-zinc-200 active:scale-95 md:inline-flex"
        >
          <span>Book a Strategy Call</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </nav>
  )
}
