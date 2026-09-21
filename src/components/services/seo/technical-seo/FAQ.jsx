import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is technical SEO?',
    answer: 'Technical SEO focuses on the website infrastructure that helps search engines crawl, render, understand, and index your pages. It covers areas such as site architecture, indexation, performance, structured data, redirects, canonicalization, and rendering.',
  },
  {
    question: 'Why does my website need a technical SEO audit?',
    answer: 'A website can look normal to visitors while having technical problems that affect search engines. An audit can identify crawl, indexation, performance, architecture, structured-data, and other technical issues that may limit organic visibility.',
  },
  {
    question: 'Does technical SEO improve Google rankings?',
    answer: 'Technical SEO can remove technical barriers that prevent search engines from properly accessing, understanding, or indexing important pages. However, rankings also depend on content, relevance, authority, competition, search demand, and other factors.',
  },
  {
    question: 'Can you fix technical SEO issues instead of only providing an audit?',
    answer: 'Yes. We provide both technical audits and implementation services. The scope depends on the issues identified, your platform, and whether implementation is handled by Framecipher or your existing development team.',
  },
  {
    question: 'Do you provide JavaScript SEO for React and Next.js websites?',
    answer: 'Yes. We can review JavaScript rendering, dynamically generated content, internal links, metadata, indexability, and other technical SEO requirements for React, Next.js, and other JavaScript-based websites.',
  },
  {
    question: 'Do you analyze server logs?',
    answer: 'Where server log access is available and useful for the website, we can analyze crawler activity to identify crawl patterns, wasted crawling, status-code issues, and other technical signals.',
  },
  {
    question: 'Can you handle SEO during a website migration?',
    answer: 'Yes. We can support URL mapping, redirect planning, canonical updates, sitemap changes, staging checks, internal-link reviews, and post-launch technical monitoring.',
  },
  {
    question: 'How do you verify technical SEO fixes?',
    answer: 'We validate fixes using appropriate technical checks, crawling, Search Console data, structured-data testing, performance measurements, or other relevant evidence depending on the issue.',
  },
  {
    question: 'Do you provide ongoing technical SEO monitoring?',
    answer: 'Yes. Ongoing monitoring can track crawlability, indexation, Core Web Vitals, Search Console issues, redirects, structured data, broken links, and technical regressions.',
  },
  {
    question: 'How much does technical SEO cost in Bangladesh?',
    answer: 'Framecipher\u2019s starting reference prices range from \u09F320,000 for a technical SEO audit to \u09F380,000+ for an advanced technical overhaul, with ongoing monitoring starting at \u09F315,000/month. Final pricing depends on the website and required scope.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct answers"
          title="Frequently Asked Questions"
        >
          Common questions about technical SEO, delivery, validation, and engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-muted/10 open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg marker:content-none">
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