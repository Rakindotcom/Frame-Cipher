'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const videoTypes = [
  {
    title: 'Reels, Shorts and TikToks',
    desc: '15 to 60 second verticals with kinetic captions, composed natively for 9:16.',
    anchor: 'short-form video production in Dhaka',
    href: '/studio/video-marketing/',
  },
  {
    title: 'Batch Content Banks',
    desc: '10 to 30 scripted clips recorded in one half-day or full-day session.',
    anchor: null,
    href: '/studio/video-production/',
  },
  {
    title: 'Product Teasers and Demos',
    desc: 'Tabletop staging and insert shots that make small products read on small screens.',
    anchor: 'product video production in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Promo and Offer Clips',
    desc: 'Price-led cutdowns with animated badges for flash sales and launches.',
    anchor: 'promotional video production in Dhaka',
    href: '/studio/promotional-video-production/',
  },
  {
    title: 'Founder and Creator Talk',
    desc: 'Talking-head authority clips with teleprompter support and trend-aware hooks.',
    anchor: 'creator video studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Ad-Ready Social Cutdowns',
    desc: 'Retargeting bumpers and story cuts sized for Meta, TikTok and YouTube placements.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
]

export default function TypesOfVideo() {
  return (
    <section id="video-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Social Video We Produce"
          index="02"
        >
          One controlled stage, six vertical lanes — each scoped around the platform and the hook it needs.
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
