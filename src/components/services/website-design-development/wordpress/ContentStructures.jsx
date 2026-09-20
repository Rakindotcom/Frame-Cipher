import { SectionIntro } from '../../../Kinetic'

const dynamicFeatures = [
  {
    tag: 'Structure 01',
    title: 'Custom Post Types',
    description: 'Create structured content types for properties, jobs, team members, case studies, products, locations, or other business-specific information.',
  },
  {
    tag: 'Structure 02',
    title: 'Custom Taxonomies',
    description: "Organize content with custom categories, filters, and relationships beyond WordPress's standard taxonomy system.",
  },
  {
    tag: 'Structure 03',
    title: 'Dynamic Fields',
    description: 'Use structured fields and reusable content components to make large websites easier for your team to manage.',
  },
  {
    tag: 'Structure 04',
    title: 'Dynamic Templates',
    description: 'Build templates that automatically display structured content consistently across relevant pages.',
  },
]

export default function ContentStructures() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Custom Post Types & Taxonomies" title="Custom Content Structures & Dynamic WordPress">
          Some WordPress websites need more than standard pages and posts. We can create structured content systems that make complex information easier to manage and display.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {dynamicFeatures.map((struct, idx) => (
            <div key={idx} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{struct.tag}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {struct.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {struct.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            This approach is useful for directories, real estate websites, job boards, publications, portfolios, and other content-heavy WordPress projects.
          </p>
        </div>
      </div>
    </section>
  )
}