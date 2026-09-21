import { SectionIntro } from '../../../Kinetic'

const pageTypes = [
  {
    title: 'Service & Landing Pages',
    body: 'Service pages usually sit close to the buying decision. A visitor comparing providers wants to know what is included, how delivery works, and how it relates to their situation, not just a list of features.',
    note: 'We shape these pages to answer the commercial questions behind the query and move the visitor toward an action.',
  },
  {
    title: 'Ecommerce Product & Category Pages',
    body: 'Product and category pages carry transactional intent, where users compare, decide, and buy. On-page SEO here affects not only visibility but also the quality of visitors reaching the store.',
    note: 'We optimize product content, category structure, and internal links while keeping page speed and site-wide technical health in mind.',
  },
  {
    title: 'Blog & Resource Pages',
    body: 'Informational pages attract visitors looking for answers, education, or analysis. They also support service and product pages through internal linking and topical authority.',
    note: 'We build resource content around genuine questions and connect it back to the pages that convert.',
  },
  {
    title: 'Local Business Pages',
    body: 'Local service pages need to match both the service and the location a searcher cares about, without duplicating thin content across city pages.',
    note: 'We apply on-page SEO to local pages to improve relevance for the service, the area, and the intent behind the search.',
  },
]

export default function Platforms() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Built differently"
          title="On-Page SEO for Different Page Types"
        >
          The queries different pages attract vary by intent, and so should their on-page
          optimization. We adapt the approach to the role each page plays.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {pageTypes.map((pageType, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Page type 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {pageType.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pageType.body}
                </p>
                {pageType.note && (
                  <p className="mt-4 border-l-2 border-frame-accent bg-frame-bg p-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {pageType.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}