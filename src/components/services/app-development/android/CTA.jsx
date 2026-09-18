import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
          Start Your Android Build
        </p>
        <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
          Start Your Android App Development Project
        </h2>
        <div className="mt-6 max-w-2xl mx-auto space-y-3 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
          <p>
            Have an Android app idea, an existing application that needs improvement, or a business process that should become mobile software?
          </p>
          <p>
            Tell us what you&apos;re building and we&apos;ll help define the right scope, architecture, and development approach for your Android product.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PosterButton href="/contact">
            Get Free Consultation &rarr;
          </PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request a Custom Quote &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
