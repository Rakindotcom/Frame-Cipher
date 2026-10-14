'use client'

import Link from 'next/link'
import {
  StudioHero,
  StudioOfferings,
  StudioComparison,
  StudioWhyMatters,
  StudioProcess,
  StudioPricing,
  StudioLocation,
  StudioFaq,
  StudioBookingForm,
} from '../components/studio'
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react'

export default function StudioPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      {/* Visual Breadcrumb Navigation */}
      <div className="border-b border-frame-border/60 bg-frame-muted/10 px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 text-xs font-semibold text-frame-muted-fg">
          <Link href="/" className="hover:text-frame-fg transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-50" />
          <span className="text-frame-accent">Studio (Dhaka)</span>
        </div>
      </div>

      {/* Hero Section */}
      <StudioHero />

      {/* Offerings Section */}
      <StudioOfferings />

      {/* Package Options Comparison */}
      <StudioComparison />

      {/* Why Professional Studio Matters */}
      <StudioWhyMatters />

      {/* Production Process */}
      <StudioProcess />

      {/* Pricing & Cost Drivers */}
      <StudioPricing />

      {/* Studio Location & Map Context */}
      <StudioLocation />

      {/* Topical Service Hub Quick Links */}
      <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-frame-accent">
                Internal Service Hubs
              </p>
              <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-frame-fg mt-1">
                Explore Dedicated Studio Specializations
              </h3>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Full-Service Video Production',
                path: '/studio/video-production/',
                desc: 'End-to-end concept, filming, and post-production in Dhaka.',
              },
              {
                title: 'Corporate Video Production',
                path: '/studio/corporate-video-production/',
                desc: 'Brand films, executive interviews, and masterclass productions.',
              },
              {
                title: 'Commercial Video & TVCs',
                path: '/studio/commercial-video-production/',
                desc: 'Advertising spots and digital campaign video creative.',
              },
              {
                title: 'Live Streaming Services',
                path: '/studio/live-streaming/',
                desc: 'Multi-camera broadcast streaming for webinars and summits.',
              },
              {
                title: 'Podcast Recording Studio',
                path: '/studio/podcast/',
                desc: 'Acoustic multi-mic audio & 4K video podcast sessions in Dhaka.',
              },
              {
                title: 'Product Photography',
                path: '/studio/product-photography/',
                desc: 'E-commerce white background, lifestyle and campaign visual assets.',
              },
              {
                title: 'Studio Space Rental',
                path: '/studio/rental/',
                desc: 'Hourly & daily quiet space rental with lighting grid & backdrops.',
              },
              {
                title: 'Video Editing & Post-Production',
                path: '/studio/video-editing/',
                desc: 'DaVinci color grading, speech noise reduction & short reels cutdowns.',
              },
            ].map((hub, i) => (
              <Link
                key={i}
                href={hub.path}
                className="group border border-frame-border bg-frame-bg p-5 transition-all duration-300 hover:border-frame-accent hover:bg-frame-muted/30"
              >
                <h4 className="font-heading text-sm font-bold uppercase text-frame-fg group-hover:text-frame-accent transition-colors">
                  {hub.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-frame-muted-fg">
                  {hub.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-frame-accent">
                  <span>Explore Service</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <StudioFaq />

      {/* Booking Form & Contact */}
      <StudioBookingForm />
    </main>
  )
}
