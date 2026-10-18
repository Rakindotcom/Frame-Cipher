'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const coverageTypes = [
  {
    title: 'Corporate Conferences and Summits',
    desc: 'Multi-camera stage coverage with simulcast and session recordings.',
    anchor: 'event videography and conference coverage in Dhaka',
    href: '/studio/event-video-production/',
  },
  {
    title: 'Product Launches and Announcements',
    desc: 'Directed launch broadcasts with graphics, countdowns and teasers.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Webinars and Training Sessions',
    desc: 'Slide integration, remote guests and clean recordings for reuse.',
    anchor: 'video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Town Halls and Leadership Talks',
    desc: 'Interview-style streams with teleprompter and live monitoring.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Wedding and Celebration Streams',
    desc: 'Discreet multi-camera coverage for family watching from abroad.',
    anchor: 'wedding videography in Dhaka',
    href: '/studio/wedding-videography/',
  },
  {
    title: 'Talk-Show and Podcast Streams',
    desc: 'Studio talk formats with mixed audio and captioned cutdowns.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
]

export default function TypesOfCoverage() {
  return (
    <section id="stream-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Live Coverage We Stream"
          index="02"
        >
          One broadcast rig, six programme lanes — each scoped around the audience watching live.
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
