'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does wedding videography cost in Dhaka?",
    "answer": "At FrameCipher Studio, single-event cinema is ৳32,000, a two-event narrative with couple session is ৳68,000, and signature 3–4 event celebrations are ৳1,45,000. Drone adds ৳25,000 and 4K delivery ৳15,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "How far in advance should we book our dates?",
    "answer": "Book 1 to 3 months ahead, especially for November–February peak weekends. Off-season and weekday dates often confirm faster — message us the moment your venues firm up."
  },
  {
    "question": "What is the difference between cinematic films and traditional coverage?",
    "answer": "Traditional coverage is a static continuous stage recording. Our cinematic films use narrative structure, candid observation, licensed scoring and feature-grade colour to compress hours of celebration into a story the family replays."
  },
  {
    "question": "When do we receive the teaser and the full film?",
    "answer": "The 60-second teaser arrives within 7 days of the event. Highlight and ceremony films premiere in 3 to 4 weeks through a private family screening link before any public release."
  },
  {
    "question": "Do you travel for destination weddings?",
    "answer": "Yes — Sylhet, Chattogram, Cox’s Bazar and international assignments, with travel quoted transparently and the same creative team across all functions for narrative consistency."
  },
  {
    "question": "Can you fly a drone at our venue?",
    "answer": "Where the venue and permissions allow, drone aerials of the venue and baraat are included on signature tiers or added for ৳25,000. We liaise the permission in advance."
  },
  {
    "question": "Will the crew direct us and our family?",
    "answer": "Candid first, guided only for portraits. Our contractual discretion keeps filming unobtrusive — natural interactions, never forced performances — with direction limited to couple sessions and group portraits."
  },
  {
    "question": "How many revisions are included?",
    "answer": "Structured revision rounds are included in every tier and reviewed through timestamped links. Two-event and signature tiers add a priority edit lane so feedback converges before the premiere."
  },
  {
    "question": "Do we get the raw footage?",
    "answer": "Yes. Raw captures are available within 24 hours on request, and full ceremony documentary edits are standard deliverables on every tier."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your dates, venues and functions by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance secures your dates, the balance is due on final delivery, and every payment gets a VAT-compliant invoice."
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
          Costs, dates, timelines and booking — everything about wedding films at FrameCipher Studio.
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
