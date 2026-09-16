import Link from 'next/link'
import { resolveGrowthImagePath } from '../../data/growthWork'

export default function CaseStudyPortfolioCard({ study, index }) {
  const displayMetrics = study.metrics?.slice(0, 4) || []
  const imageSrc = resolveGrowthImagePath(study.image?.src || study.imagePath || '/case-studies/facebook-ads/sumons-aroma.webp')
  const indexStr = String(index + 1).padStart(2, '0')

  return (
    <article
      id={study.slug}
      className="group flex flex-col justify-between border-2 border-frame-border bg-frame-bg transition-all duration-300 hover:border-frame-accent hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
    >
      <div>
        {/* Featured Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b-2 border-frame-border bg-black">
          <img
            src={imageSrc}
            alt={study.image?.alt || `${study.client} case study`}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Top Overlays */}
          <div className="absolute inset-x-4 top-4 flex items-center justify-between">
            <span className="border border-frame-accent bg-frame-bg/90 backdrop-blur-md px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-frame-accent shadow-lg">
              {study.category}
            </span>
            <span className="border border-frame-border bg-frame-bg/90 backdrop-blur-md px-2.5 py-1 font-heading text-xs font-bold text-frame-fg shadow-lg">
              #{indexStr}
            </span>
          </div>

          {/* Bottom Overlay on Image: Client & Industry */}
          <div className="absolute inset-x-4 bottom-3 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white/95 drop-shadow-md">
              {study.client}
            </span>
            {study.primaryFocus && (
              <span className="hidden sm:inline-block border border-white/20 bg-black/60 px-2 py-0.5 text-[0.62rem] font-mono font-bold uppercase text-white/90 backdrop-blur-sm">
                {study.primaryFocus}
              </span>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 md:p-7">
          <div className="flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.2em] text-frame-accent">
            <span>{study.industry}</span>
            {study.timeline && (
              <>
                <span className="text-frame-muted-fg">·</span>
                <span className="text-frame-muted-fg">{study.timeline}</span>
              </>
            )}
          </div>

          <h3 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors group-hover:text-frame-accent md:text-3xl">
            {study.title}
          </h3>

          <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
            {study.summary}
          </p>

          {/* Verified Metrics Strip */}
          {displayMetrics.length > 0 && (
            <div className="mt-6 border-2 border-frame-border bg-frame-muted/20 p-4">
              <div className="flex items-center justify-between border-b border-frame-border/80 pb-2">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-frame-accent">
                  Verified Performance Metrics
                </span>
                <span className="text-[0.62rem] font-mono font-bold uppercase tracking-wider text-frame-muted-fg">
                  Reporting Data
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-2">
                {displayMetrics.map(([val, lbl], mIdx) => (
                  <div key={mIdx} className="border-l-2 border-frame-accent/60 pl-3">
                    <span className="block font-heading text-xl font-bold tracking-tight text-frame-fg transition-colors group-hover:text-frame-accent md:text-2xl">
                      {val}
                    </span>
                    <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-frame-muted-fg">
                      {lbl}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Tactic Pills */}
          {study.tools && study.tools.length > 0 && (
            <div className="mt-5">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-frame-muted-fg mb-2">
                Systems & Capabilities:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {study.tools.slice(0, 5).map((tool) => (
                  <span
                    key={tool}
                    className="border border-frame-border/80 bg-frame-muted/30 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-frame-muted-fg transition-colors group-hover:border-frame-accent/40 group-hover:text-frame-fg"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Link */}
      <Link
        href={`/case-studies/${study.slug}`}
        className="border-t-2 border-frame-border bg-frame-muted/10 p-4 px-6 transition-colors group-hover:bg-frame-accent group-hover:text-frame-accent-fg flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
      >
        <span className="text-xs font-black uppercase tracking-wider">
          Inspect Case Breakdown
        </span>
        <span
          className="text-lg text-frame-accent transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-frame-accent-fg"
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </article>
  )
}
