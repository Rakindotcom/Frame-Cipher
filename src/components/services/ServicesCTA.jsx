import PosterButton from '../home/PosterButton'

export default function ServicesCTA() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl sm:p-10 md:p-16">
          {/* Atmospheric background glow */}
          <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-purple-600/15 blur-[100px]" />
          <div className="pointer-events-none absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
              You don&apos;t need every service.{' '}
              <br className="hidden sm:inline" />
              <span className="text-white">
                You need the right system.
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
              Tell us what is blocking growth. We will help decide whether your next move is strategy, content,
              software, campaigns, or the full operating loop.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <PosterButton href="/contact">
                Start a Project
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Talk to Us
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
