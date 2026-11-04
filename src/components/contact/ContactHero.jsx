import Link from 'next/link'
import { contact } from '../../data/agency'
import PosterButton from '../home/PosterButton'
import { ChevronRight } from 'lucide-react'

const contactMarqueeItems = [
  'Name the goal',
  'Send the mess',
  'Pick the system',
  'Launch the next move',
]

const baseItems = [...contactMarqueeItems, ...contactMarqueeItems]
const repeatedItems = [...baseItems, ...baseItems]

export default function ContactHero() {
  return (
    <>
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-frame-accent">Contact</span>
          </nav>

          <div className="space-y-6 max-w-5xl">
            {/* Architectural Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-zinc-300 border border-white/[0.08]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>{contact.responseTime}</span>
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.94] tracking-tight text-white">
              Bring us the{' '}
              <span className="italic text-frame-accent">
                brief.
              </span>
            </h1>

            {/* Editorial Description */}
            <p className="max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              Whether you need a campaign, content production, a website, software, or a complete 360 growth
              system, send us the brief and we will get back with the best next step.
            </p>

            {/* Symmetrical Button Pair (52px Height + Arrows) */}
            <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href={contact.whatsapp}>
                Talk on WhatsApp
              </PosterButton>
              <PosterButton href={`mailto:${contact.email}`} variant="outline">
                Email the team
              </PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical SoftWeb Editorial Marquee Ticker */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Contact action ticker</p>
        <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
          {repeatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 px-6">
              <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
                {item}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-frame-accent" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
