import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
          Next Steps
        </span>

        <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-4xl">
          Ready to Improve Your Email Communication?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          If your business already has an audience but your emails are inconsistent, generic, or difficult to
          structure, we can help turn the message into a clearer communication system.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Tell us what you are selling, who you are emailing, and what you want the reader to do next. We will
          review the scope and recommend a practical starting point.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request an Email Copywriting Quote &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
