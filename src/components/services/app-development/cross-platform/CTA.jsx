import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
          Ready to Build?
        </p>
        <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
          Start Your Cross-Platform App Development Project
        </h2>
        <div className="mt-6 max-w-2xl mx-auto space-y-3 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
          <p>
            Have an app idea, an existing product, or a business workflow that needs Android and iOS support?
          </p>
          <p>
            Tell us what you want to build, who will use it, and what stage your project is at.
          </p>
          <p className="text-frame-fg font-semibold">
            We will review the requirements and help you choose the right development approach for your product.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PosterButton href="/contact">
            Start Your App Project &rarr;
          </PosterButton>
          <PosterButton href="/contact" variant="outline">
            Get a Custom Quote &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
