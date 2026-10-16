'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'YouTube Edits & Retention Cuts',
    desc: 'Long-form pacing with hooks, chapters, graphics and search-ready packaging.',
    anchor: 'video marketing and YouTube content in Dhaka',
    href: '/studio/video-marketing/',
  },
  {
    title: 'Commercial Cuts & Ad Edits',
    desc: 'Tight persuasive cuts with grade, sound design and multi-ratio versioning.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Podcast Edits & Audiograms',
    desc: 'Multi-cam sync, dead-air removal and shareable quote clips per episode.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Reels Cutdowns & Shorts Packs',
    desc: 'Hook-first 9:16 verticals with kinetic captions extracted from long video.',
    anchor: 'social media video production in Dhaka',
    href: '/studio/social-media-video-production/',
  },
  {
    title: 'Corporate Edits & Profiles',
    desc: 'Measured, boardroom-safe edits with lower thirds and brand graphics.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Wedding & Event Edits',
    desc: 'Highlight reels and full-ceremony assemblies with licensed music.',
    anchor: null,
    href: '/studio/wedding-videography/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Video Editing We Cut in Dhaka"
          index="02"
        >
          One edit suite, six cutting lanes — each paced for the platform it will run on.
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
