import Link from 'next/link'
import { services } from '../../data/agency'
import { resolveServiceHref } from '../../lib/seo/internalLinks'

export default function HomeServicesPulse() {
  const allServices = services

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              Services with one pulse
            </h2>
          </div>
          <div className="border-l border-white/[0.08] pl-6">
            <p className="text-base font-normal leading-relaxed text-muted md:text-lg">
              Pick one service or wire the whole growth system together. The point is alignment:
              message, media, web, software, campaigns, and reporting moving in the same direction.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service, index) => (
            <div
              key={service.slug}
              className="group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-all duration-300 hover:border-white/[0.16] md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    {service.navTitle}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tracking-wider">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-highlighted sm:text-3xl">
                  <Link
                    href={resolveServiceHref(service.slug) || `/services/${service.slug}`}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm font-normal leading-relaxed text-muted transition-colors duration-200 group-hover:text-default">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <span className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 text-[13px] font-medium text-white transition-all duration-200 group-hover:border-purple-600/50 group-hover:bg-purple-600/10 group-hover:text-white">
                  <span>{service.cta}</span>
                  <span
                    aria-hidden="true"
                    className="ml-2 text-base text-zinc-400 transition-transform duration-200 group-hover:translate-x-1.5 group-hover:text-purple-600"
                  >
                    &rarr;
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
