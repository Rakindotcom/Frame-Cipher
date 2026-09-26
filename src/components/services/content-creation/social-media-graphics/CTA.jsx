import { PosterButton } from '../../../Kinetic'

const trustPillars = [
  {
    num: "01",
    title: "100% Safe-Zone Compliance",
    desc: "Protected margins ensuring zero interface overlays obscure critical message hooks."
  },
  {
    num: "02",
    title: "Bespoke Recomposition",
    desc: "Dedicated aspect-ratio restructuring rather than generic canvas stretching."
  },
  {
    num: "03",
    title: "Transparent Revision Terms",
    desc: "Clearly scoped production sprints, included revision rounds, and reliable turnaround."
  }
]

export default function CTA() {
  return (
    <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="border-2 border-frame-border bg-frame-muted/20 p-8 md:p-14 lg:p-20">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
              Ready to Publish
            </span>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
              Start Your Social Media Graphics Project
            </h2>
            <p className="mt-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
              Tell us which platforms you use, what types of graphics you need, your expected project or monthly volume, and whether you already have an established brand system.
            </p>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-3xl border-l-2 border-frame-accent pl-3">
              We will scope the appropriate design workflow, deliverables, timeline, and pricing around your exact requirements.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <PosterButton href="/contact">
                Get Free Consultation &rarr;
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Request a Custom Quote &rarr;
              </PosterButton>
            </div>
          </div>

          {/* TRUST PILLARS */}
          <div className="mt-14 grid gap-6 border-t border-frame-border/60 pt-10 sm:grid-cols-3">
            {trustPillars.map((item, idx) => (
              <div key={idx}>
                <span className="font-mono text-xs font-black text-frame-accent">
                  FEATURE 0{idx + 1}
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
