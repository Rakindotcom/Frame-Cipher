'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Briefing and Scoping Stage',
    desc: 'Audience, message, references and deliverable specs agreed in writing before anything is scheduled.',
    anchor: 'video production process in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Pre-Production and Setup Stage',
    desc: 'Shot lists, schedules, lighting, audio and backdrop plans locked and pre-checked.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Studio Capture Stage',
    desc: 'Calibrated recording at ECB Chattar with live monitoring on every session.',
    anchor: 'studio space rental in Dhaka',
    href: '/studio/rental/',
  },
  {
    title: 'Post-Production and Review Stage',
    desc: 'Assembly cuts, timestamped stakeholder review and 2 structured revision rounds.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'Mastering and Archive Stage',
    desc: 'Grades, sound finish, platform masters and a 60-day archive with free re-exports.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Priority and Retainer Lanes',
    desc: 'Compressed 48 to 72 hour lanes and reserved monthly capacity for always-on brands.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Pipeline Stages"
          title="Six Lenses on Our 5-Stage Pipeline"
          index="02"
        >
          One disciplined pipeline, six ways to inspect it — each linked to the service where it runs.
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
