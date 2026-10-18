'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How do I book a session at FrameCipher Studio?",
    "answer": "Send your date, format and deadline by WhatsApp to +880 1768-146650 or use the form below. Scoping questions arrive the same day, an itemised quote follows within 48 hours, and a 50% advance locks the dates."
  },
  {
    "question": "Do you charge for quotes, consultations or walkthroughs?",
    "answer": "No. Answers, itemised quotes and studio walkthroughs with test recordings are all free. You only pay when cameras roll — sessions from ৳2,000/hour with the balance due on final sign-off."
  },
  {
    "question": "Can I reschedule if my team is delayed?",
    "answer": "Yes. Sessions reschedule free of charge to any available slot with at least 48 hours notice — no penalties, no lost advance."
  },
  {
    "question": "What power backup runs during load-shedding?",
    "answer": "Conditioned power with building generator plus IPS backup keeps lights, cameras and tethering running through every outage and protects your files from data loss."
  },
  {
    "question": "How do I reach the studio, and where do we park?",
    "answer": "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — off the Mirpur DOHS–Banani access road with dedicated parking beside the building and elevator to the stage."
  },
  {
    "question": "What kit and room specs can we verify on a visit?",
    "answer": "Acoustic isolation, the overhead softbox grid, 4K cinema cameras, broadcast microphones, seamless backdrops, green screen, monitoring and power backup — with test recordings on your own media."
  },
  {
    "question": "How long does delivery take, and what revisions are included?",
    "answer": "Standard delivery runs 5 to 10 working days with 2 structured revision rounds through a timestamped cloud link. Raw captures arrive within 24 hours and express 48-hour delivery adds 30%."
  },
  {
    "question": "What formats and archives do we receive?",
    "answer": "Finished masters with vertical cutdowns and subtitle files by cloud drive, plus a 60-day archive with free re-exports to new aspect ratios."
  },
  {
    "question": "What payment methods and invoices do you provide?",
    "answer": "Bank transfers, account payee cheques, bKash Merchant, Nagad and cash — every payment with a formal VAT-compliant invoice for corporate accounting."
  },
  {
    "question": "Can we bring catering, and is Wi-Fi provided?",
    "answer": "Yes. Refreshments are welcome in the client lounge, and complimentary mineral water, tea and high-speed Wi-Fi come with every booked session."
  },
  {
    "question": "What are your operating hours?",
    "answer": "Open 24 hours — all sessions run by advance reservation, including overnight edits, early call times and international client time zones."
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
          Booking, kit, access, reviews and delivery — everything about working with FrameCipher Studio.
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
