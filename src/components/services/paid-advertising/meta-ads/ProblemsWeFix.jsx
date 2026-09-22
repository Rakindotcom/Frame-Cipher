import { SectionIntro, PosterButton } from '../../../Kinetic'

const problems = [
  {
    title: 'Creative Fatigue',
    body: [
      'An ad can work strongly and then weaken as the audience sees it repeatedly. We monitor creative performance and audience exposure so fatigue is identified before a previously useful asset becomes the sole driver of declining performance.',
    ],
  },
  {
    title: 'Weak Conversion Signals',
    body: [
      'Meta cannot optimize effectively toward a business outcome if the account is sending incomplete, duplicated, or poorly configured conversion data. We review event tracking, Pixel implementation, Conversions API where applicable, and the relationship between reported conversions and actual business actions.',
    ],
  },
  {
    title: 'Rising Cost Per Result',
    body: [
      'A higher cost per lead or purchase can come from several sources. We look at the combination of creative performance, offer, audience, competition, conversion rate, landing page, frequency, and campaign structure rather than assuming the audience alone is responsible.',
    ],
  },
  {
    title: 'Fragmented Campaign Structure',
    body: [
      'Too many campaigns, ad sets, and small audiences can divide the available data and budget. We look for unnecessary fragmentation and simplify the account where a more consolidated structure can provide clearer learning and stronger budget allocation.',
    ],
  },
  {
    title: 'Weak Offer-to-Creative Fit',
    body: [
      'Sometimes the audience is not the problem. If the creative does not make the offer clear, demonstrate value, answer objections, or give the user a strong reason to act, changing the targeting may not solve the underlying issue. We test the message and offer alongside the audience and campaign structure.',
    ],
  },
  {
    title: 'Tracking & Attribution Gaps',
    body: [
      'Platform reporting can become harder to interpret when website, CRM, Pixel, CAPI, and business data are disconnected. We identify measurement gaps so campaign decisions are based on better information.',
    ],
  },
]

export default function ProblemsWeFix() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Account rescue"
          title="Common Meta Ads Problems We Fix"
        >
          Underperforming Meta accounts are usually not failing because the platform is weak.
          They are failing because of creative, tracking, structure, or offer-to-message
          problems inside the account.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Problem 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {problem.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {problem.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-between border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Your account
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Not sure which problem your account has?
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Every engagement starts with an account review that identifies what is actually
                happening before any changes are made.
              </p>
            </div>
            <div className="mt-6">
              <PosterButton href="/contact" className="w-full text-xs">
                Get Your Account Reviewed
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}