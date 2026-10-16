'use client'

import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { SectionIntro } from '../../../Kinetic'

const related = [
  { label: 'Video marketing services in Dhaka', href: '/studio/video-marketing/' },
  { label: 'Promotional video production in Dhaka', href: '/studio/promotional-video-production/' },
  { label: 'Commercial video and TVC production in Dhaka', href: '/studio/commercial-video-production/' },
  { label: 'Video editing and post-production in Dhaka', href: '/studio/video-editing/' },
  { label: 'Full-service video production in Dhaka', href: '/studio/video-production/' },
  { label: 'Back to FrameCipher Studio in Dhaka (hub)', href: '/studio/' },
]

export default function RelatedServices() {
  return (
    <section id="related-services" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Keep Exploring"
          title="Related Studio Services"
          index="08"
        >
          Format-specific scopes and supporting pipelines for your social content.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group flex items-center justify-between gap-3 bg-frame-bg p-5 md:p-6 transition-colors duration-300 hover:bg-frame-muted/30"
            >
              <span className="font-heading text-sm md:text-base font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                {item.label}
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-frame-accent transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <p className="text-sm font-medium text-frame-muted-fg">
            Not sure which service fits? Message the team on WhatsApp at +880 1768-146650 with your platforms
            and clip count for scoping guidance and an itemised quote.
          </p>
          <a
            href="https://wa.me/8801768146650"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all hover:bg-frame-accent/90"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
