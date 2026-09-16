import Link from 'next/link'
import { cleanServiceText as cleanText } from '../../data/serviceContent'

const surface = 'border border-white/10 bg-white/[0.035]'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" fill="none">
      <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PrimaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-violet-500 px-6 text-sm font-bold text-white shadow-[0_14px_45px_rgba(139,92,246,0.28)] transition hover:-translate-y-0.5 hover:bg-violet-400"
    >
      {children}<ArrowIcon />
    </Link>
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

export default function ServiceExperiencePricing({ service, pricing }) {
  const packages = service.pricing?.packages || []
  if (!packages.length && !pricing) return null
  const comparison = pricing?.headers[0] === 'Features'
  const mobileCards = !pricing ? [] : comparison
    ? pricing.headers.slice(1).map((name, index) => ({
      name,
      fields: pricing.rows.map((row) => ({ label: row[0], value: row[index + 1] })),
    }))
    : pricing.rows.map((row) => ({
      name: row[0],
      fields: pricing.headers.slice(1).map((label, index) => ({ label, value: row[index + 1] })),
    }))

  return (
    <section id="pricing" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto min-w-0 max-w-7xl">
        <SectionHeading eyebrow="Pricing guide" title="Clear scope before commitment">
          {service.pricing?.intro === packages[0]?.name
            ? 'Choose the scope that fits your business. Final pricing is confirmed after a scope review.'
            : cleanText(service.pricing?.intro || 'Final pricing is confirmed after a free scope review.')}
        </SectionHeading>
        {packages.length > 0 && (
          <div className="mb-8 grid gap-4 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article key={pkg.name} className={`${surface} min-w-0 rounded-3xl p-7`}>
                <h3 className="font-heading text-2xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-5 text-2xl font-bold text-violet-300">{pkg.price}</p>
                {pkg.description && <p className="mt-3 text-sm leading-6 text-zinc-400">{pkg.description}</p>}
                {pkg.features?.length > 0 && (
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-300">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-2"><CheckIcon /><span>{feature}</span></li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        )}
        {pricing && (
          <>
            <div className="grid gap-4 md:hidden" data-pricing-mobile>
              {mobileCards.map((card) => (
                <article key={card.name} className={`${surface} min-w-0 rounded-2xl p-5`}>
                  <h3 className="font-heading text-xl font-semibold text-white">{card.name}</h3>
                  <dl className="mt-4 divide-y divide-white/10">
                    {card.fields.map(({ label, value }) => (
                      <div key={label} className="py-3">
                        <dt className="text-xs font-bold uppercase tracking-wide text-violet-300">{label}</dt>
                        <dd className="mt-1 text-sm leading-6 text-zinc-300">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
            <div className={`${surface} hidden overflow-hidden rounded-3xl md:block`}>
              <table className="w-full table-fixed text-left text-sm">
                <caption className="sr-only">Scope and pricing for {cleanName(service.sheetTitle)}</caption>
                <thead className="bg-white/[0.05]">
                  <tr>
                    {pricing.headers.map((header) => (
                      <th key={header} scope="col" className="break-words px-5 py-5 font-semibold text-white">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {pricing.rows.map((row) => (
                    <tr key={row[0]} className="transition hover:bg-white/[0.025]">
                      <th scope="row" className="break-words px-5 py-4 align-top font-semibold leading-6 text-zinc-200">
                        {row[0]}
                      </th>
                      {row.slice(1).map((cell, index) => (
                        <td key={index} className="break-words px-5 py-4 align-top leading-6 text-zinc-400">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {pricing.note && <p className="mt-5 text-sm leading-6 text-zinc-400">{pricing.note}</p>}
          </>
        )}
        <p className="mt-6 text-sm leading-6 text-zinc-400">
          Prices shown are a guide. Your proposal confirms the final scope, fee, and delivery schedule before work begins.
        </p>
        <div className="mt-6"><PrimaryLink href="/contact">Request a quote</PrimaryLink></div>
      </div>
    </section>
  )
}
