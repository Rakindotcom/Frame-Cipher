import { PosterButton } from '../Kinetic'
import { resolveServiceHref } from '../../lib/seo/internalLinks'

export default function ServiceDetailLocalRelevanceSection({ landing }) {
  return (
    <section className="relative isolate border-y border-white/[0.08] bg-[#09090B] px-4 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Connected to brand, content, web, ads, and{' '}
            <span className="italic text-frame-accent">analytics.</span>
          </h2>
        </div>
        <div className="grid gap-6">
          <article className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
            <h3 className="font-heading text-2xl font-medium leading-none tracking-tight text-white">Local relevance</h3>
            <p className="mt-5 text-base md:text-lg font-normal leading-relaxed text-zinc-300">{landing.localRelevance}</p>
          </article>
          <article className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
            <h3 className="font-heading text-2xl font-medium leading-none tracking-tight text-white">Related services</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {landing.relatedServices?.map((relatedService) => (
                <PosterButton
                  key={relatedService.slug}
                  href={resolveServiceHref(relatedService.slug) || `/services/${relatedService.slug}`}
                  variant="outline"
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
