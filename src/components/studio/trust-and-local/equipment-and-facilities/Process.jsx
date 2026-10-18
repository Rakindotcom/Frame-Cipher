'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Request a Verification Visit",
    "desc": "Message us with your format and kit needs and we schedule a same-day or next-day walkthrough."
  },
  {
    "num": "02",
    "title": "Inspect Room, Kit and Power",
    "desc": "Clap-test the acoustics, inspect the grid, backdrops, cameras and generator plus IPS backup."
  },
  {
    "num": "03",
    "title": "Record Test Clips",
    "desc": "We record test footage and audio on request so your crew can judge the room before booking."
  },
  {
    "num": "04",
    "title": "Confirm Scope and Hire",
    "desc": "We lock room-only, operated or crewed hire in writing with hours, rates and support itemised."
  },
  {
    "num": "05",
    "title": "Shoot on Verified Kit",
    "desc": "Your session runs on the exact stage and kit you inspected, with an assistant on-site."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="How to Verify and Book Our Facilities"
          index="04"
        >
          From walkthrough to shoot day in five steps — so nothing about the room surprises your crew.
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
