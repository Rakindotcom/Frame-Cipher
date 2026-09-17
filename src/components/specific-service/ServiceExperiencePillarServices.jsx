import Link from 'next/link'

const surface = 'border border-white/10 bg-white/[0.035]'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
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

function cleanName(value = '') {
  return String(value || '')
    .replace(/ Service Page$/i, '')
    .replace(/ Services? in Bangladesh$/i, '')
    .trim()
}

export default function ServiceExperiencePillarServices({
  isPillar,
  subServices,
  serviceName,
  getHeroCopy,
}) {
  if (!isPillar || !subServices?.length) return null

  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Specialized capabilities"
          title={`Everything inside ${serviceName}`}
        >
          Choose the focused service that matches your immediate goal, or combine several into one coordinated engagement.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {subServices.map((sub, index) => (
            <Link
              key={sub.slug}
              href={`/services/${sub.slug}`}
              className={`${surface} group flex min-h-64 flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/[0.07]`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.18em] text-violet-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition group-hover:border-violet-400/40 group-hover:text-violet-200">
                  <ArrowIcon />
                </span>
              </div>
              <h3 className="mt-10 font-heading text-2xl font-semibold leading-tight tracking-tight text-white">
                {cleanName(sub.sheetTitle)}
              </h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-400">
                {getHeroCopy(sub)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
