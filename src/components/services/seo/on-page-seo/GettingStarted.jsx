import { SectionIntro } from '../../../Kinetic'

const startRequirements = [
  {
    title: 'Website & Target Pages',
    body: 'Your website, the pages you most want to improve, and what you want each page to achieve.',
  },
  {
    title: 'Search & Analytics Access',
    body: 'Search Console and analytics access where available, so important pages are reviewed against how they actually perform.',
  },
  {
    title: 'Content & Business Context',
    body: 'Current page content, target keywords if known, and a sense of the audience and market you want to reach.',
  },
  {
    title: 'Business Goals',
    body: 'Tell us which markets matter, whether that is Bangladesh, international markets, or both.',
  },
]

const onPageSteps = [
  {
    title: 'Send Us Your Pages',
    body: 'Share the pages you want optimized and a brief description of what they should achieve.',
  },
  {
    title: 'Share Search & Analytics Access',
    body: 'Search Console and analytics access help us review pages against real performance data.',
  },
  {
    title: 'Receive an On-Page Review',
    body: 'We compare each page against the intent behind its target queries and identify the changes that matter most.',
  },
  {
    title: 'Review the Optimization Plan',
    body: 'You receive a clear plan of content, structure, metadata, and internal-link changes before any work begins.',
  },
  {
    title: 'Implementation & Approval',
    body: 'Approved changes are applied page by page, with your review at each stage before anything goes live.',
  },
  {
    title: 'Monitor & Refine',
    body: 'We track performance after implementation and refine pages based on the evidence rather than a fixed checklist.',
  },
]

export default function GettingStarted() {
  return (
    <div className="border-t-0 bg-frame-bg text-frame-fg">
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Onboarding checklist"
            title="What You Need to Start On-Page SEO"
          >
            On-page work starts with the right pages, access, and context.
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
            title="After You Request Your On-Page Review"
          >
            Getting started is straightforward.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {onPageSteps.map((step, index) => (
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