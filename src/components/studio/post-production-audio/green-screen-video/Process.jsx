'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Concept & Background Brief",
    "desc": "You share the script and the worlds behind the presenter: virtual sets, slides or 3D environments. We confirm set design and compositing scope."
  },
  {
    "num": "02",
    "title": "Wardrobe & Lighting Check",
    "desc": "We screen wardrobe against spill risks, block presenter positions at correct wall distance, and balance the grid for zero-hot-spot green."
  },
  {
    "num": "03",
    "title": "In-Studio Keying Shoot",
    "desc": "We shoot on the chroma wall with live hardware key preview on monitors, teleprompter support and clean broadcast audio."
  },
  {
    "num": "04",
    "title": "Composite & Client Review",
    "desc": "Our artists key with spill suppression, track virtual sets, match lighting and colour, then take your timestamped review notes."
  },
  {
    "num": "05",
    "title": "Masters & Delivery",
    "desc": "You receive raw keyable footage, transparent ProRes files and finished composites in multi-ratio masters, archived for 60 days."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Green Screen Process"
          index="04"
        >
          From background brief to virtual-set master — one team owns lighting, shoot and key so edges stay crisp.
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
