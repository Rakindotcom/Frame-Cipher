import { SectionIntro } from '../../../Kinetic'

export default function Process({ service }) {
  const steps = service?.processSteps || [
  {
    "number": "1",
    "title": "Initial Consultation",
    "description": "We talk through your idea, your core hypothesis, and who the MVP actually needs to reach."
  },
  {
    "number": "2",
    "title": "Scope & Priority Definition",
    "description": "Feature prioritization and target user definition, locked down before design starts."
  },
  {
    "number": "3",
    "title": "Design & Development",
    "description": "Rapid UI/UX design first, with checkpoints along the way, then lean development of core functionality."
  },
  {
    "number": "4",
    "title": "Testing & Launch Prep",
    "description": "Functional testing and analytics setup, so the MVP is ready to actually generate usable data at launch."
  },
  {
    "number": "5",
    "title": "Launch & Validation Review",
    "description": "We deploy, help you collect real feedback, and walk through what the data suggests for next steps."
  }
]
  const timeline = service?.timeline || "Most MVPs take 4 to 14+ weeks, with core feature complexity and whether the build spans one platform or several setting the pace. A minimal, single-flow MVP moves fastest. Multi-platform builds or MVPs testing multiple hypotheses at once take longer.\n\nProjects move faster when the core hypothesis is genuinely narrowed down before development starts, most MVP timelines stretch not because the build is slow, but because scope keeps expanding mid-project as new ideas get added."

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
