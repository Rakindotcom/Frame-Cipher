import { PosterButton } from '../../../Kinetic'

const ctaRequirements = [
  "What systems need to connect",
  "What data needs to move",
  "Whether you need a new API or an integration",
  "Which third-party services are involved",
  "Any existing API documentation",
  "Your expected timeline"
]

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
          Ready to Connect Your Systems?
        </p>
        <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
          Start Your API Development Project
        </h2>
        <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg max-w-2xl mx-auto">
          Whether you need a custom API, a payment integration, a CRM connection, a multi-system data flow, or help fixing an unreliable existing API, we can start by reviewing what you already have.
        </p>

        {/* STRUCTURED PROMPT CHECKLIST */}
        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8 text-left max-w-xl mx-auto">
          <p className="text-xs md:text-sm font-black uppercase tracking-wider text-frame-accent mb-4">
            Tell us:
          </p>
          <ul className="space-y-2.5">
            {ctaRequirements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-medium text-frame-fg">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                  <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-muted-fg">
            We will review the requirements and determine the appropriate technical approach.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request API Project Estimate &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}

