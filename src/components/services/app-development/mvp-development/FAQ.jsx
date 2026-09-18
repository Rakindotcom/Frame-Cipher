import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "What is an MVP in software development?",
    "answer": "An MVP, or minimum viable product, is a working version of a product that contains enough functionality to test a specific assumption with real users.\n\nIt is not simply an unfinished version of the final product."
  },
  {
    "question": "What actually counts as an MVP versus a prototype?",
    "answer": "A prototype is usually designed to test a concept, user flow, or interface.\n\nAn MVP is a working product that allows real users to perform the core workflow and generate evidence about the product assumption."
  },
  {
    "question": "How do you decide which features belong in an MVP?",
    "answer": "We start with the main hypothesis and identify the smallest complete workflow needed to test it.\n\nFeatures that do not contribute to that test can be moved to a later development phase."
  },
  {
    "question": "Is an MVP the same as a proof of concept?",
    "answer": "No.\n\nA proof of concept primarily tests whether a technical approach is feasible.\n\nAn MVP tests a working product with real users and is usually focused on product or market validation."
  },
  {
    "question": "Can my MVP become the full product later?",
    "answer": "Yes, where the original architecture and implementation support continued development.\n\nWe consider the potential next phase when making technical and product decisions, although some parts may need to change as the validated product requirements become clearer."
  },
  {
    "question": "How do you know if an MVP succeeded?",
    "answer": "There is no universal success metric.\n\nWe define relevant signals around the MVP's original hypothesis. Depending on the product, these may include activation, workflow completion, conversion, transactions, repeat usage, retention, or user feedback."
  },
  {
    "question": "Do you build web and mobile MVPs?",
    "answer": "Yes, depending on the project requirements.\n\nWe can develop web applications, mobile applications, or MVPs that require both platforms."
  },
  {
    "question": "Can you integrate payments into an MVP?",
    "answer": "Yes.\n\nPayment integration can be included when transactions are part of the core workflow.\n\nDepending on the market and project requirements, this may include supported local or international payment services."
  },
  {
    "question": "Can you integrate APIs and third-party services?",
    "answer": "Yes.\n\nWe can integrate APIs and external services required by the MVP, including payment, authentication, CRM, logistics, analytics, and other supported platforms."
  },
  {
    "question": "How long does MVP development take?",
    "answer": "A focused MVP can take around 4–14+ weeks, depending on the platform, number of core workflows, backend requirements, integrations, and testing scope.\n\nThe actual timeline is confirmed after reviewing the product requirements."
  },
  {
    "question": "How much does MVP development cost?",
    "answer": "Framecipher's MVP pricing depends on the product scope and technical requirements.\n\nStarting reference packages can range from approximately ৳180,000 for a minimal MVP to ৳450,000+ for multi-platform development, while complex products receive a custom quote.\n\nThe final price depends on the approved scope."
  },
  {
    "question": "Do you work with founders outside Bangladesh?",
    "answer": "Yes.\n\nFramecipher is based in Dhaka and works with businesses and product teams in Bangladesh as well as clients in the US, UK, Australia, Canada, and UAE."
  },
  {
    "question": "Do you provide the source code and project handover?",
    "answer": "Handover arrangements are defined in the project agreement.\n\nDepending on the engagement, the handover can include source code, repository access, documentation, deployment information, API details, design files, and other agreed technical materials."
  },
  {
    "question": "Do you provide support after the MVP launches?",
    "answer": "Yes.\n\nPost-launch support can include bug fixes, technical troubleshooting, third-party API updates, performance improvements, and further development.\n\nOngoing maintenance is handled separately based on the required support scope."
  }
]

export default function FAQ({ service }) {
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : faqs
  if (!faqList?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about our delivery process, technical standards, and engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
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
