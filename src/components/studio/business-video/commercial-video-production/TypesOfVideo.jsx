'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const videoTypes = [
  {
    title: 'Digital OVCs for Paid Social',
    desc: 'Hook-first online commercials with 15s, 30s and 60s cutdowns plus verticals.',
    anchor: 'online video commercial production in Dhaka',
    href: '/studio/video-marketing/',
  },
  {
    title: 'Broadcast TVCs',
    desc: 'Television-compliant commercials with casting, styling and channel-ready masters.',
    anchor: null,
    href: '/studio/video-production/',
  },
  {
    title: 'Product and Launch Spots',
    desc: 'Tabletop and lifestyle staging with macro beauty shots for new SKUs.',
    anchor: 'product video production in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Brand Story Films',
    desc: 'Longer persuasion films for launches, sponsorships and brand platforms.',
    anchor: 'promotional video production in Dhaka',
    href: '/studio/promotional-video-production/',
  },
  {
    title: 'Social Cutdown Packs',
    desc: 'Retargeting bumpers and story cuts sized for every feed and placement.',
    anchor: 'social media video production in Dhaka',
    href: '/studio/social-media-video-production/',
  },
  {
    title: 'Corporate and B2B Films',
    desc: 'Capability and investor-facing films when the audience is a board, not a feed.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
]

export default function TypesOfVideo() {
  return (
    <section id="video-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Commercial Video We Produce"
          index="02"
        >
          One controlled stage, six commercial lanes — each scoped around the placement and the response it must earn.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {videoTypes.map((type, idx) => (
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
              <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">{type.desc}</p>
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
