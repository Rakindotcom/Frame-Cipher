'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Acoustically isolated vocal booth: no horns, fans, construction or room reverberation at the source",
  "Studio condenser chain with pop control, captured at 24-bit 48kHz for broadcast headroom",
  "Male and female talent roster: shuddho Bangla, conversational Bangla, neutral English and accent options",
  "Live direction in person from the studio lounge or remotely over Zoom and Google Meet",
  "Performance direction for emotional delivery, pacing and timing synced to locked picture",
  "Vocal processing: de-breathing, de-essing, surgical EQ, compression and loudness matching"
]
const confirmedDeliverables = [
  "Uncompressed 24-bit 48kHz WAV broadcast masters plus MP3",
  "Raw unprocessed vocal tracks on request for external post",
  "Synced video track option with narration timed to picture",
  "Usage-rights documentation for broadcast and commercial runs",
  "60-day archive with free re-exports and pickup sessions"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Voice Over Studio Service Includes"
          index="03"
        >
          Casting, recording and mastering handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Cast, Directed & Recorded In-House
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
                Masters, Stems & Rights Papers
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
              One team casts the voice, directs the session and masters the audio.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
              No outside booth sits between your script and your broadcast master.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Voice Over Session &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
          Also see our{' '}
          <Link href="/studio/podcast/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            podcast recording studio in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/commercial-video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            commercial video production in Dhaka
          </Link>{' '}
          pages for episode and ad-film scopes with narration.
        </p>
      </div>
    </section>
  )
}
