import { SectionIntro, PosterButton } from '../../../Kinetic'

const weControl = [
  'LinkedIn strategy',
  'Audience research',
  'ICP research',
  'Competitor research',
  'Content planning',
  'Company Page management',
  'Executive content',
  'Voice development',
  'Thought leadership',
  'Profile and Page optimization',
  'Publishing workflow',
  'Community management within the agreed scope',
  'Employee advocacy support',
  'Reporting',
  'Testing',
  'Content refinement',
  'Approval workflow',
  'Communication',
  'Project coordination',
]

const weDontGuarantee = [
  'Viral posts',
  'A specific follower count',
  'A fixed number of impressions',
  'A specific engagement rate',
  'Guaranteed leads',
  'Guaranteed sales',
  'Guaranteed revenue',
  'A specific number of connections',
  'Guaranteed algorithmic distribution',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Service commitments" title="What We Commit To">
          We focus on the parts of LinkedIn management our team can directly control while keeping
          expectations realistic.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                What We Control
              </span>
              <span className="mt-2 block text-sm font-medium leading-relaxed text-frame-muted-fg">
                We can control and improve:
              </span>
            </div>
            <ul className="mt-px grid gap-px border-2 border-t-0 border-frame-border bg-frame-border sm:grid-cols-2">
              {weControl.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-frame-bg p-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold leading-snug text-frame-fg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-7">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
                What We Don&rsquo;t Guarantee
              </span>
              <span className="mt-2 block text-sm font-medium leading-relaxed text-frame-muted-fg">
                We do not guarantee:
              </span>
            </div>
            <ul className="mt-px grid gap-px border-2 border-t-0 border-frame-border bg-frame-border sm:grid-cols-2">
              {weDontGuarantee.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-frame-bg p-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-border bg-frame-muted/20 text-frame-muted-fg">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold leading-snug text-frame-fg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t-2 border-frame-border pt-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            LinkedIn distribution and audience behavior are outside an agency&rsquo;s direct control.
            Our responsibility is to build and manage a structured strategy, produce the agreed work
            professionally, monitor performance, and use the data to improve future decisions.
          </p>
          <div className="shrink-0 lg:text-right">
            <PosterButton href="/contact" variant="outline">
              Review the Full Scope With Us &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
