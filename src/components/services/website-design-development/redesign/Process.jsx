import { SectionIntro } from '../../../Kinetic'

export default function Process({ service }) {
  const steps = service?.processSteps || [
  {
    "number": "1",
    "title": "Initial Consultation & Audit",
    "description": "We review your current site's performance, rankings, and where it's actually falling short."
  },
  {
    "number": "2",
    "title": "Strategy & Scope Definition",
    "description": "Based on audit findings, we define what needs a full rebuild versus what can be preserved, and scope the project accordingly."
  },
  {
    "number": "3",
    "title": "Design & Development",
    "description": "Updated design comes first, with review checkpoints, followed by technical rebuild and content migration."
  },
  {
    "number": "4",
    "title": "SEO Migration & Quality Testing",
    "description": "Redirect mapping, content migration, and thorough testing before anything goes live, to protect existing rankings."
  },
  {
    "number": "5",
    "title": "Launch & Post-Launch Monitoring",
    "description": "We go live, then closely monitor rankings, traffic, and functionality in the following weeks to catch any issues early."
  }
]
  const timeline = service?.timeline || "Website redesign typically takes 2 to 14+ weeks, depending on how much of the site needs rebuilding, whether a platform migration is involved, and the size of the existing site's content and page count. A visual refresh on the existing platform moves toward the shorter end; a full platform migration with extensive redirect mapping will run longer.\n\nProjects move faster when access to the current site, analytics, and hosting is provided upfront, most delays come from waiting on these inputs mid-project, especially since audit findings depend on having full access from the start."

  if (!steps?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution Framework"
          title="Our Structured Process"
        >
          How we collaborate from initial scoping and strategic discovery to deployment and iterative refinement.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {steps.map((step, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {step.number || String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
              {step.deliverable && (
                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                    Deliverable
                  </span>
                  <span className="text-xs font-semibold text-frame-fg">
                    {step.deliverable}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {timeline?.table && (
          <div className="mt-16 overflow-hidden border-2 border-frame-border bg-frame-bg">
            <table className="w-full text-left">
              {timeline.table.headers && (
                <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                  <tr>
                    {timeline.table.headers.map((h, i) => (
                      <th key={i} className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timeline.table.rows?.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-4 md:p-6 font-medium text-frame-fg">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
