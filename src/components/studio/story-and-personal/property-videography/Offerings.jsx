'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Orientation-based scheduling: morning light for east-facing rooms, dusk for towers",
  "Motorised gimbal walkthroughs that mimic a real in-person visit",
  "Window-balancing exposure with no blown-out skies or crushed interiors",
  "Practical-accent lighting for luxury fittings and smart-home features",
  "Licensed drone aerials of the property and neighbourhood context",
  "Host and agent direction with broadcast wireless audio and teleprompter option"
]
const confirmedDeliverables = [
  "Cinematic property tour, 2 to 3 minutes, graded in DaVinci Resolve",
  "Vertical 9:16 reels for Facebook, Instagram and portal ads",
  "High-resolution architectural still captures for listings",
  "Teaser, full tour and vertical ads set on luxury tiers",
  "Sales-gallery loop and agent briefing versions on tower projects"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Property Videography Service Includes"
          index="03"
        >
          Staging guidance, architectural capture and listing-ready cuts from one in-house team.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Shot for Architecture, Not Just Rooms
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
                Tours, Reels and Stills
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
              One team coordinates staging, the shoot crew, drone and editors.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              No outside vendor sits between your listing date and your tour film.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Property Shoot &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg">
          Also see our{' '}
          <Link href="/studio/video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            video production in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/commercial-video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            commercial video production in Dhaka
          </Link>{' '}
          pages for launch-campaign scopes.
        </p>
      </div>
    </section>
  )
}
