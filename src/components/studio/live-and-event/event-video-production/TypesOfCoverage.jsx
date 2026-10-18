'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const coverageTypes = [
  {
    title: 'Conferences and Summits',
    desc: 'Multi-hall stage coverage with daily social drops and recap films.',
    anchor: 'live streaming services in Dhaka',
    href: '/studio/live-streaming/',
  },
  {
    title: 'Launches and Brand Events',
    desc: 'Keynote capture, audience energy and PR-ready teasers in 24 hours.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Seminars, AGMs and Panels',
    desc: 'Full session recordings with clean board-feed speech audio.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Expos and Booth Coverage',
    desc: 'Gimbal walkthroughs of stalls, branding and sponsor displays.',
    anchor: 'video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Weddings and Receptions',
    desc: 'Celebration coverage with cinematic highlight edits.',
    anchor: 'wedding videography in Dhaka',
    href: '/studio/wedding-videography/',
  },
  {
    title: 'Aftermovies and Social Cutdowns',
    desc: 'High-tempo recaps and vertical reels cut from event footage.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
]

export default function TypesOfCoverage() {
  return (
    <section id="event-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Event Coverage We Produce"
          index="02"
        >
          One mobile crew system, six event lanes — each scoped around what the footage must do after the day.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {coverageTypes.map((type, idx) => (
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
