'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function StudioSubFaq({ service }) {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = service.faqs || [
    {
      q: `How do I book a session for ${service.shortTitle || service.name}?`,
      a: 'Contact FrameCipher Studio via our booking form or WhatsApp with your project scope and preferred shoot date. We confirm requirements and availability before finalizing your session.',
    },
    {
      q: 'Where is your studio located in Dhaka?',
      a: 'Our physical studio is located on the 6th Floor of Eurasia Building, next to Khan Polli Jame Masjid, at Matikata ECB Chattar, Dhaka 1206. Centrally connected to Mirpur DOHS, Banani, and Airport Road.',
    },
    {
      q: 'What is included in the production quote?',
      a: 'Quotes detail reserved hours, technical crew roles, included equipment, specific deliverables, file formats, and revision rounds.',
    },
  ]

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-frame-accent mb-2">
            <HelpCircle className="h-4 w-4" />
            <span className="text-xs font-black uppercase tracking-[0.28em]">
              Direct Clarifications
            </span>
          </div>
          <h2 className="mt-2 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            Questions About {service.shortTitle || service.name}.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            Clear answers to common questions about session scheduling, equipment inclusions, and file delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border-2 border-frame-border divide-y-2 divide-frame-border bg-frame-bg">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className="transition-colors hover:bg-frame-muted/10">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 md:p-8 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base md:text-xl font-bold uppercase tracking-tight text-frame-fg pr-4">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border border-frame-border text-frame-accent transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-frame-accent text-frame-accent-fg border-frame-accent' : 'bg-frame-muted/40'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-xs md:text-sm leading-relaxed text-frame-muted-fg animate-fadeIn">
                    <p className="border-t border-frame-border/60 pt-4">{item.a}</p>
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
