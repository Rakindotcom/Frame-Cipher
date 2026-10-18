'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Audio-Only Podcast Recording',
    desc: 'Multi-mic broadcast audio for Spotify and Apple Podcasts, mastered to loudness standards.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: '4K Video Podcast Recording',
    desc: 'Three-camera YouTube-ready recording with ceiling grid lighting and live switching.',
    anchor: 'video podcast recording in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Founder and Executive Interviews',
    desc: 'Thought-leadership conversations with teleprompter and client monitoring.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Voice-Over and Audiobook Recording',
    desc: 'Isolated vocal capture with an engineer for narration and audiobook chapters.',
    anchor: 'voice-over recording studio in Dhaka',
    href: '/studio/voice-over/',
  },
  {
    title: 'Live Podcast and Talk Formats',
    desc: 'Multi-camera talk recordings with encoder access for live or simulive publishing.',
    anchor: 'live streaming services in Dhaka',
    href: '/studio/live-streaming/',
  },
  {
    title: 'Vertical Clip Cutdowns',
    desc: 'Hook-driven 9:16 reels cut from each episode for Reels, Shorts and TikTok.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Podcast Formats We Record in Dhaka"
          index="02"
        >
          One acoustic stage, six recording lanes — each scoped around where the episode will actually publish.
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
