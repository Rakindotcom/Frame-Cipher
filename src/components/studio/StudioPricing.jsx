'use client'

import Link from 'next/link'
import { Clock, Users, Wrench, Film, Palette, Zap, ArrowRight } from 'lucide-react'
import { SectionIntro } from '../Kinetic'
import { hubRateCard } from '../../data/studioPackages'

const rateLinks = {
  0: '/studio/rental/',
  1: '/studio/podcast/',
  2: '/studio/product-photography/',
  3: '/studio/social-media-video-production/',
  4: '/studio/promotional-video-production/',
  5: '/studio/corporate-video-production/',
  6: '/studio/commercial-video-production/',
  7: '/studio/commercial-video-production/',
  8: '/studio/event-video-production/',
  9: '/studio/live-streaming/',
  10: '/studio/wedding-videography/',
  11: '/studio/property-videography/',
  12: '/studio/documentary-production/',
  13: '/studio/voice-over/',
  14: '/studio/video-editing/',
}

const serviceAnchors = {
  0: 'studio rental in Dhaka',
  1: 'podcast studio in Dhaka',
  2: 'product photography in Dhaka',
  3: 'social media video production',
  4: 'promotional video production',
  5: 'corporate video production',
  6: 'commercial video production',
  7: 'TVC production in Dhaka',
  8: 'event videography in Dhaka',
  9: 'live streaming service in Dhaka',
  10: 'wedding videography in Dhaka',
  11: 'property videography in Dhaka',
  12: 'documentary production in Bangladesh',
  13: 'voice-over studio in Dhaka',
  14: 'video editing services in Dhaka',
}

const quoteFactors = [
  { factor: 'Session duration', why: 'Longer shoots reserve more studio hours and support.', icon: Clock },
  { factor: 'Crew', why: 'Directors, sound recordists, gaffers or prompters add coverage.', icon: Users },
  { factor: 'Equipment and set staging', why: 'Multi-mic setups, custom backdrops or product styling tables add prep time.', icon: Wrench },
  { factor: 'Number of deliverables', why: 'One 16:9 master costs less than a master plus ten vertical clips.', icon: Film },
  { factor: 'Editing complexity', why: 'Grading, multicam switching, kinetic captions and motion graphics set edit hours.', icon: Palette },
  { factor: 'Turnaround', why: 'Standard delivery is 5 to 10 working days. Priority delivery in 48 to 72 hours adds 30%.', icon: Zap },
]

function RateCardTable() {
  return (
    <div className="overflow-hidden border-2 border-frame-border">
      <div className="hidden grid-cols-[1.2fr_0.6fr_0.4fr] gap-4 border-b-2 border-frame-border bg-frame-muted/20 px-6 py-4 text-xs font-black uppercase tracking-widest text-frame-muted-fg md:grid">
        <span>Service</span>
        <span>Indicative rate</span>
        <span className="text-right">Details</span>
      </div>
      {hubRateCard.map(([service, rate], i) => (
        <Link
          key={i}
          href={rateLinks[i] || '/studio/'}
          className="grid grid-cols-1 gap-1 border-b border-frame-border/50 px-6 py-4 transition-colors last:border-0 hover:bg-frame-muted/20 md:grid-cols-[1.2fr_0.6fr_0.4fr] md:items-center md:gap-4"
        >
          <span className="text-sm font-bold text-frame-fg">{service}</span>
          <span className="text-sm font-black text-frame-accent">{rate}</span>
          <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-muted-fg md:justify-end">
            {serviceAnchors[i] || 'Studio service'} <ArrowRight className="h-3 w-3" />
          </span>
        </Link>
      ))}
    </div>
  )
}

function QuoteFactorsGrid() {
  return (
    <div className="mt-14 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
      {quoteFactors.map((item, i) => {
        const Icon = item.icon
        return (
          <div key={i} className="group bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-muted/30 md:p-8">
            <div className="flex h-10 w-10 items-center justify-center border border-frame-border bg-frame-muted/40 text-frame-accent transition-colors group-hover:border-frame-accent group-hover:bg-frame-accent group-hover:text-frame-accent-fg">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-xl">{item.factor}</h3>
            <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">{item.why}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function StudioPricing() {
  return (
    <section id="pricing" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Rate card" title="Studio rate card (BDT, indicative)." index="05">
          Every quote is itemised in writing within 48 hours, covering crew, days, deliverables and timeline.
        </SectionIntro>
        <RateCardTable />
        <div className="mb-14 mt-16 max-w-4xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">Cost drivers</p>
          <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            What moves a quote up or down
          </h2>
        </div>
        <QuoteFactorsGrid />
      </div>
    </section>
  )
}
