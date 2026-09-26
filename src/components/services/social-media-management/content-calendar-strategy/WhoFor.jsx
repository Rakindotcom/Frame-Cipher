import { SectionIntro, PosterButton } from '../../../Kinetic'

const audiences = [
  {
    title: 'Multi-Platform Businesses',
    body: 'Businesses managing multiple social platforms that need one coordinated planning system instead of separate content schedules.',
  },
  {
    title: 'Ecommerce & Product Brands',
    body: 'Ecommerce businesses can use coordinated content planning for product launches, promotions, product education, seasonal campaigns, customer questions, and product-focused storytelling.',
  },
  {
    title: 'Service Businesses',
    body: 'Service businesses can plan educational content, expertise-led posts, case studies, social proof, offers, FAQs, and lead-generation content around their customer journey.',
  },
  {
    title: 'B2B & Professional Brands',
    body: 'B2B companies and professional service businesses can coordinate thought leadership, industry insights, case studies, educational content, company updates, and lead-generation campaigns.',
  },
  {
    title: 'Startups & Growing Businesses',
    body: 'Growing businesses often need a repeatable content system before social activity becomes difficult to manage. A structured calendar can give the team clearer priorities, responsibilities, deadlines, and campaign visibility.',
  },
  {
    title: 'In-House Marketing Teams',
    body: 'Internal marketing teams can use our Setup option to establish a professional content framework and then manage execution themselves. We can also work alongside internal teams when ongoing planning and coordination are required.',
  },
  {
    title: 'International Businesses',
    body: 'Businesses targeting multiple countries can use coordinated planning to adapt content for different markets while maintaining consistent brand positioning.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Target audience alignment"
          title="Who Our Content Calendar &amp; Strategy Service Is For"
        >
          The service can be scoped around different platform counts, internal capabilities, and planning
          horizons.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="flex h-10 w-10 items-center justify-center border-2 border-frame-accent/40 bg-frame-accent/10 font-heading text-sm font-bold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-xl">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {audience.body}
                </p>
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure where you fit
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              The initial cross-platform audit helps us understand your planning situation before
              recommending an engagement, so you are not paying for scope you do not need.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact" variant="outline">
                Discuss Your Content Planning Needs &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
