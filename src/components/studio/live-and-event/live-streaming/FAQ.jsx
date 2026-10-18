'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does live streaming cost in Dhaka?",
    "answer": "At FrameCipher Studio, a single-camera stream with pro audio and graphics is ৳18,000 for up to 2 hours. A three-camera switched broadcast with simulcast is ৳45,000, and full-day summit command is ৳95,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "How do you prevent internet drops during the stream?",
    "answer": "We bond dedicated fibre with multi-SIM cellular backup hardware and test failover before air, so one line failure never stops the broadcast. Venue Wi-Fi is never trusted as the primary line."
  },
  {
    "question": "Which platforms can you stream to at the same time?",
    "answer": "YouTube Live, Facebook Live, LinkedIn Live and private portals such as Zoom, Webex or Teams, at 1080p60. Multi-cam tiers include three-platform simulcast as standard."
  },
  {
    "question": "Is it better to stream from your studio or our venue?",
    "answer": "The studio suits webinars, talks and launches with controlled sound, bonded fibre and backup power already in place. Venue streaming suits conferences and events where the gathering is the content — we recce the hall and coordinate with the AV desk beforehand."
  },
  {
    "question": "What audio setup do you bring?",
    "answer": "Wireless lapels for speakers, audience mics, and a direct XLR feed from the venue soundboard, all mixed live by an engineer. Audio is monitored continuously because viewers leave over bad sound first."
  },
  {
    "question": "Can you add graphics, slides and remote guests?",
    "answer": "Yes. Lower thirds, logo bugs, countdowns, polls, PowerPoint slides and remote Zoom or Meet callers are integrated live, and rehearsed during the tech check."
  },
  {
    "question": "Do we get a recording and a highlight video?",
    "answer": "Yes. Every stream includes a full master recording available within 24 hours. Multi-cam tiers add an edited highlight recap within 72 hours, and summit days include a same-day teaser."
  },
  {
    "question": "How far ahead should we book a stream date?",
    "answer": "One to two weeks is ideal so the tech check and rehearsal can be scheduled properly. Summit and peak-season dates book earlier; urgent dates are quoted with an express crew lane where possible."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your date, venue and programme rundown by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the date, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, redundancy, platforms and booking — everything about live streaming at FrameCipher Studio.
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
