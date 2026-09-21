import { SectionIntro } from '../../../Kinetic'

const startRequirements = [
  {
    title: 'Website & Business Information',
    body: 'Your website, platform, target market, and what you want technical SEO to help you achieve.',
  },
  {
    title: 'Search & Hosting Access',
    body: 'Google Search Console, analytics, hosting, and CMS access where available for accurate diagnosis.',
  },
  {
    title: 'Site Size & Scope Details',
    body: 'Number of URLs, CMS or framework, and any recent design, migration, or development work.',
  },
  {
    title: 'Business Goals',
    body: 'Tell us which markets matter, whether that is Bangladesh, international markets, or both.',
  },
]

const auditSteps = [
  {
    title: 'Submit Your Website',
    body: 'Send us your website, target market, and a brief description of what you want technical SEO to achieve.',
  },
  {
    title: 'Share Required Access',
    body: 'Search Console, hosting, analytics, and CMS access help us diagnose the actual technical condition of your website.',
  },
  {
    title: 'Receive a Prioritized Audit',
    body: 'We identify the technical issues that matter most and explain what should be fixed first and why.',
  },
  {
    title: 'Review the Fix Plan',
    body: 'You receive prioritized recommendations and a transparent proposal for the approved implementation scope.',
  },
  {
    title: 'Implementation & Validation',
    body: 'Approved fixes are implemented and verified against the identified problems using available evidence.',
  },
  {
    title: 'Monitor & Maintain',
    body: 'We track technical health so regressions, new issues, and additional opportunities are caught early.',
  },
]

export default function GettingStarted() {
  return (
    <div className="border-t-0 bg-frame-bg text-frame-fg">
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Onboarding checklist"
            title="What You Need to Start a Technical SEO Audit"
          >
            A technical audit starts with the right information and access.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {startRequirements.map((item, index) => (
              <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7 transition-colors hover:border-frame-accent">
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
      </section>

      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="What happens next"
            title="After You Request Your Technical SEO Audit"
          >
            Getting started is straightforward.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
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