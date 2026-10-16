'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const filmTypes = [
  {
    title: 'Anniversary Films',
    desc: 'Golden anniversaries with interviews, event coverage and photo weaving.',
    anchor: 'event videography in Dhaka',
    href: '/studio/event-video-production/',
  },
  {
    title: 'Milestone Birthdays',
    desc: '70th and 80th birthdays with tributes from children and grandchildren.',
    anchor: 'video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Legacy Documentaries',
    desc: 'An elder’s life story with multi-session interviews and chapters.',
    anchor: 'documentary production in Bangladesh',
    href: '/studio/documentary-production/',
  },
  {
    title: 'Wedding Story Chapters',
    desc: 'How the family began — couples’ stories inside celebration films.',
    anchor: 'wedding videography in Dhaka',
    href: '/studio/wedding-videography/',
  },
  {
    title: 'Tribute and Memorial Archives',
    desc: 'Celebration-of-life films assembled with care and dignity.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'Narration and Language Versions',
    desc: 'Bilingual Bangla-English narration for generations abroad.',
    anchor: 'voice-over recording studio in Dhaka',
    href: '/studio/voice-over/',
  },
]

export default function TypesOfFilms() {
  return (
    <section id="film-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Family Films We Preserve"
          index="02"
        >
          One patient interview craft, six keepsake lanes — each made for the grandchildren.
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
