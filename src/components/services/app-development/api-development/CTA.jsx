import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
          Ready to Build?
        </p>
        <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
          Start Your API Development & Integration Project
        </h2>
        <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg max-w-2xl mx-auto">
          Whether you need a custom API, a payment integration, a CRM connection, a multi-system data flow, or help fixing an unreliable existing API, we can start by reviewing what you already have. Tell us what systems need to connect, what data needs to move, whether you need a new API or an integration, which third-party services are involved, any existing API documentation, and your expected timeline. We will review the requirements and determine the appropriate technical approach.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PosterButton href="/contact">Request a Free Consultation</PosterButton>
          <PosterButton href="/projects" variant="outline">
            See Our Work
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
