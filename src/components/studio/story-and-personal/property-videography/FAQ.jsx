'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does property videography cost in Dhaka?",
    "answer": "At FrameCipher Studio, an apartment walkthrough with vertical reels is ৳28,000 per property. A luxury villa film with host and drone is ৳65,000, and commercial tower showcases start from ৳1,30,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "Can our agent present the property on camera?",
    "answer": "Yes. We mic your agent or developer representative with broadcast wireless audio, direct their delivery on camera, and provide a portable teleprompter on request."
  },
  {
    "question": "Do you fly drones over the property?",
    "answer": "Yes, with licensed operators where permissions allow — a standalone aerial slot is ৳25,000 and we liaise the permission. Restricted zones use elevated gimbal and rooftop coverage instead."
  },
  {
    "question": "How should we prepare the property before the shoot?",
    "answer": "Deep-clean, switch on all interior lights, remove personal clutter, draw curtains to shape natural window light, and arrange staging furniture before the crew arrives. You receive our staging checklist at booking."
  },
  {
    "question": "How fast do we get the video for our listing?",
    "answer": "Tours and reels deliver in 3 to 4 business days after the shoot. An urgent 48-hour listing lane is available at +25% for live portals and campaign launches."
  },
  {
    "question": "Do we get vertical reels and stills as well?",
    "answer": "Yes. Every tier includes 9:16 vertical reels for Facebook and Instagram ads plus architectural still captures graded to match the film."
  },
  {
    "question": "What suits a developer tower or commercial project?",
    "answer": "The Commercial Tower tier: multi-day coverage of units, amenities and surroundings with scripted narrative, testimonials, day-dusk-night exteriors, sales-gallery loops and a stills library for brochures."
  },
  {
    "question": "Which areas of Dhaka do you cover?",
    "answer": "All of Dhaka — Gulshan, Banani, Uttara, Mirpur DOHS, Bashundhara and beyond — plus projects outside the city quoted with travel days. Parking, access and management permissions are confirmed beforehand."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your property address, listing date and goal by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the shoot date, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, staging, drones and booking — everything about property videography at FrameCipher Studio.
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
