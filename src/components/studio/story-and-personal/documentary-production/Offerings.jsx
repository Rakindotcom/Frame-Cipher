'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Pre-production research, character identification and access coordination",
  "Self-sufficient field crews with HDR cinema capture and drone establishing shots",
  "Ethical consent protocols with dialect translation for every interviewee",
  "Archival research, licensing and restoration handling",
  "Original score direction with full dialogue restoration and sound design",
  "Stakeholder review structure built for institutional clients"
]
const confirmedDeliverables = [
  "Full-length documentary master (short 10–20 min or feature length)",
  "Teaser trailer plus social character cutdowns",
  "Bangla and English subtitles with lower-third graphics",
  "Festival DCP plus broadcast and web masters",
  "Documented asset register for your communications archive"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Documentary Production Service Includes"
          index="03"
        >
          Research, field craft and finishing handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Researched, Consented and Field-Ready
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
                Masters, Trailers and Version Stacks
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
              One team coordinates research, field crew, translators and editors.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              No fixer-only handoff sits between your story and your premiere.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Documentary Consultation &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg">
          Also see our{' '}
          <Link href="/studio/corporate-video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            corporate video production in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/family-video-productions/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            family legacy films in Dhaka
          </Link>{' '}
          pages for adjacent story scopes.
        </p>
      </div>
    </section>
  )
}
