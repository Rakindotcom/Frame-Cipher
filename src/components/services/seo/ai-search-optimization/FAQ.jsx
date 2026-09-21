import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is AI Search Optimization?',
    answer: 'AI Search Optimization is the process of improving how a business, its content, expertise, and supporting information can be discovered, understood, and referenced across AI-powered search and answer experiences. It builds on traditional SEO while adding focused work around answer clarity, entities, topical coverage, source credibility, and AI-search measurement.',
  },
  {
    question: 'What is AEO?',
    answer: 'AEO, or Answer Engine Optimization, focuses on making specific answers easier to surface in answer-driven search experiences. This can involve direct answers, definitions, FAQs, question-focused content, clear structure, and supporting evidence.',
  },
  {
    question: 'What is GEO?',
    answer: 'GEO, or Generative Engine Optimization, generally refers to optimizing a broader content and brand ecosystem for visibility in generative search experiences. It can involve topical authority, entity relationships, source credibility, content coverage, and citation opportunities.',
  },
  {
    question: 'Is AEO different from GEO?',
    answer: 'They can describe different layers of the same broader strategy. AEO focuses more on specific answers and content-level visibility, while GEO generally addresses broader generative visibility, citations, brand context, and authority. The terminology is not standardized across the industry, so we use both within a broader AI Search Optimization framework.',
  },
  {
    question: 'Does AI Search Optimization replace traditional SEO?',
    answer: 'No. Strong technical SEO, useful content, crawlability, indexability, internal linking, page experience, and authority remain important foundations. AI Search Optimization builds on those foundations rather than replacing them.',
  },
  {
    question: 'Can you guarantee that ChatGPT or Gemini will cite my website?',
    answer: "No. AI platforms control their own retrieval and response systems, and citation outcomes can vary by query, source availability, platform, and time. We focus on improving the factors within our scope and measuring actual visibility rather than promising a specific citation outcome.",
  },
  {
    question: 'How do you measure AI search visibility?',
    answer: 'Depending on the project, we can measure prompt-level visibility, brand mentions, citations, competitor presence, cited sources, Google generative-search performance data where available, and downstream traffic or conversions.',
  },
  {
    question: 'Can you optimize content for AI search without hurting Google SEO?',
    answer: 'Yes. The goal is to improve clarity, usefulness, structure, entity relationships, and search-intent alignment while maintaining strong traditional SEO fundamentals. We do not recommend unnatural formatting or keyword stuffing simply to make content appear \u201CAI optimized.\u201D',
  },
  {
    question: 'Can small businesses benefit from AI Search Optimization?',
    answer: 'Yes. Small businesses can benefit from clearer service information, stronger entity signals, useful answers, local relevance, credible external references, and targeted visibility testing. The strategy should reflect the business\u2019s actual market and resources rather than imitate enterprise-scale campaigns.',
  },
  {
    question: 'Can you optimize an ecommerce website for AI search?',
    answer: 'Yes. We can review product information, category content, comparisons, buying questions, product entities, structured data, supporting guides, and other content that may contribute to AI-assisted product discovery.',
  },
  {
    question: 'Can you optimize a local business for AI search?',
    answer: 'Yes. We can assess local service information, business details, reviews and reputation, local content, entity information, and relevant third-party sources.',
  },
  {
    question: 'Can you help businesses in Bangladesh improve AI search visibility?',
    answer: 'Yes. We support Bangladeshi businesses targeting local and international audiences, including websites that need English, Bangla, Banglish, multilingual, or country-specific search strategies.',
  },
  {
    question: 'Can you optimize for multiple AI platforms?',
    answer: 'Yes. The exact platforms and monitoring approach depend on the project. We can design prompt sets and visibility checks across relevant AI-powered search and answer experiences rather than relying on a single platform.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="Direct Answers" title="Frequently Asked Questions">
          Common questions about AI Search Optimization, AEO, GEO, measurement, and what we can and
          can&apos;t guarantee.
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