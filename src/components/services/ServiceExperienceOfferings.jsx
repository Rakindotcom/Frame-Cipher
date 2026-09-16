import { cleanServiceText as cleanText } from '../../data/serviceContent'

const surface = 'border border-white/10 bg-white/[0.035]'

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" fill="none">
      <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

export default function ServiceExperienceOfferings({ isPillar, service }) {
  if (isPillar || !service.offerings?.length) return null

  return (
    <section className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Scope of work" title="What we deliver">
          A practical breakdown of the strategy, production, and technical work included in this service.
        </SectionHeading>
        <div className="grid gap-4 lg:grid-cols-2">
          {service.offerings.map((offering, index) => (
            <article key={`${offering.title}-${index}`} className={`${surface} rounded-3xl p-7 md:p-9`}>
              <div className="flex items-start gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-sm font-bold text-violet-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold leading-snug text-white md:text-2xl">
                    {cleanText(offering.title)}
                  </h3>
                  {offering.description && (
                    <p className="mt-4 text-[15px] leading-7 text-zinc-400">
                      {cleanText(offering.description)}
                    </p>
                  )}
                </div>
              </div>
              {offering.bullets?.length > 0 && (
                <ul className="mt-7 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                  {offering.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm leading-6 text-zinc-300">
                      <CheckIcon />
                      <span>{cleanText(bullet)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
