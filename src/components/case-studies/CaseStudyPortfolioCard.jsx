import Link from 'next/link'
import Image from 'next/image'
import AnimatedCounter from '../home/AnimatedCounter'
import { resolveGrowthImagePath } from '../../data/growthWork'
import { ArrowRight, Check } from 'lucide-react'

export default function CaseStudyPortfolioCard({ study, index }) {
  const displayMetrics = study.metrics?.slice(0, 4) || []
  const imageSrc = resolveGrowthImagePath(study.image?.src || study.imagePath || '/case-studies/facebook-ads/sumons-aroma.webp')

  return (
    <article
      id={study.slug}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] transition-all duration-300 hover:border-purple-600/40 hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
    >
      <div>
        {/* Featured Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-zinc-950">
          <Link
            href={`/case-studies/${study.slug}`}
            className="block h-full w-full"
            aria-label={`View ${study.client} case study: ${study.title}`}
          >
            <span className="sr-only">{study.client} Case Study</span>
            <img
              src={imageSrc}
              alt={study.image?.alt || `${study.client} case study`}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Card Content */}
        <div className="p-6 md:p-7">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-400">
            <span>{study.industry}</span>
            {study.timeline && (
              <>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-zinc-400">{study.timeline}</span>
              </>
            )}
          </div>

          <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
            <Link href={`/case-studies/${study.slug}`} className="hover:text-white transition-colors">
              {study.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400 line-clamp-3">
            {study.summary}
          </p>

          {/* Verified Performance Metrics Grid (Data Receipt) with Dynamic Count-Up */}
          {displayMetrics.length > 0 && (
            <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#18181B] p-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-purple-400">
                  Verified Performance
                </span>
                <span className="font-mono text-[10px] uppercase text-zinc-500">
                  Data Receipt
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1">
                {displayMetrics.map(([val, lbl], mIdx) => (
                  <div key={mIdx} className="border-l-2 border-purple-600 pl-3">
                    <span className="block font-heading text-lg font-medium tracking-tight tabular-nums text-white">
                      <AnimatedCounter
                        value={val}
                        duration={1200}
                        replay={true}
                        suffixClassName="text-purple-600 font-semibold"
                      />
                    </span>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                      {lbl}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Systems & Capabilities with Clean Tickmarks (Zero Box Clutter) */}
          {study.tools && study.tools.length > 0 && (
            <div className="mt-5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-2.5">
                Systems &amp; Capabilities
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {study.tools.slice(0, 5).map((tool) => (
                  <div key={tool} className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 shrink-0 text-purple-600" aria-hidden="true" />
                    <span className="font-mono text-[11px] text-zinc-300">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer Link */}
      <Link
        href={`/case-studies/${study.slug}`}
        className="border-t border-white/[0.08] bg-[#18181B]/50 p-4 px-6 flex items-center justify-between font-mono text-xs uppercase tracking-[1.1px] text-zinc-400 group-hover:text-white transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
      >
        <span>Inspect Case Breakdown</span>
        <ArrowRight className="h-4 w-4 text-zinc-500 transition-transform duration-200 group-hover:translate-x-1.5 group-hover:text-purple-600" />
      </Link>
    </article>
  )
}
