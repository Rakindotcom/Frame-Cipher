'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Written booking brief with date, hours, backdrop, power needs and crew support",
  "Sound-isolated stage decoupled from Dhaka traffic and construction noise",
  "Overhead ceiling softbox grid keeping the floor free of trip hazards",
  "Seamless paper backdrops rigged before arrival: white, black, grey, chroma green",
  "Generator plus IPS backup with high-speed fibre internet on every booking",
  "On-site studio assistant for lighting, backdrops, power and facilities"
]
const confirmedDeliverables = [
  "Private exclusive stage access for the agreed booking duration",
  "Pre-rigged backdrop and baseline continuous lighting infrastructure",
  "Makeup vanity, changing area, client lounge and parking access",
  "Operated option: camera, operator, teleprompter and live monitoring",
  "Same-day raw handover to your drives on operated sessions"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Studio Rental Service Includes"
          index="03"
        >
          Stage, infrastructure and support handled by one in-house facilities team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Rigged, Isolated & Powered
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
                Stage Access & Session Support
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
              One facilities team keeps the stage, power and support ready.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              No outside vendor sits between your call time and a shoot-ready room.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book Stage Hire &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg">
          Also see our{' '}
          <Link href="/studio/podcast/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            podcast recording studio in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            video production in Dhaka
          </Link>{' '}
          pages for crewed recording scopes.
        </p>
      </div>
    </section>
  )
}
