import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Technical Audit',
    description: 'We examine the website\u2019s technical infrastructure, crawlability, indexation, performance, architecture, and other relevant areas to identify issues affecting organic visibility.',
  },
  {
    number: '02',
    title: 'Prioritization',
    description: 'Not every technical issue deserves the same level of attention. We prioritize recommendations based on potential impact, urgency, business importance, implementation requirements, and available resources.',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Approved technical changes are implemented directly by our team or coordinated with your existing developers, depending on the project. This can include technical configuration, redirects, structured data, internal linking, performance improvements, indexing controls, and other approved fixes.',
  },
  {
    number: '04',
    title: 'Validation',
    description: 'We verify whether the implemented changes actually resolved the identified problem. Depending on the issue, validation may involve technical testing, crawling, Search Console checks, structured-data validation, performance testing, or other available evidence.',
  },
  {
    number: '05',
    title: 'Monitoring',
    description: 'After implementation, we monitor the relevant technical signals to identify regressions, new issues, or additional opportunities.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How We Approach Technical SEO"
        >
          We focus on fixing the right problems in the right order rather than trying to change
          everything at once.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex min-h-64 flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {step.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent transition-colors duration-200 group-hover:text-frame-accent-fg"
              >
                Phase 0{index + 1}
              </span>
            </div>
          ))}

          <div className="flex min-h-64 flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Transparency by default
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Every approved technical change is reviewed before it touches the live site, so
              nothing happens without your visibility into what is changing and why.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}