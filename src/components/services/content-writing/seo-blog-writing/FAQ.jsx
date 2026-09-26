import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    q: 'What is an SEO & blog writing service?',
    a: 'An SEO and blog writing service combines topic research, search-intent analysis, content planning, writing, editing, and relevant on-page SEO considerations to create useful articles for a business website.',
  },
  {
    q: 'What is included in your SEO blog writing service?',
    a: 'Depending on the selected scope, it can include keyword and topic research, search-intent analysis, SERP research, competitor content analysis, content briefs, SEO blog writing, editing, internal-link recommendations, metadata recommendations, content refreshes, and performance support.',
  },
  {
    q: 'How do you choose keywords for blog content?',
    a: 'We consider the business, audience, market, search intent, existing website content, competition, topic relevance, and potential business value. We do not select topics based only on search volume.',
  },
  {
    q: 'How long should an SEO blog post be?',
    a: 'There is no universal word count that guarantees better rankings. The appropriate length depends on the topic, search intent, audience, competition, and the amount of information needed to satisfy the searcher. Google explicitly says it does not have a preferred word count.',
  },
  {
    q: 'Do you guarantee Google rankings?',
    a: 'No. We do not guarantee first-page rankings or specific ranking positions. Search performance depends on many factors beyond the writing itself.',
  },
  {
    q: 'Do you update old blog posts?',
    a: 'Yes. We can review and refresh existing content when it has become outdated, incomplete, poorly structured, or less competitive.',
  },
  {
    q: 'Do you create topic clusters?',
    a: 'Yes, where a topic-cluster approach is appropriate. We can help identify supporting topics and connect relevant articles to broader pillar, service, product, or category pages through internal linking.',
  },
  {
    q: 'Can you write about technical or specialized subjects?',
    a: 'Yes, depending on the subject and available expertise. For specialist topics, we may require client-provided documentation, subject-matter expert input, interviews, references, or additional research to ensure the content is accurate and useful.',
  },
  {
    q: 'Can you use information from our internal team?',
    a: 'Yes. Client interviews, internal documentation, product information, customer questions, expert input, and proprietary information can help make content more specific and useful.',
  },
  {
    q: 'Do you publish the articles?',
    a: 'Publish-ready formatting is included within the standard scope. CMS publishing can be added where agreed.',
  },
  {
    q: 'How many blog posts should a business publish each month?',
    a: 'There is no universal number. The right publishing cadence depends on your available topics, search opportunities, content quality, resources, competition, approval workflow, and business goals. A smaller number of genuinely useful articles can be more appropriate than publishing large volumes of repetitive content.',
  },
  {
    q: 'Do you write SEO blog content in Bangla?',
    a: 'Yes, where included in the project scope. We can support English, Bangla, or bilingual content depending on the target audience and market.',
  },
  {
    q: 'Do you provide SEO blog writing outside Bangladesh?',
    a: 'Yes. Framecipher supports businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Direct answers"
          title="Frequently Asked Questions About SEO &amp; Blog Writing"
        >
          Straight answers about scope, keyword selection, article length, rankings, updates, topic clusters,
          specialist subjects, publishing, cadence, and Bangla support.
        </SectionIntro>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-heading text-base font-bold uppercase leading-snug tracking-tight text-frame-fg marker:content-none md:text-lg">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6">
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
