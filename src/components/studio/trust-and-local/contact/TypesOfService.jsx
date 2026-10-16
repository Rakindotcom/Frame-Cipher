'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Quote Requests',
    desc: 'Briefs, references and deadlines converted into itemised 48-hour quotes.',
    anchor: 'studio pricing in Dhaka',
    href: '/studio/pricing/',
  },
  {
    title: 'Walkthrough Visits',
    desc: 'Free same or next-day inspections with test recordings at ECB Chattar.',
    anchor: 'studio equipment and facilities in Dhaka',
    href: '/studio/equipment-and-facilities/',
  },
  {
    title: 'Session Bookings',
    desc: 'Podcasts, catalogues and interviews locked with a 50% advance.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Stage Hire Bookings',
    desc: 'Room-only and operated hire for outside crews with call-time support.',
    anchor: 'studio space rental in Dhaka',
    href: '/studio/rental/',
  },
  {
    title: 'Production Scoping',
    desc: 'Full brief-to-delivery projects run through the 5-stage pipeline.',
    anchor: 'video production process in Dhaka',
    href: '/studio/process/',
  },
  {
    title: 'Answer Requests',
    desc: 'Technical, access and delivery questions answered the same day.',
    anchor: 'studio FAQ in Dhaka',
    href: '/studio/faq/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Contact Reasons"
          title="Six Reasons to Reach Out"
          index="02"
        >
          Whatever brings you here, there is a channel and a response promise attached.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {serviceTypes.map((type, idx) => (
            <Link
              key={idx}
              href={type.href}
              className="group bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-frame-muted/30"
            >
              <span className="font-mono text-xs font-bold text-frame-muted-fg">
                TYPE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                {type.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">{type.desc}</p>
              {type.anchor && (
                <span className="mt-4 inline-block text-xs font-black uppercase tracking-wider text-frame-accent underline decoration-frame-accent/40 underline-offset-4">
                  {type.anchor} &rarr;
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
