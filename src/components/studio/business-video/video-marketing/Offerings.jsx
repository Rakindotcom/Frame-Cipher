'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Content roadmap built around commercial search queries and buyer pain points",
  "CTR-engineered scripting with alternative first-3-second hooks",
  "Batch studio capture: one setup producing masters plus cutdowns together",
  "YouTube SEO packaging with titles, descriptions, chapters and thumbnails",
  "Meta and YouTube distribution guide with placement specs for your media team",
  "Direct handoff into our grading and edit suite, with no outside vendor in between"
]
const confirmedDeliverables = [
  "Full-funnel asset library across awareness, consideration and conversion",
  "Creative testing variations with hook alternatives and kill-or-scale rules",
  "YouTube SEO pack: titles, descriptions, chapters, thumbnails",
  "Retargeting sequences from viewers to leads to buyers",
  "Launch metrics review and scaling playbook on sprint tiers"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Video Marketing Service Includes"
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
                Assets, Packaging & Playbooks
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
              One team coordinates the strategist, director, camera crew and editor.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              No outside vendor sits between your shoot and your final export.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Video Marketing Session &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg">
          Also see our{' '}
          <Link href="/studio/commercial-video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            commercial video production in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/social-media-video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            social media video production in Dhaka
          </Link>{' '}
          pages for format-specific scopes.
        </p>
      </div>
    </section>
  )
}
