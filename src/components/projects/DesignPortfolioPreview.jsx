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
      className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-purple-300">
              {eyebrow}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              {title}
            </h2>
            {description && (
              <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
                {description}
              </p>
            )}
          </div>
          <Link
            href={buttonHref}
            className="group inline-flex min-h-[48px] h-[48px] items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-6 text-[14px] font-medium leading-none text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] shrink-0 whitespace-nowrap"
          >
            <span>{buttonText.replace('→', '').trim()}</span>
            <span
              aria-hidden="true"
              className="ml-1.5 text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0"
            >
              &rarr;
            </span>
          </Link>
        </div>

        <div className={`grid gap-6 ${gridColsClass}`}>
          {displayed.map((work, idx) => (
            <article
              key={work.src || idx}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl"
            >
              <Link href={buttonHref} aria-label="View creative archive" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                  <img
                    src={work.src}
                    alt={`Frame Cipher selected creative work ${work.number || idx + 1}`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-2.5 py-1 font-mono text-xs font-medium text-white/90">
                    {String(work.number || idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-5 justify-between">
                <div>
                  <span className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-purple-400">
                    {work.label || 'Creative archive'}
                  </span>
                  <p className="mt-2 text-xs md:text-sm font-normal leading-relaxed text-zinc-300">
                    {work.summary ||
                      'Visual identity, campaign graphics, packaging, and social-ready design produced in-house.'}
                  </p>
                </div>
                <Link
                  href={buttonHref}
                  className="mt-4 pt-3 border-t border-white/[0.08] inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Open in archive</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
