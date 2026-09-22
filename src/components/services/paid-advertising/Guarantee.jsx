import { SectionIntro, PosterButton } from '../../Kinetic'

const commitments = [
  'Transparent reporting',
  'Clear management fees',
  'Agreed campaign and budget controls',
  'Conversion tracking setup and validation',
  'Documented campaign changes',
  'Ongoing optimization against agreed goals',
  'Clear communication about performance and issues',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Honest expectations"
          title="What We Guarantee"
        >
          We believe paid advertising should come with transparency, not promises that depend on
          factors outside an agency&apos;s control.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Where included in your scope, we commit to
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
              <PosterButton href="/contact">Talk to the Framecipher Media Team</PosterButton>
            </div>
          </div>

          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              We do not guarantee a specific ROAS, cost per lead, cost per acquisition, number
              of sales, or revenue figure.
            </p>
            <p>
              Advertising performance also depends on factors such as your offer, pricing, market
              competition, website experience, product quality, sales process, seasonality,
              platform conditions, and customer demand.
            </p>
            <p>
              Our responsibility is to build, manage, measure, test, and optimize the campaign
              professionally while reporting the results honestly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}