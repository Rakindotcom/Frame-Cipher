import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
          Ready to Build?
        </p>
        <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
          Start Your SaaS App Development Project
        </h2>
        <div className="mt-6 max-w-2xl mx-auto space-y-3 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
          <p>
            Have a SaaS idea, an existing product, or a business workflow you want to turn into software?
          </p>
          <p>
            Tell us what the product should do, who will use it, how customers will pay, and what stage you are currently at.
          </p>
          <p className="text-frame-fg font-semibold">
            We will review the requirements and help you define a practical path from product strategy to launch.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PosterButton href="/contact">
            Start Your SaaS Project &rarr;
          </PosterButton>
          <PosterButton href="/contact" variant="outline">
            Get a Custom Quote &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
