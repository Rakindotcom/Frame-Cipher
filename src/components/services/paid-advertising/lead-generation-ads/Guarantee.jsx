import { SectionIntro } from '../../../Kinetic'

const commitments = [
  'Structured campaign strategy',
  'Proper tracking',
  'Clear lead qualification',
  'Reliable lead routing',
  'Quality-focused optimization',
  'Sales-aligned reporting',
  'Transparent communication',
  'Recommendations based on actual campaign evidence',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Clear commitment" title="What We Commit To">
          We do not guarantee a specific CPL, CPQL, conversion rate, number of leads, customer
          count, or revenue outcome.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-12">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            Lead-generation performance depends on factors such as
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Offer quality',
              'Market demand',
              'Competition',
              'Audience',
              'Creative',
              'Landing-page or form experience',
              'Sales follow-up',
              'CRM process',
              'Budget',
              'Customer decision-making',
            ].map((item) => (
              <span key={item} className="border border-frame-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            What we commit to is a clear management process
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {commitments.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg md:text-base">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl border-l-2 border-frame-accent pl-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Every campaign is managed against the agreed objectives and scope.
          </p>
        </div>
      </div>
    </section>
  )
}