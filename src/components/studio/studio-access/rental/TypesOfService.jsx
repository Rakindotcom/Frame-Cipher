'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Room-Only Hourly Hire',
    desc: 'Bring your own crew and gear to a pre-rigged isolated stage with grid and power backup.',
    anchor: 'studio space rental in Dhaka',
    href: '/studio/rental/',
  },
  {
    title: 'Operated Sessions',
    desc: 'Stage plus our camera, lights and operator for interviews, podcasts and talking-head shoots.',
    anchor: 'video production services in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Podcast and Interview Blocks',
    desc: 'Broadcast mics, backdrop styling and monitoring for recorded conversations.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Product and Catalogue Shoots',
    desc: 'Tabletop staging, seamless paper and macro-ready lighting for product crews.',
    anchor: 'product photography and video in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Green Screen and Chroma Sessions',
    desc: 'Key-ready green screen configuration with even wash lighting for composites.',
    anchor: 'green screen studio in Dhaka',
    href: '/studio/green-screen-video/',
  },
  {
    title: 'Live Stream and Hybrid Events',
    desc: 'Encoder access, fibre internet and monitoring for live or simulive broadcasts.',
    anchor: 'live streaming services in Dhaka',
    href: '/studio/live-streaming/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Stage Hire We Offer in Dhaka"
          index="02"
        >
          One equipped stage, six hire lanes — each scoped around what your crew brings and what we provide.
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
