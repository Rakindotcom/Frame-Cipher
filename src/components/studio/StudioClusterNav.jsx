'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const hubs = [
  { title: 'Full-Service Video Production', path: '/studio/video-production/', desc: 'End-to-end concept, filming, and post-production in Dhaka.', price: 'from ৳35,000' },
  { title: 'Corporate Video Production', path: '/studio/corporate-video-production/', desc: 'Brand films, executive interviews, and masterclass productions.', price: 'from ৳48,000' },
  { title: 'Commercial Video & TVCs', path: '/studio/commercial-video-production/', desc: 'Advertising spots and digital campaign video creative.', price: 'from ৳78,000' },
  { title: 'Live Streaming Services', path: '/studio/live-streaming/', desc: 'Multi-camera broadcast streaming for webinars and summits.', price: 'from ৳18,000' },
  { title: 'Podcast Recording Studio', path: '/studio/podcast/', desc: 'Acoustic multi-mic audio & 4K video podcast sessions in Dhaka.', price: 'from ৳8,000' },
  { title: 'Product Photography', path: '/studio/product-photography/', desc: 'E-commerce white background, lifestyle and campaign visual assets.', price: '৳1,500 / product' },
  { title: 'Studio Space Rental', path: '/studio/rental/', desc: 'Hourly & daily quiet space rental with lighting grid & backdrops.', price: '৳2,000 / hour' },
  { title: 'Video Editing & Post-Production', path: '/studio/video-editing/', desc: 'DaVinci color grading, speech noise reduction & short reels cutdowns.', price: 'from ৳9,500' },
]

export default function StudioClusterNav() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-tight text-white">
              Studio Specialization Directories.
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Production pipelines configured for podcasting, commercial video, e-commerce photography, and post-production.
          </p>
        </div>

        {/* Discrete Cards Grid (gap-6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, i) => (
            <Link
              key={i}
              href={hub.path}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
            >
              <div>
                <span className="inline-block font-mono text-xs uppercase tracking-wider text-purple-400 font-semibold">
                  {hub.price}
                </span>
                <h3 className="mt-3 font-heading text-base sm:text-lg font-medium leading-snug tracking-tight text-white transition-colors">
                  {hub.title}
                </h3>
                <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-300">
                  {hub.desc}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 border-t border-white/10 pt-4 font-mono text-xs uppercase tracking-wider text-purple-400 group-hover:text-white transition-colors">
                <span>Explore Service</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
