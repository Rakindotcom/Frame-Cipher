import { PosterButton } from '../../Kinetic'

const onboardingSteps = [
  {
    step: "01",
    title: "Book a Consultation",
    desc: "Tell us about your product idea, business problem, target users, and current stage."
  },
  {
    step: "02",
    title: "Receive an Initial Assessment",
    desc: "We review the requirements and discuss whether native, cross-platform, SaaS, web, or an MVP-first approach makes sense."
  },
  {
    step: "03",
    title: "Get a Custom Proposal",
    desc: "We define the recommended scope, architecture, timeline, deliverables, and estimated investment."
  },
  {
    step: "04",
    title: "Approve the Scope",
    desc: "Development begins only after the scope, responsibilities, timeline, and commercial terms are agreed."
  },
  {
    step: "05",
    title: "Design & Development",
    desc: "Our in-house team moves through architecture, UI/UX, development, testing, and launch with agreed review checkpoints."
  },
  {
    step: "06",
    title: "Launch & Support",
    desc: "Once the application is released, we can continue with maintenance, new features, technical improvements, and ongoing support."
  }
]

export default function CTA() {
  return (
    <div id="contact-process">
      {/* WHAT HAPPENS NEXT AFTER YOU CONTACT US */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent mb-3">
              Clear Engagement Model
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              What Happens Next After You Contact Us?
            </h2>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
              Getting started is straightforward. We first understand what you are building before recommending a technology or scope.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {onboardingSteps.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors"
              >
                <div>
                  <span className="font-heading text-3xl md:text-4xl font-black text-frame-accent">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION BANNER */}
      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
            Start Your Build
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Start Your App Development Project
          </h2>
          <div className="mt-6 max-w-2xl mx-auto space-y-3 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Have an app idea, an existing application that needs improvement, or a business process that should become software?
            </p>
            <p>
              Tell us what you are trying to build. We&apos;ll help you define the right platform, scope, and development approach for your product.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PosterButton href="/contact">
              Get a Free App Consultation &rarr;
            </PosterButton>
            <PosterButton href="/contact" variant="outline">
              Request a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
