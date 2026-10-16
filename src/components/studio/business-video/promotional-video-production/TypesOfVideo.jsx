'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const videoTypes = [
  {
    title: 'Product Launch Promos',
    desc: 'High-impact reveals with macro optics, turntable staging and kinetic editing.',
    anchor: 'product launch video production in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Seasonal and Flash Sale Videos',
    desc: 'Urgent offer videos for Eid, 11.11 and clearance campaigns with countdown graphics.',
    anchor: null,
    href: '/studio/video-marketing/',
  },
  {
    title: 'Commercial and Ad Spots',
    desc: 'Paid-placement commercials with hook-first scripting and cutdown sets.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Landing Page and Website Promos',
    desc: 'Under-60-second explainers that lift page conversion, subtitled for sound-off browsing.',
    anchor: 'promotional video agency in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Service Teasers and Announcements',
    desc: 'Anticipation-building clips for summits, openings and launches with branded end-cards.',
    anchor: 'social media video production in Dhaka',
    href: '/studio/social-media-video-production/',
  },
  {
    title: 'Corporate and Brand Stories',
    desc: 'Trust-led company films when the goal is credibility rather than a fast sale.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
]

export default function TypesOfVideo() {
  return (
    <section id="video-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Promotional Video We Produce"
          index="02"
        >
          One controlled stage, six promo lanes — each scoped around the offer and the response it must earn.
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
