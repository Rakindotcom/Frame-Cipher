'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Offer & Placement Brief",
    "desc": "We clarify the offer, the audience, the placements and the cutdown set: TV, YouTube, Meta, TikTok and the durations each needs."
  },
  {
    "num": "02",
    "title": "Concept, Script & Storyboard",
    "desc": "We build hook-first scripts with opening alternatives, lock the storyboard, and scope casting, styling and art direction."
  },
  {
    "num": "03",
    "title": "Studio Production & Capture",
    "desc": "We shoot at the ECB Chattar studio with commercial lighting design, tabletop staging and 4K cameras, monitored live."
  },
  {
    "num": "04",
    "title": "Edit, Grade & Client Review",
    "desc": "Editors assemble the hero and cutdowns, grade in DaVinci Resolve, finish broadcast-compliant audio and apply your structured revision notes."
  },
  {
    "num": "05",
    "title": "Masters & Placement Delivery",
    "desc": "You receive the broadcast master, digital cutdowns, verticals and voiceover versions by cloud drive, ready for traffic."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Commercial Video Process"
          index="04"
        >
          One team owns the outcome from concept to broadcast file — so filming and finishing both serve the placements.
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
