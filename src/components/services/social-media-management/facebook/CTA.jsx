import { PosterButton, SectionIntro } from '../../../Kinetic'

const expectations = [
  'Clear scope',
  'Regular content',
  'Human-reviewed responses',
  'Regular reporting',
  'Clear escalation',
  'No guaranteed results',
]

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid gap-px border-2 border-frame-accent bg-frame-accent lg:grid-cols-[1.35fr_0.65fr]">
          <div className="bg-frame-bg p-7 md:p-10 lg:p-12">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Start with a free audit
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-4xl">
              Ready to Build a More Active, Trustworthy Facebook Presence?
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Request a free Facebook Page audit. We will review the Page, identify the highest-priority
              improvements, and recommend a realistic management plan based on your business and
              audience.
            </p>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {expectations.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-frame-fg">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/contact">Request Free Facebook Page Audit &rarr;</PosterButton>
              <PosterButton href="/contact" variant="outline">
                View Plans &amp; Pricing
              </PosterButton>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not ready to talk yet?
            </span>
            <p className="text-sm font-medium leading-relaxed text-frame-fg/90">
              Read how Framecipher works across social media management before you decide.
            </p>
            <div>
              <PosterButton href="/services/social-media-management" variant="outline">
                Social Media Management &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-frame-border pt-8">
          <SectionIntro
            eyebrow="A note on expectations"
            title="A managed Facebook Page, Not a Shortcut"
            className="text-left"
          >
            We do not promise followers, engagement levels, leads, sales, Meta appeal approvals, or
            restriction removals. What we commit to is clear scope, consistent execution, human review,
            regular reporting, and honest communication about what the work can realistically achieve.
          </SectionIntro>
        </div>
      </div>
    </section>
  )
}
