'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react'

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
    a: 'Camera bodies, lenses, microphones, audio interfaces, lights and monitors are listed with photos on our equipment and facilities page; every quote also states exactly which kit your session includes.',
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
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <section id="faq" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      {/* Schema.org FAQPage Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
            Studio booking{' '}
            <span className="text-white">questions.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Costs, inclusions, turnaround times, and booking logistics: everything about recording at FrameCipher Studio in Dhaka.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer touch-manipulation select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214] rounded-xl"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white pr-4">
                    {item.q}
                  </h3>
                  <span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] p-2 text-zinc-400">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-frame-accent" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.08] px-6 pb-6 pt-4">
                    <p className="text-base font-normal leading-relaxed text-zinc-300">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
