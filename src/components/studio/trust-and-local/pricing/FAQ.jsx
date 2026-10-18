'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does studio production cost in Dhaka?",
    "answer": "Hourly hire runs ৳2,000–4,500, sessions start from ৳7,500, signature productions run ৳45,000–1,85,000, and flagship campaigns are scoped from ৳2,60,000 past ৳12,50,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "Why do you quote from scope instead of fixed packages?",
    "answer": "Fixed packages force you to pay for services you do not need or quietly cut crew and editing you do. Scope quoting means you invest only in the personnel, equipment and finishing your asset demands."
  },
  {
    "question": "What is included in every written quote?",
    "answer": "Studio hours, crew roles, equipment lines, post-production deliverables, revision rounds, music licensing, subtitle languages, aspect-ratio versions, archiving, timeline and payment terms."
  },
  {
    "question": "Do you require an advance to confirm bookings?",
    "answer": "Yes. A 50% advance locks your calendar dates with a VAT-compliant invoice, and the balance is due only on final delivery sign-off. Free rescheduling applies with 48-hour notice."
  },
  {
    "question": "What payment methods do you accept?",
    "answer": "Bank transfers, account payee cheques, bKash Merchant, Nagad and cash — every payment with a formal VAT-compliant invoice for corporate accounting."
  },
  {
    "question": "Are retainers available for recurring content?",
    "answer": "Yes. Weekly shows, monthly reels and quarterly campaigns can reserve standing studio and edit capacity at 10 to 20% effective savings versus spot booking, with pause-or-cancel flexibility."
  },
  {
    "question": "What pushes a quote toward the top of a band?",
    "answer": "More shoot days and locations, larger crews, casting, scriptwriting, motion graphics, sound design, more deliverables and ratios, and priority 48-hour delivery at plus 30%."
  },
  {
    "question": "How do your rates compare to other Dhaka studios?",
    "answer": "We sit at the equipped middle of every band — never the cheapest quote, always itemised so you can see what the cheaper quote omitted: crew roles, backup power, revisions, licensing and archiving."
  },
  {
    "question": "Where is the studio located?",
    "answer": "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — with free walkthroughs by appointment before you commit."
  },
  {
    "question": "How do I get a quote?",
    "answer": "Send your brief, references and deadline by WhatsApp to +880 1768-146650 or use the form below. Scoping questions arrive the same day and the itemised quote follows within 48 hours."
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
          Bands, quotes, advances and booking — everything about pricing at FrameCipher Studio.
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
