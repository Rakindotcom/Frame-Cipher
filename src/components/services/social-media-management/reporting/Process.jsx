import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Business Goals & KPI Definition',
    body: 'We first identify what social media is expected to contribute to the business. Then we establish the relevant metrics and reporting priorities.',
  },
  {
    number: '02',
    title: 'Data Collection & Tracking Setup',
    body: 'We identify the platforms, accounts, available analytics, website tracking, campaign data, and other relevant measurement sources. Where required data is unavailable, we make that limitation clear rather than filling the gap with assumptions.',
  },
  {
    number: '03',
    title: 'Cross-Platform Data Consolidation',
    body: 'Relevant data is organized into a consistent reporting structure. Platform-specific differences are preserved where they affect interpretation.',
  },
  {
    number: '04',
    title: 'Analysis & Interpretation',
    body: 'We review trends, content, campaigns, audience behavior, community activity, and other relevant signals. The objective is to explain performance rather than simply repeat it.',
  },
  {
    number: '05',
    title: 'Report Preparation',
    body: 'The findings are organized into a readable monthly report focused on the metrics and insights that matter to your business.',
  },
  {
    number: '06',
    title: 'Walkthrough & Recommendations',
    body: 'Where included in your plan, we walk through the report and explain the important findings. Recommendations are tied to the actual data and business goals.',
  },
  {
    number: '07',
    title: 'Ongoing Trend Analysis',
    body: 'Over time, monthly reports create a larger performance history. That makes it easier to identify recurring patterns rather than making decisions from one isolated month.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Reporting workflow"
          title="How Our Monthly Reporting &amp; Analytics Process Works"
        >
          Reporting works better when the goal, the KPI set, and the available data are defined before
          analysis begins.
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
