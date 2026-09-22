import { SectionIntro } from '../../../Kinetic'

const commitments = [
  'Clear campaign structure',
  'Proper conversion tracking',
  'Transparent account access',
  'Regular performance analysis',
  'Search-term and targeting review',
  'Ongoing optimization',
  'Clear reporting',
  'Strategy adjustments based on evidence',
]

export default function PerformanceCommitment() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service commitment"
          title="Performance Expectations & Service Commitment"
        >
          Google Ads performance depends on more than account management. Your offer, pricing,
          landing page, competition, search demand, market, website experience, conversion rate,
          sales process, and available budget can all influence the outcome.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              For that reason, we do not promise a fixed cost per lead, revenue figure, or
              return on ad spend before understanding the account and market.
            </p>
            <p>
              Where Google Ads is not a sensible fit for the economics of your business, we
              would rather identify that early than encourage unnecessary ad spend.
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
          </div>
        </div>
      </div>
    </section>
  )
}