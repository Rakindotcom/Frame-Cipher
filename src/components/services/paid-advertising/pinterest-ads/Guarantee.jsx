import { SectionIntro, PosterButton } from '../../../Kinetic'

const factors = [
  'Product or service quality',
  'Pricing and offer',
  'Market demand',
  'Competition',
  'Media budget',
  'Creative quality',
  'Landing-page experience',
  'Tracking quality',
  'Campaign structure',
  'Platform delivery',
  'Customer behavior',
]

const commitments = [
  'Proper setup',
  'Reliable measurement',
  'Disciplined testing',
  'Active management',
  'Transparent reporting',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Honest expectations"
          title="What We Do Not Guarantee"
        >
          We believe Pinterest advertising should come with transparency and honest
          expectation-setting rather than performance promises that depend on factors outside an
          agency&apos;s control.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              We do not guarantee
            </span>
            <p className="mt-4 text-base font-medium leading-relaxed text-frame-fg md:text-lg">
              We do not guarantee a fixed ROAS, CPA, CPC, conversion rate, revenue level, or
              number of sales.
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Performance depends on factors including:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {factors.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs font-semibold text-frame-fg/90">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-border text-frame-muted-fg">
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-9">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What we commit to
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              The parts of the campaign we control
            </h3>
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
            <div className="mt-7">
              <PosterButton href="/contact">Talk to the Framecipher Media Team</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}