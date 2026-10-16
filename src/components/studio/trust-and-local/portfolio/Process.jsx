'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Tell Us Your Reference",
    "desc": "Send your industry, format and deadline over WhatsApp and we match full films, not trailers."
  },
  {
    "num": "02",
    "title": "Receive Band-Tagged Cases",
    "desc": "We share curated cases with budget bands, crew sheets and grading comparisons attached."
  },
  {
    "num": "03",
    "title": "Verify at the Studio",
    "desc": "Walk through the ECB Chattar stage to confirm the lighting, acoustics and monitoring behind the work."
  },
  {
    "num": "04",
    "title": "Scope Your Replication",
    "desc": "We convert the reference into your written scope with milestones, crew and deliverables itemised."
  },
  {
    "num": "05",
    "title": "Book and Produce",
    "desc": "A 50% advance locks the dates and the same in-house pipeline produces your project."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="How to Use Our Portfolio to Book"
          index="04"
        >
          From reference to replication in five steps — so the work you see becomes the scope you sign.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-5">
          {processPhases.map((phase) => (
            <div
              key={phase.num}
              className="relative overflow-hidden bg-frame-bg p-7 flex flex-col justify-between"
            >
              <span
                className="pointer-events-none absolute -right-2 -bottom-6 font-heading text-[6rem] md:text-[7rem] font-bold leading-none tracking-tighter text-frame-muted/25 select-none"
                aria-hidden="true"
              >
                {phase.num}
              </span>

              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Phase {phase.num}
                </span>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {phase.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {phase.desc}
                </p>
              </div>

              <div className="relative z-10 mt-6 border-t border-frame-border/60 pt-4">
                <span className="text-[11px] font-mono text-frame-accent uppercase font-bold">
                  Stage Verified &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
