import Link from 'next/link'
import { contact } from '../../data/agency'
import PosterButton from '../home/PosterButton'
import { ChevronRight, Terminal } from 'lucide-react'

const contactMarqueeItems = [
  'Name the Goal',
  'Share the Brief',
  'Select the Architecture',
  'Launch the Next Move',
  'Enterprise SLA Delivery',
  'Direct Executive Line',
]

const baseItems = [...contactMarqueeItems, ...contactMarqueeItems]
const repeatedItems = [...baseItems, ...baseItems]

export default function ContactHero() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] px-4 pb-20 pt-28 sm:px-6 sm:pt-36 md:px-8 md:pb-24 md:pt-40 lg:pt-44">
        {/* Linear / Raycast Atmospheric Ambient Radial Glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)] blur-[90px]"
          aria-hidden="true"
        />

        {/* Precision Architectural Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          aria-hidden="true"
        />

        {/* 360 Watermark Background Mark */}
        <div
          className="pointer-events-none absolute right-0 top-6 -z-10 select-none font-heading text-[48vw] font-medium leading-none text-white/[0.02] md:-right-6 md:top-10 md:text-[24vw]"
          aria-hidden="true"
        >
          360
        </div>

        <div className="mx-auto w-full max-w-7xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-purple-600">Contact</span>
          </nav>

          <div className="space-y-6 max-w-4xl">
            {/* Display Heading H1: Two-Tone Solid Pure White + Signature Deep Purple */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.96]">
              <span className="block text-highlighted">Bring us the problem.</span>
              <span className="block text-purple-600">We build the solution.</span>
            </h1>

            {/* Editorial Description */}
            <p className="max-w-3xl text-base font-normal leading-relaxed text-white sm:text-lg md:text-xl">
              Whether you need full-stack software, mathematical paid media, cinematic video production, or a complete 360 growth operating system, send us the brief and our executive team will get back to you with the exact strategic roadmap.
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

            {/* Quick CLI Command Box */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1.5 font-mono text-xs text-zinc-300">
                <Terminal className="h-3.5 w-3.5 text-purple-600" />
                <span className="text-zinc-500">$</span>
                <span>npx frame-cipher brief --direct</span>
              </div>
              <span className="font-mono text-xs text-zinc-500">
                Dhaka Studio ECB Chattar · 20+ Countries Served
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Marquee Ticker */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Contact action ticker</p>
        <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
          {repeatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 px-6">
              <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
                {item}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-purple-600" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
