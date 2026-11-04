import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import { ChevronRight } from 'lucide-react'

const aboutMarqueeItems = [
  'Multinational Tech Architecture',
  'Dhaka Engineering Campus',
  '20+ Countries Served',
  'Full-Stack Software',
  'Proprietary Growth OS',
  'Global Enterprise Standards',
  'Algorithmic Paid Media',
  '100% In-House Operators',
]

const baseItems = [...aboutMarqueeItems, ...aboutMarqueeItems]
const duplicatedItems = [...baseItems, ...baseItems]

export default function AboutHero() {
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
            <span className="text-frame-accent">About</span>
          </nav>

          <div className="space-y-6 max-w-5xl">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.94] tracking-tight text-white">
              A Multinational Tech &amp; Growth Powerhouse{' '}
              <span className="italic text-frame-accent">
                Born in Bangladesh.
              </span>
            </h1>

            <p className="max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              Frame Cipher was founded on an unapologetic ambition: to build a tier-one multinational technology, media, and growth engineering company anchored in Bangladesh. We combine full-stack software development, brand architecture, cinematic media production, and mathematical performance marketing under one unified operating system, serving high-growth startups and global enterprises across 20+ countries.
            </p>

            {/* Symmetrical CTA Button Pair with Arrow & Identical Height */}
            <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/contact">
                Schedule Global Consultation
              </PosterButton>
              <PosterButton href="/services" variant="outline">
                Explore 74+ Services
              </PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* Modern SoftWeb Editorial Moving Text Rotation (Matching HomeTextMarquee & Master Design System) */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Frame Cipher core credentials ticker</p>
        <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
          {duplicatedItems.map((item, index) => (
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
