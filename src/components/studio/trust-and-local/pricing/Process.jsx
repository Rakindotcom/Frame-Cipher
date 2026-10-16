'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Send Brief and Deadline",
    "desc": "We collect the format, references, publishing destination and hard date over WhatsApp or the form."
  },
  {
    "num": "02",
    "title": "Scoping Questions",
    "desc": "We confirm crew, hours, locations, deliverables and approval structure the same day."
  },
  {
    "num": "03",
    "title": "Itemised Quote in 48 Hours",
    "desc": "You receive studio hours, crew roles, equipment and post lines itemised with the timeline."
  },
  {
    "num": "04",
    "title": "Advance Locks Dates",
    "desc": "A 50% advance confirms the calendar with a VAT-compliant invoice for your accounts."
  },
  {
    "num": "05",
    "title": "Balance on Sign-Off",
    "desc": "The balance is due only on final delivery approval, with masters and archives released."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="How Quoting and Booking Works"
          index="04"
        >
          From brief to invoice in five steps — so the price you approve is the price you pay.
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
