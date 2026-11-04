import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import { ChevronRight } from 'lucide-react'

const inlineLink =
  'text-white underline underline-offset-4 decoration-white/30 hover:decoration-frame-accent hover:text-frame-accent transition-colors font-medium'

const caseStudyMarqueeItems = [
  'Meta Ads Scale',
  'Search Growth & SEO',
  '1.8M+ Ad Impressions',
  'High-Converting Websites',
  '7.2M+ Facebook Views',
  '350K+ First Short Views',
  'Audience Retention Systems',
  'Multi-Channel Growth OS',
]

const baseItems = [...caseStudyMarqueeItems, ...caseStudyMarqueeItems]
const repeatedItems = [...baseItems, ...baseItems]

export default function CaseStudiesHero() {
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
            <span className="text-frame-accent">Case Studies</span>
          </nav>

          <div className="space-y-6 max-w-5xl">
            {/* Architectural Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-frame-accent border border-white/[0.08]">
                Documented Outcomes &bull; Multi-Channel Growth
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-3 py-1 rounded-full bg-[#18181B] text-zinc-400 border border-white/[0.08]">
                13 Flagship Case Breakdowns
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.96] tracking-tight text-white">
              Documented growth across{' '}
              <span className="italic text-frame-accent">
                systems.
              </span>
            </h1>

            {/* Editorial Description with Preserved Internal Links */}
            <p className="max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              In-depth breakdowns of how Frame Cipher engineers measurable growth: from high-ROI{' '}
              <Link href="/services/paid-advertising/meta-ads" className={inlineLink}>Meta advertising</Link> campaigns and{' '}
              <Link href="/services/seo" className={inlineLink}>organic search</Link> dominance to{' '}
              <Link href="/services/website-design-development" className={inlineLink}>digital platforms</Link> and{' '}
              <Link href="/services/content-creation" className={inlineLink}>content systems</Link> built to scale.
            </p>

            {/* Symmetrical Button Pair (52px Height + Arrows) */}
            <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/contact">
                Book a Strategy Call
              </PosterButton>
              <PosterButton href="/projects" variant="outline">
                View Archive Portfolio
              </PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical SoftWeb Editorial Marquee Ticker */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Case studies outcome metrics ticker</p>
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
