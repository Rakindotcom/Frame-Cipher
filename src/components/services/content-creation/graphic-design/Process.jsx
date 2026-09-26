import { SectionIntro } from '../../../Kinetic'

const processStepsData = [
  {
    number: '01',
    title: 'Brief & Brand Review',
    description: 'We begin by understanding what you need, where the design will be used, who will see it, and what the final asset needs to achieve. We review project objectives, target audience, existing brand guidelines, logo files, approved copy, references, deadlines, and technical specifications.'
  },
  {
    number: '02',
    title: 'Content & Information Structure',
    description: 'Design works better when the information has a clear hierarchy. We review supplied content to determine what needs primary attention, what supports the main message, and what can be grouped visually. For longer documents, we establish the page or section structure first.'
  },
  {
    number: '03',
    title: 'Concept & Visual Direction',
    description: 'We develop the visual direction around the brand and intended application: typography direction, layout approach, color application, image treatment, graphic elements, iconography, and data visualization style to establish a cohesive visual language.'
  },
  {
    number: '04',
    title: 'Design & Refinement',
    description: 'Once direction is approved, we develop the complete design. For multi-page projects, we maintain layout consistency across spreads. For multi-format projects, we adapt the design across required dimensions rather than simply stretching or shrinking original artwork.'
  },
  {
    number: '05',
    title: 'Production Preparation',
    description: 'Before final delivery, we prepare artwork for its intended use. For print, this includes exact page dimensions, bleed, trim margins, color separation, and printer requirements. For digital, we prepare required pixel sizes, formats, and optimized exports.'
  },
  {
    number: '06',
    title: 'Review & Final Handover',
    description: 'After the agreed revision stage, we prepare approved final assets. Delivery includes print-ready files, digital PDFs, editable source files, presentation files, packaging artwork, or reusable master templates as confirmed in project scope.'
  }
]

const timelineMatrix = [
  { type: 'Single Design Piece', time: '3–5 business days', note: 'One flyer, one-pager, single ad, or standalone asset' },
  { type: 'Pitch Deck / Presentation', time: '1–2 weeks', note: '10–20 slide custom deck with data visualization & template' },
  { type: 'Company Profile', time: '1–2 weeks', note: 'Multi-page corporate document with structured layout system' },
  { type: 'Print Collateral Package', time: '1–2 weeks', note: 'Business cards, letterhead, envelopes, and corporate brochure' },
  { type: 'Packaging / Label Project', time: '1–3 weeks', note: 'Dieline engineering, label systems & variant colorways' },
  { type: 'Catalogue / Larger Publication', time: '2–4+ weeks', note: 'Extensive product catalogs, annual reports & lookbooks' },
  { type: 'Ongoing Design Retainer', time: 'Monthly delivery', note: 'Scheduled monthly sprints with dedicated turnaround queues' }
]

export default function Process({ service }) {
  const steps = service?.processSteps?.length === 6 ? service.processSteps : processStepsData

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution Methodology"
          title="Our Graphic Design Process"
        >
          From brief to final production handover, our 6-step workflow keeps stakeholders aligned and ensures files pass strict mechanical and digital production standards.
        </SectionIntro>

        {/* 6-STEP PROCESS GRID */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent">
                  {step.number || String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TYPICAL TIMELINES TABLE */}
        <div className="mt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b-2 border-frame-border pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Benchmarks
              </span>
              <h3 className="mt-1 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Typical Graphic Design Timelines
              </h3>
            </div>
            <p className="text-xs font-mono text-frame-muted-fg">
              Timelines begin after scope, brand assets, and content are approved
            </p>
          </div>

          <div className="mt-6 overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Project Type
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Typical Timeline
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Scope Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-xs sm:text-sm font-medium">
                {timelineMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-5 font-bold uppercase tracking-tight text-frame-fg">
                      {item.type}
                    </td>
                    <td className="p-4 md:p-5 font-bold text-frame-accent whitespace-nowrap">
                      {item.time}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg">
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs font-medium text-frame-muted-fg leading-relaxed">
            * Note: Timelines commence after the project scope, required content, brand assets, and technical specifications are confirmed. Larger corporate profiles, extensive catalogues, or complex packaging dielines receive custom schedule estimates.
          </p>
        </div>
      </div>
    </section>
  )
}
