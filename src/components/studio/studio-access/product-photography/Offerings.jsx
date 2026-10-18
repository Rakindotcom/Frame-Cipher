'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Written shot list with product count, angles per product, backgrounds and marketplace specs",
  "Reflection and glare control for glass, metal, jewellery and glossy packaging",
  "Tabletop styling for cosmetics, electronics, apparel and food with props",
  "Macro detail capture for textures, labels, stitching and finishes",
  "Colour-accurate retouching: dust cleanup, correction and background clipping",
  "Direct handoff into our retouch queue, with no outside vendor in between"
]
const confirmedDeliverables = [
  "High-resolution JPEG and PNG images for print and web",
  "Pure-white RGB 255 marketplace-compliant backgrounds",
  "Transparent-background PNG cuts for design flexibility",
  "Square (1:1) and vertical (4:5) social ad formats",
  "360-degree multi-angle product coverage sets"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Product Photography Service Includes"
          index="03"
        >
          Styling, capture and retouching handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Styled, Lit & Shot In-House
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
                Retouched Masters & Ad Formats
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
              One team coordinates the stylist, photographer and retoucher.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
              No outside vendor sits between your products and your finished catalogue.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Product Shoot &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
          Also see our{' '}
          <Link href="/studio/video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            product video production in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/rental/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            studio space rental in Dhaka
          </Link>{' '}
          pages for motion and stage-hire scopes.
        </p>
      </div>
    </section>
  )
}
