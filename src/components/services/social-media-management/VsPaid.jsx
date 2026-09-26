import Link from 'next/link'
import { SectionIntro } from '../../Kinetic'

const comparisonRows = [
  {
    organic: 'Covers your unpaid presence',
    paid: 'Uses an advertising budget to reach selected audiences',
  },
  {
    organic: 'Includes content strategy, creation, publishing, and community engagement',
    paid: 'Supports specific campaign objectives such as leads, sales, or traffic',
  },
  {
    organic: 'Built around profile management and reporting',
    paid: 'Built around targeting, budgets, and campaign optimization',
  },
  {
    organic: 'Results build gradually through consistent execution',
    paid: 'Can generate reach soon after a campaign launches',
  },
  {
    organic: 'Keeps working while the budget stays constant',
    paid: 'Requires ongoing spend to maintain distribution',
  },
  {
    organic: 'Develops relationships with an existing audience',
    paid: 'Reaches new audiences who have no prior relationship with you',
  },
]

const reasons = [
  {
    title: 'A managed profile builds trust for paid traffic',
    body: 'When someone discovers your business through an ad and then checks your profile, an active, useful presence gives them information and trust signals they would not get from the ad alone.',
  },
  {
    title: 'Paid campaigns distribute what matters faster',
    body: 'Organic publishing builds reach over time. Paid social can push an important offer, launch, or campaign to a targeted audience without waiting for organic distribution to catch up.',
  },
  {
    title: 'They support different parts of the same funnel',
    body: 'Organic builds the presence that paid traffic lands on, while paid creates the demand and reach that the organic presence then has to convert. Together they reinforce each other rather than competing for the same budget.',
  },
]

export default function VsPaid() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-bg text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Choosing the right channel"
            title="Organic Social Media Management vs Paid Advertising"
          >
            Social media management and paid social advertising support different parts of your
            marketing system.
          </SectionIntro>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">
                Comparison of organic social media management and paid social advertising
              </caption>
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th scope="col" className="w-1/2 border-r-2 border-frame-border p-4">Organic Social</th>
                  <th scope="col" className="w-1/2 p-4">Paid Social</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="align-top transition-colors hover:bg-frame-muted/20">
                    <td className="border-r-2 border-frame-border p-4 font-medium text-frame-fg">
                      {row.organic}
                    </td>
                    <td className="p-4 font-medium text-frame-accent">
                      {row.paid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                Organic Social
              </span>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Covers your unpaid presence: content strategy, content creation, publishing,
                community engagement, profile management, and reporting. The goal is a consistent
                presence and stronger relationships with your audience over time.
              </p>
            </div>
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                Paid Social
              </span>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Uses advertising budgets to reach selected audiences and support specific
                campaign objectives such as lead generation, ecommerce sales, traffic, remarketing,
                or campaign promotion. Framecipher provides paid advertising separately through
                our broader paid advertising services.
              </p>
              <Link
                href="/services/paid-advertising"
                className="group mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent transition hover:text-frame-fg md:text-sm"
              >
                Explore paid advertising services
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Why both"
            title="Why Businesses May Need Both"
          >
            Organic and paid social can support each other rather than competing for the same
            budget.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3">
            {reasons.map((reason, index) => (
              <article key={reason.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Reason {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {reason.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              The right mix depends on your business goals, audience, budget, and customer
              journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
