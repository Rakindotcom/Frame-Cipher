'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const videoTypes = [
  {
    title: 'Funnel Strategy and Roadmaps',
    desc: 'Search-query content maps that assign every video a funnel stage and placement.',
    anchor: 'video marketing strategy in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Awareness and Reach Films',
    desc: 'Hook-led shorts and explainers built to earn watch time and discovery.',
    anchor: null,
    href: '/studio/social-media-video-production/',
  },
  {
    title: 'Consideration and Explainer Video',
    desc: 'Demos, comparisons and testimonials that answer buyer objections.',
    anchor: 'explainer video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Conversion Ads and OVCs',
    desc: 'Offer-led commercials with cutdowns for Meta, YouTube and TikTok.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'YouTube SEO and Packaging',
    desc: 'Titles, descriptions, chapters and thumbnails that compound organic reach.',
    anchor: 'YouTube video production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'Landing Page and Retargeting Video',
    desc: 'Page embeds and viewer-to-lead sequences with CRO notes for your team.',
    anchor: 'promotional video production in Dhaka',
    href: '/studio/promotional-video-production/',
  },
]

export default function TypesOfVideo() {
  return (
    <section id="video-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service Lanes"
          title="Video Marketing Lanes We Run"
          index="02"
        >
          One controlled stage, six growth lanes — each scoped around the funnel stage it must move.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {videoTypes.map((type, idx) => (
            <Link
              key={idx}
              href={type.href}
              className="group bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-frame-muted/30"
            >
              <span className="font-mono text-xs font-bold text-frame-muted-fg">
                LANE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
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
