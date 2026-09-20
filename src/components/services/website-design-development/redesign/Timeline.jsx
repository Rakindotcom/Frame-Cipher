import { SectionIntro } from '../../../Kinetic'

const timelineTableRows = [
  { type: 'Visual Refresh', timeline: '~2–3 weeks' },
  { type: 'Standard Redesign', timeline: '~4–6 weeks' },
  { type: 'Platform Migration', timeline: '~6–10 weeks' },
  { type: 'Complex / Ecommerce', timeline: '~8–14+ weeks' },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Turnaround & Scheduling" title="Website Redesign Timeline">
          A website redesign typically takes 2 to 14+ weeks, depending on how much of the website needs rebuilding, whether a platform migration is involved, and the size and complexity of the existing site.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm max-w-3xl">
          <table className="w-full text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/20">
              <tr>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {timelineTableRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/10 transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-bold uppercase text-frame-fg">{row.type}</td>
                  <td className="p-5 md:p-6 font-bold text-frame-accent">{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8 max-w-4xl space-y-2 text-sm sm:text-base font-medium text-frame-muted-fg leading-relaxed">
          <p>
            Projects can move faster when access to the current website, analytics, hosting, content, and other required systems is provided at the beginning.
          </p>
          <p className="font-bold text-frame-fg">
            The final timeline is confirmed after the audit and scope are established.
          </p>
        </div>
      </div>
    </section>
  )
}