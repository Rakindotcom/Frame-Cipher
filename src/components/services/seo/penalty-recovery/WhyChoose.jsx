import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'In-House Team, Zero Outsourcing',
    body: 'Framecipher is a single in-house team handling your recovery work from start to finish. There is no white-label agency, no external subcontractor, and no mystery about who is doing the work.',
    closing: 'You deal directly with the people who own the result.',
    action: 'Work With One Team',
  },
  {
    title: 'SEO + Technical + Content + Data',
    body: 'Penalty recovery is not an isolated task. Our team combines SEO strategy, technical SEO, content quality work, and data analysis in one process.',
    closing: 'Diagnosis and remediation stay coordinated instead of fragmented across separate vendors.',
    action: 'Combined Specialists',
  },
  {
    title: 'Evidence & Documentation, Not Guesswork',
    body: 'We focus on what the data and Google\u2019s own policies actually say. Every recovery decision is documented and tied to a finding.',
    closing: 'That makes the process explainable to your team and, where relevant, to Google.',
    action: 'Documented Approach',
  },
  {
    title: 'Real-World Outcomes Over Dashboards',
    body: 'We treat recovered traffic as the starting point, not the finish line. The work is measured by real visits, leads, and clients for your business.',
    closing: 'Recovery exists to serve the site\u2019s actual goals, not vanity metrics.',
    action: 'Results-Focused',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher for Penalty Recovery">
          The quality of a recovery depends on who structures the diagnosis and who does the work.
          Four reasons to trust ours.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div key={item.title} className="flex flex-col justify-between bg-frame-bg p-7">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Reason 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.closing && (
                  <p className="mt-4 border-l-2 border-frame-accent pl-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {item.closing}
                  </p>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between border-t-2 border-frame-border/60 pt-5">
                <span className="text-xs font-bold uppercase tracking-wider text-frame-fg/80">
                  {item.action}
                </span>
                <span aria-hidden="true" className="text-frame-accent">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}