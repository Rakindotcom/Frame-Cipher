import { SectionIntro } from '../../Kinetic'

export default function Process({ service }) {
  const steps = service?.processSteps || [
  {
    "number": "1",
    "title": "Free Website Audit",
    "description": "We review your current site, rankings, and competitors to find out what's actually holding you back."
  },
  {
    "number": "2",
    "title": "Strategy & Keyword Research",
    "description": "A content and technical plan built around realistic ranking potential, not just high-volume terms you'll never compete for."
  },
  {
    "number": "3",
    "title": "On-Page & Off-Page Execution",
    "description": "Technical fixes, content work, and link building begin with your approval before anything goes live."
  },
  {
    "number": "4",
    "title": "Reporting & Ongoing Optimization",
    "description": "Regular performance updates, with the strategy adjusted based on what the data actually shows."
  }
]
  const timeline = service?.timeline || "An SEO audit is typically delivered within a few business days of starting. Meaningful ranking improvements from ongoing work usually become visible within three to six months, depending on how competitive your industry is and how much technical debt the site is starting with. Local SEO and Google Business Profile improvements tend to show results faster, sometimes within four to eight weeks, since they compete less directly against difficult, high-volume keywords.\n\nIf you're working toward a deadline for a product launch, a seasonal push tells us early. Front-loading technical and local SEO work helps, though organic rankings still can't be rushed the way paid ads can."

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
