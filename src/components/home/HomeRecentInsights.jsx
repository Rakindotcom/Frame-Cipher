import Link from 'next/link'
import { insightPosts } from '../../data/agency'
import { InversionCard } from '../Kinetic'

export default function HomeRecentInsights() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              Insights / Signals
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              Useful strategy, not soft thought leadership.
            </h2>
          </div>
          <Link
            href="/insights"
            className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 border-2 border-frame-border bg-transparent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-fg transition-all duration-200 hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg active:scale-95 sm:text-sm md:min-h-14 md:px-8"
          >
            <span>View all insights</span>
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="grid bg-frame-border gap-px md:grid-cols-3">
          {insightPosts.map((post, index) => (
            <InversionCard
              key={post.title}
              eyebrow={post.category}
              title={post.title}
              number={String(index + 1).padStart(2, '0')}
              href="/insights"
            >
              <p>{post.description}</p>
            </InversionCard>
          ))}
        </div>
      </div>
    </section>
  )
}