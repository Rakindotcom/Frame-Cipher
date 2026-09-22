import { SectionIntro, PosterButton } from '../../../Kinetic'

const commitments = [
  'Proper campaign setup',
  'Appropriate tracking implementation',
  'Structured creative testing',
  'Transparent reporting',
  'Ongoing campaign monitoring',
  'Data-informed optimization',
  'Clear communication about performance',
  'Recommendations based on actual campaign evidence',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Honest expectations"
          title="What We Commit To"
        >
          We do not guarantee a specific CPM, CPA, ROAS, conversion rate, or viral outcome.
          Advertising performance depends on factors outside an agency&apos;s direct control,
          including market demand, competition, offer quality, landing-page experience, creative
          response, platform delivery, and available conversion data.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              What we commit to is a clear management process:
            </p>
            <ul className="mt-6 space-y-2.5">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start gap-3 border-b border-frame-border/60 pb-3">
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

          <div className="border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-9">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Every campaign is reviewed against the agreed objectives and scope before major
              changes are made.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact">Talk to the Framecipher Media Team</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}