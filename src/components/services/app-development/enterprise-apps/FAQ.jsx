import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "Can you integrate with our existing ERP or legacy systems?",
    "answer": "Yes. Enterprise applications can connect with existing ERP, CRM, HRMS, databases, APIs, and other systems. Compatibility is reviewed during discovery before the integration approach is finalized."
  },
  {
    "question": "How do you handle enterprise security and compliance requirements?",
    "answer": "Security requirements are reviewed during discovery and reflected in authentication, authorization, data protection, logging, API security, and other relevant architecture decisions."
  },
  {
    "question": "How is enterprise app development different from a regular business app?",
    "answer": "Enterprise projects often involve more user groups, more complex workflows, stricter security requirements, multiple integrations, larger datasets, and longer operational lifecycles."
  },
  {
    "question": "Do you support single sign-on (SSO) integration?",
    "answer": "Yes. Where compatible with your identity provider and project requirements, we can integrate SSO into the application."
  },
  {
    "question": "Can you modernize an existing enterprise application?",
    "answer": "Yes. We can assess legacy code, databases, integrations, infrastructure, and interfaces before recommending modernization, migration, or continued development."
  },
  {
    "question": "Can you build enterprise mobile applications?",
    "answer": "Yes. We can build employee, field-force, sales, approval, inventory, customer, and other enterprise mobile applications based on the required workflow."
  },
  {
    "question": "Can you migrate data from a legacy system?",
    "answer": "Yes. Data migration can include assessment, mapping, transformation, validation, incremental migration, testing, and rollback planning within the project scope."
  },
  {
    "question": "Do you support phased enterprise rollouts?",
    "answer": "Yes. Where a phased approach is appropriate, the system can be introduced through pilots or department-based stages to reduce rollout risk."
  },
  {
    "question": "How much does enterprise app development cost in Bangladesh?",
    "answer": "Cost depends on application scope, integrations, security requirements, number of users and roles, existing systems, infrastructure, and migration needs. Our current reference projects start from around ৳500,000 for a departmental tool."
  },
  {
    "question": "How long does an enterprise application take to build?",
    "answer": "A departmental system may take around 12–16 weeks. Larger multi-department or highly integrated systems can require 18–36 weeks or more."
  },
  {
    "question": "Do you work with organizations outside Bangladesh?",
    "answer": "Yes. Framecipher works with organizations in Bangladesh and international markets through a structured remote development process."
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
