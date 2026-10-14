'use client'

import Link from 'next/link'
import { ChevronRight, ArrowUpRight, MapPin, ShieldCheck } from 'lucide-react'

export default function StudioSubHero({ service }) {
  return (
    <section className="relative overflow-hidden border-b-2 border-frame-border bg-frame-bg px-4 pt-12 pb-20 md:px-8 md:pt-16 md:pb-24">
      {/* Background radial accent */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-frame-accent/10 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[95vw]">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-frame-muted-fg">
          <Link href="/" className="hover:text-frame-fg transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 opacity-40" />
          <Link href="/studio/" className="hover:text-frame-fg transition-colors">
            Studio Hub
          </Link>
          <ChevronRight className="h-3 w-3 opacity-40" />
          <span className="text-frame-accent font-bold">{service.shortTitle || service.name}</span>
        </nav>

        {/* Location & Trust Badges */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-frame-accent/40 bg-frame-accent/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
            <span className="h-2 w-2 rounded-full bg-frame-accent animate-pulse" />
            {service.eyebrow || 'In-House Studio Service'}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-frame-border bg-frame-muted/30 px-3 py-1 text-xs font-medium text-frame-muted-fg">
            <MapPin className="h-3 w-3 text-frame-accent" />
            Eurasia Building, Matikata ECB Chattar, Dhaka
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold uppercase leading-[0.92] tracking-tighter text-frame-fg">
          {service.h1}
        </h1>

        {/* Lead Section */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-frame-fg">
              {service.tagline}
            </p>
            <p className="text-sm md:text-base leading-relaxed text-frame-muted-fg">
              {service.intro}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-4 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-300 hover:bg-frame-accent/90 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <span>Book {service.shortTitle || 'This Service'}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/studio/"
              className="inline-flex items-center justify-center gap-2 border-2 border-frame-border bg-frame-muted/30 px-6 py-4 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors hover:border-frame-fg hover:bg-frame-muted/60"
            >
              &larr; View All Studio Services
            </Link>
          </div>
        </div>

        {/* Trust Points Ribbon */}
        {service.highlights && service.highlights.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-4">
            {service.highlights.map((hl, i) => (
              <div key={i} className="bg-frame-bg p-4 sm:p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                  Standard {i + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-frame-fg">{hl}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
