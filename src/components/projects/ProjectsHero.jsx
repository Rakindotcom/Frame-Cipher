import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import { ChevronRight } from 'lucide-react'

const inlineLink =
  'text-white underline underline-offset-4 decoration-white/30 hover:decoration-frame-accent hover:text-frame-accent transition-colors font-medium'

const projectMarqueeItems = [
  'Websites & Web Apps',
  'Cinematic Video Production',
  'Short-Form Reels & Shorts',
  'Search Engine Optimization',
  'Algorithmic Paid Advertising',
  'Brand Visual Systems',
  'High-Retention Copywriting',
  'Full 360 Growth Systems',
]

const baseItems = [...projectMarqueeItems, ...projectMarqueeItems]
const repeatedItems = [...baseItems, ...baseItems]

export default function ProjectsHero() {
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
            <span className="text-frame-accent">Projects</span>
          </nav>

          <div className="space-y-6 max-w-5xl">
            {/* Architectural Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-frame-accent border border-white/[0.08]">
                Selected Creative Archive &bull; Multi-Format Work
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-zinc-400 border border-white/[0.08]">
                Verified Client Deployments
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.96] tracking-tight text-white">
              Creative work across{' '}
              <span className="italic text-frame-accent">
                formats.
              </span>
            </h1>

            {/* Editorial Description with Preserved Internal Links */}
            <p className="max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              A comprehensive showcase of Frame Cipher work across{' '}
              <Link href="/services/paid-advertising" className={inlineLink}>paid advertising</Link>,{' '}
              <Link href="/services/seo" className={inlineLink}>SEO growth</Link>,{' '}
              <Link href="/services/website-design-development" className={inlineLink}>websites</Link>,{' '}
              <Link href="/services/content-creation/video-production" className={inlineLink}>video productions</Link>, and{' '}
              <Link href="/services/content-creation/branding" className={inlineLink}>brand visual systems</Link>.
            </p>

            {/* Symmetrical Button Pair (52px Height + Arrows) */}
            <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/contact">
                Start a Project
              </PosterButton>
              <PosterButton href="#portfolio-controls" variant="outline">
                Filter Archive Work
              </PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical SoftWeb Editorial Marquee Ticker */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Project formats archive ticker</p>
        <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
          {repeatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 px-6">
              <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
                {item}
              </span>
              <span className="text-zinc-500">&middot;</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
