import Image from 'next/image'
import Link from 'next/link'
import { growthPortfolio, resolveGrowthImagePath } from '../data/growthWork'

const paidAds = growthPortfolio.filter((project) => project.category === 'Paid Ads')
const seoProjects = growthPortfolio.filter((project) => project.category === 'SEO')

export default function GrowthPortfolioSection() {
  return (
    <section id="performance-work" className="scroll-mt-28 border-t-2 border-frame-border px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <header className="grid gap-7 border-b-2 border-frame-border pb-9 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.7fr)] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              Paid media + organic search
            </p>
            <h2 className="mt-4 max-w-5xl font-heading text-[clamp(2.7rem,6vw,6rem)] font-bold uppercase leading-[0.84] tracking-tighter text-frame-fg">
              Performance work, curated.
            </h2>
          </div>
          <p className="max-w-3xl text-base font-medium leading-snug text-frame-muted-fg md:text-xl">
            A focused view of the campaigns and search programs we have shipped. Scan the
            outcomes here, then open a case study for the complete strategy and evidence.
          </p>
        </header>

        <dl className="grid gap-px border-x-2 border-b-2 border-frame-border bg-frame-border sm:grid-cols-3">
          <PortfolioStat value="334" label="Paid campaigns represented" />
          <PortfolioStat value="$9.98K" label="Tracked media spend" />
          <PortfolioStat value="03" label="SEO growth programs" />
        </dl>

        <div className="pt-14 md:pt-20">
          <SectionHeading number="01" title="Paid advertising" count="07 projects" />
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
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

        <div className="pt-16 md:pt-24">
          <SectionHeading number="02" title="Search growth" count="03 projects" />
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
    <div className="bg-frame-muted px-5 py-6 md:px-7 md:py-8">
      <dt className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-frame-muted-fg">{label}</dt>
      <dd className="mt-3 font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-accent md:text-5xl">
        {value}
      </dd>
    </div>
  )
}

export function SectionHeading({ number, title, count }) {
  return (
    <div className="flex flex-col gap-4 border-b-2 border-frame-border pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-end gap-4">
        <span className="font-heading text-2xl font-bold leading-none text-frame-accent">{number}</span>
        <h3 className="font-heading text-4xl font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg md:text-6xl">
          {title}
        </h3>
      </div>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-frame-muted-fg">{count}</p>
    </div>
  )
}

export function ProjectCard({ project, number, showSummary = false, className = '' }) {
  return (
    <article className={`group flex min-w-0 flex-col overflow-hidden border-2 border-frame-border bg-frame-bg transition-colors duration-300 hover:border-frame-accent ${className}`}>
      <Link
        href={`/case-studies/${project.slug}`}
        className="relative block aspect-[16/9] overflow-hidden border-b-2 border-frame-border bg-frame-muted focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-frame-accent"
        aria-label={`Read ${project.client} case study`}
      >
        <Image
          src={resolveGrowthImagePath(project.image)}
          alt={`${project.client} ${project.category.toLowerCase()} results`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
        />
        <span className="absolute right-3 top-3 border-2 border-frame-border bg-frame-bg px-2.5 py-1.5 font-heading text-lg font-bold leading-none text-frame-accent">
          {String(number).padStart(2, '0')}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-frame-accent">
          {project.category === 'Paid Ads' ? 'Meta advertising' : project.tags[0]}
        </p>
        <h4 className="mt-3 font-heading text-3xl font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
          {project.client}
        </h4>
        {showSummary && (
          <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
            {project.summary}
          </p>
        )}

        <div className="mt-auto pt-5">
          <MetricPair metrics={project.metrics} className="" />
        </div>

        <Link
          href={`/case-studies/${project.slug}`}
          className="mt-5 inline-flex items-center justify-between border-t-2 border-frame-border pt-4 text-xs font-black uppercase tracking-[0.16em] text-frame-fg transition-colors hover:text-frame-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
        >
          View case study
          <span className="text-lg text-frame-accent" aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}

export function MetricPair({ metrics, className = 'mt-8' }) {
  return (
    <dl className={`grid grid-cols-2 gap-px border border-frame-border bg-frame-border ${className}`}>
      {metrics.map(([value, label]) => (
        <div key={label} className="bg-frame-muted p-3.5">
          <dt className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-frame-muted-fg">
            {label}
          </dt>
          <dd className="mt-2 font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-2xl">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
