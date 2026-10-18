'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const filmTypes = [
  {
    title: 'NGO and Impact Films',
    desc: 'Donor reporting stories with character arcs and subtitled versions.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'CSR and Sustainability Films',
    desc: 'Compliance, welfare and sustainability narratives for annual reporting.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Heritage and Family Legacies',
    desc: 'Multi-generation stories with archive restoration and chapters.',
    anchor: 'family legacy films in Dhaka',
    href: '/studio/family-video-productions/',
  },
  {
    title: 'Interview-Led Profiles',
    desc: 'Founder and changemaker portraits with cinematic b-roll.',
    anchor: 'video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Narration and Voice Versions',
    desc: 'Multilingual narration tracked and mastered for every cut.',
    anchor: 'voice-over recording studio in Dhaka',
    href: '/studio/voice-over/',
  },
  {
    title: 'Festival Finishing and Grade',
    desc: 'DCP, broadcast and web masters with full sound design.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
]

export default function TypesOfFilms() {
  return (
    <section id="film-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Documentary Films We Produce"
          index="02"
        >
          One research-led pipeline, six story lanes — each finished for its real audience.
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
