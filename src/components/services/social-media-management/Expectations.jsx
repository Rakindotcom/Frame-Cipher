import { SectionIntro, PosterButton } from '../../Kinetic'

const included = [
  'A clear social media strategy',
  'Platform-specific content planning',
  'A documented content calendar',
  'Original social content based on your plan',
  'Publishing and scheduling',
  'Community and inbox management',
  'Profile optimization',
  'Performance reporting',
  'Ongoing strategy adjustments',
  'Client review and approval before publishing',
]

export default function Expectations() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service expectations"
          title="What You Can Expect From Our Service"
        >
          You can expect a structured social media management process rather than a simple
          monthly content drop.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <ul className="grid gap-3 sm:grid-cols-2">
            {included.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3 border-2 border-frame-border bg-frame-muted/10 p-4 transition-colors hover:border-frame-accent"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold leading-snug text-frame-fg">{item}</span>
                <span aria-hidden="true" className="ml-auto font-mono text-[10px] font-black text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </li>
            ))}
          </ul>

          <div className="space-y-6">
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Our goal
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Sustainable management, not vanity metrics
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                We focus on keeping your social presence active, useful, consistent, and aligned
                with your business rather than chasing follower counts or promising viral results.
              </p>
            </div>

            <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                Content volume, platform mix, and community management scope are confirmed during
                the free initial audit, so the plan reflects what your business actually needs.
              </p>
            </div>

            <PosterButton href="/contact">Get Your Free Social Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
