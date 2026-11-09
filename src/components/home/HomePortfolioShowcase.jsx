import Link from 'next/link'
import SectionButton from './SectionButton'
import AnimatedCounter from './AnimatedCounter'
import { websiteProjects } from '../../data/websiteProjects'
import { growthPortfolio, resolveGrowthImagePath } from '../../data/growthWork'

const websiteShowcase = websiteProjects.slice(0, 3)
const seoShowcase = growthPortfolio.filter((item) => item.category === 'SEO').slice(0, 3)

function PortfolioCard({ item, type }) {
  const isWebsite = type === 'Website'
  const image = isWebsite ? item.screenshot : resolveGrowthImagePath(item.image)
  const href = isWebsite ? item.url : `/case-studies/${item.slug}`

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-zinc-950">
        <img
          src={image}
          alt={`${item.name || item.client} ${type.toLowerCase()} portfolio preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight">
            {item.name || item.client}
          </h4>
          <span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300">
            {isWebsite ? item.platform : `${type} · ${item.category}`}
          </span>
        </div>

        <p className="mt-4 text-sm font-normal leading-relaxed text-white transition-colors group-hover:text-default">
          {item.summary}
        </p>

        {!isWebsite && item.metrics?.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3 rounded-lg border border-white/[0.08] bg-[#18181B] p-3.5">
            {item.metrics.slice(0, 2).map(([value, label], mIdx) => (
              <div key={`${value}-${label}`} className="border-l-2 border-purple-600 pl-3">
                <span className="block font-heading text-lg font-semibold text-highlighted tabular-nums">
                  <AnimatedCounter value={value} duration={1500} delay={mIdx * 120} suffixClassName="text-purple-600" />
                </span>
                <span className="block font-mono text-[10px] text-muted">{label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/[0.06]">
          <Link
            href={href}
            target={isWebsite ? '_blank' : undefined}
            rel={isWebsite ? 'noreferrer' : undefined}
            className="group/btn inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 text-[13px] font-medium text-white transition-all duration-200 hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
          >
            <span>{isWebsite ? 'Visit website' : 'Read SEO case study'}</span>
            <span
              aria-hidden="true"
              className="ml-2 text-base text-zinc-400 transition-transform duration-200 group-hover/btn:translate-x-1.5 group-hover/btn:text-purple-600"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function HomePortfolioShowcase() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            Work that looks good and performs
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-white md:text-lg">
            Explore selected websites we have built and SEO campaigns backed by search visibility, traffic, and content results.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-heading text-2xl font-semibold text-highlighted sm:text-3xl">Website portfolio</h3>
          <SectionButton href="/projects">View all work</SectionButton>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {websiteShowcase.map((item) => <PortfolioCard key={item.name} item={item} type="Website" />)}
        </div>

        <div className="mb-8 mt-20 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-heading text-2xl font-semibold text-highlighted sm:text-3xl">SEO portfolio</h3>
          <SectionButton href="/case-studies">View case studies</SectionButton>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {seoShowcase.map((item) => <PortfolioCard key={item.slug} item={item} type="SEO" />)}
        </div>
      </div>
    </section>
  )
}
