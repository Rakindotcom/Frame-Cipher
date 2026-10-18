'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'TVC & Commercial Voice Over',
    desc: 'Performance-directed reads timed to locked picture for ads and brand films.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Explainer & Corporate Narration',
    desc: 'Clear, paced narration for explainers, company profiles and onboarding.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Documentary Narration',
    desc: 'Long-form narrative voice with session continuity across recording days.',
    anchor: 'documentary production in Dhaka',
    href: '/studio/documentary-production/',
  },
  {
    title: 'E-Learning & Course Voice Over',
    desc: 'Chaptered lesson narration with pronunciation glossaries and metadata.',
    anchor: 'video marketing and course content in Dhaka',
    href: '/studio/video-marketing/',
  },
  {
    title: 'Podcast Intros & IVR Prompts',
    desc: 'Short-form reads: show packaging, IVR menus and announcement beds.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Full Video Production With VO',
    desc: 'Shoot, edit and narrate in one building — one team from script to master.',
    anchor: null,
    href: '/studio/video-production/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Voice Over We Record in Dhaka"
          index="02"
        >
          One acoustic booth, six recording lanes — each directed for the format it will run on.
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
