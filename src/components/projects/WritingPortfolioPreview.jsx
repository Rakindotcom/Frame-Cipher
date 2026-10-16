/**
 * Writing portfolio preview.
 *
 * Renders real, publicly readable writing samples (video scripts, blogs,
 * website copy, product copy, ads, landing pages, strategy docs) as a grid of
 * linked cards. Mirrors the visual language of WebsitePortfolioPreview and
 * VideoPortfolioPreview so writing pages match the rest of the site.
 */
import {
  contentWritingSamples,
  videoScriptSamples,
  filterWritingSamples,
} from '../../data/writingWork'

export default function WritingPortfolioPreview({
  type = 'content',
  category = null,
  items = null,
  eyebrow = 'Selected writing work',
  title = 'Writing portfolio.',
  description = null,
  archiveHref = null,
  archiveLabel = 'Browse full archive →',
  columns = 3,
}) {
  const source =
    items && items.length > 0
      ? items
      : type === 'video'
      ? videoScriptSamples
      : contentWritingSamples

  const categories = category
    ? Array.isArray(category)
      ? category
      : [category]
    : null

  const samples = filterWritingSamples(source, categories)
  if (samples.length === 0) return null

  const gridColsClass =
    columns === 2
      ? 'md:grid-cols-2'
      : columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section
      id="writing-portfolio"
      className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
                {description}
              </p>
            )}
          </div>
          {archiveHref && (
            <a
              href={archiveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center border-2 border-frame-border px-5 py-3 text-center text-sm font-black uppercase tracking-tighter text-frame-fg transition hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
            >
              {archiveLabel}
            </a>
          )}
        </div>

        <div className={`grid gap-5 ${gridColsClass}`}>
          {samples.map((sample, idx) => (
            <article
              key={`${sample.url}-${idx}`}
              className="group flex flex-col border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="border border-frame-accent/50 bg-frame-accent/10 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-frame-accent">
                  {sample.category}
                </span>
                {sample.client && (
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-frame-muted-fg">
                    {sample.client}
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-heading text-lg font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-xl">
                {sample.title}
              </h3>

              <a
                href={sample.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-frame-fg transition hover:text-frame-accent"
              >
                Read sample
                <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
