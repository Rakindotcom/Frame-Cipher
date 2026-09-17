import { SectionIntro } from '../../Kinetic'

export default function Process({ service }) {
  const steps = service?.processSteps || [
  {
    "number": "1",
    "title": "Discovery & Platform Strategy",
    "description": "We review your idea, target users, and budget to recommend Android, iOS, cross-platform, or an MVP first not a default platform."
  },
  {
    "number": "2",
    "title": "Architecture & UI/UX Design",
    "description": "We plan data structure, API needs, and user flow before any screen design begins."
  },
  {
    "number": "3",
    "title": "Design & Development",
    "description": "UI/UX design first, with review checkpoints, followed by front-end and back-end development."
  },
  {
    "number": "4",
    "title": "Testing & Quality Assurance",
    "description": "Functional, performance, and device testing across the platforms your app targets, before submission."
  },
  {
    "number": "5",
    "title": "App Store Launch",
    "description": "We handle App Store and Google Play submission, including navigating review requirements."
  },
  {
    "number": "6",
    "title": "Post-Launch Support",
    "description": "Bug fixes, OS compatibility updates, and guidance on what's next for your app's growth."
  }
]
  const timeline = service?.timeline || "An MVP is typically deliverable within 6 to 10 weeks of starting, depending on core feature complexity. A full native or cross-platform app usually takes 10 to 16 weeks, and SaaS or enterprise applications with complex backend and integration needs can run 16 to 24+ weeks.\n\nIf you're working toward a specific deadline, an investor demo, a launch event, let us know early, since app store review times (particularly Apple's) can add unpredictable delays near the end of a project and are worth planning around."

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
