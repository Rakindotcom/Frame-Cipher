import { SectionIntro } from '../../../Kinetic'

const processStepsData = [
  {
    number: '01',
    title: 'Discovery & Competitive Review',
    description: 'We begin by understanding your business, target audience, brand positioning, category, direct competitors, existing visual identity, and intended applications. This establishes clear benchmarks before creative work begins.'
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'We develop distinct creative directions based on the agreed brief, exploring combinations of custom typography, symbols, geometric shapes, letterforms, and color palettes. Each direction is presented with a clear visual rationale.'
  },
  {
    number: '03',
    title: 'Refinement',
    description: 'After you select a concept direction, we refine proportions, typography, spacing, shape geometry, color balances, and alignment. We build out secondary lockups and responsive variations tailored to your specific use cases.'
  },
  {
    number: '04',
    title: 'Real-World Testing',
    description: 'Before final delivery, we check the logo across real-world display contexts: small-size 16px favicons, app icons, single-color stamps, reversed backgrounds, website headers, packaging dielines, and commercial print substrates.'
  },
  {
    number: '05',
    title: 'Final Delivery',
    description: 'After the agreed review and revision stage, we prepare and organize the final asset suite: vector master artwork (AI, SVG, EPS, PDF), transparent PNGs, web JPGs, favicon packages, and basic usage reference guidelines.'
  }
]

const timelineMatrix = [
  { stage: 'Discovery & Direction', duration: '2 to 4 business days', scope: 'Brand questionnaire, category audit & creative brief alignment' },
  { stage: 'Initial Concepts', duration: '4 to 7 business days', scope: 'Exploration of 3 distinct, fully developed visual directions' },
  { stage: 'Refinement', duration: '3 to 5 business days', scope: 'Geometric calibration, typography kerning & lockup variations' },
  { stage: 'Final File Preparation', duration: '1 to 3 business days', scope: 'Master vector exports, favicon suite & usage guidelines handover' }
]

export default function Process({ service }) {
  const steps = service?.processSteps?.length === 5 ? service.processSteps : processStepsData

  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Structured Execution"
          title="Our Logo Design Process"
        >
          A methodical 5-stage framework that moves from strategic positioning and conceptual exploration to meticulous geometric refinement and real-world stress testing.
        </SectionIntro>

        {/* 5-STEP PROCESS GRID */}
        <div className="mt-12 grid gap-px border border-white/[0.08] bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-[#09090B] p-7 md:p-8 flex flex-col justify-between ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-[#A855F7]">
                  {step.number || String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TYPICAL TIMELINES TABLE */}
        <div className="mt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.08] pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                Production Pace
              </span>
              <h3 className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA]">
                Typical Logo Design Timeline
              </h3>
            </div>
            <p className="text-xs font-mono font-bold text-[#A1A1AA]">
              Total Duration: Approximately 2 to 3 weeks
            </p>
          </div>

          <div className="mt-6 overflow-x-auto border border-white/[0.08] bg-[#09090B]">
            <table className="w-full text-left">
              <thead className="border-b border-white/[0.08] bg-[#121214]">
                <tr>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                    Production Stage
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                    Typical Duration
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                    Milestone Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-xs sm:text-sm font-medium">
                {timelineMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#121214]">
                    <td className="p-4 md:p-5 font-bold uppercase tracking-tight text-[#FAFAFA]">
                      {item.stage}
                    </td>
                    <td className="p-4 md:p-5 font-bold text-[#A855F7] whitespace-nowrap">
                      {item.duration}
                    </td>
                    <td className="p-4 md:p-5 text-[#A1A1AA]">
                      {item.scope}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs font-medium text-[#A1A1AA] leading-relaxed">
            * Note: Timelines depend on scope, prompt feedback turnaround, and number of required revision rounds. Projects with complex brand architecture or multilingual script coordination may require additional production time.
          </p>
        </div>
      </div>
    </section>
  )
}
