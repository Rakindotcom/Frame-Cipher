'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Pre-stream tech check at the venue or in-studio, with speaker rehearsal",
  "Bonded fibre plus cellular backup so one line failure never stops the show",
  "Hardware-switched multi-camera direction with a dedicated stream operator",
  "Broadcast audio engineering: lapels, room mics and board feeds mixed live",
  "Live graphics, lower thirds, slides and remote Zoom or Meet guests",
  "Full high-bitrate recording of the broadcast for on-demand publishing"
]
const confirmedDeliverables = [
  "Live simulcast to YouTube, Facebook and LinkedIn at 1080p60",
  "Full uncompressed master recording of the entire session",
  "Edited highlight recap within 72 hours on multi-cam tiers",
  "Branded holding slates, logo bug and speaker lower thirds",
  "Upload-ready on-demand file with chapter markers"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Live Streaming Service Includes"
          index="03"
        >
          Switching, sound, graphics and redundancy handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Tested, Bonded and Directed Live
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
                Simulcast, Masters and Recaps
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
              One team coordinates the director, camera crew, audio engineer and stream operator.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              No outside vendor sits between your programme and your live audience.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Live Streaming Session &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg">
          Also see our{' '}
          <Link href="/studio/event-video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            event videography and conference coverage in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            video production in Dhaka
          </Link>{' '}
          pages for recorded coverage scopes.
        </p>
      </div>
    </section>
  )
}
