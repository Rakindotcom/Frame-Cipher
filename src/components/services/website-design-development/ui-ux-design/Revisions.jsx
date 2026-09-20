import { SectionIntro } from '../../../Kinetic'

const approvalCheckpoints = [
  {
    title: 'Review & Approval',
    description: 'Major stages can include review and approval checkpoints for research, wireframes, visual design, and prototypes.',
  },
  {
    title: 'Revisions',
    description: 'The number of included revision rounds depends on the selected project scope and is defined before work begins.',
  },
  {
    title: 'Handoff Support',
    description: 'After final approval, we can provide clarification and implementation support where included in the project scope.',
  },
  {
    title: 'Post-Delivery Support',
    description: 'Additional design changes, new features, extended design-system work, and future product updates can be handled as a separate scope.',
  },
]

export default function Revisions() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Collaboration & Governance" title="Revisions, Approvals & Post-Delivery Support">
          UI/UX projects work best when feedback happens at the right stage instead of being saved until the end.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
          {approvalCheckpoints.map((chk, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Checkpoint 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {chk.title}
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {chk.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <p className="text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg italic">
            We do not guarantee a specific conversion rate or business outcome from design alone. Results can also depend on content, implementation, traffic, pricing, marketing, product quality, and other factors outside the design process.
          </p>
        </div>
      </div>
    </section>
  )
}