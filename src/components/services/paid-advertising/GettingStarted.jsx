import { SectionIntro } from '../../Kinetic'

const auditInputs = [
  {
    title: 'Ad Account & Platform Access',
    body: 'Relevant access to the advertising platforms, analytics, and CRM you currently use, where available.',
  },
  {
    title: 'Business & Offer Details',
    body: 'Your core products or services, target customers, target markets, and the commercial objectives paid media needs to support.',
  },
  {
    title: 'Current Tracking & Assets',
    body: 'Existing conversion setup, creatives, landing pages, and any previous reports or campaign notes.',
  },
  {
    title: 'Commercial Goals',
    body: 'What paid advertising should produce, whether that means leads, sales, bookings, sign-ups, revenue, or customer acquisition.',
  },
]

const auditFindings = [
  'Where your budget is going.',
  'What your campaigns are actually producing.',
  'What should be fixed first.',
  'Which opportunities deserve further investment.',
]

const auditSteps = [
  {
    title: 'Submit Your Account & Goals',
    body: 'Send us the relevant access and a brief description of what paid advertising should produce for your business.',
  },
  {
    title: 'Receive the Account Review',
    body: 'We review campaign structure, conversion setup, targeting, creative, landing-page journey, and budget allocation.',
  },
  {
    title: 'Get Your Findings',
    body: 'You will see where budget is going, what campaigns are producing, what should be fixed first, and which opportunities deserve investment.',
  },
  {
    title: 'Review the Proposal',
    body: 'You receive a custom quotation and can review the recommended scope and budget before making a commitment.',
  },
  {
    title: 'Approve the Plan',
    body: 'No campaigns or budget changes begin without your approval.',
  },
  {
    title: 'Execution Begins',
    body: 'Our in-house team manages, tests, and optimizes the agreed campaign plan.',
  },
]

export default function GettingStarted() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-bg text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Free audit"
            title="Start With a Free Ad Account Audit"
          >
            Your current ad account may be generating useful business results, wasting budget, or
            doing a little of both. The first step is to find out which is actually happening.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
              <div className="mt-6 space-y-4">
                {auditInputs.map((item, index) => (
                  <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-7 transition-colors hover:border-frame-accent">
                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                        Requirement 0{index + 1}
                      </span>
                      <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                You will see
              </span>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Framecipher can review your current campaigns, conversion setup, targeting,
                creative, landing-page journey, and budget allocation, then identify the main
                opportunities and problems.
              </p>
              <ul className="mt-6 space-y-2.5">
                {auditFindings.map((item, index) => (
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

      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Audit journey"
            title="What Happens After You Request Your Free Audit?"
          >
            Getting started is straightforward.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {auditSteps.map((step, index) => (
              <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
                <div>
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}