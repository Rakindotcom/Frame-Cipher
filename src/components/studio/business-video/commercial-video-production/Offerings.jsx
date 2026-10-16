'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Hook-first concept and storyboard built for 3-second retention",
  "Commercial lighting design with tabletop and lifestyle staging",
  "Multi-camera 4K capture with high-speed and macro optics for beauty shots",
  "Casting, wardrobe and on-set makeup artistry on the broadcast tier",
  "Audio mixed to broadcast loudness standards with licensed music and sound design",
  "Direct handoff into our grading and finishing suite, with no outside vendor in between"
]
const confirmedDeliverables = [
  "Broadcast-spec ProRes master with channel-compliant loudness",
  "15s, 30s and 60s cutdowns plus 9:16 verticals for paid social",
  "16:9, 1:1 and 9:16 versions with platform safe-zone calibration",
  "Bangla voiceover session recording in our vocal booth",
  "A/B hook variants with 3 opening alternatives on the OVC tier"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Commercial Video Service Includes"
          index="03"
        >
          Planning, capture and delivery handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Planned, Captured & Directed In-House
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
                Masters, Cutdowns & Broadcast Files
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
              One team coordinates the director, camera crew, audio engineer and editor.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              No outside vendor sits between your shoot and your final export.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Commercial Video Session &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg">
          Also see our{' '}
          <Link href="/studio/promotional-video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            promotional video production in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/video-marketing/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            video marketing services in Dhaka
          </Link>{' '}
          pages for format-specific scopes.
        </p>
      </div>
    </section>
  )
}
