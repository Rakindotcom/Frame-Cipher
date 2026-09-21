import { SectionIntro, PosterButton } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is keyword research?',
    answer: 'Keyword research is the process of identifying, analyzing, and prioritizing the search terms and topics that are relevant to your business and target audience. Effective keyword research goes beyond search volume. It considers search intent, competition, business relevance, ranking potential, and the pages required to target those searches.',
  },
  {
    question: "Why shouldn't I target the keywords with the highest search volume?",
    answer: 'High search volume does not automatically mean high opportunity. A keyword may have substantial demand but be dominated by highly authoritative websites, have weak commercial relevance, or attract users who are not ready to become customers. We evaluate the full opportunity before prioritizing a keyword.',
  },
  {
    question: 'How do you determine search intent?',
    answer: 'We analyze the search results for the keyword and examine the types of pages, content formats, SERP features, and language appearing in the results. This helps determine whether the search is informational, commercial, transactional, navigational, or locally focused.',
  },
  {
    question: 'What is keyword cannibalization?',
    answer: 'Keyword cannibalization occurs when multiple pages on the same website target similar search intent and compete for visibility. We identify these conflicts and recommend whether pages should be differentiated, consolidated, redirected, or repositioned.',
  },
  {
    question: 'Do you use Google Search Console for keyword research?',
    answer: 'Yes, when access is available. Search Console can reveal queries your website already receives impressions or clicks for, including opportunities where pages rank just outside the strongest positions or attract impressions without enough clicks.',
  },
  {
    question: 'Do you research long-tail keywords?',
    answer: 'Yes. We research specific questions, problem-based searches, product or service variations, comparison queries, location modifiers, and other long-tail opportunities where relevant.',
  },
  {
    question: 'Can you research Bangla and Banglish keywords?',
    answer: 'Yes. For Bangladesh-focused businesses, we can research English, Bangla-script, Banglish, and mixed-language search behavior where those variations are relevant to the target audience.',
  },
  {
    question: 'Can you conduct keyword research for international markets?',
    answer: 'Yes. We can research country-specific terminology, language differences, regional search behavior, competitors, and market-specific search intent for businesses targeting international audiences.',
  },
  {
    question: 'Can keyword research identify which pages I should create?',
    answer: 'Yes. Keyword research can be mapped to existing and new URLs based on search intent, keyword relationships, competition, and page type. This helps determine whether you need a service page, product page, category page, guide, comparison page, or another content format.',
  },
  {
    question: 'Is keyword research a one-time process?',
    answer: 'It can be. A comprehensive keyword strategy can provide a strong foundation for a content and SEO plan, but search behavior, competitors, products, and markets change over time. Ongoing monitoring can identify new opportunities and changes in existing keyword performance.',
  },
  {
    question: 'Do you provide keyword research for ecommerce websites?',
    answer: 'Yes. We can research product, category, attribute, comparison, commercial, and long-tail searches and organize them around ecommerce page structures.',
  },
  {
    question: 'How is keyword research different from an SEO audit?',
    answer: 'An SEO audit evaluates the current condition of your website and identifies problems and opportunities. Keyword research focuses on discovering and prioritizing the search demand your website should target. They work together but serve different purposes.',
  },
  {
    question: 'Do you guarantee keyword rankings?',
    answer: 'No. Keyword research identifies opportunities and creates a strategic targeting framework. Ranking performance depends on implementation, competition, content, authority, technical SEO, search demand, and other factors outside the research itself.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="Direct Answers" title="Frequently Asked Questions">
          Common questions about keyword research, search intent, cannibalization, languages,
          markets, deliverables, and what we can and can&apos;t guarantee.
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

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <p className="max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
            Still wondering whether keyword research fits your business? Tell us what you are
            targeting, and we will recommend the right starting point.
          </p>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact" className="whitespace-nowrap self-center">
              Talk to Our SEO Team
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}