import { SectionIntro } from '../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Social Audit',
    body: 'We review your existing profiles, content, audience, engagement, platform mix, and overall social presence. The audit identifies strengths, gaps, and opportunities before we build the management plan.',
  },
  {
    number: '02',
    title: 'Strategy & Content Planning',
    body: 'We develop your platform mix, content pillars, posting approach, campaign priorities, and monthly content calendar around your business goals.',
  },
  {
    number: '03',
    title: 'Creation & Approval',
    body: 'Our team creates the agreed content and prepares it for your review. Nothing is published under your brand without the approval process defined for your engagement.',
  },
  {
    number: '04',
    title: 'Publishing & Community Management',
    body: 'Approved content is scheduled and published across the selected platforms. We also monitor comments, messages, mentions, and other relevant interactions according to your plan.',
  },
  {
    number: '05',
    title: 'Reporting & Optimization',
    body: 'At the end of each reporting cycle, we review performance and identify what should continue, change, or be tested next. Your strategy evolves based on actual performance rather than assumptions.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="Social Media Management Process"
        >
          A structured management process rather than a monthly content drop, so the strategy can
          improve cycle after cycle.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative flex min-h-64 flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {step.body}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent transition-colors duration-200 group-hover:text-frame-accent-fg"
              >
                Phase 0{index + 1}
              </span>
            </div>
          ))}

          <div className="flex min-h-64 flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Transparency by default
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Your strategy evolves based on actual performance rather than assumptions, and every
              reporting cycle explains what should continue, what should change, and what should be
              tested next.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
