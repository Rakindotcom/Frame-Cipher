import { SectionIntro } from '../../../Kinetic'

const signals = [
  'Website traffic is too low to build useful audiences',
  'Conversion volume is extremely limited',
  'The customer journey is too short for remarketing to add meaningful value',
  'Tracking is unreliable',
  'Consent or platform eligibility limits audience creation',
  'The product or offer has not yet demonstrated demand',
  'The campaign is better served by prospecting or high-intent search',
  'Audience overlap is already consuming most available demand',
]

export default function WhenNotRight() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Honest assessment" title="When Remarketing May Not Be the Right Priority">
          Remarketing is not automatically the best place to allocate more budget.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-bg p-8 md:p-12">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            It may have limited potential when
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {signals.map((signal) => (
              <li key={signal} className="flex items-start gap-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-frame-accent">
                  &#10005;
                </span>
                <span>{signal}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl border-l-2 border-frame-accent pl-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            In these situations, improving acquisition, conversion, tracking, or the offer itself
            may deserve priority.
          </p>
        </div>
      </div>
    </section>
  )
}