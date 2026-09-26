import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const decisionMatrix = [
  {
    need: 'Existing logo has brand recognition but looks visually dated',
    approach: 'Logo Refresh',
    focus: 'Preserving core recognizable symbols while modernizing weights, gradients, and font choices.'
  },
  {
    need: 'Typography, letter-spacing, or proportions need technical improvement',
    approach: 'Logo Refinement',
    focus: 'Precision geometry, kerning corrections, and vector cleanup without changing core identity.'
  },
  {
    need: 'Existing mark has severe technical scaling or production limitations',
    approach: 'Logo Redesign',
    focus: 'Re-engineering the mark so it scales reliably to favicons, single-color prints, and small screens.'
  },
  {
    need: 'Business positioning, audience, or market offering has changed significantly',
    approach: 'New Logo / Full Redesign',
    focus: 'Developing a new visual mark aligned with executive repositioning and target market expectations.'
  },
  {
    need: 'New company, startup, or organization with no established visual identity',
    approach: 'New Logo Design',
    focus: 'Complete strategic discovery, competitive audit, and distinct concept directions from scratch.'
  },
  {
    need: 'New product line, corporate subsidiary, or sub-brand needs identification',
    approach: 'New Logo / Architecture Review',
    focus: 'Creating a distinct sub-brand mark while harmonizing with parent brand architecture.'
  }
]

export default function RedesignVsNew() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic Evaluation"
          title="Logo Redesign vs. New Logo Design"
        >
          Choosing between a logo refresh, a technical refinement, and a complete redesign depends on how much existing recognition your current mark carries. A redesign should solve an underlying business problem rather than alter a mark simply for novelty.
        </SectionIntro>

        <div className="mt-12 overflow-x-auto border-2 border-frame-border bg-frame-bg">
          <table className="w-full text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                  Your Current Situation & Need
                </th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                  Recommended Approach
                </th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                  Design Focus
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-xs sm:text-sm font-medium">
              {decisionMatrix.map((item, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold uppercase tracking-tight text-frame-fg max-w-xs md:max-w-md">
                    {item.need}
                  </td>
                  <td className="p-4 md:p-6 font-bold text-frame-accent whitespace-nowrap">
                    <span className="inline-block border border-frame-accent/40 bg-frame-accent/10 px-2.5 py-1 text-xs uppercase tracking-wider">
                      {item.approach}
                    </span>
                  </td>
                  <td className="p-4 md:p-6 text-frame-muted-fg leading-relaxed">
                    {item.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-xs sm:text-sm font-medium text-frame-fg leading-relaxed max-w-4xl mx-auto text-center">
            &ldquo;A redesign should solve an underlying commercial or functional limitation rather than change the logo simply for the sake of making it look newer. When existing customer recognition holds commercial value, our default instinct is evolution, not erasure.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
