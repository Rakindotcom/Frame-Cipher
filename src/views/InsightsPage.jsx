import Link from 'next/link'
import { insightPosts } from '../data/agency'

export default function InsightsPage() {
  return (
    <main className="px-6 pb-24 pt-32">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Insights</p>
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
            Practical thinking on brand, content, technology, and growth systems.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
            A prepared editorial structure for Frame Cipher perspectives. These article cards can become
            full posts when the team is ready to publish deeper strategy content.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
        {insightPosts.map((post) => (
          <article key={post.title} className="border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{post.category}</p>
            <h2 className="mt-4 font-heading text-2xl font-bold text-white">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-400">{post.description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-5xl border border-cyan-300/20 bg-white/[0.04] p-8 text-center md:p-12">
        <h2 className="font-heading text-4xl font-bold text-white">Need a strategy view on your next move?</h2>
        <Link href="/contact" className="mt-8 inline-block bg-white px-6 py-4 text-sm font-bold text-[#08080d]">
          Get a 360 Growth Audit
        </Link>
      </section>
    </main>
  )
}
