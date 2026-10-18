'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does equipped stage hire cost in Dhaka?",
    "answer": "At FrameCipher Studio, room-only access is ৳2,000/hour and operated sessions are ৳2,500/hour, both with a 2-hour minimum. Half-day caps are ৳12,000, full-day caps ৳22,000, and a crewed production day is ৳38,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "What is the ceiling height and floor capacity?",
    "answer": "The stage comfortably holds 4 to 6 on-camera participants with optimal camera-to-subject distances, high ceilings and an overhead lighting grid that keeps the floor free of stands."
  },
  {
    "question": "What cameras, lenses and audio kit are available in-house?",
    "answer": "Full-frame 4K cinema cameras, prime and zoom lenses, gimbals, teleprompters, broadcast microphones with discrete monitoring, and live client viewing screens."
  },
  {
    "question": "What lighting and acoustic treatment is installed?",
    "answer": "High-CRI continuous LED softboxes, RGB accent tubes, hair rims, seamless backdrops and acoustic wall panels that dampen echo and exterior street noise."
  },
  {
    "question": "Can we visit and test the stage before booking?",
    "answer": "Yes. Walkthroughs run same-day or next-day by appointment — clap-test the acoustics, inspect the grid and power, and record test clips on your own media, free of charge."
  },
  {
    "question": "Is there a dressing room, makeup mirror and client lounge?",
    "answer": "Yes. The 6th-floor facility has a client lounge with viewing monitors, high-speed Wi-Fi, a private changing room and an illuminated makeup vanity mirror."
  },
  {
    "question": "What power backup runs during load-shedding?",
    "answer": "Conditioned power with building generator plus IPS backup keeps lights, cameras and tethering running and protects files through every outage."
  },
  {
    "question": "What pushes hire from ৳2,000/hour toward a crewed day?",
    "answer": "Operated cameras and crew instead of room-only, longer hours, green-screen and styling configuration, specialist operators, and after-hours scheduling."
  },
  {
    "question": "Where is the studio and where do crews park?",
    "answer": "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — with dedicated parking beside the building and elevator access to the stage."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your date, hours and kit needs by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Kit, room, power and booking — everything about our facilities at FrameCipher Studio.
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
