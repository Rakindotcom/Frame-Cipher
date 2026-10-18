import Link from 'next/link'
import { getWebsitesByCategory } from '../../data/websiteProjects'

function getPlatformBadge(platform) {
  if (platform === 'Shopify') {
    return {
      label: 'Shopify Store',
      className:
        'border border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    }
  }
  if (platform === 'WordPress') {
    return {
      label: 'WordPress CMS',
      className:
        'border border-blue-500/50 bg-blue-500/10 text-blue-600 dark:text-blue-400',
    }
  }
  return {
    label: 'React / Next.js',
    className:
      'border border-frame-accent/50 bg-frame-accent/10 text-frame-accent',
  }
}

export default function WebsitePortfolioPreview({
  category = '',
  items = null,
  limit = 4,
  eyebrow = 'Selected website work',
  title = 'Websites built to move people forward.',
  description = null,
  buttonText = 'View more websites →',
  buttonHref = '/projects#website-work',
}) {
  const displayedWebsites = items || getWebsitesByCategory(category, limit)

  if (!displayedWebsites || displayedWebsites.length === 0) return null

  const gridColsClass =
    displayedWebsites.length === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : displayedWebsites.length === 2
      ? 'sm:grid-cols-2'
      : displayedWebsites.length === 1
      ? 'max-w-xl mx-auto'
      : 'md:grid-cols-3'

  return (
    <section id="website-portfolio" className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">{eyebrow}</p>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base md:text-lg font-medium text-frame-muted-fg leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <Link
            href={buttonHref}
            className="inline-flex min-h-12 items-center justify-center border-2 border-frame-border px-5 py-3 text-center text-sm font-black uppercase tracking-tighter text-frame-fg transition hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg shrink-0"
          >
            {buttonText}
          </Link>
        </div>

        <div className={`grid gap-5 ${gridColsClass}`}>
          {displayedWebsites.map((site) => {
            const badge = getPlatformBadge(site.platform)
            return (
              <article
                key={site.domain || site.name}
                className="group flex flex-col overflow-hidden border-2 border-frame-border bg-frame-bg transition-colors hover:border-frame-accent"
              >
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${site.name}`}
                  className="block"
                >
                  <div className="flex items-center gap-2 border-b-2 border-frame-border px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-frame-accent" />
                    <span className="h-2.5 w-2.5 rounded-full bg-frame-muted-fg/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-frame-muted-fg/30" />
                    <span className="ml-2 truncate text-xs font-black uppercase tracking-[0.16em] text-frame-muted-fg">
                      {site.domain}
                    </span>
                  </div>
                  <div className="aspect-video overflow-hidden bg-frame-muted">
                    <img
                      src={site.screenshot}
                      alt={`${site.name} website screenshot`}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                      {site.category}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tighter text-frame-fg">
                    {site.name}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
                    {site.summary}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-xs md:text-sm font-black uppercase tracking-tighter text-frame-fg transition hover:text-frame-accent"
                    >
                      Visit website &rarr;
                    </a>
                    {site.caseStudyUrl && (
                      <Link
                        href={site.caseStudyUrl}
                        className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg underline underline-offset-4"
                      >
                        Case Study
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
