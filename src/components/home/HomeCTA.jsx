import Link from 'next/link'

function PosterButton({ href, children, variant = 'accent' }) {
  const classes =
    variant === 'accent'
      ? 'border-frame-accent bg-frame-accent text-frame-accent-fg hover:bg-transparent hover:text-frame-fg'
      : 'border-frame-border bg-transparent text-frame-fg hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg'

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-3 border-2 px-8 py-4 text-sm font-black uppercase tracking-tighter transition-all duration-200 active:scale-95 md:min-h-18 md:px-12 md:text-base ${classes}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  )
}

export default function HomeCTA() {
  return (
    <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="relative border-2 border-frame-border bg-frame-bg p-7 sm:p-10 md:p-14">
          {/* Corner accents */}
          <span className="absolute -left-1 -top-1 h-2 w-2 bg-frame-accent" aria-hidden="true" />
          <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-frame-accent" aria-hidden="true" />

          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Next move / Strategy
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,8vw,8.5rem)] font-bold uppercase leading-[0.82] tracking-tighter text-frame-fg">
            Bring us the brief.
            <br />
            We will bring the system.
          </h2>

          <div className="mt-8 grid gap-8 border-t-2 border-frame-border/80 pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <p className="max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg sm:text-lg md:text-2xl">
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
