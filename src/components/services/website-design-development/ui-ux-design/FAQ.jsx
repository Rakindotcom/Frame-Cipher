const faqs = [
  {
    question: "What's the difference between UI design and UX design?",
    answer: "UX design focuses on how a product works, how users move through it, and how easily they complete tasks. UI design focuses on the visual interface, including typography, colors, spacing, components, and screen appearance. We handle both as part of one connected design process.",
  },
  {
    question: "Do I need UI/UX design if I'm using WordPress or Shopify?",
    answer: "Yes. Platforms provide a technical foundation, but user flow, information architecture, navigation, visual customization, and usability still need to be considered.",
  },
  {
    question: "Can you redesign an existing website or app?",
    answer: "Yes. We can audit the current experience, identify usability problems, improve important flows, and redesign selected areas or the full product based on project scope.",
  },
  {
    question: "Do you provide UX audits?",
    answer: "Yes. UX audits can review navigation, user flows, usability, mobile experience, forms, checkout, interaction patterns, accessibility concerns, and available user behavior data.",
  },
  {
    question: "Do you conduct usability testing with real users?",
    answer: "Yes, when testing is included in the project scope. We can test prototypes with real or representative users to identify friction before development.",
  },
  {
    question: "Can you design for a mobile app?",
    answer: "Yes. We apply research, flow mapping, wireframing, and UI design principles while adapting the experience to mobile interaction patterns and platform conventions.",
  },
  {
    question: "Do you design SaaS dashboards and web applications?",
    answer: "Yes. We design SaaS products, dashboards, customer portals, internal tools, web applications, and other digital products with more complex workflows and multiple user roles.",
  },
  {
    question: "Will developers receive Figma files and design specifications?",
    answer: "Yes. Depending on the project scope, handoff can include organized Figma files, reusable components, prototypes, responsive layouts, interaction states, design-system references, assets, and development notes.",
  },
  {
    question: "What will I receive at the end of a UI/UX project?",
    answer: "Typical deliverables can include user flows, wireframes, high-fidelity UI screens, interactive prototypes, design systems, organized design files, and development-ready specifications.",
  },
  {
    question: "How is UI/UX design different from web design?",
    answer: "UI/UX design focuses more deeply on user behavior, task flows, interaction, usability, and product structure. Web design focuses more on page layout, branding, content presentation, and website communication. Many projects benefit from both.",
  },
  {
    question: "Does UI/UX design include development?",
    answer: "UI/UX design and development are separate services. However, Framecipher can support the transition from approved design into website or application development where required.",
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Yes. We can provide design files, prototypes, specifications, and handoff documentation for internal developers or external development teams.",
  },
  {
    question: "Do you work with clients outside Bangladesh?",
    answer: "Yes. We provide UI/UX design for businesses and digital products in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.",
  },
  {
    question: "How long does a UI/UX design project take?",
    answer: "The timeline depends on the number of screens, flows, research requirements, testing, complexity, and review cycles. Smaller projects may take around one week, while complex products can take several weeks or longer.",
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Clear answers regarding our UI/UX design process, Figma deliverables, usability testing, and developer handoff.
          </p>
        </div>

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
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
