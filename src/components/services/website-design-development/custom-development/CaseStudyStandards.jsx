import { SectionIntro } from '../../../Kinetic'

const portfolioPillars = [
  {
    title: 'Project Overview',
    desc: 'The business, industry, problem, and project objective.',
  },
  {
    title: 'Technical Approach',
    desc: 'The Next.js architecture, frontend approach, backend requirements, integrations, and other relevant technologies.',
  },
  {
    title: 'Key Functionality',
    desc: 'Authentication, customer dashboards, admin systems, APIs, ecommerce, CMS, custom workflows, and third-party integrations.',
  },
  {
    title: 'Project Visuals',
    desc: 'Real application screens, dashboards, responsive interfaces, and important user flows.',
  },
  {
    title: 'Verified Outcomes',
    desc: 'Where project data is available, measurable results such as performance improvements, workflow improvements, conversion changes, or product usage.',
  },
]

const keyFunctionalityList = [
  'Authentication & Role-Based Access',
  'Customer Dashboards & Portals',
  'Admin Management Systems',
  'Custom REST & GraphQL APIs',
  'Headless Ecommerce Architecture',
  'Decoupled Headless CMS Workflows',
  'Complex Business Logic Engines',
  'Third-Party & ERP Integrations',
]

export default function CaseStudyStandards() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Portfolio Structure" title="What Each Custom Case Study Highlights" />

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {portfolioPillars.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                  Highlight 0{idx + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-frame-muted-fg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 md:p-10">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Key Functionality Highlighted
          </span>
          <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            Architectural Capabilities Demonstrated
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {keyFunctionalityList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 border border-frame-border/80 bg-frame-muted/20 p-3.5">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs md:text-sm italic text-frame-muted-fg">
            We only publish outcomes that can be supported by actual project data.
          </p>
        </div>
      </div>
    </section>
  )
}