'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../Kinetic'

function SubHeroBreadcrumb({ service }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
      <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
        <Link href="/" className="transition hover:text-frame-fg">Home</Link>
        <span>/</span>
        <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
        <span>/</span>
        <span className="text-frame-accent">{service.shortTitle || service.name}</span>
      </div>
    </nav>
  )
}

function SubHeroStandards({ service }) {
  if (!service.highlights || service.highlights.length === 0) return null
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid grid-cols-2 gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-4">
          {service.highlights.map((hl, i) => (
            <div key={i} className="bg-frame-bg p-5 md:p-6">
              <span className="mb-1 block text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Standard 0{i + 1}</span>
              <p className="font-heading text-sm font-bold uppercase tracking-tight text-frame-fg sm:text-base">{hl}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function StudioSubHero({ service }) {
  const title = service.h1 || service.name || 'Studio Production Service'
  const subtitle = service.tagline || service.intro || 'In-house studio production facility in Dhaka, Bangladesh.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      <SubHeroBreadcrumb service={service} />
      <PageHero
        eyebrow={service.eyebrow || 'In-House Studio Production'}
        meta="Physical Soundstage / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">Book {service.shortTitle || 'This Session'} &rarr;</PosterButton>
            <PosterButton href="/studio" variant="outline">Explore All Studio Services &rarr;</PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>
      <SubHeroStandards service={service} />
    </div>
  )
}
