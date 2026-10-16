'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Hooks & Script Review",
    "desc": "We clarify the platforms, clip count, hooks and scripts, and confirm the posting calendar the batch must fill."
  },
  {
    "num": "02",
    "title": "Batch Plan & Styling Scope",
    "desc": "We lock the recording order, backdrop and styling changes, b-roll inserts and caption languages."
  },
  {
    "num": "03",
    "title": "Batch Studio Recording",
    "desc": "We record 10 to 20 scripted verticals at the ECB Chattar studio with a vertical-composed 4K rig and live monitoring."
  },
  {
    "num": "04",
    "title": "Captions, Covers & Client Review",
    "desc": "Editors cut every clip, build kinetic captions and cover frames, and apply your structured revision notes."
  },
  {
    "num": "05",
    "title": "Posting-Ready Delivery",
    "desc": "You receive platform-ready MP4s with SRT files and a posting order by cloud drive, with a 60-day archive."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Social Video Process"
          index="04"
        >
          One team owns the outcome from hook review to posting calendar — so recording and editing both serve retention.
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
