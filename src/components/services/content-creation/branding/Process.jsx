import { SectionIntro } from '../../../Kinetic'

const processStepsData = [
  {
    number: '01',
    title: 'Discovery & Brand Audit',
    description: 'We begin by analyzing your business model, customer segments, industry category, commercial goals, and existing materials. For existing brands, we audit what is currently working and identify valuable brand equity to preserve.'
  },
  {
    number: '02',
    title: 'Research & Competitive Review',
    description: 'We examine direct competitors and category conventions. The objective is not to imitate rivals, but to understand the visual and verbal landscape and uncover opportunities for bold, defensible differentiation.'
  },
  {
    number: '03',
    title: 'Strategy & Positioning',
    description: 'We synthesize research into an authoritative strategic framework—defining your market positioning statement, audience personas, core values, brand personality attributes, and central messaging pillars.'
  },
  {
    number: '04',
    title: 'Creative Direction',
    description: 'We translate the strategy into visual and verbal territories, presenting mood boards, typographic explorations, color concepts, and art direction themes to align on the core creative direction before full system buildout.'
  },
  {
    number: '05',
    title: 'Identity System Development',
    description: 'We develop the full, interlocking brand system: primary and secondary logo lockups, color palette systems, typographic hierarchies, iconography libraries, photographic art direction, and brand voice frameworks.'
  },
  {
    number: '06',
    title: 'Review & Refinement',
    description: 'Your feedback is integrated across structured review milestones. We pressure-test the identity across digital screens, mobile interfaces, physical print substrates, and packaging to ensure flawless execution.'
  },
  {
    number: '07',
    title: 'Guidelines & Handoff',
    description: 'We document the approved system into a comprehensive Brand Manual. We compile and organize production-ready vector master files, digital assets, and editable templates into a cloud-ready asset library.'
  },
  {
    number: '08',
    title: 'Rollout Support',
    description: 'We advise your executive and marketing teams on rollout sequencing. Ongoing collateral design and content production continue seamlessly through our in-house Graphic Design and Content Writing teams.'
  }
]

const timelineMatrix = [
  { stage: 'Discovery & Brand Audit', duration: '2–4 business days', scope: 'Stakeholder interviews, legacy audit & brand questionnaire' },
  { stage: 'Research & Strategy', duration: '3–7 business days', scope: 'Competitive review, positioning framework & messaging pillars' },
  { stage: 'Creative Direction', duration: '3–5 business days', scope: 'Exploration of distinct visual & verbal concept directions' },
  { stage: 'Identity Development', duration: '5–10 business days', scope: 'Full color, typography, imagery, voice & layout system engineering' },
  { stage: 'Review & Refinement', duration: '3–5 business days', scope: 'Structured stakeholder feedback integration & real-world testing' },
  { stage: 'Guidelines & Final Handoff', duration: '2–5 business days', scope: 'Brand manual compilation, vector export suite & asset library organization' }
]

export default function Process({ service }) {
  const steps = service?.processSteps?.length === 8 ? service.processSteps : processStepsData

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Methodical Execution"
          title="Our Structured Branding Process"
        >
          From strategic discovery to comprehensive brand manual handoff, our 8-stage methodology ensures visual and verbal identities are built with commercial intention and cross-platform longevity.
        </SectionIntro>

        {/* 8-STEP PROCESS GRID */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
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
                Production Pace
              </span>
              <h3 className="mt-1 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Typical Branding Project Timeline
              </h3>
            </div>
            <p className="text-xs font-mono font-bold text-frame-muted-fg">
              Total Duration: Approximately 4–6 weeks
            </p>
          </div>

          <div className="mt-6 overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Project Stage
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Typical Duration
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Milestone Deliverables
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-xs sm:text-sm font-medium">
                {timelineMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-5 font-bold uppercase tracking-tight text-frame-fg">
                      {item.stage}
                    </td>
                    <td className="p-4 md:p-5 font-bold text-frame-accent whitespace-nowrap">
                      {item.duration}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg">
                      {item.scope}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs font-medium text-frame-muted-fg leading-relaxed">
            * Note: A focused Brand Starter project may move faster (3–4 weeks), while enterprise rebrands involving multiple stakeholder groups or complex sub-brand architectures may require additional production time.
          </p>
        </div>
      </div>
    </section>
  )
}
