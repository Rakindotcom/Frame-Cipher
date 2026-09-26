import { SectionIntro, PosterButton } from '../../../Kinetic'

const standards = [
  {
    title: 'One In-House Team',
    body: 'Strategy, content creation, video editing, publishing, community management, and reporting can be handled by one in-house team. This keeps communication simpler and allows performance insights to inform future content decisions.',
  },
  {
    title: 'Instagram-Specific Strategy',
    body: 'We do not simply copy the same content from Facebook or another platform and publish it on Instagram. Content is adapted to Instagram’s formats, audience behavior, visual environment, discovery opportunities, and business objectives.',
  },
  {
    title: 'Reels & Short-Form Video Capability',
    body: 'Reels are an important part of modern Instagram content strategy. Our team can handle concept development, hooks, scripts, editing, captions, visual treatment, covers, and publishing preparation based on your content requirements.',
    points: ['Concept development', 'Hooks', 'Scripts', 'Editing', 'Captions', 'Visual treatment', 'Covers', 'Publishing preparation'],
  },
  {
    title: 'Human Review & Approval',
    body: 'Your brand should not publish content that does not match your voice or business standards. Content follows an agreed review and approval workflow before publication.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and supports businesses in Bangladesh and international markets. For international campaigns, we consider the target audience, market context, language, cultural expectations, competition, and business objectives rather than simply replicating one market’s content calendar.',
  },
  {
    title: 'Client-Owned Accounts & Secure Access',
    body: 'Your Instagram account and related business assets should remain under your ownership. We use appropriate account permissions and access workflows rather than unnecessarily requiring clients to share personal passwords.',
  },
  {
    title: 'Clear Reporting & Communication',
    body: 'You should understand what is being created, what is being published, and what the performance data shows. Our reporting focuses on useful account, content, audience, and business insights rather than sending a collection of unexplained metrics.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher standard"
          title="Why Choose Framecipher for Instagram Management"
        >
          Instagram work handled by people who know the platform, with clear boundaries between what
          your team controls and what the platform controls.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard, index) => (
            <article key={standard.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standard {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                  {standard.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {standard.body}
                </p>
              </div>

              {standard.points?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 md:text-sm">
                  {standard.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Organic vs paid
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
              Paid Instagram advertising is a separate service from organic Instagram management, so
              both can be scoped independently.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
