import PosterButton from '../home/PosterButton'

export default function CaseStudiesCTA() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10 md:p-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
              Want a growth system{' '}
              <br className="hidden sm:inline" />
              <span className="italic text-frame-accent">
                built around measurable outcomes?
              </span>
            </h2>
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

