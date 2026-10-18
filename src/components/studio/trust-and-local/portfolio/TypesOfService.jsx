'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Corporate and Brand Films',
    desc: 'Company profiles, leadership messages and brand stories with crew sheets attached.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Commercials and OVCs',
    desc: 'Paid-social and launch films with vertical cutdowns and ROAS context where shared.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Podcasts and Interviews',
    desc: 'Multi-camera conversations and thought-leadership series recorded on our stage.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Product and Catalogue Work',
    desc: 'Catalogue banks, lifestyle scenes and product reels with per-product maths shown.',
    anchor: 'product photography and video in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Events and Live Coverage',
    desc: 'Summits, conferences and live broadcasts with teasers and multi-day edits.',
    anchor: 'live streaming services in Dhaka',
    href: '/studio/live-streaming/',
  },
  {
    title: 'Social and Short-Form Banks',
    desc: 'Batch vertical packs and retention-shaped edits for always-on brand channels.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Work Categories"
          title="Portfolio Categories at FrameCipher Studio"
          index="02"
        >
          Six bodies of work, each linked to the service that produced it — so a reference becomes a scope.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {serviceTypes.map((type, idx) => (
            <Link
              key={idx}
              href={type.href}
              className="group bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-frame-muted/30"
            >
              <span className="font-mono text-xs font-bold text-frame-muted-fg">
                TYPE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                {type.title}
              </h3>
              <p className="mt-2 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">{type.desc}</p>
              {type.anchor && (
                <span className="mt-4 inline-block text-xs font-black uppercase tracking-wider text-frame-accent underline decoration-frame-accent/40 underline-offset-4">
                  {type.anchor} &rarr;
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
