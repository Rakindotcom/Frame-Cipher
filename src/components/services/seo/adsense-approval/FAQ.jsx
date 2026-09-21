import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'Can you guarantee Google AdSense approval?',
    answer: 'No. Google makes the final decision after reviewing the site and application. We prepare your website against relevant requirements and policies, but no third-party provider can guarantee Google\u2019s decision.',
  },
  {
    question: 'How many articles do I need for AdSense approval?',
    answer: 'There is no universal article-count requirement published by Google. Instead, Google focuses on whether your site contains sufficient high-quality content that provides meaningful value to users. We assess the depth, originality, usefulness, and completeness of your existing content rather than selling a fixed number of articles as an approval formula.',
  },
  {
    question: 'Do I need traffic before applying for AdSense?',
    answer: 'Google\u2019s published eligibility guidance does not define a universal minimum traffic threshold for website applications. However, traffic quality matters. Google prohibits artificially generated clicks and impressions, and certain traffic sources can create policy issues. We review obvious traffic-source risks as part of the preparation process.',
  },
  {
    question: 'Does Google require a privacy policy, About page, and Contact page?',
    answer: 'Google\u2019s publisher requirements include specific privacy disclosures relating to advertising cookies and third-party vendors where applicable. About, Contact, Terms, and similar transparency pages are also useful for establishing a clear and trustworthy publishing site, but we do not present them as a universal four-page approval checklist for every website.',
  },
  {
    question: 'Can you fix a Low Value Content rejection?',
    answer: 'We can diagnose the content and site issues associated with a low-value or insufficient-content rejection and implement agreed improvements. That may include strengthening existing pages, improving originality, removing weak content, improving topical coverage, and making the site more useful to visitors.',
  },
  {
    question: 'Can AI-generated content be approved for AdSense?',
    answer: 'Approval should not be based on whether content was created with a particular writing tool. The more important question is whether the published content is original, useful, relevant, and compliant with Google\u2019s applicable policies. We review your actual content quality instead of relying on an \u201CAI content = automatic rejection\u201D assumption.',
  },
  {
    question: 'Can a Bangla website get Google AdSense approval?',
    answer: 'Yes. Bengali is currently listed among the languages supported by Google\u2019s publisher products. The site still needs to meet the relevant eligibility, content, navigation, and policy requirements.',
  },
  {
    question: 'Can affiliate websites use AdSense?',
    answer: 'Affiliate sites can be evaluated for AdSense, but Google warns against affiliate content that provides little or no additional value to users. We review whether your affiliate pages offer genuine original value instead of simply reproducing information available elsewhere.',
  },
  {
    question: 'How long does Google take to review an AdSense application?',
    answer: 'Google says reviews usually take a few days, but some reviews can take 2\u20134 weeks. Our preparation timeline is separate and depends on how much work your website needs before submission.',
  },
  {
    question: 'Do you support AdSense websites outside Bangladesh?',
    answer: 'Yes. We provide AdSense preparation and rejection-support services for websites serving audiences in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="Direct Answers" title="Frequently Asked Questions">
          Common questions about AdSense approval, requirements, reapplication, and what we can and
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