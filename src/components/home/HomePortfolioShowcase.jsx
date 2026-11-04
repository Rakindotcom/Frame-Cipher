import Link from 'next/link'
import SectionButton from './SectionButton'
import { websiteProjects } from '../../data/websiteProjects'
import { growthPortfolio, resolveGrowthImagePath } from '../../data/growthWork'

const websiteShowcase = websiteProjects.slice(0, 3)
const seoShowcase = growthPortfolio.filter((item) => item.category === 'SEO').slice(0, 3)

function PortfolioCard({ item, type }) {
  const isWebsite = type === 'Website'
  const image = isWebsite ? item.screenshot : resolveGrowthImagePath(item.image)
  const href = isWebsite ? item.url : `/case-studies/${item.slug}`

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
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
          <h3 className="font-heading text-xl sm:text-2xl font-medium text-white transition-colors group-hover:text-frame-accent">
            {item.name || item.client}
          </h3>
          <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] text-zinc-400">
            {isWebsite ? item.platform : `${type} · ${item.category}`}
          </span>
        </div>

        <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-200">
          {item.summary}
        </p>

        {!isWebsite && item.metrics?.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-4">
            {item.metrics.slice(0, 2).map(([value, label]) => (
              <div key={`${value}-${label}`} className="border-l-2 border-frame-accent pl-3">
                <span className="block font-heading text-lg font-medium text-white tabular-nums">{value}</span>
                <span className="block text-[10px] text-zinc-400">{label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/[0.08]">
          <Link
            href={href}
            target={isWebsite ? '_blank' : undefined}
            rel={isWebsite ? 'noreferrer' : undefined}
            className="group inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98]"
          >
            <span>{isWebsite ? 'Visit website' : 'Read SEO case study'}</span>
            <span aria-hidden="true" className="ml-2 text-base transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
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
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Work that looks good <span className="italic text-frame-accent">and performs.</span>
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Explore selected websites we have built and SEO campaigns backed by search visibility, traffic, and content results.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-heading text-2xl font-medium text-white sm:text-3xl">Website portfolio</h3>
          <SectionButton href="/projects">View all work</SectionButton>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {websiteShowcase.map((item) => <PortfolioCard key={item.name} item={item} type="Website" />)}
        </div>

        <div className="mb-8 mt-20 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-heading text-2xl font-medium text-white sm:text-3xl">SEO portfolio</h3>
          <SectionButton href="/case-studies">View case studies</SectionButton>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {seoShowcase.map((item) => <PortfolioCard key={item.slug} item={item} type="SEO" />)}
        </div>
      </div>
    </section>
  )
}
