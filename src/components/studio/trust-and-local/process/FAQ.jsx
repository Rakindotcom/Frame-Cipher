'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How long does a complete project take from briefing to delivery?",
    "answer": "Standard projects deliver in 5 to 10 working days. Priority lanes compress to 48 to 72 hours at a 30% fee. Retainer clients hold standing capacity with same-week turnaround as routine."
  },
  {
    "question": "What happens during the initial briefing and scoping stage?",
    "answer": "We review your audience, commercial goals, core message, visual references and deliverable specs. Once the scope, shot list and schedule are approved in writing, we lock the shoot date."
  },
  {
    "question": "How many revision rounds are included?",
    "answer": "Two structured revision rounds through a timestamped cloud review link. Consolidated stakeholder notes per round keep the edit moving; unscoped new concepts are quoted separately."
  },
  {
    "question": "What pushes a project into the priority lane?",
    "answer": "Immovable dates: board meetings, launches, news cycles and event coverage. The priority lane pulls standby crew, overlaps shoot and edit, and guarantees raw captures within 24 hours."
  },
  {
    "question": "How do retainer lanes work for always-on brands?",
    "answer": "Standing monthly studio and edit slots with the same crew learning your brand grammar, quarterly planning workshops and 10 to 20% effective savings versus spot booking — with pause-or-cancel flexibility."
  },
  {
    "question": "What file formats and archives do we receive?",
    "answer": "Finished masters with vertical cuts and subtitle files by cloud drive, raw captures within 24 hours, and a 60-day archive with free re-exports to new aspect ratios."
  },
  {
    "question": "What causes delays, and how do you prevent them?",
    "answer": "Skipped briefing and unscoped feedback. We prevent both structurally: no shoot is scheduled without written scope, and no revision starts without consolidated timestamped notes."
  },
  {
    "question": "Where does production happen?",
    "answer": "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — with field production quoted separately for offices, factories and venues."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your date, format and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
          index="07"
        >
          Lanes, timelines, revisions and booking — everything about our process at FrameCipher Studio.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 md:p-8 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none select-none hover:text-frame-accent transition-colors">
                <span className="pr-4">{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45 font-bold">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 md:p-8 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg wide:text-lg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
