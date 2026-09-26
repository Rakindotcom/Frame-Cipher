import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Community Audit',
    body: 'We review your active platforms, recent interactions, common questions, existing response patterns, reviews, moderation issues, and escalation needs.',
  },
  {
    number: '02',
    title: 'Brand Voice & Response Guidelines',
    body: 'We establish practical guidance for tone, frequently asked questions, response boundaries, CTAs, and situations that require escalation.',
  },
  {
    number: '03',
    title: 'Escalation & Moderation Setup',
    body: 'We define which issues can be handled directly, which require approval, and which should be routed to your team. Moderation rules and platform-specific requirements are also considered.',
  },
  {
    number: '04',
    title: 'Monitoring & Response',
    body: 'Once the workflow is approved, ongoing monitoring and response begin across the agreed platforms and coverage windows.',
  },
  {
    number: '05',
    title: 'Proactive Engagement',
    body: 'Where included, we participate in relevant conversations, encourage useful interactions, and identify opportunities for deeper community engagement.',
  },
  {
    number: '06',
    title: 'Reporting & Optimization',
    body: 'We review response activity, recurring questions, feedback themes, escalations, and other relevant metrics to improve the workflow over time.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Engagement workflow"
          title="How Our Community Management Process Works"
        >
          Community management should follow a defined process rather than relying on whoever happens to
          check the comments that day.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="bg-frame-bg p-7 md:p-8">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {step.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
