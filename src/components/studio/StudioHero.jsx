'use client'

import Link from 'next/link'
import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'
import { Mic, Video, Camera, Sparkles } from 'lucide-react'

const marqueeItems = [
  'Acoustic Soundstage',
  'Cinema 4K Multi-Cam',
  'Ceiling Lighting Grid',
  'DaVinci Resolve Suite',
  'Podcast & Video Production',
  'Product Photography',
  'Matikata ECB Chattar',
  'In-House Production Team',
]

const ribbon = [
  { icon: Mic, kicker: 'Podcast Audio', value: 'Multi-Mic Sound Isolation' },
  { icon: Video, kicker: '4K Multi-Cam', value: 'Studio Lighting & Backdrops' },
  { icon: Camera, kicker: 'Commercial Photo', value: 'Product & Brand Staging' },
  { icon: Sparkles, kicker: 'Post-Production', value: 'Color Grading & Short Clips' },
]

function HeroBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
      <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
        <Link href="/" className="transition hover:text-frame-fg">Home</Link>
        <span>/</span>
        <span className="text-frame-accent">Studio</span>
      </div>
    </nav>
  )
}

function HeroRibbon() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid grid-cols-2 gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-4">
          {ribbon.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="group bg-frame-bg p-4 transition-colors duration-300 hover:bg-frame-muted/30 sm:p-5">
                <div className="mb-1.5 flex items-center gap-2 text-frame-accent">
                  <Icon className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{s.kicker}</span>
                </div>
                <p className="text-sm font-bold text-frame-fg">{s.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function StudioHero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      <HeroBreadcrumb />
      <PageHero
        eyebrow="Physical Studio • Matikata ECB Chattar, Dhaka"
        meta="Podcast / Video / Photo / Post-Production"
        number="01"
        title="Podcast & Video Production Studio in Dhaka"
        className="pb-14 pt-10 md:pb-20 md:pt-14"
        actions={
          <>
            <PosterButton href="#booking">Book a Studio Session &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">See Packages and Prices &rarr;</PosterButton>
          </>
        }
      >
        Your ideas deserve a better frame. <strong className="font-bold text-frame-fg">FrameCipher Studio</strong> is
        an in-house podcast, video and product photography studio at Matikata ECB Chattar, Dhaka. Multi-mic
        recording, 4K multi-camera shoots, studio lighting and DaVinci Resolve post-production sit under one roof.
        Scope, price and deliverables are agreed in writing before we roll.
      </PageHero>
      <TypeMarquee items={marqueeItems} slow />
      <HeroRibbon />
    </div>
  )
}
