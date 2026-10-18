'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Virtual Newsroom & Presenter Shows',
    desc: 'Anchored desks, ticker graphics and multi-angle virtual sets for shows.',
    anchor: 'multi-camera live streaming in Dhaka',
    href: '/studio/live-streaming/',
  },
  {
    title: 'Online Courses & Training Sets',
    desc: 'Classroom and lab environments with slide compositing and chapter graphics.',
    anchor: 'video marketing and course content in Dhaka',
    href: '/studio/video-marketing/',
  },
  {
    title: 'Corporate Presentations & Keynotes',
    desc: 'Boardroom-grade branded stages for launches, keynotes and town halls.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Product Demos on Virtual Sets',
    desc: 'Clean infinite-cyc looks and branded environments for product stories.',
    anchor: 'product photography and video in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Creative & Music Composites',
    desc: 'Stylised 3D environments, tracking shots and effects-heavy sequences.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Webinars & Live Keying',
    desc: 'Real-time hardware keying for webinars and streams keyed as you present.',
    anchor: null,
    href: '/studio/event-video-production/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Green Screen Shoots We Stage in Dhaka"
          index="02"
        >
          One chroma wall, six production lanes — each lit and keyed for the background it will carry.
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
