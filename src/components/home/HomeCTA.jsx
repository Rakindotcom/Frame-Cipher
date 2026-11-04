import PosterButton from './PosterButton'

export default function HomeCTA() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.16] sm:p-10 md:p-16 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/60 before:to-transparent">
          {/* Heading beside oversized directional arrow */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
              Bring us the brief.
              <br />
              <span className="italic text-frame-accent">
                We will bring the system.
              </span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none text-white/20 shrink-0 transition-transform duration-300 group-hover:translate-x-3"
            >
              &rarr;
            </span>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Tell us what you are building, selling, launching, or fixing. We will shape the
              strategy, content, technology, and marketing path around it.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <PosterButton href="/contact">Book a strategy call</PosterButton>
              <PosterButton href="/contact" variant="outline">
                Send a brief
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
