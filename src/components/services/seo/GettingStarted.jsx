import { SectionIntro } from '../../Kinetic'

const startRequirements = [
  {
    title: 'Website & Business Information',
    body: 'We need your website, core products or services, target customers, business goals, and the markets you want to reach.',
  },
  {
    title: 'Search & Analytics Access',
    body: 'Where available, access to Google Search Console, Google Analytics, Google Business Profile, and relevant website or CMS systems can help us make more informed recommendations.',
  },
  {
    title: 'Existing Marketing Assets',
    body: 'Existing content, keyword research, previous SEO work, paid campaigns, brand materials, and previous reports can provide useful context.',
  },
  {
    title: 'Business Goals',
    body: 'Tell us what organic search should help you achieve, whether that means leads, sales, calls, bookings, ecommerce revenue, signups, or stronger visibility in a new market.',
  },
]

const auditSteps = [
  {
    title: 'Submit Your Website',
    body: 'Send us your website, target market, and a brief description of what you want to achieve through search.',
  },
  {
    title: 'Receive the Initial Review',
    body: 'We review the website and identify important SEO opportunities, limitations, and areas that deserve attention.',
  },
  {
    title: 'Get Your SEO Strategy',
    body: 'We explain the key findings, priorities, recommended services, expected scope, and practical next steps based on your website.',
  },
  {
    title: 'Review the Proposal',
    body: 'You receive a custom quotation and can review the recommended work before making a commitment.',
  },
  {
    title: 'Approve the Plan',
    body: 'No major implementation begins until the agreed strategy and scope are approved.',
  },
  {
    title: 'SEO Implementation Begins',
    body: 'Our in-house team starts the approved technical, content, on-page, local, ecommerce, or authority-building work.',
  },
  {
    title: 'Monitor, Report & Improve',
    body: 'We monitor performance, report completed work and important changes, and adjust priorities as the campaign develops.',
  },
]

export default function GettingStarted() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-bg text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Onboarding checklist"
            title="What You Need to Get Started With SEO"
          >
            A strong SEO campaign starts with the right information and access.
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
            eyebrow="Free audit journey"
            title="What Happens After You Request Your Free SEO Audit?"
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