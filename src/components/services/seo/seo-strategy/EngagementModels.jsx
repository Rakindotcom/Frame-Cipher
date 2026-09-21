import { SectionIntro } from '../../../Kinetic'

const models = [
  {
    title: 'Project-Based Strategy',
    body: 'A defined engagement, audit, roadmap, and a specific deliverable, with a clear start and end point. Suited to businesses that need direction once and can execute independently after.',
  },
  {
    title: 'Fractional Ongoing Advisory',
    body: 'Regular, retainer-based strategic guidance without full execution work, closer to having a part-time SEO lead than hiring an agency for hands-on tasks.',
  },
  {
    title: 'Hybrid: Strategy Plus Selective Execution',
    body: "Strategic direction from us, paired with execution on the specific pieces your internal team can't handle, technical work, for example, while your team owns content.",
  },
  {
    title: 'Full Consulting-to-Execution Transition',
    body: 'Starting with strategy and consulting, then transitioning into full execution with us once the roadmap is validated and trust is established.',
  },
]

export default function EngagementModels() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Flexible by design" title="Different Ways to Work With Us">
          Strategy and consulting doesn&apos;t fit one single engagement model, so we don&apos;t
          force one.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {models.map((model, index) => (
            <div
              key={model.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Model 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {model.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {model.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-7 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            None of these is the &ldquo;right&rdquo; way to work with a consulting partner, the
            right one depends entirely on what your team already has and what it&apos;s actually
            missing.
          </p>
        </div>
      </div>
    </section>
  )
}