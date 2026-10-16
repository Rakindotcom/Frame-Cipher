'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const videoTypes = [
  {
    title: 'Company Profile Films',
    desc: 'Capability stories combining studio interviews with office and facility b-roll.',
    anchor: 'company profile film production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Founder and Executive Interviews',
    desc: 'Teleprompter-led leadership messages with LinkedIn-ready highlight reels.',
    anchor: null,
    href: '/studio/video-production/',
  },
  {
    title: 'Commercial and Brand Ads',
    desc: 'Persuasion-led spots with hook-first scripting and multi-ratio cutdowns.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Training and Onboarding Video',
    desc: 'Repeatable staff training modules recorded once and reused across teams.',
    anchor: 'training video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Testimonial and Case Study Films',
    desc: 'Client stories structured around outcomes, for decks and proposal rooms.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'AGM and Event Coverage',
    desc: 'Board meetings, AGMs and corporate events captured for records and recaps.',
    anchor: 'event video production in Dhaka',
    href: '/studio/podcast/',
  },
]

export default function TypesOfVideo() {
  return (
    <section id="video-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Corporate Video We Produce"
          index="02"
        >
          One controlled stage, six corporate lanes — each scoped around who will watch and where it screens.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {videoTypes.map((type, idx) => (
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
