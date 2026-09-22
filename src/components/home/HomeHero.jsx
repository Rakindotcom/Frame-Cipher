import Link from 'next/link'

function PosterButton({ href, children, variant = 'accent' }) {
  const classes =
    variant === 'accent'
      ? 'border-frame-accent bg-frame-accent text-frame-accent-fg hover:bg-transparent hover:text-frame-fg'
      : 'border-frame-border bg-transparent text-frame-fg hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg'

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-3 border-2 px-7 py-4 text-sm font-black uppercase tracking-tighter transition-all duration-200 active:scale-95 md:min-h-18 md:px-10 md:text-base ${classes}`}
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

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b-2 border-frame-border px-4 pb-14 pt-28 sm:px-6 sm:pt-36 md:px-8 md:pb-20 md:pt-36 lg:pt-40">
      {/* Ambient subtle accent glow behind 360 */}
      <div
        className="pointer-events-none absolute -right-10 top-10 -z-10 h-72 w-72 rounded-full bg-frame-accent/10 blur-[100px] md:h-[500px] md:w-[500px] md:blur-[140px]"
        aria-hidden="true"
      />

      {/* Background 360 Watermark */}
      <div
        className="pointer-events-none absolute right-0 top-4 -z-10 select-none font-heading text-[48vw] font-bold leading-none tracking-tighter text-frame-muted opacity-25 md:-right-6 md:top-8 md:text-[25vw] md:opacity-100"
        aria-hidden="true"
      >
        360
      </div>

      <div className="mx-auto w-full max-w-[90rem]">
        {/* Top Eyebrow & Status Row */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 border-2 border-frame-border bg-frame-bg/90 px-3 py-1 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-frame-fg md:text-xs">
                Accepting Growth Engagements
              </span>
            </div>

            <span className="hidden text-xs text-frame-border md:inline">|</span>

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent md:text-xs">
              Bangladesh / Worldwide
            </p>
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg md:text-xs">
            Brand + Media + Tech + Performance
          </p>
        </div>

        {/* Main H1 Headline */}
        <div className="mb-10 max-w-[95vw] md:mb-14">
          <h1 className="font-heading text-[clamp(2.45rem,7.8vw,7.8rem)] font-bold uppercase leading-[0.84] tracking-tighter text-frame-fg">
            We build the system
            <br />
            <span className="text-frame-accent">that makes</span>
            <br />
            brands move.
          </h1>
        </div>

        {/* Bottom split: details + CTA + Stats */}
        <div className="grid gap-8 border-t-2 border-frame-border pt-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-12 lg:pt-12">
          <div>
            <p className="max-w-2xl text-base font-semibold leading-snug text-frame-muted-fg md:text-2xl">
              Frame Cipher brings brand positioning, commercial video, high-converting websites,
              paid media, and automation into one disciplined growth machine. No fragmented agencies.
              One accountable partner.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <PosterButton href="/contact">Book a strategy call</PosterButton>
              <PosterButton href="/projects" variant="outline">
                Explore our work
              </PosterButton>
            </div>
          </div>

          {/* Industrial Stats Box */}
          <div className="relative border-2 border-frame-border bg-frame-muted/70 p-6 backdrop-blur-sm md:p-8">
            {/* Brutalist corner notches */}
            <span className="absolute -left-1 -top-1 h-2 w-2 bg-frame-accent" aria-hidden="true" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-frame-accent" aria-hidden="true" />

            <div className="grid grid-cols-2 gap-6 border-b border-frame-border/80 pb-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-frame-accent">
                  01 / Scale
                </p>
                <p className="mt-1 font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-6xl">
                  74+
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-frame-muted-fg">
                  Services Integrated
                </p>
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-frame-accent">
                  02 / Loop
                </p>
                <p className="mt-1 font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-6xl">
                  360°
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-frame-muted-fg">
                  Full Operating System
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.18em] text-frame-muted-fg md:text-xs">
              <span className="flex items-center gap-1.5 text-frame-fg">
                <span className="h-1.5 w-1.5 bg-frame-accent" />
                100% In-House Team
              </span>
              <span>Audit to Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
