import { PosterButton } from '../../Kinetic'

const onboardingSteps = [
  {
    step: '01',
    title: 'Book Your Free Consultation',
    description: 'Contact us by phone, WhatsApp, email, or our website form to share your goals and ideas.',
  },
  {
    step: '02',
    title: 'Receive a Free Project Assessment',
    description: 'We will review your current site (if you have one), your business goals, and the platform that fits best.',
  },
  {
    step: '03',
    title: 'Get a Custom Proposal',
    description: 'We will explain our recommended approach, estimated timeline, and quotation based on your actual scope, not a generic package price.',
  },
  {
    step: '04',
    title: 'Approve the Plan',
    description: 'No design or development work begins until you review and approve the proposed scope, deliverables, and timeline.',
  },
  {
    step: '05',
    title: 'Design & Development Begins',
    description: 'Our in-house team starts on wireframes and builds, with review checkpoints so you are approving direction at every stage, not seeing the final product for the first time at launch.',
  },
  {
    step: '06',
    title: 'Launch & Ongoing Support',
    description: 'Once your site goes live, we provide guidance on maintenance needs and next steps for keeping it updated, fast, and secure.',
  },
]

export default function CTA() {
  return (
    <section id="cta" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* WHAT HAPPENS NEXT SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Simple & Transparent Onboarding
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            What Happens Next After You Contact Us?
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Getting started is simple and transparent. Here is what you can expect from your first inquiry to final launch and handover:
          </p>
        </div>

        {/* 6 ONBOARDING STEPS GRID */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {onboardingSteps.map((item) => (
            <div key={item.step} className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Step {item.step}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FINAL CONVERSION BANNER */}
        <div className="mt-16 border-2 border-frame-border bg-frame-muted/30 p-8 md:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Start Your Journey
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Ready to build your next website?
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Get a free consultation and see what we would build for you. Straight answers, clear estimates, and zero sales pressure.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <PosterButton href="/contact">
              Get a Free Website Quote &rarr;
            </PosterButton>
            <PosterButton href="/contact" variant="outline">
              Talk to Our Dev Team
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
