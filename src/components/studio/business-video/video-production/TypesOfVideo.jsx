'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const videoTypes = [
  {
    title: 'Corporate and Brand Video',
    desc: 'Company profiles, leadership messages and brand stories.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Founder Interviews and Testimonials',
    desc: 'Multi-camera interviews with teleprompter and live monitoring.',
    anchor: null,
    href: '/studio/corporate-video-production/',
  },
  {
    title: 'Commercial and Ad Video',
    desc: 'Paid social, website and launch films with vertical cutdowns.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Product and E-commerce Video',
    desc: 'Product spotlights and catalogue reels.',
    anchor: 'product photography and video in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Educational and YouTube Video',
    desc: 'Courses, tutorials and masterclasses.',
    anchor: 'podcast and video recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Social and Short-Form Video',
    desc: '9:16 clips for Reels, Shorts and TikTok.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
]

export default function TypesOfVideo() {
  return (
    <section id="video-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Types of Video We Produce in Dhaka"
          index="02"
        >
          One controlled stage, six production lanes — each scoped around where the video will actually run.
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
