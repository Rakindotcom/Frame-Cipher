import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Initial Discovery',
    body: 'We review your business goals, current SEO performance, internal team capacity, and existing constraints.',
    points: [],
  },
  {
    title: 'Audit & Assessment',
    body: 'A technical, content, and competitive review to establish where you genuinely stand right now.',
    points: [],
  },
  {
    title: 'Roadmap Development',
    body: 'A prioritized, resource-realistic strategy built around what you can actually execute.',
    points: [],
  },
  {
    title: 'Strategy Walkthrough',
    body: 'We present the roadmap directly, answering questions and adjusting based on your feedback.',
    points: [],
  },
  {
    title: 'Ongoing Advisory or Handoff',
    body: "Continued strategic support if you want it, or a clean handoff to your internal team if that's the better fit.",
    points: [],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Execution Framework" title="How We Approach SEO Strategy & Consulting">
          Understanding your actual situation comes before recommending anything.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}