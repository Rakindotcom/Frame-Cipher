'use client'

import Link from 'next/link'
import { SectionIntro } from '../Kinetic'

const faqs = [
  {
    q: 'How much does it cost to rent a podcast studio in Dhaka?',
    a: 'Studio hire at FrameCipher Studio starts from ৳2,000 per hour for the room only. A session with a sound engineer and camera operator starts from ৳8,000 per session. Podcast production with 4K video is ৳18,000 and full production is ৳35,000 on the rate card.',
  },
  {
    q: 'Does studio hire include a camera operator or editing?',
    a: 'No. The Studio Session package is the space only. A camera operator and sound engineer come with the Studio + Crew package, and editing is part of Full Production or can be added as a separate scope.',
  },
  {
    q: 'Can I bring my own crew and equipment?',
    a: 'Yes. Studio Session is designed for production houses, agencies and videographers with their own gear. You get the room, lighting grid, backdrops, internet and power backup.',
  },
  {
    q: 'What equipment do you use?',
    a: 'Camera bodies, lenses, microphones, audio interfaces, lights and monitors are listed with photos on our equipment and facilities page — every quote also states exactly which kit your session includes.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard projects are delivered in 5 to 10 working days. Priority delivery in 48 to 72 hours adds 30%. Raw 4K footage and mastered audio from a Studio + Crew session are handed over within 24 hours.',
  },
  {
    q: 'How many revision rounds are included?',
    a: 'Full Production includes 2 revision rounds and a 60-day archive of your files. Other scopes state their revision policy in the written quote.',
  },
  {
    q: 'Do you add Bangla subtitles?',
    a: 'Yes. We produce English and Bangla subtitles, plus kinetic lower thirds and titles.',
  },
  {
    q: 'Do you shoot product photos for Daraz and Shopify?',
    a: 'Yes. We shoot white-background catalogue images from ৳1,500 per product, and we deliver platform-compliant assets for Daraz, Shopify and websites.',
  },
  {
    q: 'How do I book the studio and how does payment work?',
    a: 'Send your date, setup and goal on WhatsApp to +880 1768-146650, or use the booking form. You receive an itemised quote within 48 hours. A 50% advance locks the dates, and the balance is due on final sign-off. All payments get VAT-compliant invoices.',
  },
  {
    q: 'Is the studio protected against power cuts?',
    a: 'Yes. The studio has IPS and generator power backup.',
  },
  {
    q: 'Where exactly is the studio?',
    a: 'We are on the 6th floor of Eurasia Building, beside Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206. There is an elevator and nearby parking.',
  },
]

export default function StudioFaq() {
  return (
    <section id="faq" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="Questions, answered" title="Frequently asked questions." index="10" align="center">
          Costs, inclusions, delivery and booking — everything about recording at FrameCipher Studio in Dhaka.
        </SectionIntro>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <details key={idx} className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent">
              <summary className="flex cursor-pointer list-none select-none items-center justify-between p-6 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg transition-colors marker:content-none hover:text-frame-accent md:p-8 md:text-xl">
                <span className="pr-4">{item.q}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border font-bold text-frame-accent transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 text-sm font-medium leading-relaxed text-frame-muted-fg md:p-8 md:text-base">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
