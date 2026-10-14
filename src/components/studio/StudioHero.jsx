'use client'

import Link from 'next/link'
import { ArrowUpRight, Mic, Video, Camera, Sparkles, MapPin } from 'lucide-react'

export default function StudioHero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-frame-border bg-frame-bg px-4 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
      {/* Subtle Background Glow */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-frame-accent/10 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[95vw]">
        {/* Eyebrow / Badges */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-frame-accent/40 bg-frame-accent/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
            <span className="h-2 w-2 rounded-full bg-frame-accent animate-pulse" />
            Physical Studio • Matikata ECB Chattar, Dhaka
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-frame-border bg-frame-muted/40 px-3 py-1 text-xs font-medium text-frame-muted-fg">
            <MapPin className="h-3 w-3 text-frame-accent" />
            6th Floor, Eurasia Building
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="font-heading text-[clamp(2.75rem,7.5vw,7.5rem)] font-extrabold uppercase leading-[0.88] tracking-tighter text-frame-fg">
          Your Ideas <br />
          <span className="bg-gradient-to-r from-frame-fg via-frame-fg to-frame-accent bg-clip-text text-transparent">
            Deserve A Better Frame.
          </span>
        </h1>

        {/* Lead Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="space-y-4 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
            <p>
              <strong className="font-bold text-frame-fg">FrameCipher Studio</strong> is an in-house podcast and video production studio in Dhaka, Bangladesh, built for businesses, creators, entrepreneurs and brands that need professional visual content without managing the entire production process themselves.
            </p>
            <p className="text-sm md:text-base">
              From multi-mic podcast recording and corporate video shooting to high-converting product photography and post-production color grading, our studio brings creative production under one roof.
            </p>
          </div>

          {/* Quick CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-4 text-sm font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-300 hover:bg-frame-accent/90 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            >
              <span>Book a Studio Session</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 border-2 border-frame-border bg-frame-muted/30 px-6 py-4 text-sm font-black uppercase tracking-wider text-frame-fg transition-colors duration-300 hover:border-frame-fg hover:bg-frame-muted/70"
            >
              Explore Production Options
            </a>
          </div>
        </div>

        {/* Key Feature Ribbon */}
        <div className="mt-12 grid grid-cols-2 gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-4">
          <div className="bg-frame-bg p-4 sm:p-5">
            <div className="flex items-center gap-2 text-frame-accent mb-1.5">
              <Mic className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Podcast Audio</span>
            </div>
            <p className="text-sm font-bold text-frame-fg">Multi-Mic Sound Isolation</p>
          </div>

          <div className="bg-frame-bg p-4 sm:p-5">
            <div className="flex items-center gap-2 text-frame-accent mb-1.5">
              <Video className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">4K Multi-Cam</span>
            </div>
            <p className="text-sm font-bold text-frame-fg">Studio Lighting & Backdrops</p>
          </div>

          <div className="bg-frame-bg p-4 sm:p-5">
            <div className="flex items-center gap-2 text-frame-accent mb-1.5">
              <Camera className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Commercial Photo</span>
            </div>
            <p className="text-sm font-bold text-frame-fg">Product & Brand Staging</p>
          </div>

          <div className="bg-frame-bg p-4 sm:p-5">
            <div className="flex items-center gap-2 text-frame-accent mb-1.5">
              <Sparkles className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Post-Production</span>
            </div>
            <p className="text-sm font-bold text-frame-fg">Color Grading & Short Clips</p>
          </div>
        </div>
      </div>
    </section>
  )
}
