import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    title: 'Keyword & Match-Type Strategy',
    body: 'We build keyword lists around real commercial intent, search behavior, and expected volume. We also review match types, search themes, keyword relevance, negative keywords, brand terms, non-brand terms, competitor terms where appropriate, and long-tail opportunities.',
  },
  {
    title: 'Search-Term & Negative Keyword Management',
    body: 'Search-term analysis helps identify which queries are creating relevant traffic and which are wasting budget. We use that data to add relevant keywords, exclude irrelevant queries, refine messaging, improve intent alignment, and identify new opportunities.',
  },
  {
    title: 'Audience Layering',
    body: 'Audience signals can complement keyword intent. We may test LinkedIn Profile Targeting, remarketing, in-market audiences, customer lists, similar audiences where available, predictive targeting where available, and audience exclusions. The exact setup depends on campaign objectives and available audience data.',
  },
  {
    title: 'Network & Placement Management',
    body: 'Microsoft advertising can distribute campaigns across different parts of its ecosystem and search partnerships. We evaluate distribution based on traffic quality, conversion performance, search volume, campaign objective, audience behavior, and placement performance. We do not assume that maximum reach is automatically the best strategy.',
  },
  {
    title: 'Bid & Budget Optimization',
    body: 'Budgets are adjusted based on conversion performance, search demand, acquisition cost, revenue, campaign priority, audience performance, and available conversion data. The objective is not simply to spend the budget. It is to allocate spend where the account has a measurable business case.',
  },
]

export default function Strategy() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="How we work" title="Microsoft Ads Search & Audience Strategy">
          A Microsoft Ads account should be designed around search intent, audience signals, and
          conversion data, not around the settings of another platform.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blocks.map((block, index) => (
            <div
              key={block.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-widest text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-1.5 flex-1 bg-frame-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {block.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}