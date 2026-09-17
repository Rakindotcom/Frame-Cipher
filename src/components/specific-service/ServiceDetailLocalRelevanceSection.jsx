import { PosterButton } from '../Kinetic'

export default function ServiceDetailLocalRelevanceSection({ landing }) {
  return (
    <section className="border-y-2 border-frame-border bg-frame-accent px-4 py-24 text-frame-accent-fg md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] opacity-80">Why Frame Cipher is different</p>
          <h2 className="mt-5 font-heading text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase leading-[0.82] tracking-tighter">
            Connected to brand, content, web, ads, and analytics.
          </h2>
        </div>
        <div className="grid gap-px bg-frame-accent-fg/30">
          <article className="bg-frame-accent p-7 md:p-10">
            <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter">Local relevance</h3>
            <p className="mt-5 text-lg font-medium leading-tight opacity-85">{landing.localRelevance}</p>
          </article>
          <article className="bg-frame-accent p-7 md:p-10">
            <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter">Related services</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {landing.relatedServices?.map((relatedService) => (
                <PosterButton
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  variant="dark"
                  className="min-h-12 px-5 py-3 text-xs md:min-h-14 md:px-6 md:text-sm"
                >
                  {relatedService.navTitle}
                </PosterButton>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
