import Link from 'next/link'
import { services } from '../../data/agency'

export default function HomeServicesPulse() {
  const featuredServices = services.slice(0, 6)

  return (
    <section className="border-y-2 border-frame-border bg-frame-accent px-4 py-20 text-frame-accent-fg md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="font-heading text-[clamp(2.8rem,8vw,8rem)] font-bold uppercase leading-[0.82] tracking-tighter">
            Services with one pulse.
          </h2>
          <p className="text-base font-semibold leading-snug opacity-90 sm:text-xl md:text-2xl">
            Pick one service or wire the whole growth system together. The point is alignment:
            message, media, web, software, campaigns, and reporting moving in the same direction.
          </p>
        </div>

        <div className="grid bg-frame-accent-fg gap-px sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex min-h-72 flex-col justify-between bg-frame-accent p-6 text-frame-accent-fg transition-colors duration-300 hover:bg-frame-bg hover:text-frame-fg md:p-8"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] opacity-75">
                  {service.navTitle}
                </p>
                <h3 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter sm:text-3xl md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed opacity-85 md:text-base">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 pt-4">
                <span className="inline-flex items-center gap-2 border-b-2 border-current pb-1 text-xs font-black uppercase tracking-wider">
                  <span>{service.cta}</span>
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
