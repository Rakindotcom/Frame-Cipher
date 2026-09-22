import { SectionIntro } from '../../../Kinetic'

const resultFactors = [
  'Product or service quality',
  'Offer strength',
  'Pricing',
  'Creative',
  'Market demand',
  'Competition',
  'Landing-page experience',
  'Conversion rate',
  'Sales process',
  'Customer response time',
  'Advertising budget',
  'Tracking quality',
]

const commitments = [
  'Clear campaign objectives',
  'Reliable conversion measurement',
  'Strategic creative testing',
  'Ongoing campaign analysis',
  'Budget management',
  'Audience and delivery review',
  'Transparent reporting',
  'Strategy adjustments based on performance data',
]

export default function PerformanceCommitment() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service commitment"
          title="Performance Expectations & Service Commitment"
        >
          Meta Ads performance depends on more than campaign management.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-2 lg:items-start">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Results can be influenced by
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Factors beyond account management
            </h3>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {resultFactors.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm font-semibold text-frame-fg">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-frame-border/60 pt-5 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We therefore do not promise a fixed cost per lead, ROAS, revenue figure, or number
              of purchases before understanding the account and market.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What we commit to
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              A disciplined management process
            </h3>
            <ul className="mt-6 space-y-2.5">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t-2 border-frame-accent bg-frame-accent/5 p-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Where the economics of Meta advertising do not make sense for a business, we would
              rather identify that early than encourage unnecessary spend.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}