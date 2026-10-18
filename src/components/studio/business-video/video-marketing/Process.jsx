'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Funnel & Audience Mapping",
    "desc": "We clarify the funnel stages, search queries, buyer objections and placements each video must serve."
  },
  {
    "num": "02",
    "title": "Scripts, Hooks & Shot Plan",
    "desc": "We write conversion-focused scripts with hook alternatives, and lock the batch shoot schedule and deliverable specs."
  },
  {
    "num": "03",
    "title": "Batch Studio Capture",
    "desc": "We record funnel sets at the ECB Chattar studio with calibrated lighting, live audio monitoring and 4K cameras."
  },
  {
    "num": "04",
    "title": "Edit, Package & Client Review",
    "desc": "Editors assemble the assets, grade in DaVinci Resolve, build YouTube packaging and apply your structured revision notes."
  },
  {
    "num": "05",
    "title": "Distribution & Scaling Handoff",
    "desc": "You receive the asset library, distribution map and scaling playbook by cloud drive, ready for your media team."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Video Marketing Process"
          index="04"
        >
          One team owns the outcome from roadmap to handoff — so filming and packaging both serve the funnel.
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
