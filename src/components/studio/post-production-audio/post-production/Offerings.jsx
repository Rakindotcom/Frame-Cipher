'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Verified file intake: checksums, missing-clip reports and proxy workflow before the first cut",
  "LOG-profile colour science in DaVinci Resolve: S-Log3, C-Log, LogC, BRAW and REDCODE on calibrated monitors",
  "Dialogue restoration: spectral de-noise, de-reverb, de-click, EQ and broadcast loudness compliance",
  "Motion graphics packaging: lower thirds, logo animation and kinetic typography in your brand style",
  "Timestamped cloud review links so stakeholders comment frame-accurately, not over chat screenshots",
  "Direct handoff from our own shoot floor when you film with us — no outside vendor in between"
]
const confirmedDeliverables = [
  "ProRes 422 HQ and high-bitrate MP4 masters in 16:9",
  "Multi-ratio versions: 1:1, 9:16 and 4:5 for social and ads",
  "Dialogue, music and effects stems for future re-edits",
  "SRT and VTT subtitle files in Bangla or English",
  "60-day archive with free re-exports to new aspect ratios"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Post-Production Service Includes"
          index="03"
        >
          Intake, finishing and delivery handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Verified, Graded & Mixed In-House
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
                Masters, Stems & Subtitle Files
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
              One team owns your footage from intake checksum to final export.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
              No outside vendor sits between your drive handoff and your finished masters.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Post-Production Slot &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
          Also see our{' '}
          <Link href="/studio/video-editing/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            video editing and post-production in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/voice-over/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            voice over recording and sound studio in Dhaka
          </Link>{' '}
          pages for edit-only and audio-only scopes.
        </p>
      </div>
    </section>
  )
}
