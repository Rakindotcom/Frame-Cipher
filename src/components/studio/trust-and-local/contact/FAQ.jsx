'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "What is the studio phone number and fastest contact channel?",
    "answer": "Call or WhatsApp +880 1768-146650 for same-day replies. Email teamframecipher@gmail.com for briefs and vendor documentation. The booking form below routes into the same queue."
  },
  {
    "question": "What are your operating hours?",
    "answer": "Open 24 hours — every session runs by advance reservation, covering overnight edits, early call times and international client time zones."
  },
  {
    "question": "How quickly can we schedule a walkthrough visit?",
    "answer": "Same day or next day by WhatsApp appointment. Test the acoustics, inspect the lighting grid and power backup, meet the director and engineers, and record test clips on your media."
  },
  {
    "question": "Can we send reference reels or storyboards before booking?",
    "answer": "Yes. Share references, moodboards or script outlines over WhatsApp for an immediate technical assessment, budget-band guidance and an itemised quote within 48 hours."
  },
  {
    "question": "What should our first message include?",
    "answer": "The content type, publishing destination, preferred date and hard deadline. Those four lines let us reply with scoping questions the same day instead of a week of back-and-forth."
  },
  {
    "question": "How do quotes, advances and invoices work?",
    "answer": "Itemised written quotes within 48 hours, a 50% advance to lock dates, balance only on final sign-off, and VAT-compliant invoices on every payment — bKash, Nagad, bank, cheque or cash."
  },
  {
    "question": "Can we reschedule after confirming?",
    "answer": "Yes. Rescheduling is free with at least 48 hours notice to any available slot — no penalties and no lost advance."
  },
  {
    "question": "Where is the studio and where do we park?",
    "answer": "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — off the Mirpur DOHS–Banani access road with dedicated parking beside the building and elevator to the stage."
  },
  {
    "question": "How fast is standard delivery once we book?",
    "answer": "Standard projects deliver in 5 to 10 working days with 2 structured revision rounds. Raw captures arrive within 24 hours and express 48-hour delivery adds 30%."
  },
  {
    "question": "Do you work with agencies and corporate procurement?",
    "answer": "Yes. Corporate vendor documentation, formal scopes of work and VAT-compliant invoicing are standard, with white-label and co-production options for agencies."
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
          Channels, visits, quotes and booking — everything about reaching FrameCipher Studio.
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
