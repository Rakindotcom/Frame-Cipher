import Link from 'next/link'
import { industries, servicePillars } from '../data/agency'

const principles = [
  'Strategy before production',
  'Creative that supports the offer',
  'Technology that makes growth easier to manage',
  'Clear handoffs, clear ownership, clear reporting',
]

export default function AboutPage() {
  return (
    <main className="px-6 pb-24 pt-32">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">About Frame Cipher</p>
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
            A modern agency built for brands that need strategy, content, technology, and execution under one roof.
          </h1>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-gray-400 md:text-xl">
            Frame Cipher was built for businesses that do not want scattered execution. We combine strategic
            thinking, creative production, marketing, and technology so brands can move faster from idea to
            launch and from launch to scale.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-5 lg:grid-cols-3">
        <article className="border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Why Frame Cipher exists</p>
          <h2 className="font-heading text-3xl font-bold text-white">To connect the work that growth depends on.</h2>
          <p className="mt-5 leading-8 text-gray-400">
            Many brands hire one person for ads, another for design, another for video, and another for websites.
            The result is often slow execution and campaigns that do not feel connected.
          </p>
        </article>
        <article className="border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">What problem it solves</p>
          <h2 className="font-heading text-3xl font-bold text-white">Scattered execution becomes one operating system.</h2>
          <p className="mt-5 leading-8 text-gray-400">
            We bring strategy, creative, media, software, and performance work into one workflow so content,
            platforms, campaigns, and data can support the same business goal.
          </p>
        </article>
        <article className="border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Founder story</p>
          <h2 className="font-heading text-3xl font-bold text-white">Built from creative production into growth infrastructure.</h2>
          <p className="mt-5 leading-8 text-gray-400">
            Frame Cipher began with visual execution and expanded toward the systems that make creative work
            perform: positioning, websites, campaign planning, software, and optimization.
          </p>
        </article>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Team capabilities</p>
        <h2 className="mb-10 font-heading text-4xl font-bold text-white md:text-5xl">The capability mix behind the agency.</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {servicePillars.map((pillar) => (
            <article key={pillar.title} className="border border-white/10 bg-[#0b0d14] p-6">
              <h3 className="font-heading text-2xl font-bold text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-400">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-8 lg:grid-cols-2">
        <article className="border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Operating principles</p>
          <ul className="grid gap-4">
            {principles.map((principle) => (
              <li key={principle} className="border-b border-white/10 pb-4 text-gray-300 last:border-b-0 last:pb-0">
                {principle}
              </li>
            ))}
          </ul>
        </article>
        <article className="border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">How the agency works</p>
          <p className="leading-8 text-gray-400">
            We start with the business problem, define the growth system around it, then move through strategy,
            creative direction, production, development, launch, reporting, and optimization. The goal is not to
            sell isolated services. The goal is to build the next useful system for the business.
          </p>
        </article>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Industries served</p>
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span key={industry} className="border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-gray-300">
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl border border-cyan-300/20 bg-white/[0.04] p-8 text-center md:p-12">
        <h2 className="font-heading text-4xl font-bold text-white">Want one team to help plan and execute the next move?</h2>
        <Link href="/contact" className="mt-8 inline-block bg-white px-6 py-4 text-sm font-bold text-[#08080d]">
          Book a Strategy Call
        </Link>
      </section>
    </main>
  )
}
