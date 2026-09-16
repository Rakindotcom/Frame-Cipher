import Link from 'next/link'

const surface = 'border border-white/10 bg-white/[0.035]'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function cleanName(value = '') {
  return String(value || '')
    .replace(/ Service Page$/i, '')
    .replace(/ Services? in Bangladesh$/i, '')
    .trim()
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{children}</p>}
    </div>
  )
}

export default function ServiceExperienceRelated({ relatedServices }) {
  if (!relatedServices?.length) return null

  return (
    <section className="border-t border-white/10 bg-white/[0.02] px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Keep exploring" title="Related services" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((related) => (
            <Link
              key={related.slug}
              href={`/services/${related.slug}`}
              className={`${surface} group rounded-2xl p-6 transition hover:border-violet-400/40 hover:bg-violet-400/[0.06]`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
                {cleanName(related.pillarParent) || 'Service pillar'}
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-white">
                {cleanName(related.sheetTitle)}
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 group-hover:text-violet-200">
                View service <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
