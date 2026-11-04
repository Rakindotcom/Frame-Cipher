import Link from 'next/link'
import PosterButton from './PosterButton'

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] px-4 pb-16 pt-28 sm:px-6 sm:pt-36 md:px-8 md:pb-24 md:pt-40 lg:pt-44">
      {/* Linear / Raycast Atmospheric Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)] blur-[90px]"
        aria-hidden="true"
      />
      {/* Precision Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* The 360 mark watermark */}
      <div
        className="pointer-events-none absolute right-0 top-6 -z-10 select-none font-heading text-[48vw] font-medium leading-none text-white/[0.02] md:-right-6 md:top-10 md:text-[24vw]"
        aria-hidden="true"
      >
        360
      </div>

      <div className="mx-auto w-full max-w-7xl">
        {/* Raycast-style Capsule Eyebrow Bar */}
        <div className="mb-8 flex flex-col gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-center sm:justify-between md:mb-12">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-300">
              Dhaka Studio · Built for brands moving worldwide
            </p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 sm:text-right">
            Brand · Content · Tech · Growth
          </p>
        </div>

        {/* Main H1 Headline: Crisp Pure White with Italic Signature Accent */}
        <div className="mb-12 max-w-7xl md:mb-16">
          <h1 className="fc-h-display max-w-6xl font-heading font-medium tracking-tight text-white">
            We build the system that makes brands{' '}
            <span className="italic text-frame-accent">
              move.
            </span>
          </h1>
        </div>

        {/* Bottom split: details + CTA + Stats */}
        <div className="grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-14 lg:pt-14">
          <div>
            <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Frame Cipher brings brand positioning, <Link href="/studio" className="text-white underline decoration-frame-accent/50 underline-offset-4 transition-colors hover:text-frame-accent">commercial video</Link>, <Link href="/services/website-design-development" className="text-white underline decoration-frame-accent/50 underline-offset-4 transition-colors hover:text-frame-accent">high-converting websites</Link>, <Link href="/services/paid-advertising" className="text-white underline decoration-frame-accent/50 underline-offset-4 transition-colors hover:text-frame-accent">paid media</Link>, and automation into one disciplined growth machine. No fragmented agencies. One accountable partner.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/contact">Book a strategy call</PosterButton>
              <PosterButton href="/projects" variant="outline">
                Explore our work
              </PosterButton>
            </div>
          </div>

          {/* Linear-grade Elevated Hardware Stats Card with Illuminated Top Hairline */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121214]/90 p-7 backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.2] hover:bg-[#151518] md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/50 before:to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-2 gap-6 border-b border-white/[0.08] pb-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Scale
                </p>
                <p className="mt-2 font-heading text-4xl font-medium leading-none text-white md:text-6xl tabular-nums tracking-tight">
                  74+
                </p>
                <p className="mt-2 text-xs font-medium text-zinc-400">
                  Services Integrated
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Loop
                </p>
                <p className="mt-2 font-heading text-4xl font-medium leading-none text-white md:text-6xl tabular-nums tracking-tight">
                  360°
                </p>
                <p className="mt-2 text-xs font-medium text-zinc-400">
                  Full Operating System
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 text-xs font-medium text-zinc-400">
              <span className="flex items-center gap-2 text-white">
                <span className="h-2 w-2 rounded-full bg-frame-accent" />
                100% In-House Team
              </span>
              <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-zinc-300">
                Audit to Scale
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
