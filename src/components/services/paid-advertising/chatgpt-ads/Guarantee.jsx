import { SectionIntro, PosterButton } from '../../../Kinetic'

const noGuarantees = [
  {
    title: 'Specific Campaign Performance',
    body: 'We cannot guarantee a specific ROAS, CPA, CTR, or conversion rate. Performance depends on the offer, competition, conversation context, landing-page experience, and the data the platform has available.',
  },
  {
    title: 'Eligibility to Run Ads',
    body: 'We cannot guarantee your business will be eligible to run ChatGPT Ads. Eligibility depends on OpenAI\u2019s current requirements and the advertiser setup, and those requirements can change.',
  },
  {
    title: 'Cross-Period Performance Continuity',
    body: 'We cannot guarantee that prior results will repeat in future periods. Platform changes, market conditions, and budget decisions all affect what happens next.',
  },
]

const promises = [
  'A structured process',
  'Honest reporting',
  'Conversion setup',
  'Disciplined optimization',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Honest expectations"
          title="What We Do Not Guarantee"
        >
          We believe advertising should come with transparency and honest expectation-setting. On
          a young channel like ChatGPT Ads, that honesty matters even more.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5">
            {noGuarantees.map((item, index) => (
              <div key={index} className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-frame-border text-frame-muted-fg">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-9">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What we do promise
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              We promise the parts we control
            </h3>
            <ul className="mt-6 space-y-2.5">
              {promises.map((item, index) => (
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
            <p className="mt-6 border-t border-frame-accent/40 pt-5 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You should understand what we can and cannot control, and we will be clear about
              the difference.
            </p>
            <div className="mt-7">
              <PosterButton href="/contact">Talk to the Framecipher Media Team</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}