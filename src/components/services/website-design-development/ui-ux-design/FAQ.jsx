export default function FAQ({ service }) {
  const faqs = service?.faqs || [
    {
      question: "What's the difference between UI design and UX design?",
      answer: "UX design focuses on how a product works, user flow, information structure, and ease of completing tasks. UI design focuses on how it looks, visual style, typography, color palettes, and interface components. Both are handled together in our process, since visual styling built on unvalidated structure or flawed navigation always underperforms."
    },
    {
      question: "Do I need UI/UX design if I'm using a platform like WordPress or Shopify?",
      answer: "Yes. Platform themes provide a basic technical starting point, but user journeys, checkout friction, information architecture, and custom branding still require dedicated design work, especially for any brand wanting to differentiate and drive measurable conversions beyond a generic off-the-shelf template."
    },
    {
      question: "Do you conduct usability testing with real users?",
      answer: "Yes. When scoped into the engagement, we test interactive Figma prototypes with representative target users to catch friction points, confusing flows, and hesitation triggers before writing a single line of code, rather than discovering issues after launch."
    },
    {
      question: "Can you design for mobile apps, not just websites?",
      answer: "Yes. Our UX research, wireframing, component design, and prototyping workflows apply seamlessly to iOS and Android applications, tailored to platform-specific touch ergonomics, native interaction patterns, and Apple Human Interface / Google Material guidelines."
    },
    {
      question: "Do you work with clients outside Bangladesh?",
      answer: "Yes. We design digital products for businesses across Bangladesh as well as international brands in the US, UK, Canada, Australia, and UAE. All deliverables include organized Figma files, documented design tokens, interactive prototypes, and asynchronous video walkthroughs."
    }
  ]

  if (!faqs?.length) return null

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
            Direct answers about our UI/UX design process, Figma deliverables, user research, and team collaboration.
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
