import Link from 'next/link'
import { growthCaseStudies, resolveGrowthImagePath } from '../../data/growthWork'
import SectionButton from './SectionButton'

export default function HomeCaseStudies() {
  const featuredStudies = growthCaseStudies.slice(0, 3)

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header Row */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              The receipts,{' '}
              <span className="italic text-frame-accent">
                documented.
              </span>
            </h2>
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
            const indexStr = String(index + 1).padStart(2, '0')

            return (
              <article
                key={study.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-20"
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
                      <span className="font-medium text-frame-accent">
                        {study.client}
                      </span>
                      <span className="text-zinc-500 text-[11px]">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                      <Link href={`/case-studies/${study.slug}`} className="after:absolute after:inset-0 after:content-['']">
                        {study.title}
                      </Link>
                    </h3>

                    <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200 line-clamp-3">
                      {study.summary}
                    </p>

                    {/* Verified Performance Metrics Strip */}
                    {displayMetrics.length > 0 && (
                      <div className="mt-6 rounded-lg border border-white/[0.08] bg-[#18181B] p-4">
                        <div className="mb-2 flex items-center justify-between border-b border-white/[0.08] pb-2">
                          <span className="text-[11px] text-frame-accent">
                            Verified Performance
                          </span>
                          <span className="text-[10px] text-zinc-500">
                            Data Receipt
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 pt-1">
                          {displayMetrics.map(([val, lbl], mIdx) => (
                            <div key={mIdx} className="border-l-2 border-frame-accent pl-3">
                              <span className="block font-heading text-lg font-medium text-white tabular-nums">
                                {val}
                              </span>
                              <span className="block text-[10px] text-zinc-400">
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
                <div className="border-t border-white/[0.08] p-6 pt-4 sm:p-7 sm:pt-4">
                  <Link href={`/case-studies/${study.slug}`} className="group inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98]">
                    <span>Read Case Study</span>
                    <span aria-hidden="true" className="ml-2 text-base transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
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
