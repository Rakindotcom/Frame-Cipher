import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import { ChevronRight } from 'lucide-react'

const inlineLink = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-frame-accent hover:text-frame-accent transition-colors font-medium"

export default function ServicesHero({ totalServices, pillarNames = [] }) {
  const baseItems = pillarNames.length > 0 ? pillarNames : [
    'Strategy',
    'Paid Advertising',
    'Content Creation',
    'Video Production',
    'Website Design & Development',
    'App Development',
    'SEO',
  ]
  const repeatedItems = [...baseItems, ...baseItems, ...baseItems]

  return (
    <>
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
            <Link href="/" className="shrink-0 hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0 text-zinc-600" />
            <span className="shrink-0 text-frame-accent">Services</span>
          </nav>

          <div className="space-y-6 max-w-5xl">
            {/* Display Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.94] tracking-tight text-white">
              Marketing, technology &amp; creative solutions{' '}
              <span className="italic text-frame-accent">
                built around your business.
              </span>
            </h1>

            {/* Editorial Description with Preserved Internal Links */}
            <p className="max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              From <Link href="/services/website-design-development" className={inlineLink}>websites</Link> and{' '}
              <Link href="/services/app-development" className={inlineLink}>apps</Link> to{' '}
              <Link href="/services/seo" className={inlineLink}>search</Link>,{' '}
              <Link href="/services/paid-advertising" className={inlineLink}>paid media</Link>,{' '}
              <Link href="/services/social-media-management" className={inlineLink}>social</Link>,{' '}
              <Link href="/services/content-writing" className={inlineLink}>writing</Link>, and{' '}
              <Link href="/services/content-creation" className={inlineLink}>production</Link>, every service
              is connected to one accountable growth system.
            </p>

            {/* Symmetrical Button Pair with 52px Height & Hover Arrows */}
            <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/contact">
                Start a Project
              </PosterButton>
              <PosterButton href="/services#all-services" variant="outline">
                Explore 74+ Services
              </PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical SoftWeb Editorial Marquee Ticker */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Core service capabilities marquee ticker</p>
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
