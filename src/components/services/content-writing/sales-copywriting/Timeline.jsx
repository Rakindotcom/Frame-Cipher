import { SectionIntro } from '../../../Kinetic'

const rows = [
  { project: 'Sales Page / Long-Form Copy', timeline: 'About 5 to 7 business days' },
  { project: 'Proposal / Pitch Deck Copy', timeline: 'About 5 to 7 business days' },
  { project: 'VSL / Sales Script', timeline: 'About 3 to 5 business days' },
  { project: 'Larger Multi-Asset Projects', timeline: 'Custom schedule' },
]

export default function Timeline() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Timeline & delivery" title="Timeline & Delivery">
          Typical timelines depend on the format and research requirements.
        </SectionIntro>

        <div className="overflow-x-auto border border-white/[0.08] bg-[#09090B]">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#121214]/40">
                <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-[#A855F7]">
                  Project
                </th>
                <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-[#A855F7]">
                  Typical Timeline
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-frame-border/60 text-xs md:text-sm font-medium">
              {rows.map((row) => (
                <tr key={row.project} className="hover:bg-[#121214] transition-colors">
                  <td className="p-4 md:p-5 font-bold text-[#FAFAFA]">{row.project}</td>
                  <td className="p-4 md:p-5 font-semibold text-[#A855F7]">{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          <p className="bg-[#09090B] p-5 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Research, client interviews, missing proof, approvals, and additional revision rounds can affect the
            final timeline.
          </p>
          <p className="bg-[#09090B] p-5 text-sm font-semibold leading-relaxed text-[#FAFAFA] md:text-base">
            A confirmed delivery schedule is provided after the scope is agreed.
          </p>
        </div>
      </div>
    </section>
  )
}
