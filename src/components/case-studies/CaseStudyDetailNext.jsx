import Link from 'next/link'

export default function CaseStudyDetailNext({ nextStudy }) {
  if (!nextStudy) return null

  return (
    <section className="relative isolate border-b border-white/[0.08] px-4 py-16 md:px-8 md:py-20 bg-[#09090B]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10  transition-colors duration-200 hover:border-white/[0.14]">
          <div>
            <h3 className="font-heading text-2xl font-medium leading-tight tracking-tight text-white md:text-3xl">
              {nextStudy.title}
            </h3>
            <p className="mt-2 font-mono text-xs font-medium uppercase tracking-wider text-zinc-400">
              {nextStudy.client} &bull; {nextStudy.category}
            </p>
          </div>
          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-[0.98] shrink-0"
          >
            <span>Read next study</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
