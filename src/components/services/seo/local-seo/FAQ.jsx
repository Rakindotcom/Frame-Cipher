import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is Local SEO?',
    answer: 'Local SEO is the process of improving a business\u2019s visibility when customers search for relevant products or services within a specific geographic area. It can involve Google Business Profile optimization, website SEO, local content, citations, reviews, authority, and performance monitoring.',
  },
  {
    question: 'Does Local SEO only mean Google Maps optimization?',
    answer: 'No. Google Maps is an important part of local search, but customers also discover local businesses through standard organic results. A complete strategy can address both Maps and organic visibility.',
  },
  {
    question: 'Do I need a physical storefront for Local SEO?',
    answer: 'No. Service-area businesses can also benefit from local SEO when they serve customers within eligible geographic areas. The strategy should match how the business operates and where it provides services.',
  },
  {
    question: 'Can you optimize a service-area business?',
    answer: 'Yes. The strategy can focus on service coverage, relevant service pages, geographic targeting, Google Business Profile configuration, local visibility, and supporting website signals. The implementation should reflect genuine service areas.',
  },
  {
    question: 'Do I need a separate page for every city I serve?',
    answer: 'Not necessarily. Creating a page for every city can create thin or repetitive content if those locations do not have meaningful differences. We recommend location pages when they provide useful information and serve a clear search intent.',
  },
  {
    question: 'Can you manage multiple Google Business Profiles?',
    answer: 'Yes. Multi-location businesses can require centralized processes combined with location-specific optimization. The exact workflow depends on the number of branches and how the business is structured.',
  },
  {
    question: 'How do you generate Google reviews?',
    answer: 'We help businesses create processes that encourage genuine customers to leave feedback. We do not recommend fake reviews, purchased reviews, or misleading review practices.',
  },
  {
    question: 'How do you track Google Maps rankings?',
    answer: 'Local visibility can vary by geographic location. We can use geographic ranking analysis to examine visibility across relevant areas instead of relying only on one manually checked Maps result.',
  },
  {
    question: 'How long does Local SEO take?',
    answer: 'There is no universal timeline. Competition, location, website condition, existing authority, business history, and implementation scope can all affect progress. Local SEO normally requires ongoing optimization and monitoring.',
  },
  {
    question: 'Can Local SEO guarantee a Google Maps #1 position?',
    answer: 'No. No legitimate SEO provider can control Google\u2019s ranking system or guarantee a permanent #1 Maps position. A professional strategy should focus on measurable optimization, visibility, customer actions, and business outcomes.',
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
          Common questions about local SEO, Google Business Profile management, service areas,
          timelines, and what a professional local SEO strategy can realistically involve.
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