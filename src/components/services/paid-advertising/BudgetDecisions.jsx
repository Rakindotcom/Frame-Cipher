import { SectionIntro } from '../../Kinetic'

const decisionAreas = [
  {
    title: 'Search & High-Intent Demand',
    body: 'Search advertising is useful when potential customers already express demand through relevant queries. This can make search particularly valuable for services, products, urgent needs, local demand, and other categories where people actively look for a solution.',
    note: 'The key question is not simply how many searches exist. It is whether those searches have enough commercial intent to justify the cost of acquiring the customer.',
  },
  {
    title: 'Social & Discovery',
    body: 'Social platforms can reach audiences before they actively search for a solution. That makes creative, offer, audience segmentation, and message-market fit particularly important.',
    note: 'We consider social advertising when the product, offer, visual assets, audience behavior, and customer economics support demand generation or conversion through social environments.',
  },
  {
    title: 'B2B & Professional Audiences',
    body: 'B2B acquisition can involve multiple decision-makers, longer sales cycles, higher customer values, and greater consideration before purchase. Paid strategy therefore needs to account for the actual buying process rather than optimizing only for low-cost traffic.',
    note: 'LinkedIn and other channels can be combined with search, remarketing, content, landing pages, and lead-nurturing activity where appropriate.',
  },
  {
    title: 'Ecommerce & Marketplace Demand',
    body: 'Ecommerce campaigns need to connect advertising with product-level economics. We consider product margin, average order value, purchase frequency, catalog size, shopping intent, product feed quality, conversion rate, customer acquisition cost, and repeat purchase potential.',
    note: 'A campaign can generate sales and still be commercially weak if the acquisition cost does not work with the underlying economics.',
  },
  {
    title: 'Emerging AI Advertising Channels',
    body: 'New advertising environments can create opportunities before they become as crowded as established channels. We monitor emerging AI advertising options and assess them based on actual availability, audience relevance, campaign maturity, measurement options, and fit with your business.',
    note: 'We do not recommend an emerging channel simply because it is new.',
  },
]

export default function BudgetDecisions() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Media planning logic"
          title="How We Decide Where Your Ad Budget Goes"
        >
          There is no universal platform mix that works for every business. We evaluate your
          customers, offer, sales process, geography, competition, budget, conversion economics,
          and available data before deciding where paid media should be invested.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {decisionAreas.map((area, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Decision 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {area.body}
                </p>
                {area.note && (
                  <div className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {area.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}