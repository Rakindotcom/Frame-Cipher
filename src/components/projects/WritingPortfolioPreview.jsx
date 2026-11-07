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
          {archiveHref && (
            <a
              href={archiveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] h-[48px] items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-6 text-[14px] font-medium leading-none text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] shrink-0 whitespace-nowrap"
            >
              <span>{archiveLabel.replace('→', '').trim()}</span>
              <span
                aria-hidden="true"
                className="ml-1.5 text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0"
              >
                &rarr;
              </span>
            </a>
          )}
        </div>

        <div className={`grid gap-6 ${gridColsClass}`}>
          {samples.map((sample, idx) => (
            <article
              key={`${sample.url}-${idx}`}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-purple-300">
                    {sample.category}
                  </span>
                  {sample.client && (
                    <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                      {sample.client}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-heading text-lg md:text-xl font-medium leading-snug tracking-tight text-white">
                  {sample.title}
                </h3>
              </div>

              <a
                href={sample.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 pt-4 border-t border-white/[0.08] inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Read sample</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
