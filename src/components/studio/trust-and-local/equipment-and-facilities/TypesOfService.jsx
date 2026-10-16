'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Acoustic Stage and Room',
    desc: 'Isolated 6th-floor stage with elevator access, lounge, makeup and changing areas.',
    anchor: 'studio space rental in Dhaka',
    href: '/studio/rental/',
  },
  {
    title: 'Lighting Grid and Backdrops',
    desc: 'Overhead softbox grid with seamless paper in white, black, grey and chroma green.',
    anchor: 'video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Cinema Cameras and Audio Kit',
    desc: '4K cinema bodies, prime optics, gimbals, broadcast mics and teleprompter systems.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Green Screen and Keying Setup',
    desc: 'Even-wash chroma configuration with monitoring for clean composites.',
    anchor: 'green screen studio in Dhaka',
    href: '/studio/green-screen-video/',
  },
  {
    title: 'Streaming and Monitoring',
    desc: 'Fibre internet, encoders and client monitoring for live and simulive work.',
    anchor: 'live streaming services in Dhaka',
    href: '/studio/live-streaming/',
  },
  {
    title: 'Power and Finishing Pipeline',
    desc: 'Generator plus IPS backup feeding a DaVinci Resolve grading and sound suite.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Kit Categories"
          title="Equipment and Facilities at ECB Chattar"
          index="02"
        >
          Six infrastructure categories, each linked to the service page where it works hardest.
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
