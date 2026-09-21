import { SectionIntro } from '../../../Kinetic'

const marketBlocks = [
  {
    title: 'International SEO for Bangladeshi Businesses',
    body: 'Bangladeshi businesses entering overseas markets often need more than translated content. They may need new keyword research, market-specific landing pages, international site architecture, localization, technical implementation, and authority development.',
    tokens: ['USA', 'UK', 'UAE', 'Australia', 'European markets', 'Other priority export or service markets'],
    note: 'The strategy depends on the business model, target audience, product or service, competition, and market opportunity.',
  },
  {
    title: 'Expanding From Bangladesh Into Global Markets',
    body: 'Moving from a Bangladesh-focused website to a multi-market website should be planned before large amounts of international content are published. We can help define:',
    points: [
      'Priority markets',
      'Country and language targeting',
      'URL architecture',
      'Keyword mapping',
      'Localization requirements',
      'Hreflang implementation',
      'Internal linking',
      'Technical SEO',
      'Authority-building priorities',
      'Market-level reporting',
    ],
    note: 'This creates an international SEO foundation that can expand without forcing the business to rebuild its website structure later.',
  },
  {
    title: 'SEO for Businesses Already Operating Internationally',
    body: 'International businesses may already have country folders, language versions, subdomains, or separate domains but still face technical and performance problems. We can review existing setups for:',
    points: [
      'Wrong regional pages ranking',
      'Hreflang errors',
      'Canonical conflicts',
      'Weak localization',
      'Duplicate regional content',
      'Poor internal linking',
      'Indexation problems',
      'Migration risks',
      'Uneven market performance',
    ],
    note: 'The goal is to improve the existing international structure rather than automatically replacing it.',
  },
  {
    title: 'Market-Specific Strategies Across Regions',
    body: 'Different countries can require different SEO priorities. A market may differ in:',
    points: [
      'Search terminology',
      'Competition',
      'Content expectations',
      'SERP behavior',
      'Buying intent',
      'Language',
      'Currency',
      'User expectations',
      'Local authority',
    ],
    note: 'We therefore build market strategies around actual search conditions instead of applying identical SEO recommendations to every country.',
  },
]

const tokens = ['Bangladesh', 'Dhaka', 'USA', 'UK', 'UAE', 'Australia', 'European markets']

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Where we work" title="Bangladesh & International Markets">
          Framecipher works with businesses in Bangladesh as well as companies targeting multiple
          international markets. Our approach can support both businesses starting their first
          overseas expansion and companies that already operate across several countries.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {marketBlocks.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Market 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              {item.points && (
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.tokens && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tokens.map((token) => (
                    <span
                      key={token}
                      className="border-2 border-frame-border bg-frame-muted/30 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-frame-accent"
                    >
                      {token}
                    </span>
                  ))}
                </div>
              )}
              {item.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {tokens.map((token) => (
            <span
              key={token}
              className="border-2 border-frame-border bg-frame-bg px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-frame-accent"
            >
              {token}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}