import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
          Community Management Consultation
        </span>

        <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-4xl">
          Ready to Build a More Responsive Brand Community?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Tell us which platforms matter, what your customers are asking, and where responses are falling
          behind. We will help you define a community management scope that matches your actual workload.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PosterButton href="/contact">Request a Community Management Consultation &rarr;</PosterButton>
          <PosterButton href="/services/social-media-management" variant="outline">
            Explore Social Media Management &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
