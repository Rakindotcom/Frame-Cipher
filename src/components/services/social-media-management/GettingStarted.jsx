import { SectionIntro } from '../../Kinetic'

const startSteps = [
  {
    number: '01',
    title: 'Book Your Free Consultation',
    body: 'Contact Framecipher by phone, WhatsApp, email, or our website form to discuss your business and social media requirements.',
  },
  {
    number: '02',
    title: 'Receive a Free Social Audit',
    body: 'We review your existing profiles, content, platform mix, and engagement to identify key opportunities and gaps.',
  },
  {
    number: '03',
    title: 'Get a Custom Content Strategy',
    body: 'We recommend the right platform mix, content approach, content pillars, and publishing structure based on your goals.',
  },
  {
    number: '04',
    title: 'Approve the Plan',
    body: 'You review the proposed strategy and content direction before publishing begins.',
  },
  {
    number: '05',
    title: 'Content Creation & Posting Begins',
    body: 'Our in-house team creates, schedules, publishes, and manages your approved social content.',
  },
  {
    number: '06',
    title: 'Monthly Reporting & Continuous Improvement',
    body: 'You receive regular performance reporting, insights, and recommendations so the strategy can evolve based on what is actually working.',
  },
]

export default function GettingStarted() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="After you contact us"
          title="What Happens After You Contact Us?"
        >
          Getting started is straightforward, and nothing is published before you approve the
          direction.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {startSteps.map((step, index) => (
            <div
              key={step.number}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-xl">
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
                Step 0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
