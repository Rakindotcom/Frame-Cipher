import { SectionIntro } from '../../../Kinetic'

const rows = [
  { project: 'Single Campaign Email', timeline: 'About 2 to 3 business days' },
  { project: 'Welcome Sequence', timeline: 'About 5 to 7 business days' },
  { project: 'Nurture Sequence', timeline: 'About 7 to 10 business days' },
  { project: 'Larger Multi-Sequence Project', timeline: 'Custom schedule' },
]

export default function Timeline() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Timeline & delivery" title="Timeline & Delivery">
          Typical timelines depend on the number of emails and research requirements.
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
            Client interviews, missing information, approvals, additional revision rounds, and complex research can
            affect the final timeline.
          </p>
          <p className="bg-[#09090B] p-5 text-sm font-semibold leading-relaxed text-[#FAFAFA] md:text-base">
            A confirmed schedule is provided after the project scope is agreed.
          </p>
        </div>
      </div>
    </section>
  )
}
