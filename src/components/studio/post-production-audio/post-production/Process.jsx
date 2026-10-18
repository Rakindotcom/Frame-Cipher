'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "File Handoff & Verification",
    "desc": "You send drives or cloud links with the brief. We checksum every file, flag missing clips and confirm resolution, frame rates and audio channels before billing a minute."
  },
  {
    "num": "02",
    "title": "Assembly & Story Structure",
    "desc": "Editors build the narrative spine, remove dead air, sync multi-camera angles and place scratch music so the story reads before any polish."
  },
  {
    "num": "03",
    "title": "Client Review & Revisions",
    "desc": "You review timestamped cloud links and leave frame-accurate notes. Two structured revision rounds keep feedback decisive without scope drift."
  },
  {
    "num": "04",
    "title": "Grade, Mix & Finish",
    "desc": "Locked cuts get shot-matched colour in DaVinci Resolve, restored dialogue, sound design, graphics and Bangla or English subtitles."
  },
  {
    "num": "05",
    "title": "Masters & Delivery",
    "desc": "You receive ProRes and MP4 masters, multi-ratio versions, stems and subtitle files by cloud drive, archived for 60 days."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Post-Production Process"
          index="04"
        >
          From drive handoff to finished masters — one team owns every stage so nothing shot elsewhere gets lost in translation.
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
