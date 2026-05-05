import Link from 'next/link'
import { portfolioProjects } from '../data/agency'

export default function ServiceDetailPage({ service }) {
  const relatedProjects = portfolioProjects
    .filter((project) => project.services.some((item) => service.title.includes(item) || item.includes(service.title.split(' ')[0])))
    .slice(0, 2)

  const fallbackProjects = relatedProjects.length > 0 ? relatedProjects : portfolioProjects.slice(0, 2)

  return (
    <main className="px-6 pb-24 pt-32">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{service.title}</p>
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">{service.headline}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">{service.subheadline}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="bg-white px-6 py-4 text-sm font-bold text-[#08080d]">
              {service.cta}
            </Link>
            <Link href="/projects" className="border border-white/20 px-6 py-4 text-sm font-bold text-white">
              See Our Work
            </Link>
          </div>
        </div>
        <aside className="border border-cyan-300/20 bg-white/[0.04] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Service outcome</p>
          <p className="mt-4 text-lg leading-8 text-gray-300">{service.description}</p>
        </aside>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">What this service includes</p>
        <h2 className="mb-10 font-heading text-4xl font-bold text-white md:text-5xl">Built around concrete execution.</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {service.includes.map((item) => (
            <article key={item} className="border border-white/10 bg-[#0b0d14] p-5">
              <h3 className="font-heading text-xl font-bold text-white">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl gap-6 lg:grid-cols-2">
        <article className="border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Who it is for</p>
          <ul className="grid gap-4">
            {service.audience.map((item) => (
              <li key={item} className="border-b border-white/10 pb-4 text-gray-300 last:border-b-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Deliverables</p>
          <ul className="grid gap-4">
            {service.deliverables.map((item) => (
              <li key={item} className="border-b border-white/10 pb-4 text-gray-300 last:border-b-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Process</p>
        <h2 className="mb-10 font-heading text-4xl font-bold text-white md:text-5xl">How the workflow moves.</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {service.process.map((step, index) => (
            <article key={step} className="border border-white/10 bg-[#0b0d14] p-5">
              <p className="mb-4 text-sm font-bold text-cyan-300">0{index + 1}</p>
              <h3 className="font-heading text-xl font-bold text-white">{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Related work</p>
        <h2 className="mb-10 font-heading text-4xl font-bold text-white md:text-5xl">Relevant project structures.</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {fallbackProjects.map((project) => (
            <article key={project.name} className="overflow-hidden border border-white/10 bg-white/[0.04]">
              <div className="aspect-video bg-[#11131d]">
                <img src={project.preview} alt={project.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{project.description}</p>
                <p className="mt-5 text-sm text-gray-300">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl border border-cyan-300/20 bg-white/[0.04] p-8 text-center md:p-12">
        <h2 className="font-heading text-4xl font-bold text-white">Ready to discuss {service.title.toLowerCase()}?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Send the brief and Frame Cipher will help you shape the next strategic, creative, technical, or performance move.
        </p>
        <Link href="/contact" className="mt-8 inline-block bg-white px-6 py-4 text-sm font-bold text-[#08080d]">
          {service.cta}
        </Link>
      </section>
    </main>
  )
}
