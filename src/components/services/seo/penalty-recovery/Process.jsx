import { SectionIntro } from '../../../Kinetic'

export default function Process({ service }) {
  const steps = service?.processSteps || [
  {
    "number": "1",
    "title": "Initial Diagnosis",
    "description": "We review Search Console, traffic patterns, and update timing to determine exactly what's actually happening."
  },
  {
    "number": "2",
    "title": "Root Cause Investigation",
    "description": "Identifying the specific violation or quality signal responsible, not just a general sense of \"something's wrong.\""
  },
  {
    "number": "3",
    "title": "Remediation Planning & Execution",
    "description": "Targeted fixes addressing the actual cause, documented as they happen, with your review at each stage."
  },
  {
    "number": "4",
    "title": "Reconsideration or Reassessment",
    "description": "For manual actions, a carefully prepared request. For algorithmic impacts, continued improvement and monitoring for the next reassessment."
  },
  {
    "number": "5",
    "title": "Recovery Confirmation & Prevention",
    "description": "Tracking the actual return to previous performance, with safeguards against the same issue recurring."
  }
]
  const timeline = service?.timeline || "A diagnostic review is typically delivered within a week. Manual action recovery, including remediation and reconsideration request preparation, usually takes 2 to 4 weeks before submission, though Google's own review of the request afterward is outside anyone's control and varies in timing.\n\nAlgorithmic recovery works differently and generally takes longer, often 6 to 12 weeks or more, since it depends on genuinely improving quality signals and waiting for Google's systems to reassess the site, rather than a single request-and-response process."

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
