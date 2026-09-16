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
      className="scroll-mt-36 px-4 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionHeading
          number="06"
          title="Creative visual archive"
          count={`${designWorks.length} selected visuals`}
        />

        <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border">
          <aside className="grid gap-8 bg-frame-bg p-6 md:grid-cols-[0.82fr_1fr] md:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Auto carousel
              </p>
              <h4 className="mt-4 font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-5xl">
                Moving through the archive.
              </h4>
            </div>
            <div className="md:max-w-2xl">
              <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg md:text-lg">
                The carousel cycles through selected visual work automatically. Open the archive when you want the full grid for closer browsing.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="border-t-2 border-frame-border pt-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Archive depth
                  </p>
                  <p className="mt-2 text-sm font-bold uppercase leading-tight text-frame-muted-fg">
                    {designWorks.length} selected visuals in rotation
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenArchive}
                  className="min-h-14 border-2 border-frame-accent bg-frame-accent px-5 py-4 text-sm font-black uppercase tracking-tighter text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                >
                  View more
                </button>
              </div>
            </div>
          </aside>

          <div className="bg-frame-bg p-4 md:p-6">
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
                      className={`group relative block aspect-[4/3] min-w-[82vw] overflow-hidden border-2 bg-white text-left transition duration-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent sm:min-w-[48%] lg:min-w-[31%] ${
                        isActive
                          ? 'scale-[1.02] border-frame-accent opacity-100 shadow-[0_24px_80px_rgba(168,85,247,0.18)]'
                          : 'border-frame-border opacity-55 hover:opacity-90'
                      }`}
                      aria-label={`View full image ${work.number}`}
                    >
                      <img
                        src={work.src}
                        alt={`Frame Cipher selected work ${work.number}`}
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-95"
                        loading="lazy"
                      />
                      {isActive && (
                        <span className="absolute left-4 top-4 bg-frame-accent px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-frame-accent-fg">
                          Now showing
                        </span>
                      )}
                      <span className="absolute inset-x-4 bottom-4 border-2 border-frame-border bg-frame-bg px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-frame-fg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Open preview
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="h-2 bg-frame-border" aria-hidden="true">
                <div
                  className="h-full bg-frame-accent transition-all duration-500"
                  style={{ width: `${((currentWorkIndex + 1) / designWorks.length) * 100}%` }}
                />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                Auto rotating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
