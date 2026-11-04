import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7] md:text-sm">
          Start With A Free Consultation
        </span>

        <h2 className="mt-5 font-heading text-2xl font-bold leading-tight tracking-tighter text-[#FAFAFA] md:text-4xl">
          Ready to Make Your Website Clearer and More Persuasive?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
          Your website should not make visitors work to understand what you offer.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
          Every important page should have a clear purpose, communicate the right information, reflect your
          brand, and guide the visitor toward an appropriate next step.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
          Whether you need one page rewritten or a complete website content system, Framecipher can help you
          plan and write the content around your actual business, audience, and goals.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PosterButton href="/contact">Get a Free Content Consultation &rarr;</PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request a Website Content Sample &rarr;
          </PosterButton>
          <PosterButton href="/contact" variant="outline">
            Get a Custom Quote &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
