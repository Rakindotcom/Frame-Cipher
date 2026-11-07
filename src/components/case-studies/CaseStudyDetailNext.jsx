import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CaseStudyDetailNext({ nextStudy }) {
  if (!nextStudy) return null

  return (
    <section className="relative isolate border-b border-white/[0.08] px-4 py-16 md:px-8 md:py-20 bg-[#09090B]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 md:p-12 transition-colors duration-200 hover:border-purple-600/40 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
              <span>Next Growth Study</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight text-white">
              {nextStudy.title}
            </h3>
            <p className="mt-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {nextStudy.client} &bull; {nextStudy.category}
            </p>
          </div>
          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#FAFAFA] px-8 text-sm font-semibold text-[#09090B] transition-all duration-200 hover:bg-white active:scale-[0.98] shrink-0 shadow-lg"
          >
            <span>Read next study</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
