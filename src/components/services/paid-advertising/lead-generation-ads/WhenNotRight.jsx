import { SectionIntro } from '../../../Kinetic'

const signals = [
  'The offer is unclear',
  'The ideal customer is not defined',
  'The sales team has no qualification process',
  'Lead routing is unreliable',
  'The CRM cannot receive or organize leads',
  'The landing page or lead destination is weak',
  'Search demand is too low',
  'The product requires substantial demand creation first',
  'The sales cycle is too long for the available budget',
  'There is not enough data to evaluate lead quality',
]

export default function WhenNotRight() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Honest assessment" title="When Lead Generation Ads May Not Be the Right Primary Channel">
          Lead generation advertising is not automatically the right first investment.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-bg p-8 md:p-12">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            It may be premature when
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
            In some cases, improving the offer, website, sales process, or demand-generation
            strategy should come before increasing lead-generation spend.
          </p>
        </div>
      </div>
    </section>
  )
}