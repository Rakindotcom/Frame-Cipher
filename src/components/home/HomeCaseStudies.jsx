import Link from 'next/link'
import { growthCaseStudies, resolveGrowthImagePath } from '../../data/growthWork'
import SectionButton from './SectionButton'
import AnimatedCounter from './AnimatedCounter'

export default function HomeCaseStudies() {
  const featuredStudies = growthCaseStudies.slice(0, 3)

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header Row */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              The receipts, documented
            </h2>
            <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-white md:text-lg">
              Real growth campaigns, verified client performance, and conversion data engineered for scalable return.
            </p>
          </div>
          <div className="shrink-0 flex items-center">
            <SectionButton href="/case-studies">Browse all case studies</SectionButton>
          </div>
        </div>

        {/* 3-Column Luxury Case Studies Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStudies.map((study, index) => {
            const displayMetrics = study.metrics?.slice(0, 4) || []
            const imageSrc = resolveGrowthImagePath(
              study.image?.src || study.imagePath || '/case-studies/facebook-ads/sumons-aroma.webp'
            )

            return (
              <article
                key={study.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-20"
              >
                <div>
                  {/* Visual Image Banner with Smooth Zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-zinc-950">
                    <img
                      src={imageSrc}
                      alt={study.image?.alt || `${study.client} case study`}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 sm:p-7">
                    <div className="mb-3 flex items-center justify-between text-xs">
                      <span className="font-mono text-xs text-purple-600">
                        {study.client}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-highlighted tracking-tight">
                      <Link href={`/case-studies/${study.slug}`} className="after:absolute after:inset-0 after:content-['']">
                        {study.title}
                      </Link>
                    </h3>

                    <p className="mt-4 text-sm font-normal leading-relaxed text-white transition-colors duration-200 group-hover:text-default line-clamp-3">
                      {study.summary}
                    </p>

                    {/* Verified Performance Metrics Strip */}
                    {displayMetrics.length > 0 && (
                      <div className="mt-6 rounded-lg border border-white/[0.08] bg-[#18181B] p-4">
                        <div className="mb-2 flex items-center justify-between border-b border-white/[0.08] pb-2">
                          <span className="font-mono text-xs uppercase tracking-wider text-purple-600">
                            Verified Performance
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                            Data Receipt
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 pt-1">
                          {displayMetrics.map(([val, lbl], mIdx) => (
                            <div key={mIdx} className="border-l-2 border-purple-600 pl-3">
                              <span className="block font-heading text-lg font-medium text-white tabular-nums">
                                <AnimatedCounter value={val} duration={1500} delay={mIdx * 100} suffixClassName="text-purple-600" />
                              </span>
                              <span className="block font-mono text-[10px] text-zinc-400">
                                {lbl}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="border-t border-white/[0.06] p-6 pt-4 sm:p-7 sm:pt-4">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group/btn relative z-10 inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 text-[13px] font-medium text-white transition-all duration-200 hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                  >
                    <span>Read Case Study</span>
                    <span
                      aria-hidden="true"
                      className="ml-2 text-base text-zinc-400 transition-transform duration-200 group-hover/btn:translate-x-1.5 group-hover/btn:text-purple-600"
                    >
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
