'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does studio rental cost in Dhaka?",
    "answer": "At FrameCipher Studio, room-only hire with your own gear is ৳2,000/hour and operated sessions with our camera and operator are ৳2,500/hour, both with a 2-hour minimum. Half-day exclusive blocks are ৳12,000 and full-day lockouts are ৳22,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "What is included in the room-only hire fee?",
    "answer": "Private stage access, the overhead softbox grid, your choice of pre-rigged backdrop, generator plus IPS power backup, fibre Wi-Fi, makeup vanity, changing area, client lounge, parking access and an on-site assistant."
  },
  {
    "question": "What pushes a booking from ৳2,000/hour toward a full-day lockout?",
    "answer": "Operated camera and crew instead of room-only, more hours, backdrop and green-screen changes, teleprompter and monitoring needs, streaming encoder use and overtime past wrap."
  },
  {
    "question": "Can we bring our own cameras, lighting and crew?",
    "answer": "Yes. Room-only hire is built for outside crews — bring cameras, audio and fixtures, and we provide the isolated stage, grid positions, power distribution and assistant support."
  },
  {
    "question": "Does rental include an on-site technician?",
    "answer": "Yes. A studio assistant is on-site for every booking to position the grid, change backdrops, manage power outlets and keep the facilities running."
  },
  {
    "question": "Do you offer green screen and live streaming setups?",
    "answer": "Yes. The green screen configuration comes with an even wash for clean keys, and the stage has encoder access with fibre internet for live or simulive broadcasts to YouTube and Facebook."
  },
  {
    "question": "Where can our crew park at ECB Chattar?",
    "answer": "Dedicated vehicle parking is available beside Eurasia Building near Khan Polli Jame Masjid, with elevator access directly to the 6th-floor stage."
  },
  {
    "question": "Can we visit the stage before booking?",
    "answer": "Yes. Message us on WhatsApp at +880 1768-146650 to schedule a walkthrough — clap-test the acoustics, inspect the grid and power, and confirm the backdrop before you commit."
  },
  {
    "question": "How do half-day and full-day blocks compare to hourly billing?",
    "answer": "Four or more hours usually favour the ৳12,000 half-day block, and full shoot days favour the ৳22,000 lockout. We price both against your hour count so you can compare in writing."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your date, hours and backdrop by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, blocks, support and booking — everything about stage hire at FrameCipher Studio.
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
