'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Acoustic-isolated stage decoupled from Dhaka street and construction noise",
  "Overhead softbox grid with dimming control keeping the floor trip-free",
  "High-CRI continuous LEDs, RGB accents, hair rims and calibrated 5600K daylight",
  "4K cinema cameras, prime and zoom optics, gimbals and teleprompters",
  "Broadcast microphones with discrete monitoring and close-pattern rejection",
  "Generator plus IPS backup with fibre internet on every booking"
]
const confirmedDeliverables = [
  "Seamless paper backdrops: white, black, grey and key-ready chroma green",
  "Makeup vanity, changing room, client lounge with viewing monitors",
  "Elevator access to the 6th floor with parking beside the building",
  "On-site assistant for lighting, backdrops, power and facilities",
  "Test recordings and walkthrough verification before you book"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Facilities Include"
          index="03"
        >
          Room, kit and infrastructure standards maintained by one in-house facilities team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Isolated, Lit & Powered
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
                Backdrops, Rooms & Verification
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
              One facilities team maintains the room, the kit and the power.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
              No outside vendor sits between your call time and a working stage.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Verification Visit &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
          Also see our{' '}
          <Link href="/studio/rental/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            studio space rental in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/podcast/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            podcast recording studio in Dhaka
          </Link>{' '}
          pages for hire and recording scopes.
        </p>
      </div>
    </section>
  )
}
