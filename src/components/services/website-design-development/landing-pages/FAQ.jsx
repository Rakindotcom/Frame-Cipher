const faqs = [
  {
    question: 'How is a landing page different from a regular website page?',
    answer: 'A landing page is built around one single goal and has no navigation menu pulling visitors away from that action. A regular website page is part of a broader site structure meant for browsing multiple topics or products.',
  },
  {
    question: "Can you connect the landing page to the ad platform we're using?",
    answer: 'In most cases, yes, conversion tracking and pixel integration for common ad platforms is part of the build. Specific compatibility depends on the platform, so we confirm this during the initial consultation.',
  },
  {
    question: 'How fast can a landing page actually be built?',
    answer: 'A single-offer page typically takes 3 to 5 business days once copy and brand assets are ready. More complex pages with multiple integrations or A/B variants take up to 2 weeks.',
  },
  {
    question: 'Do you write the copy for the landing page too?',
    answer: 'Landing page copywriting can be scoped in separately; our core build covers strategy, UI/UX design, development, and conversion tracking. Let us know during consultation if you need copywriting included.',
  },
  {
    question: 'Do you build landing pages for clients outside Bangladesh?',
    answer: 'Yes, we build landing pages for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    question: 'Can you build landing pages for Google Ads and Meta Ads?',
    answer: 'Yes. We structure landing pages around the specific traffic source, campaign message, audience, and conversion goal. Tracking setup is included where technically supported.',
  },
  {
    question: 'Can you integrate Meta Pixel, GA4, or Google Ads tracking?',
    answer: 'Yes, relevant analytics, pixels, and conversion events can be implemented based on your campaign platforms and project scope.',
  },
  {
    question: 'Can you create A/B test variants?',
    answer: 'Yes, A/B test-ready structures or additional variants can be included when the campaign requires experimentation. The exact testing setup depends on the tools and scope.',
  },
  {
    question: 'Can you connect the landing page to our CRM?',
    answer: 'Yes, supported CRM and marketing platforms can be connected to lead forms when the required integration method or API is available.',
  },
  {
    question: 'Can you build landing pages for international campaigns?',
    answer: 'Yes. We build landing pages for businesses targeting Bangladesh as well as international markets, adapting messaging, traffic-source requirements, language, and campaign objectives as needed.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers / Clarity
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Common questions about campaign landing page strategy, delivery timelines, and pixel tracking.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 md:p-8 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <h3 className="pr-4">{faq.question}</h3>
                <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45 font-mono text-xl">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 sm:p-7 md:p-8 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
