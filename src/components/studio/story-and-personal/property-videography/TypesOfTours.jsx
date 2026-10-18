'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const tourTypes = [
  {
    title: 'Apartment Walkthroughs',
    desc: 'Gimbal-flow tours that show layout, light and room connections.',
    anchor: 'video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Luxury Villas and Penthouses',
    desc: 'Host-led presentation with aerials and twilight-grade finishing.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Commercial and Developer Showcases',
    desc: 'Multi-unit coverage with architectural narrative and graphics.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Agent-Hosted Tours',
    desc: 'Directed on-camera presentation with broadcast audio.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'Listing Stills and Portals',
    desc: 'Architectural still captures graded to match the film.',
    anchor: 'product photography studio in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Project Story Films',
    desc: 'Neighbourhood context and buyer narratives for launches.',
    anchor: 'documentary production in Bangladesh',
    href: '/studio/documentary-production/',
  },
]

export default function TypesOfTours() {
  return (
    <section id="tour-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Property Tours We Film"
          index="02"
        >
          One architectural eye, six listing lanes — each cut for where buyers decide.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {tourTypes.map((type, idx) => (
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
              <p className="mt-2 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">{type.desc}</p>
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
