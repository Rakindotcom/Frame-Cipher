import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is international SEO?',
    answer: 'International SEO is the practice of optimizing a website so search engines understand which country and language versions should appear for users in different markets. It involves market research, technical signals such as hreflang and canonicals, site architecture, content localization, and authority building across the countries you want to reach.',
  },
  {
    question: 'Do I need a separate website for each country?',
    answer: 'Not always. One website can serve multiple countries and languages using country domains, regional subfolders, language subfolders, or subdomains. Each option has trade-offs for authority, maintenance, and targeting. We review your markets, business model, and technical resources before recommending a structure instead of assuming a separate site is needed.',
  },
  {
    question: 'What is hreflang and do I need it?',
    answer: 'Hreflang is a technical signal that helps search engines understand the relationship between alternate regional or language versions of a page. It can tell Google, for example, that the same product exists for the US, UK, and Australia. Most multi-country or multi-language websites benefit from correct hreflang, but it needs to work alongside canonicals, redirects, and internal links to be effective.',
  },
  {
    question: 'Can you handle hreflang implementation?',
    answer: 'Yes. We support hreflang through the technical method appropriate to your website and platform, including annotation and XML sitemap approaches. We also validate mappings, check for missing or inconsistent annotations, and review hreflang alongside canonicals and redirects so the signals work together.',
  },
  {
    question: 'How long does international SEO take?',
    answer: 'Technical fixes and structure changes can be completed relatively quickly, but rankings, traffic, and business outcomes build over time and can vary by market. The timeline depends on the number of markets, website structure, technical condition, competition, authority, content localization needs, and implementation speed. Most international engagements are designed as ongoing work because markets and websites change constantly.',
  },
  {
    question: 'Can you provide international SEO for businesses expanding from Bangladesh?',
    answer: 'Yes. We support Bangladeshi businesses entering overseas markets. This often includes market research, keyword research for new countries, international site architecture, localization, technical implementation, and authority development. The strategy depends on the markets you want to target and how your business operates in each one.',
  },
  {
    question: 'Do you work with businesses already operating internationally?',
    answer: 'Yes. Many businesses already have country folders, language versions, subdomains, or separate domains but face problems such as wrong regional pages ranking, hreflang errors, canonical conflicts, weak localization, or uneven market performance. We review and improve the existing setup rather than automatically rebuilding it.',
  },
  {
    question: 'What is the difference between translation and localization?',
    answer: 'Translation changes the language of a page. Localization changes how the content works for the target market: terminology, search intent, currency, units, calls to action, examples, and user expectations. People in different countries often search using different words and with different intent, so localization is usually necessary for the content to perform in search in a new market.',
  },
  {
    question: 'How do you handle duplicate content across countries?',
    answer: 'Similar regional pages are not automatically a problem, but pages with little meaningful regional value combined with inconsistent targeting signals can be. We review content similarity, search intent, canonicals, hreflang, internal links, and indexation, then differentiate, consolidate, improve, or restructure pages where appropriate.',
  },
  {
    question: 'Do you guarantee rankings or a specific position?',
    answer: 'No. International SEO depends on many factors outside our direct control, including search algorithms, competitors, demand, and the quality of your content and localization. We do not guarantee a specific ranking position, a fixed traffic increase, a fixed number of leads, or revenue. We commit to structured work that can be planned, implemented, measured, and improved.',
  },
  {
    question: 'Can you show me results?',
    answer: 'We track performance at the market level wherever reliable data is available, including country-level rankings, organic traffic, impressions, click-through rates, indexation, and hreflang health. Where analytics allow, we also connect search activity with leads or revenue per market. Verified case studies will be published as project data becomes available.',
  },
  {
    question: 'How do I know which markets to target first?',
    answer: 'We research potential markets based on country-level search demand, commercial opportunity, competition, product or service relevance, localization requirements, and your expansion goals. The result is a market-priority roadmap rather than treating every possible country as an equal investment.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="Direct Answers" title="Frequently Asked Questions">
          Common questions about international SEO, market targeting, hreflang, timelines, and
          what we can and can&apos;t guarantee.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}