'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Listing Brief and Access",
    "desc": "We confirm the property, target buyer, access windows, parking and management permissions before anything is scheduled."
  },
  {
    "num": "02",
    "title": "Staging and Light Planning",
    "desc": "You get a staging checklist and we schedule around the property orientation for the most flattering natural light."
  },
  {
    "num": "03",
    "title": "On-Site Shoot",
    "desc": "Gimbal walkthroughs, balanced interiors, detail callouts and drone aerials are captured in a single efficient visit."
  },
  {
    "num": "04",
    "title": "Edit, Grade and Review",
    "desc": "Editors assemble the tour, grade in DaVinci Resolve and cut vertical reels against your structured review notes."
  },
  {
    "num": "05",
    "title": "Listing-Ready Delivery",
    "desc": "You receive the tour, reels and stills by cloud drive in 3 to 4 business days, archived for 60 days."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Property Videography Process"
          index="04"
        >
          Staged before the shoot and listing-ready days later — one team owns the tour.
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
