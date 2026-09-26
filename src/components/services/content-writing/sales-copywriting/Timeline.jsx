import { SectionIntro } from '../../../Kinetic'

const rows = [
  { project: 'Sales Page / Long-Form Copy', timeline: 'About 5–7 business days' },
  { project: 'Proposal / Pitch Deck Copy', timeline: 'About 5–7 business days' },
  { project: 'VSL / Sales Script', timeline: 'About 3–5 business days' },
  { project: 'Larger Multi-Asset Projects', timeline: 'Custom schedule' },
]

export default function Timeline() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Timeline & delivery" title="Timeline & Delivery">
          Typical timelines depend on the format and research requirements.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-frame-border bg-frame-muted/40">
                <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent">
                  Project
                </th>
                <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent">
                  Typical Timeline
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-frame-border/60 text-xs md:text-sm font-medium">
              {rows.map((row) => (
                <tr key={row.project} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-4 md:p-5 font-bold text-frame-fg">{row.project}</td>
                  <td className="p-4 md:p-5 font-semibold text-frame-accent">{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <p className="bg-frame-bg p-5 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Research, client interviews, missing proof, approvals, and additional revision rounds can affect the
            final timeline.
          </p>
          <p className="bg-frame-bg p-5 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
            A confirmed delivery schedule is provided after the scope is agreed.
          </p>
        </div>
      </div>
    </section>
  )
}
