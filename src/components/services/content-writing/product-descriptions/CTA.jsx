import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
          Next Steps
        </span>

        <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-4xl">
          Ready to Improve Your Product Pages?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Your product page has to do more than list specifications. It needs to help shoppers understand the
          product, assess its value, and know what to do next.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Tell us how many products you sell, where they are listed, and what needs to improve. We can help
          define a practical scope from there.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PosterButton href="/contact">Get a Free Quote &rarr;</PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request a Product Copy Sample &rarr;
          </PosterButton>
          <PosterButton href="/contact" variant="outline">
            Talk to Our Content Team &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
