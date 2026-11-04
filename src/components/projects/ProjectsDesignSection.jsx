import Image from 'next/image'
import { SectionHeading } from '../GrowthPortfolioSection'

export default function ProjectsDesignSection({
  designWorks,
  currentWork,
  currentWorkIndex,
  imageSectionRef,
  carouselRef,
  onSelectWork,
  onOpenArchive,
}) {
  return (
    <section
      ref={imageSectionRef}
      id="branding-work"
      className="relative isolate scroll-mt-36 border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="06"
          title="Creative visual archive"
          count={`${designWorks.length} selected visuals`}
        />

        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden">
          <aside className="grid gap-8 p-6 md:grid-cols-[0.82fr_1fr] md:p-10 border-b border-white/[0.08] bg-white/[0.01]">
            <div>
              <h4 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight text-white">
                Moving through the{' '}
                <span className="italic text-frame-accent">archive.</span>
              </h4>
            </div>
            <div className="md:max-w-2xl">
              <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-400">
                The carousel cycles through selected visual work automatically. Open the archive when you want the full grid for closer browsing.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="border-t border-white/[0.08] pt-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-violet-400">
                    Archive depth
                  </p>
                  <p className="mt-1 font-mono text-xs font-medium uppercase text-zinc-400">
                    {designWorks.length} selected visuals in rotation
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenArchive}
                  className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 text-sm font-medium tracking-wide text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  <span>View full archive</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </aside>

          <div className="p-4 md:p-8">
            <div
              ref={carouselRef}
              className="overflow-hidden"
              aria-label="Automatic selected work carousel"
            >
              <div className="flex gap-4 py-2">
                {designWorks.map((work) => {
                  const isActive = work.number === currentWork.number

                  return (
                    <button
                      key={work.src}
                      type="button"
                      data-carousel-card={work.number}
                      onClick={() => onSelectWork(work)}
                      className={`group relative block aspect-[4/3] min-w-[82vw] overflow-hidden rounded-2xl border text-left transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:min-w-[48%] lg:min-w-[31%] ${
                        isActive
                          ? 'scale-[1.02] border-violet-500/70 opacity-100 shadow-[0_16px_36px_rgba(139,92,246,0.18)] bg-[#18181B]'
                          : 'border-white/[0.08] opacity-60 hover:opacity-95 bg-[#141416] hover:border-white/20'
                      }`}
                      aria-label={`View full image ${work.number}`}
                    >
                      <Image
                        src={work.src}
                        alt={`Frame Cipher selected work ${work.number}`}
                        fill
                        sizes="(max-width: 639px) 78vw, (max-width: 1023px) 44vw, 31vw"
                        quality={80}
                        className="object-contain transition duration-300 group-hover:scale-105"
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="h-1.5 rounded-full overflow-hidden bg-white/[0.08]" aria-hidden="true">
                <div
                  className="h-full bg-violet-400 transition-all duration-500 rounded-full"
                  style={{ width: `${((currentWorkIndex + 1) / designWorks.length) * 100}%` }}
                />
              </div>
              <p className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">
                Auto rotating &bull; #{currentWork.number} of {designWorks.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
