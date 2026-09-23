import { insightPosts } from '../../data/agency'
import { InversionCard } from '../Kinetic'
import SectionButton from './SectionButton'

export default function HomeRecentInsights() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              Blog / Dispatches
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              Useful strategy, not soft thought leadership.
            </h2>
          </div>
          <SectionButton href="/blog">View all blog posts</SectionButton>
        </div>

        <div className="grid bg-frame-border gap-px md:grid-cols-3">
          {insightPosts.map((post, index) => (
            <InversionCard
              key={post.title}
              eyebrow={post.category}
              title={post.title}
              number={String(index + 1).padStart(2, '0')}
              href="/blog"
            >
              <p>{post.description}</p>
            </InversionCard>
          ))}
        </div>
      </div>
    </section>
  )
}