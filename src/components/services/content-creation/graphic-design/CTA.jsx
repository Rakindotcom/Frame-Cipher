import { PosterButton } from '../../../Kinetic'

const trustPillars = [
  {
    num: '01',
    title: 'Brand Consistency',
    desc: 'Unifying typography, colors, and layout rules across every touchpoint.'
  },
  {
    num: '02',
    title: 'Production Precision',
    desc: 'Error-free print press bleeds, dielines, and pixel-crisp digital exports.'
  },
  {
    num: '03',
    title: 'Transparent Timelines',
    desc: 'Clearly scoped milestones, included revision rounds, and realistic delivery dates.'
  }
]

export default function CTA({ service }) {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="border-2 border-frame-border bg-frame-muted/20 p-8 md:p-14 lg:p-20">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
              Ready to Build
            </span>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
              Start Your Graphic Design Project
            </h2>
            <p className="mt-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
              Whether you need a single brochure, a professional pitch deck, company profile, product packaging, campaign creative, or ongoing design support, we can help define the right scope.
            </p>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
              Share your requirements, existing brand materials, approved content, required formats, and preferred timeline. We will review the project and recommend the appropriate design approach, deliverables, timeline, and pricing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <PosterButton href="/contact">
                Start Your Design Project &rarr;
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Get a Free Consultation &rarr;
              </PosterButton>
            </div>
          </div>

          <div className="mt-14 grid gap-6 border-t-2 border-frame-border/60 pt-10 sm:grid-cols-3">
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
