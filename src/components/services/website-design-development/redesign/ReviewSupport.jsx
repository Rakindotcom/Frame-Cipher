import { SectionIntro } from '../../../Kinetic'

const supportStages = [
  {
    title: 'Client Review & Approval',
    description: 'Major design and structural decisions are presented for review before development progresses.',
  },
  {
    title: 'Pre-Launch Review',
    description: 'The completed website goes through functional, responsive, SEO, content, and technical checks before launch.',
  },
  {
    title: 'Launch Support',
    description: 'We remain involved during the launch process to address issues identified during the transition.',
  },
  {
    title: 'Post-Launch Monitoring',
    description: 'We monitor agreed technical and search signals after launch and investigate issues that require attention.',
  },
  {
    title: 'Ongoing Maintenance',
    description: 'Long-term maintenance, security updates, performance reviews, content updates, and additional feature development can be provided separately when required.',
  },
]

export default function ReviewSupport() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Quality Assurance & Handover" title="Review, Approval & Post-Launch Support">
          A redesign should not move from concept to launch without clear review points.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {supportStages.map((stage, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Checkpoint 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {stage.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}