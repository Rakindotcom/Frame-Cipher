'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Family Story Consultation",
    "desc": "We learn the milestones, elders and photographs involved, then design questions around real lives."
  },
  {
    "num": "02",
    "title": "Interview and Archive Gathering",
    "desc": "We schedule gentle sessions and collect photographs, VHS tapes and documents for digitisation."
  },
  {
    "num": "03",
    "title": "Gentle Capture Sessions",
    "desc": "Unhurried conversational interviews at home or in-studio, plus milestone event coverage where booked."
  },
  {
    "num": "04",
    "title": "Restoration and Edit",
    "desc": "Photographs are restored, interviews chaptered, and the film graded with a licensed score for family review."
  },
  {
    "num": "05",
    "title": "Heirloom Delivery and Vault",
    "desc": "You receive the USB box set and private cloud archive in 5–10 working days, vaulted for years."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Family Film Process"
          index="04"
        >
          Never rushed and carefully kept — one team carries your memories through every stage.
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
