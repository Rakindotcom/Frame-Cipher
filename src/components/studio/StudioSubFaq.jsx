'use client'

import { HelpCircle } from 'lucide-react'
import { SectionIntro } from '../Kinetic'

function SubFaqAccordion({ faqs }) {
  return (
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
  )
}

export default function StudioSubFaq({ service }) {
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

  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2 text-frame-accent">
            <HelpCircle className="h-4 w-4" />
            <span className="text-xs font-black uppercase tracking-[0.28em] md:text-sm">Direct Clarifications</span>
          </div>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Questions About {service.shortTitle || service.name}
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            Clear answers to common questions about session scheduling, equipment inclusions, and file delivery.
          </p>
        </div>
        <SubFaqAccordion faqs={faqs} />
      </div>
    </section>
  )
}
