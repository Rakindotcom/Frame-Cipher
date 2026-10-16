'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Enquiry & Availability Check",
    "desc": "We confirm the date, hours, crew size, backdrop and whether you need room-only or operated support."
  },
  {
    "num": "02",
    "title": "Booking Brief & Confirmation",
    "desc": "We lock the brief in writing with hours, rates, power needs and access instructions."
  },
  {
    "num": "03",
    "title": "Pre-Rig & Testing",
    "desc": "We rig the backdrop, test the grid, audio and internet before your call time at ECB Chattar."
  },
  {
    "num": "04",
    "title": "Shoot-Day Support",
    "desc": "An on-site assistant helps with lighting positions, backdrop changes, power and facilities throughout."
  },
  {
    "num": "05",
    "title": "Wrap & Handover",
    "desc": "We restore the stage, hand over any operated-session media and confirm overtime in writing."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="Our 5-Stage Studio Rental Process"
          index="04"
        >
          One facilities team owns the booking from enquiry to wrap — so the stage is shoot-ready on arrival.
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
