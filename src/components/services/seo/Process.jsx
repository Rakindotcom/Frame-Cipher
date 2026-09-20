import { SectionIntro } from '../../Kinetic'

const processSteps = [
  {
    title: 'Business & Search Discovery',
    description: 'We learn about your business, customers, products or services, target market, competitors, website setup, and existing marketing activity. This gives the SEO strategy the context it needs.',
  },
  {
    title: 'Technical & SEO Audit',
    description: 'We review the website to identify technical, on-page, content, authority, and visibility issues. Findings are prioritized according to impact, urgency, business value, and implementation difficulty.',
  },
  {
    title: 'Competitor & Keyword Analysis',
    description: 'We identify important searches, ranking pages, search intent, competitor strategies, and content gaps relevant to your market.',
  },
  {
    title: 'SEO Roadmap & Priority Setting',
    description: 'We turn the findings into a practical roadmap covering the areas that require attention. This can include technical fixes, page optimization, content work, internal linking, authority building, local SEO, ecommerce improvements, and AI search optimization.',
  },
  {
    title: 'Technical & On-Page Execution',
    description: 'Approved recommendations are implemented across the website. This may include technical fixes, metadata, structured data, internal links, redirects, content improvements, and other SEO changes.',
  },
  {
    title: 'Content & Authority Building',
    description: 'We create, optimize, refresh, and expand content where needed while pursuing relevant authority-building opportunities. The focus is on search intent and business value rather than publishing content simply to increase page count.',
  },
  {
    title: 'Reporting & Continuous Optimization',
    description: 'SEO is monitored after implementation. We review performance, investigate problems, identify new opportunities, and adjust priorities according to the evidence available.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution Framework"
          title="Our SEO Process"
        >
          We begin by understanding your business and search landscape before deciding what should change.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}