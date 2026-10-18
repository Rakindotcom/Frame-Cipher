'use client'

import { SectionIntro } from '../../../Kinetic'

const processPhases = [
  {
    "num": "01",
    "title": "Find Your Answer Below",
    "desc": "Browse the 11 detailed answers covering booking, kit, access, reviews and delivery."
  },
  {
    "num": "02",
    "title": "Ask Anything Unanswered",
    "desc": "Message WhatsApp at +880 1768-146650 and get a same-day reply from the production team."
  },
  {
    "num": "03",
    "title": "Get a Written Quote",
    "desc": "Answers convert into an itemised quote within 48 hours of a completed brief."
  },
  {
    "num": "04",
    "title": "Verify With a Visit",
    "desc": "Walk through the ECB Chattar stage free by appointment with test recordings."
  },
  {
    "num": "05",
    "title": "Book With Certainty",
    "desc": "A 50% advance locks the dates and production runs on everything answered above."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Workflow & Delivery"
          title="How to Get Answers and Book"
          index="04"
        >
          From question to locked booking in five steps — so answers turn into action.
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
