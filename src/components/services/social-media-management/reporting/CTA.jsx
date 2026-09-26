import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent md:text-sm">
          Monthly Reporting Consultation
        </span>

        <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-4xl">
          Ready to Understand What Your Social Media Is Actually Doing?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Your social media report should do more than show whether numbers went up or down. Framecipher
          turns social performance data into clear context, useful insights, and practical recommendations
          for the next planning cycle.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PosterButton href="/contact">Request a Monthly Reporting Consultation &rarr;</PosterButton>
          <PosterButton href="/services/social-media-management" variant="outline">
            Explore Social Media Management &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
