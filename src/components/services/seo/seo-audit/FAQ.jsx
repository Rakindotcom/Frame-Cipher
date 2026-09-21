import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is an SEO audit?',
    answer: 'An SEO audit is a structured review of a website\u2019s technical setup, content, on-page optimization, backlinks, search visibility, and competitive environment. A good audit does more than identify issues. It explains which issues matter, why they matter, and what to do next.',
  },
  {
    question: "What's included in an SEO audit?",
    answer: 'The exact scope depends on the package, but an audit can include technical SEO, on-page SEO, content and keyword analysis, backlink review, competitor analysis, Search Console and analytics analysis, and specialized audits for ecommerce, local, international, or enterprise websites.',
  },
  {
    question: 'How is an SEO audit different from ongoing SEO?',
    answer: 'An SEO audit is a diagnostic project. It identifies problems, opportunities, and priorities. Ongoing SEO involves implementing those recommendations, monitoring performance, creating or improving content, building authority, and continuously optimizing the website.',
  },
  {
    question: 'Do I have to hire Framecipher for implementation after the audit?',
    answer: 'No. The audit can be used as a standalone deliverable. Your internal team or another SEO provider can implement the recommendations. You can also work with Framecipher when you need help executing the roadmap.',
  },
  {
    question: 'How long does an SEO audit take?',
    answer: 'A technical audit can usually be completed in about one week. A standard audit typically takes one to two weeks, while a comprehensive audit generally takes two to three weeks. Large ecommerce or enterprise websites may require a longer or customized timeline.',
  },
  {
    question: 'Do you need Google Search Console and Analytics access?',
    answer: 'Access is helpful when available because it provides additional information about search visibility, queries, traffic, landing pages, and conversions. An audit can still be completed without these platforms, but some performance and conversion insights may be limited.',
  },
  {
    question: 'Can you audit an ecommerce website?',
    answer: 'Yes. We can audit ecommerce websites for technical, product, category, internal-linking, indexation, structured-data, content, and conversion issues. The audit can also include platform-specific considerations for Shopify, WooCommerce, Magento, or custom ecommerce systems.',
  },
  {
    question: 'Can you audit a website before launch?',
    answer: 'Yes. A pre-launch SEO audit can identify architecture, metadata, indexation, redirects, sitemap, structured-data, performance, and tracking issues before the website goes live.',
  },
  {
    question: 'Can you audit a website migration or redesign?',
    answer: 'Yes. We can assess the current website, identify important URLs and SEO assets, review planned changes, and identify risks involving redirects, canonicals, internal links, content, indexation, and tracking.',
  },
  {
    question: 'Can you audit an international website?',
    answer: 'Yes. We can review country and language targeting, hreflang, regional URLs, localization, international internal linking, market-specific competitors, and country-level search visibility.',
  },
  {
    question: 'Do you audit AI search visibility?',
    answer: 'Yes, where it is relevant to the project. We can assess content structure, entity clarity, structured data, question coverage, extractability, E-E-A-T signals, and other factors related to visibility in modern AI-driven search experiences.',
  },
  {
    question: 'What SEO tools do you use?',
    answer: 'The tools depend on the website and audit scope. Depending on the project, we may use SEO crawlers, Google Search Console, Google Analytics, PageSpeed and performance data, backlink databases, keyword platforms, structured-data validation tools, and manual browser and source-code analysis.',
  },
  {
    question: 'Do you guarantee SEO rankings after an audit?',
    answer: 'No. An audit identifies problems and opportunities. Ranking performance depends on the quality of implementation, competition, content, authority, search demand, user behavior, and other factors outside the audit itself.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="Direct Answers" title="Frequently Asked Questions">
          Common questions about SEO audits, scope, timelines, access, specialized audits, and what
          we can and can&apos;t guarantee.
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