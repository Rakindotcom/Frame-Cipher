import Link from 'next/link'

/**
 * Selected creative / design work archive.
 * Mirrors the visual language of WebsitePortfolioPreview and VideoPortfolioPreview
 * so branding, design, graphics and motion pages can surface real creative proof.
 */
export const designArchive = Array.from({ length: 25 }, (_, index) => ({
  number: index + 1,
  src: `/${index + 1}.webp`,
  label: 'Selected visual',
}))

export default function DesignPortfolioPreview({
  items = null,
  limit = 4,
  startIndex = 0,
  eyebrow = 'Selected creative work',
  title = 'Creative work that carries the brand.',
  description = null,
  buttonText = 'View full creative archive →',
  buttonHref = '/projects#branding-work',
}) {
  const source = items && items.length > 0 ? items : designArchive
  const displayed = source.slice(startIndex, startIndex + limit)

  if (!displayed || displayed.length === 0) return null

  const gridColsClass =
    displayed.length === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : displayed.length === 2
      ? 'sm:grid-cols-2'
      : displayed.length === 1
      ? 'max-w-xl mx-auto'
      : 'md:grid-cols-3'

  return (
    <section
      id="design-portfolio"
      className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              {eyebrow}
            </p>
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
          {displayed.map((work, idx) => (
            <article
              key={work.src || idx}
              className="group flex flex-col overflow-hidden border-2 border-frame-border bg-frame-bg transition-colors hover:border-frame-accent"
            >
              <Link href={buttonHref} aria-label="View creative archive" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-frame-muted">
                  <img
                    src={work.src}
                    alt={`Frame Cipher selected creative work ${work.number || idx + 1}`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute right-3 top-3 border-2 border-frame-border bg-frame-bg px-2.5 py-1.5 font-mono text-xs font-bold leading-none text-frame-accent">
                    {String(work.number || idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-frame-accent">
                  {work.label || 'Creative archive'}
                </span>
                <p className="mt-2 text-xs md:text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
                  {work.summary ||
                    'Visual identity, campaign graphics, packaging, and social-ready design produced in-house.'}
                </p>
                <Link
                  href={buttonHref}
                  className="mt-auto pt-4 inline-flex text-xs font-black uppercase tracking-tighter text-frame-fg transition hover:text-frame-accent"
                >
                  Open in archive &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
