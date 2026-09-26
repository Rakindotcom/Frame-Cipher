import { PosterButton } from '../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
          Start With A Free Sample
        </span>

        <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-4xl">
          Ready to Create Content That Has a Clear Purpose?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Your content should not exist simply because your website needs more words. It should help someone
          find you, understand you, trust you, choose you, or take the next step.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Tell us what you want the content to accomplish, and Framecipher can help define the right writing
          scope.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PosterButton href="/contact">Get a Free Content Sample &rarr;</PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request a Custom Content Plan &rarr;
          </PosterButton>
          <PosterButton href="/contact" variant="outline">
            Talk to Our Content Team &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
