import PosterButton from '../home/PosterButton'

export default function CaseStudiesCTA() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.4)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                <span>Next Move</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-tight text-highlighted">
                Want a Growth System Built Around Measurable Outcomes?
              </h2>
            </div>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none tracking-tight text-white/20 shrink-0"
            >
              &rarr;
            </span>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Frame Cipher connects content, paid media, SEO, websites, and measurement into one
              practical system for growth. Book a strategy call to evaluate your channels.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <PosterButton href="/contact">
                Book a Strategy Call
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Send a Brief
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
