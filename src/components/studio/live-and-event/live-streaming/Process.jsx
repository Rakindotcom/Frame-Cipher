'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Stream Brief and Platform Scope",
    "desc": "We confirm the programme rundown, platforms, expected audience and graphics so the broadcast is scoped before gear is booked."
  },
  {
    "num": "02",
    "title": "Tech Check and Rehearsal",
    "desc": "We test venue or studio internet, audio feeds and remote guests, then rehearse speakers, slides and transitions."
  },
  {
    "num": "03",
    "title": "Live Broadcast and Direction",
    "desc": "A director switches cameras live while the audio engineer mixes and the operator monitors stream health and backup lines."
  },
  {
    "num": "04",
    "title": "Recording Backup and Highlight Edit",
    "desc": "The full master is secured on-site and the highlight recap is cut from the switched feed with your revision notes."
  },
  {
    "num": "05",
    "title": "Delivery and On-Demand Masters",
    "desc": "You receive the full recording, highlight recap and upload-ready on-demand files by cloud drive within the agreed window."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Live Streaming Process"
          index="04"
        >
          Tested before air and backed up during — so a venue surprise never becomes an audience problem.
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
