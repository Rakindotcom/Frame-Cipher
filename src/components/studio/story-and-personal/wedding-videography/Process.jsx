'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Story Meeting and Date Lock",
    "desc": "We learn your functions, venues and must-have moments, then lock dates with a 50% advance."
  },
  {
    "num": "02",
    "title": "Schedule and Ritual Mapping",
    "desc": "We map rituals, lighting windows, portrait slots and key family members across every event."
  },
  {
    "num": "03",
    "title": "Wedding-Day Capture",
    "desc": "Discreet multi-angle coverage of candid emotion, rituals and celebration without directing your family."
  },
  {
    "num": "04",
    "title": "Edit, Score and Grade",
    "desc": "Editors build the narrative, license the score and grade in DaVinci Resolve against your review notes."
  },
  {
    "num": "05",
    "title": "Teaser, Premiere and Archive",
    "desc": "The 60-second teaser ships in 7 days, the heirloom premiere follows in 3–4 weeks, archived for 60 days."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Wedding Film Process"
          index="04"
        >
          Mapped before the dates and premiered for the family — one team owns the story.
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
                <p className="mt-3 text-xs md:text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
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
