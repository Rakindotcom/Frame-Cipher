import { SectionIntro, PosterButton } from '../../../Kinetic'

const intentMapping = [
  ['Product searches', 'Product pages'],
  ['Category searches', 'Category pages'],
  ['Comparison searches', 'Comparison content'],
  ['Research queries', 'Buying guides'],
  ['Brand searches', 'Relevant brand or product pages'],
  ['Supporting topics', 'Informational content with commercial internal links'],
]

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What this is" title="Ecommerce SEO Built Around Buyers, Products & Revenue">
          Ecommerce SEO works best when search visibility connects with your buying journey.
        </SectionIntro>

        <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            A customer searching for a specific product may already have strong purchase intent.
            Another visitor may still be comparing options or researching a problem. Your SEO
            strategy should account for that difference.
          </p>
          <p>
            We connect search demand with the pages that can satisfy each intent:
          </p>
        </div>

        <ul className="mt-8 overflow-hidden border-2 border-frame-border bg-frame-bg">
          {intentMapping.map(([intent, page], index) => (
            <li
              key={index}
              className="flex flex-col gap-2 border-b border-frame-border/60 px-6 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between md:px-7"
            >
              <span className="text-sm font-bold uppercase tracking-tight text-frame-fg md:text-base">
                {intent}
              </span>
              <span aria-hidden="true" className="font-mono text-xs font-bold text-frame-accent">
                &rarr;
              </span>
              <span className="text-sm font-semibold uppercase tracking-tight text-frame-accent md:text-base">
                {page}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          We also consider technical performance, site architecture, internal linking, structured
          data, and ecommerce analytics. The goal is simple: bring qualified searchers to useful
          pages and create more opportunities for them to become customers.
        </p>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              See where you stand
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Start with a free consultation
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review your store&apos;s current SEO position and recommend where the work will
              have the most impact first.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}