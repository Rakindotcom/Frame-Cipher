import { SectionIntro } from '../../../Kinetic'

export default function Process({ service }) {
  const steps = service?.processSteps || [
  {
    "number": "1",
    "title": "Initial Discovery & Audit",
    "description": "We review your business, existing content, and what each page genuinely needs to accomplish."
  },
  {
    "number": "2",
    "title": "Messaging & Voice Strategy",
    "description": "Developing a consistent core message and voice guideline that carries across every page."
  },
  {
    "number": "3",
    "title": "Drafting Page by Page",
    "description": "Content written for each page's specific job, with your review and feedback built into the process."
  },
  {
    "number": "4",
    "title": "Cross-Page Review",
    "description": "Checking that the finished pages read as one coherent, consistent site, not disconnected pieces."
  },
  {
    "number": "5",
    "title": "Delivery & Ongoing Support",
    "description": "Finished copy delivered ready to implement, with revision support and future updates available as needed."
  }
]
  const timeline = service?.timeline || "A single page typically takes 3 to 5 business days from discovery to final draft. A core site package covering homepage, about, and a few service pages usually takes 1 to 2 weeks, while a full multi-page site can take 2 to 4 weeks depending on scope and revision rounds.\n\nMessaging strategy work happens upfront and shapes everything after it, rushing this step tends to produce inconsistent copy across pages that needs more revision later, not less."

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
