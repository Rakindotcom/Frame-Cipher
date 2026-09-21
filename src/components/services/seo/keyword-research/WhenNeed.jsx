import { SectionIntro } from '../../../Kinetic'

const scenarios = [
  {
    title: 'Launching a New Website',
    body: 'A new website has no established keyword strategy or ranking history to guide content planning. We research the market, competitors, search intent, and topic opportunities before pages are created.',
    pointsHead: 'This helps establish:',
    points: [
      'Priority keywords',
      'Core topics',
      'Service and product opportunities',
      'Supporting content',
      'Page types',
      'Initial content hierarchy',
    ],
    note: 'Starting with a structured keyword strategy can reduce the risk of building pages around terms that are too competitive, too broad, or poorly aligned with customer intent.',
  },
  {
    title: 'Planning a New Content Strategy',
    body: 'Publishing more content does not guarantee more organic visibility. Keyword research helps identify the topics worth covering, the questions users ask, and the relationship between core pages and supporting content.',
    pointsHead: 'We can identify:',
    points: [
      'Pillar topics',
      'Supporting topics',
      'Long-tail opportunities',
      'Question queries',
      'Commercial opportunities',
      'Informational opportunities',
      'Content gaps',
      'Competitor gaps',
    ],
    note: 'This gives your content team a clearer roadmap instead of an unstructured list of article ideas.',
  },
  {
    title: "Existing Pages Aren't Ranking",
    body: 'When important pages fail to rank, the problem may not be the writing alone. The target keyword may be too competitive, the page may target the wrong intent, another URL may be competing for the same query, or the page may simply be targeting a weak opportunity.',
    pointsHead: 'We assess:',
    points: [
      'Current keyword targets',
      'Ranking positions',
      'Search intent',
      'Competing URLs',
      'Cannibalization',
      'Keyword relevance',
      'SERP composition',
      'Competitor pages',
      'Existing search visibility',
    ],
    note: 'The goal is to identify whether the page needs optimization, repositioning, consolidation, or a different keyword strategy.',
  },
  {
    title: "Traffic Isn't Reaching the Right Customers",
    body: 'Traffic volume only matters when it comes from relevant searches. We evaluate whether your target keywords align with:',
    pointsHead: '',
    points: [
      'Products or services',
      'Customer needs',
      'Buying stage',
      'Geographic market',
      'Commercial intent',
      'Conversion goals',
    ],
    note: 'A lower-volume keyword with strong commercial relevance can be more valuable to a business than a high-volume term with little connection to what it sells.',
  },
  {
    title: 'Expanding Into New Markets',
    body: 'Search behavior can change significantly between countries, even when the language is similar. We research:',
    pointsHead: '',
    points: [
      'Country-specific terminology',
      'Regional keyword variations',
      'Local search intent',
      'Market-specific competitors',
      'Search demand',
      'Commercial queries',
      'Language differences',
      'Localization requirements',
    ],
    note: 'This helps businesses entering new markets build keyword strategies around how people in those markets actually search.',
  },
  {
    title: 'Entering a New Product or Service Category',
    body: 'Launching a new product or service creates a new search opportunity, but the existing website may not have the right keyword structure to support it. We research the category from multiple angles, including:',
    pointsHead: '',
    points: [
      'Core product or service terms',
      'Problem-based searches',
      'Feature-based queries',
      'Comparison searches',
      'Commercial modifiers',
      'Informational topics',
      'Supporting questions',
      'Competitor coverage',
    ],
    note: 'This helps determine which pages should be created first and how the wider topic should be developed.',
  },
]

export default function WhenNeed() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="When this applies" title="When Does Your Business Need Keyword Research?">
          Keyword research is useful whenever you need to make better decisions about what your
          website should target next.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {scenarios.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Scenario 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              {item.pointsHead && (
                <p className="mt-6 border-t-2 border-frame-border/60 pt-4 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  {item.pointsHead}
                </p>
              )}
              <ul className="mt-3 space-y-2 text-xs md:text-sm font-medium text-frame-fg/90">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}