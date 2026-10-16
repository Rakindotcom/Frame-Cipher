'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Booking and Payment Questions',
    desc: 'Advances, invoices, rescheduling and how dates get locked.',
    anchor: 'studio pricing in Dhaka',
    href: '/studio/pricing/',
  },
  {
    title: 'Room and Kit Questions',
    desc: 'Acoustics, grid, cameras, backdrops and power backup specs.',
    anchor: 'studio equipment and facilities in Dhaka',
    href: '/studio/equipment-and-facilities/',
  },
  {
    title: 'Access and Location Questions',
    desc: 'Directions, parking, elevator access and walkthrough visits.',
    anchor: 'contact FrameCipher Studio in Dhaka',
    href: '/studio/contact/',
  },
  {
    title: 'Review and Revision Questions',
    desc: 'Cloud review links, structured rounds and approval structure.',
    anchor: 'video production process in Dhaka',
    href: '/studio/process/',
  },
  {
    title: 'Delivery and Format Questions',
    desc: 'Masters, cutdowns, subtitles, raw files and archiving windows.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'Work and Reference Questions',
    desc: 'Budget bands, grading comparisons and industry-matched reels.',
    anchor: 'studio portfolio in Dhaka',
    href: '/studio/portfolio/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Question Topics"
          title="Six Topics This Page Answers"
          index="02"
        >
          Jump to the topic you need — each linked to the page where it runs deepest.
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
