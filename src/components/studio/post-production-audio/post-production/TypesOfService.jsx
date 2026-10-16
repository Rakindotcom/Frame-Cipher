'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Narrative Assembly & Story Edit',
    desc: 'Structure, pacing and dead-air removal for interviews, courses and documentaries.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'Colour Grading & Finishing',
    desc: 'Shot-matched LOG grading in DaVinci Resolve on calibrated monitoring.',
    anchor: 'professional video editing and color grading in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'Dialogue Cleanup & Sound Design',
    desc: 'De-noise, de-reverb and loudness-safe mixes for rooms that were never quiet.',
    anchor: 'voice over recording and sound studio in Dhaka',
    href: '/studio/voice-over/',
  },
  {
    title: 'Subtitling in Bangla & English',
    desc: 'SRT and VTT caption files timed to the locked cut for every platform.',
    anchor: null,
    href: '/studio/video-editing/',
  },
  {
    title: 'Green Screen Keying & Composites',
    desc: 'Spill-suppressed keys and virtual-set composites from our chroma stage.',
    anchor: 'green screen studio and chroma keying in Dhaka',
    href: '/studio/green-screen-video/',
  },
  {
    title: 'Podcast & Course Finishing',
    desc: 'Multi-episode conform, chaptering and loudness-normalised delivery.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Post-Production We Finish in Dhaka"
          index="02"
        >
          One finishing suite, six pipelines — each scoped around where the finished video will actually run.
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
