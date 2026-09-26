import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const steps = [
  {
    num: "01",
    title: "Brief & Platform Review",
    subtitle: "Discovery",
    desc: "We review your brand guidelines, target platforms (Meta, LinkedIn, X, TikTok), content requirements, recurring post types, aesthetic references, and campaign goals.",
    deliverable: "Creative Brief & Platform Spec Sheet"
  },
  {
    num: "02",
    title: "Content & Direction",
    subtitle: "Architecture",
    desc: "We establish the visual hierarchy, color harmonies, typography baselines, asset imagery, and modular layout rules before beginning visual composition.",
    deliverable: "Visual Direction Moodboard & Layout Logic"
  },
  {
    num: "03",
    title: "Design & Composition",
    subtitle: "Execution",
    desc: "Graphics are crafted strictly around native platform formats, safe-zone clearance, mobile screen legibility, and brand visual guidelines.",
    deliverable: "Initial Design Batch for Review"
  },
  {
    num: "04",
    title: "Client Review & Feedback",
    subtitle: "Refinement",
    desc: "The design batch is presented for review in full context. Consolidated client feedback is incorporated during our included revision stage.",
    deliverable: "Revised & Polished Master Proofs"
  },
  {
    num: "05",
    title: "Final Export & Delivery",
    subtitle: "Handoff",
    desc: "Approved graphics are exported in lossless WebP, PNG, and JPG, organized into structured folders by platform and ready for direct publishing.",
    deliverable: "Publish-Ready Multi-Platform Assets"
  },
  {
    num: "06",
    title: "Template Scaling",
    subtitle: "Ongoing Systems",
    desc: "For template and retainer engagements, master components are compiled into reusable Figma/Canva libraries with clear styling guidelines.",
    deliverable: "Editable Component System & Guidelines"
  }
]

const timelines = [
  {
    projectType: "Single Graphic or Small Batch",
    timeline: "2–3 business days",
    scope: "1–3 platform-formatted feed or Story graphics",
    idealFor: "Occasional announcements, urgent promos & standalone posts"
  },
  {
    projectType: "Carousel Sequence",
    timeline: "3–5 business days",
    scope: "Full multi-slide carousel design (up to 8 slides)",
    idealFor: "Educational frameworks, teardowns & storytelling carousels"
  },
  {
    projectType: "Template System",
    timeline: "About 1 week",
    scope: "3–5 reusable, editable master templates in Figma or Canva",
    idealFor: "Internal teams wanting to self-serve recurring weekly content"
  },
  {
    projectType: "Campaign Graphics Suite",
    timeline: "Scoped by volume",
    scope: "Multi-asset launch suites across feed, Stories, and ad units",
    idealFor: "Seasonal promotional campaigns & new product launches"
  },
  {
    projectType: "Monthly Graphics Retainer",
    timeline: "Agreed production schedule",
    scope: "Ongoing monthly graphic production with dedicated turnaround slots",
    idealFor: "Brands needing consistent, high-volume weekly social creatives"
  }
]

export default function Process() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        
        {/* PROCESS INTRO */}
        <SectionIntro
          eyebrow="Workflow Rigor"
          title="Our Social Media Graphics Process"
          align="center"
        >
          A structured 6-phase creative process that ensures brand visual continuity, safe-zone compliance, and reliable turnaround.
        </SectionIntro>

        {/* 6 PROCESS STEPS (BALANCED 3x2 GRID) */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                  <span className="font-heading text-3xl font-black text-frame-accent">
                    {step.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-frame-border/60 pt-4">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                  Deliverable
                </span>
                <span className="text-xs font-bold text-frame-fg flex items-start gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                  <span className="leading-snug">{step.deliverable}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TIMELINE MATRIX SECTION */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-frame-accent block mb-2">
              Production Turnaround
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Typical Social Media Graphics Timelines
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg leading-relaxed">
              Timelines may vary when a project requires new creative direction from scratch, extensive revisions, multiple platform adaptations, or delayed client-supplied copywriting.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40 font-mono text-[11px] font-black uppercase tracking-wider text-frame-accent">
                <tr>
                  <th className="p-4 md:p-5">Project Type</th>
                  <th className="p-4 md:p-5">Typical Timeline</th>
                  <th className="p-4 md:p-5 hidden sm:table-cell">Production Scope</th>
                  <th className="p-4 md:p-5 hidden md:table-cell">Best Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y border-frame-border font-medium">
                {timelines.map((item, tIdx) => (
                  <tr key={tIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-frame-fg whitespace-nowrap">
                      {item.projectType}
                    </td>
                    <td className="p-4 md:p-5 font-mono font-bold text-frame-accent whitespace-nowrap">
                      {item.timeline}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg hidden sm:table-cell">
                      {item.scope}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg hidden md:table-cell">
                      {item.idealFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-frame-border/80 pt-4 text-xs font-mono text-frame-muted-fg">
            <span>Fast-track expedited delivery available for urgent campaign launches.</span>
            <span className="text-frame-accent font-bold">Monthly retainers follow scheduled content calendar queues</span>
          </div>
        </div>

      </div>
    </section>
  )
}
