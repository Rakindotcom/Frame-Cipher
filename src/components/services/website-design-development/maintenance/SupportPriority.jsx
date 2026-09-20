import { SectionIntro } from '../../../Kinetic'

const supportTiers = [
  {
    tier: 'Standard Requests',
    description: 'Routine content updates, small changes, maintenance tasks, and non-critical issues are handled according to the plan\'s normal support process.',
  },
  {
    tier: 'Priority Issues',
    description: 'Problems affecting important website functionality, forms, integrations, or customer experiences receive higher priority where the selected plan provides it.',
  },
  {
    tier: 'Critical Incidents',
    description: 'Major downtime, critical checkout failures, serious security incidents, or other business-critical problems are handled through the emergency response process available under the applicable plan.',
  },
]

export default function SupportPriority() {
  return (
    <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="SLA & Responsiveness" title="Support Priority & Response Times">
          Not every website has the same urgency. A portfolio website can tolerate a different response window than an ecommerce store that processes orders every day. We therefore define support priority according to the maintenance plan and the business importance of the website.
        </SectionIntro>

        <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-3 border-2 border-frame-border">
          {supportTiers.map((tier, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Tier 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {tier.tier}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <p className="text-xs sm:text-sm font-medium text-frame-muted-fg italic">
            Your maintenance agreement should state the actual response targets, support hours, emergency availability, and escalation process before the service begins.
          </p>
        </div>
      </div>
    </section>
  )
}