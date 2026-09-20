import { SectionIntro } from '../../Kinetic'

const faqs = [
  {
    question: 'How much do SEO services cost in Bangladesh?',
    answer: 'SEO pricing depends on the website, competition, target market, technical condition, content requirements, and scope. Framecipher\'s current starting reference plans range from ৳25,000 to ৳75,000 per month, with custom pricing for larger or international projects.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer: 'Technical improvements can sometimes appear within weeks, while meaningful organic growth usually requires several months. The timeline depends on competition, website authority, technical condition, content quality, implementation speed, and ongoing SEO activity.',
  },
  {
    question: 'What is included in an SEO campaign?',
    answer: 'Depending on the project, an SEO campaign can include technical SEO, keyword research, search-intent analysis, on-page SEO, content strategy, competitor analysis, local or ecommerce SEO, authority building, AI search optimization, reporting, and ongoing optimization.',
  },
  {
    question: 'Do you provide local SEO in Bangladesh?',
    answer: 'Yes. Local SEO can include Google Business Profile optimization, local keyword research, Google Maps visibility, location pages, citations, review strategy, local content, and competitor analysis.',
  },
  {
    question: 'Can you optimize Shopify, WordPress, Wix, Webflow, Magento, or custom websites?',
    answer: 'Yes. SEO implementation is adapted to the platform. We work across WordPress, Shopify, Wix, Webflow, Magento, and custom development environments including Next.js.',
  },
  {
    question: 'Do you provide international SEO?',
    answer: 'Yes. International SEO can cover country-specific keyword research, localization, international site architecture, hreflang where appropriate, local content, and market-specific authority building.',
  },
  {
    question: 'Can SEO help an ecommerce website?',
    answer: 'Yes. Ecommerce SEO can improve product and category visibility, internal linking, commercial keyword targeting, structured data, indexation, and other technical areas that affect how search engines discover and understand a store.',
  },
  {
    question: 'Do you offer AI search optimization?',
    answer: 'Yes. We offer AI-search-focused optimization around content structure, entity clarity, useful answers, topical coverage, and supporting authority. Specific AI citations or placements cannot be guaranteed.',
  },
  {
    question: 'Can you help recover a website after a ranking drop?',
    answer: 'Yes. We can investigate technical problems, indexing changes, content issues, backlink concerns, competitor changes, manual actions, and other potential causes before recommending a recovery approach.',
  },
  {
    question: 'Do you guarantee a #1 Google ranking?',
    answer: 'No. Google rankings depend on many factors outside an agency\'s control. We focus on transparent SEO work, measurable progress, and continuous optimization rather than guaranteed positions.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about SEO pricing, timelines, and the services covered in a campaign.
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