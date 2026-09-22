import { SectionIntro } from '../../../Kinetic'

const resultFactors = [
  'ICP quality',
  'Offer strength',
  'Deal value',
  'Sales cycle',
  'Market size',
  'Competition',
  'Creative quality',
  'Landing-page experience',
  'Lead follow-up speed',
  'Sales process',
  'Audience availability',
  'Advertising budget',
  'Tracking quality',
]

const commitments = [
  'Clear ICP definition',
  'Deliberate audience targeting',
  'Appropriate campaign objectives',
  'Reliable conversion measurement',
  'Creative testing',
  'Lead-quality review',
  'Transparent reporting',
  'Ongoing optimization',
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
          LinkedIn Ads performance depends on factors beyond campaign management.
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
              We therefore do not promise a fixed cost per lead, number of opportunities,
              revenue figure, or return on ad spend before understanding the business and market.
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
              LinkedIn Ads are not the right acquisition channel for every business. Where the
              target audience, deal economics, or sales process do not support the platform, we
              would rather identify that early than encourage unnecessary spend.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}