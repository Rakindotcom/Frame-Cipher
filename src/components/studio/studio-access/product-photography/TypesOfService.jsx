'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'White-Background Catalogue Sets',
    desc: 'Pure-white marketplace stills with 3 retouched angles per product for Daraz and Shopify.',
    anchor: 'product photography and video in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Half-Day Volume Banks',
    desc: 'Styled batch shooting for around 10 products with macro detail and PNG cuts.',
    anchor: 'e-commerce catalogue photography in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    title: 'Lifestyle and Campaign Scenes',
    desc: 'Styled tabletop and lifestyle scenes with hand and face models for ad visuals.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Product Video and Reels',
    desc: 'Short product spotlights and catalogue reels cut from the same styled setups.',
    anchor: 'product video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Fashion and Apparel Stills',
    desc: 'Ghost-mannequin and styled flat-lay coverage for clothing catalogues.',
    anchor: 'studio space rental in Dhaka',
    href: '/studio/rental/',
  },
  {
    title: 'Retouching and Cutout Finishing',
    desc: 'Clipping paths, dust cleanup, colour correction and marketplace-ratio exports.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Formats & Use Cases"
          title="Product Photography We Shoot in Dhaka"
          index="02"
        >
          One styled stage, six shooting lanes — each scoped around where the images will actually run.
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
