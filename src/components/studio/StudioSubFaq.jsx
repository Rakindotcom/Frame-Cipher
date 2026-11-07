'use client'

export function SubFaqAccordion({ faqs }) {
  return (
    <div className="space-y-4">
      {faqs.map((item, idx) => (
        <details key={idx} className="group rounded-xl border border-white/[0.08] bg-[#121214] transition-colors open:border-frame-accent">
          <summary className="flex cursor-pointer list-none select-none items-center justify-between p-6 font-heading text-lg font-medium tracking-tight text-white transition-colors marker:content-none hover:text-frame-accent md:p-8 md:text-xl">
            <h3 className="pr-4 font-heading text-lg font-medium tracking-tight text-white md:text-xl">{item.q}</h3>
            <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#18181B] font-semibold text-frame-accent transition-transform duration-200 group-open:rotate-45">+</span>
          </summary>
          <div className="border-t border-white/[0.08] p-6 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 md:p-8">{item.a}</div>
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
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
            Questions about{' '}
            <span className="text-white">{service.shortTitle || service.name}.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Clear answers to common questions about session scheduling, equipment inclusions, and file delivery.
          </p>
        </div>
        <SubFaqAccordion faqs={faqs} />
      </div>
    </section>
  )
}
