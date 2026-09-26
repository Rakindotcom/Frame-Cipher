import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
          Start With A Free Sample
        </span>

        <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-4xl">
          Ready to Build a Stronger SEO Content Strategy?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Your blog should not be a collection of articles published simply to keep the website active.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Each piece should have a reason to exist, a search intent to satisfy, an audience to help, and a
          clear place within your wider website.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Tell us what you want to rank for, who you want to reach, and what your business needs the content to
          accomplish.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PosterButton href="/contact">Get a Free Content Sample &rarr;</PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request a Custom SEO Content Plan &rarr;
          </PosterButton>
          <PosterButton href="/contact" variant="outline">
            Talk to Our Content Team &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
