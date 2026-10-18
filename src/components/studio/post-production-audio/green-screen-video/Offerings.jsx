'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Seamless pre-lit chroma wall: overhead softbox grid tuned for zero hot spots and even green falloff",
  "Subject separation with dedicated rim and backlight that cancels green spill on hair and shoulders",
  "Real-time hardware key preview on floor monitors, so presenters see the composite while recording",
  "Wardrobe and prop checks against green-spill risks before the first take, plus teleprompter support",
  "Flat-profile 4K capture for maximum keying latitude, with correctly distanced framing by an operator",
  "In-house keying, spill suppression, tracking and colour matching — no outside compositing vendor"
]
const confirmedDeliverables = [
  "High-bitrate flat-profile raw footage, ready to key",
  "Keyed transparent-background files in ProRes 4444",
  "Finished composite masters with your virtual sets and graphics",
  "Multi-ratio exports: 16:9, 1:1, 9:16 and 4:5",
  "60-day archive with free re-exports to new aspect ratios"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Green Screen Studio Service Includes"
          index="03"
        >
          Stage, lighting and compositing handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Lit, Keyed & Composited In-House
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
                Raw Keys, Composites & Masters
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
              One team lights the wall, operates the shoot and keys the composite.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
              No outside vendor sits between your session and your finished virtual set.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Green Screen Session &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
          Also see our{' '}
          <Link href="/studio/video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            full-service video production in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/post-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            video post-production in Dhaka
          </Link>{' '}
          pages for shoot-plus-finish scopes.
        </p>
      </div>
    </section>
  )
}
