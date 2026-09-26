import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
          Next Steps
        </span>

        <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-4xl">
          Start Your Case Study Project
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Your customer results already exist. The challenge is turning those results into a story that prospects
          can understand, trust, and use when making a buying decision.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Framecipher handles the research, interviews, writing, evidence integration, revisions, and approval
          coordination so your team can turn real customer success into useful sales and marketing content.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request a Custom Quote &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
