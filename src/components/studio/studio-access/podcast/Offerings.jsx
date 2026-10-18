'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Written show brief with format, speaker count, talking points and backdrop styling",
  "Acoustically isolated room decoupled from Dhaka street and construction noise",
  "Up to 4 broadcast dynamic microphones with an engineer monitoring levels live",
  "Three cinema 4K angles recording host, guest and wide master at the same time",
  "Live switching monitor, teleprompter and client viewing screen",
  "Direct handoff into our edit suite, with no outside vendor in between"
]
const confirmedDeliverables = [
  "Multi-track 24-bit 48kHz WAV stems plus loudness-mastered MP3",
  "4K (3840x2160) 16:9 YouTube master",
  "Vertical cutdowns (1080x1920) for Reels, Shorts and TikTok",
  "Clean dialogue with room noise reduction and levelling",
  "English and Bangla subtitles, thumbnail and RSS-ready metadata"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Podcast Studio Service Includes"
          index="03"
        >
          Recording, monitoring and delivery handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Briefed, Engineered & Monitored Live
              </h3>
              <ul className="mt-6 space-y-3 text-xs md:text-sm font-medium text-frame-fg/90">
                {productionStandards.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-frame-accent font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Confirmed Deliverables
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Stems, Masters & Publishing Pack
              </h3>
              <ul className="mt-6 space-y-3 text-xs md:text-sm font-medium text-frame-fg/90">
                {confirmedDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-frame-accent font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Single Team Accountability
            </span>
            <h4 className="mt-1 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              One team coordinates the session setup, audio engineer, camera operators and editor.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
              No outside vendor sits between your recording and your published episode.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Podcast Session &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
          Also see our{' '}
          <Link href="/studio/voice-over/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            voice-over recording studio in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/video-editing/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            video editing and post-production in Dhaka
          </Link>{' '}
          pages for audio-only and finishing scopes.
        </p>
      </div>
    </section>
  )
}
