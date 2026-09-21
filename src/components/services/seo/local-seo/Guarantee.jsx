import { SectionIntro, PosterButton } from '../../../Kinetic'

const commitments = [
  'A defined local SEO strategy',
  'Clear implementation work',
  'Consistent optimization',
  'Transparent reporting',
  'Performance monitoring',
  'Data-led refinement',
  'Following applicable search engine guidelines',
  'Communicating the work completed',
]

const promises = [
  'A permanent Google Maps position',
  'A guaranteed #1 ranking',
  'A fixed number of leads',
  'A specific ranking date',
  'Unlimited geographic visibility',
  'Guaranteed sales from SEO alone',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Honest expectations"
          title="What We Can and Can't Guarantee"
        >
          Local SEO involves search systems that are controlled by Google and other search
          platforms. Rankings can change because of competition, algorithm updates, search
          behavior, business changes, and other factors.
        </SectionIntro>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                What We Can Commit To
              </span>
              <ul className="mt-6 space-y-2.5">
                {commitments.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-frame-fg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                What We Cannot Promise
              </span>
              <ul className="mt-6 space-y-2.5">
                {promises.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-border bg-frame-muted/20 text-frame-muted-fg">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-frame-fg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8 border-t-2 border-frame-border pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg">
            The focus should remain on improving the factors we can control and measuring the
            business results that follow.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Talk to the Framecipher Local SEO Team</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}