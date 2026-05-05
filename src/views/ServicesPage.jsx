import Link from 'next/link'
import { engagementModels, servicePillars, services } from '../data/agency'

export default function ServicesPage() {
  return (
    <main className="px-6 pb-24 pt-32">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Services</p>
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
            Strategy, creative, media, software, and performance systems under one roof.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
            Frame Cipher helps brands move from scattered execution to an integrated growth system:
            positioning, content, production, websites, software, campaigns, and optimization.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {servicePillars.map((pillar) => (
            <article key={pillar.title} className="border border-white/10 bg-white/[0.04] p-5">
              <h2 className="font-heading text-xl font-bold text-white">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Service architecture</p>
            <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">Choose the system your brand needs next.</h2>
          </div>
          <Link href="/contact" className="border border-white/20 px-5 py-3 text-sm font-bold text-white hover:border-cyan-300/50">
            Book a Strategy Call
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group border border-white/10 bg-[#0b0d14] p-6 transition-all hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{service.navTitle}</p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-white group-hover:text-cyan-200">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">{service.description}</p>
              <span className="mt-6 inline-block text-sm font-bold text-cyan-300">{service.cta}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Engagement models</p>
        <h2 className="mb-10 font-heading text-4xl font-bold text-white md:text-5xl">Ways to work with Frame Cipher.</h2>
        <div className="grid gap-4 lg:grid-cols-5">
          {engagementModels.map((model) => (
            <article key={model.title} className="border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-heading text-2xl font-bold text-white">{model.title}</h3>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Best for</p>
              <p className="mt-2 text-sm text-gray-300">{model.bestFor}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Includes</p>
              <p className="mt-2 text-sm leading-7 text-gray-400">{model.includes}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
