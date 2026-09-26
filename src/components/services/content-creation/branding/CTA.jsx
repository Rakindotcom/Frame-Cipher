import { PosterButton } from '../../../Kinetic'

const trustPillars = [
  {
    num: '01',
    title: 'Visual & Verbal Unity',
    desc: 'Coordinating graphic design and copywriting voice under one unified in-house team.'
  },
  {
    num: '02',
    title: 'Operational Governance',
    desc: 'A comprehensive brand manual that eliminates daily guesswork and protects consistency.'
  },
  {
    num: '03',
    title: 'Commercial Longevity',
    desc: 'Strategic positioning designed to outlast passing visual fads and scale gracefully.'
  }
]

export default function CTA({ service }) {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="border-2 border-frame-border bg-frame-muted/20 p-8 md:p-14 lg:p-20">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
              Architectural Clarity
            </span>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
              Start Your Branding Project
            </h2>
            <p className="mt-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
              Your brand should give your business a clear direction for how it looks, how it sounds, and how it stays consistent as it grows.
            </p>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
              Whether you need a new brand identity, a system around an existing logo, or a strategic rebrand, we can scope the work around what your business actually needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <PosterButton href="/contact">
                Get Free Consultation &rarr;
              </PosterButton>
              <PosterButton href="/projects#branding" variant="outline">
                View Branding Portfolio &rarr;
              </PosterButton>
            </div>
          </div>

          <div className="mt-14 grid gap-6 border-t-2 border-frame-border/60 pt-10 sm:grid-cols-3">
            {trustPillars.map((item, idx) => (
              <div key={idx}>
                <span className="font-mono text-xs font-black text-frame-accent">
                  ANCHOR 0{idx + 1}
                </span>
                <h4 className="mt-2 font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
