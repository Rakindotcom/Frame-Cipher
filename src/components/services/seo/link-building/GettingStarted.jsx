import { SectionIntro } from '../../../Kinetic'

const startRequirements = [
  {
    title: 'Website & Target Pages',
    body: 'Your website and the pages you want the campaign to support, whether those are services, products, or content assets.',
  },
  {
    title: 'Search & Analytics Access',
    body: 'Search Console and analytics access where available, so performance is reviewed against how the site actually behaves.',
  },
  {
    title: 'Backlink & Competitor Context',
    body: 'Business name, any existing backlink profile data, and the competitors you want us to analyze for link gaps.',
  },
  {
    title: 'Business Goals',
    body: 'Tell us which markets matter, whether that is Bangladesh, international markets, or both, and what the campaign should support.',
  },
]

const linkBuildingSteps = [
  {
    title: 'Send Us Your Website',
    body: 'Share your website, the pages you want referenced, and a brief description of your business and goals.',
  },
  {
    title: 'Share Access & Context',
    body: 'Search Console and analytics access help us review your profile against real performance data.',
  },
  {
    title: 'Receive a Backlink Audit',
    body: 'We review your current profile and gaps compared to genuinely relevant competitors within about a week.',
  },
  {
    title: 'Review the Target List',
    body: 'You receive the strategy, prospect list, and publisher vetting before any outreach begins.',
  },
  {
    title: 'Approve & Start Outreach',
    body: 'Approved targets move into manual outreach, pitching, and content development.',
  },
  {
    title: 'Monitor & Report',
    body: 'We verify every placement, monitor the evolving profile, and report on what was pursued and what was achieved.',
  },
]

export default function GettingStarted() {
  return (
    <div className="border-t-0 bg-frame-bg text-frame-fg">
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Onboarding checklist"
            title="What You Need to Start Link Building"
          >
            Off-page work starts with the right pages, access, and context about your market and
            competitors.
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
            title="After You Request Your Backlink Audit"
          >
            Getting started is straightforward.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {linkBuildingSteps.map((step, index) => (
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