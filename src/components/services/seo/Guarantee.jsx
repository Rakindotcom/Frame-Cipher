import { SectionIntro, PosterButton } from '../../Kinetic'

const commitments = [
  'Sound strategy',
  'Technically correct implementation',
  'Useful content',
  'Relevant authority building',
  'Transparent reporting',
  'Continuous optimization based on available evidence',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Honest expectations"
          title="Why We Don't Guarantee Google Rankings"
        >
          No SEO agency controls Google's algorithms, competitor activity, search demand, or
          every technical factor that can influence search results. For that reason, we do not
          guarantee a specific Google position such as #1.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Instead, we focus on the areas we can control. Our commitment is to explain the
              work clearly, prioritize meaningful opportunities, and avoid tactics that create
              unnecessary long-term risk.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What we focus on
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
            <div className="mt-8">
              <PosterButton href="/contact">Talk to the Framecipher SEO Team</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}