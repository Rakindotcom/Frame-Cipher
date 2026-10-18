'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const filmTypes = [
  {
    title: 'Holud Films',
    desc: 'Playful pre-wedding energy with candid colour and music.',
    anchor: 'event videography in Dhaka',
    href: '/studio/event-video-production/',
  },
  {
    title: 'Wedding-Day Cinema',
    desc: 'Ceremony gravity captured with multi-angle discretion.',
    anchor: 'video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Reception Stories',
    desc: 'Celebration cuts with speeches, performances and guests.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Couple Portrait Sessions',
    desc: 'Guided pre-event portraits woven into the narrative.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'Family Legacy Chapters',
    desc: 'Parents and elders interviewed as a dedicated story.',
    anchor: 'family legacy films in Dhaka',
    href: '/studio/family-video-productions/',
  },
  {
    title: 'Destination Weddings',
    desc: 'Same creative team across Sylhet, Chattogram, Cox’s Bazar and abroad.',
    anchor: 'documentary production in Bangladesh',
    href: '/studio/documentary-production/',
  },
]

export default function TypesOfFilms() {
  return (
    <section id="film-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Wedding Films We Craft"
          index="02"
        >
          One narrative eye, six celebration lanes — each cut for the family that replays it.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {filmTypes.map((type, idx) => (
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
