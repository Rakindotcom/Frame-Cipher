'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does an NGO documentary cost in Bangladesh?",
    "answer": "At FrameCipher Studio, a 10–12 minute impact short is ৳1,85,000 and a 15–25 minute multi-location standard documentary is ৳3,60,000. Feature and series work is scoped from ৳7,80,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "How long does a short impact documentary take?",
    "answer": "A 10–12 minute film typically runs 3 to 5 weeks from research sign-off to graded master. Standard multi-location films run 6 to 10 weeks, plus institutional review rounds."
  },
  {
    "question": "Do you handle field shoots in remote districts?",
    "answer": "Yes. Self-sufficient crews travel with portable cinema cameras, drones, battery banks and weather-sealed audio to riverine, rural and industrial districts across Bangladesh."
  },
  {
    "question": "Do you manage ethical consents and translation?",
    "answer": "Yes. We secure informed consent from every interviewee and provide accurate translation and subtitling in Bangla, regional dialects and English for donor and broadcast audiences."
  },
  {
    "question": "Can you license and restore archival footage?",
    "answer": "Yes. Archival research, licensing and restoration are handled as quoted line items, with rights cleared before the edit locks — essential for heritage and compliance stories."
  },
  {
    "question": "What masters and versions do we receive?",
    "answer": "Festival DCP plus broadcast and web masters, a teaser trailer, social character cutdowns, Bangla and English subtitles and a documented asset register. Additional language versions run ৳25,000–45,000."
  },
  {
    "question": "How do institutional review rounds work?",
    "answer": "We build a stakeholder review structure for programme, communications and country-director rounds, with timestamped links and structured revision notes so feedback converges instead of cycling."
  },
  {
    "question": "Can you deliver for a donor deadline or summit premiere?",
    "answer": "Yes. Rush delivery with overtime and parallel-post premiums is quoted upfront. Tell us the premiere date at the brief stage so the schedule is built backwards from it."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your story outline, locations and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance confirms dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, timelines, field craft and booking — everything about documentary production at FrameCipher Studio.
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
