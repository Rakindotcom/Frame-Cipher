'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Written scope with deliverables, milestones and timelines before scheduling",
  "Shot lists, participant schedules and technical setups pre-checked before call time",
  "Calibrated studio capture with live audio monitoring and 4K coverage",
  "Timestamped cloud review links for structured stakeholder feedback",
  "Two structured revision rounds with grade, sound finish and platform masters",
  "60-day archive with free re-exports to new aspect ratios"
]
const confirmedDeliverables = [
  "Itemised written quote within 48 hours of a completed brief",
  "Scheduled shoot with pre-checked setups at ECB Chattar",
  "Assembly cut with timestamped review and 2 revision rounds",
  "Finished masters, vertical cuts and subtitle files by cloud drive",
  "Raw captures within 24 hours on every production"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Production Process Guarantees"
          index="03"
        >
          Discipline, review structure and delivery promises handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Scoped, Checked & Reviewed
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
                Quotes, Cuts & Archives
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
              One team owns the brief, the shoot, the edit and the archive.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              No handoff gaps between scoping, capture and delivery.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Start Your Project &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg">
          Also see our{' '}
          <Link href="/studio/pricing/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            studio pricing in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/faq/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            studio FAQ in Dhaka
          </Link>{' '}
          pages for rate and answer detail.
        </p>
      </div>
    </section>
  )
}
