import Image from 'next/image'
import Link from 'next/link'
import AnimatedCounter from './home/AnimatedCounter'
import { growthPortfolio, resolveGrowthImagePath } from '../data/growthWork'
import { ArrowRight } from 'lucide-react'

const paidAds = growthPortfolio.filter((project) => project.category === 'Paid Ads')
const seoProjects = growthPortfolio.filter((project) => project.category === 'SEO')

export default function GrowthPortfolioSection() {
  return (
    <section id="performance-work" className="relative isolate scroll-mt-28 border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-7 border-b border-white/[0.08] pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.7fr)] lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
              <span>Performance Portfolio</span>
            </div>
            <h2 className="max-w-5xl font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Performance Work, Curated Across Channels
            </h2>
          </div>
          <p className="max-w-3xl text-sm font-normal leading-relaxed text-zinc-300 md:text-base">
            A focused view of the campaigns and search programs we have shipped. Scan the
            outcomes here, then open a case study for the complete strategy and evidence.
          </p>
        </header>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <PortfolioStat value="334" label="Paid campaigns represented" />
          <PortfolioStat value="$9.98K" label="Tracked media spend" />
          <PortfolioStat value="03" label="SEO growth programs" />
        </dl>

        <div className="pt-16 md:pt-20">
          <SectionHeading number="01" title="Paid advertising" count="07 projects" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
            {paidAds.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                number={index + 1}
                className={index < 4 ? 'xl:col-span-3' : 'xl:col-span-4'}
              />
            ))}
          </div>
        </div>

        <div className="pt-20 md:pt-24">
          <SectionHeading number="02" title="Search growth" count="03 projects" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {seoProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} number={index + 1} showSummary />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function PortfolioStat({ value, label }) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-[#121214] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-600/40 hover:bg-[#18181B] md:p-8 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent hover:before:via-purple-600/50 before:to-transparent before:transition-all">
      <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-400">{label}</dt>
      <dd className="mt-3 font-heading text-4xl sm:text-5xl font-semibold uppercase leading-none tracking-tight text-white tabular-nums md:text-5xl">
        <AnimatedCounter value={value} duration={1200} replay={true} suffixClassName="text-purple-600 font-semibold" />
      </dd>
    </div>
  )
}

export function SectionHeading({ number, title, count }) {
  return (
    <div className="flex flex-col gap-3 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs uppercase tracking-[1.1px] text-purple-600">/{number}</span>
        <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
          {title}
        </h3>
      </div>
      <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">{count}</p>
    </div>
  )
}

export function ProjectCard({ project, number, showSummary = false, className = '' }) {
  return (
    <article className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-600/40 hover:bg-[#151518] relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent hover:before:via-purple-600/50 before:to-transparent before:transition-all ${className}`}>
      <Link
        href={`/case-studies/${project.slug}`}
        className="relative block aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-zinc-950 focus:outline-none"
        aria-label={`Read ${project.client} case study`}
      >
        <Image
          src={resolveGrowthImagePath(project.image)}
          alt={`${project.client} ${project.category.toLowerCase()} results`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-purple-400 font-semibold">
            {project.category === 'Paid Ads' ? 'Meta advertising' : project.tags[0]}
          </p>
          <span className="font-mono text-[11px] text-zinc-500 tabular-nums">
            #{String(number).padStart(2, '0')}
          </span>
        </div>
        <h4 className="mt-2 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
          <Link href={`/case-studies/${project.slug}`} className="hover:text-white transition-colors">
            {project.client}
          </Link>
        </h4>
        {showSummary && (
          <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400 line-clamp-2">
            {project.summary}
          </p>
        )}

        <div className="mt-auto pt-6">
          <MetricPair metrics={project.metrics} className="" />
        </div>

        <div className="mt-6 border-t border-white/[0.08] pt-4">
          <Link
            href={`/case-studies/${project.slug}`}
            className="group/btn inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-purple-600/40 hover:bg-white/[0.08]"
          >
            <span>View case study</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:text-purple-400" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function MetricPair({ metrics, className = 'mt-6' }) {
  return (
    <dl className={`grid grid-cols-[repeat(auto-fit,minmax(min(100%,8rem),1fr))] gap-2 rounded-xl border border-white/[0.08] bg-[#18181B] p-3 ${className}`}>
      {metrics.map(([value, label]) => (
        <div key={label} className="border-l-2 border-purple-600 pl-3 py-0.5">
          <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            {label}
          </dt>
          <dd className="mt-1 font-heading text-lg font-medium uppercase leading-none tracking-tight text-white tabular-nums md:text-xl">
            <AnimatedCounter value={value} duration={1200} replay={true} suffixClassName="text-purple-600 font-semibold" />
          </dd>
        </div>
      ))}
    </dl>
  )
}
