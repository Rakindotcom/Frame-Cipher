'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does event videography cost in Dhaka?",
    "answer": "At FrameCipher Studio, half-day single-crew coverage is ৳25,000, full-day two-camera coverage with an aftermovie is ৳48,000, and multi-day summit coverage starts from ৳1,25,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "How fast do we get the highlight video after the event?",
    "answer": "A 60-second social teaser delivers within 24 hours of event close on full-day tiers — standard, not a surcharge. The full cinematic aftermovie follows in 5 to 10 working days."
  },
  {
    "question": "Do you cover multi-day conferences outside Dhaka?",
    "answer": "Yes. Travel-ready crews cover expos, retreats and summits in Chattogram, Sylhet and Cox’s Bazar, with travel days itemised in the written quote."
  },
  {
    "question": "How do you record clean speech in noisy halls?",
    "answer": "We take a direct balanced XLR feed from the venue soundboard for master speech, backed by wireless lavaliers on VIPs and shotgun mics for ambience — agreed with the AV desk during the recce."
  },
  {
    "question": "Do we get full session recordings as well as highlights?",
    "answer": "Yes. Every tier includes full-length recordings of keynotes and panels alongside the teaser and aftermovie, available within 24 hours of wrap."
  },
  {
    "question": "Can you fly a drone at our venue?",
    "answer": "Where the venue and permissions allow, a licensed drone slot is ৳25,000 and we liaise the permission. Indoor halls and restricted zones use gimbal coverage instead."
  },
  {
    "question": "What is the same-day edit option?",
    "answer": "An evening-delivery cut for closing ceremonies and press deadlines, at +30%. It is scoped in the coverage plan so an editor is reserved for your night shift."
  },
  {
    "question": "How far ahead should we book event dates?",
    "answer": "Two to four weeks is ideal for venue recce and AV coordination. Peak conference season and multi-day summits book earlier; tell us the agenda as soon as it firms up."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your date, venue and agenda by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the crew, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, teasers, travel and booking — everything about event videography at FrameCipher Studio.
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
              <div className="border-t-2 border-frame-border p-6 md:p-8 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
