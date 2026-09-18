import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: "What is included in a business website development project?",
    answer: "A typical project can include strategy and planning, sitemap development, UI/UX design, responsive development, content integration, lead capture forms, analytics, technical SEO foundations, testing, and launch support. Exact deliverables depend on the agreed scope."
  },
  {
    question: "Can I update the website myself after it is launched?",
    answer: "Yes, where the selected platform supports client-managed content. We can provide access and agreed handover guidance so your team can manage supported content without depending on a developer for every update."
  },
  {
    question: "Will my business website be SEO-ready?",
    answer: "We build important technical and structural SEO foundations into the development process, including clean URLs, page hierarchy, metadata, mobile usability, sitemap considerations, and other agreed technical elements. Ongoing SEO is a separate service unless included in the project scope."
  },
  {
    question: "Can you integrate our existing CRM?",
    answer: "We can integrate supported CRM and business tools where the platform, software, and available API or integration method allow it. We confirm compatibility before development begins."
  },
  {
    question: "Can you add WhatsApp, call, booking, or live chat features?",
    answer: "Yes, relevant communication and conversion tools can be integrated based on your business requirements, platform, and selected third-party services."
  },
  {
    question: "Do you provide website content?",
    answer: "Content planning and content integration can be included within the project scope. Full copywriting and ongoing content creation can also be discussed separately based on your requirements."
  },
  {
    question: "Who owns the website after development?",
    answer: "Ownership, access, source files, and handover terms are defined in the project agreement. We provide the agreed deliverables and access described in that agreement."
  },
  {
    question: "Can you redesign our existing website without damaging SEO?",
    answer: "Yes. For redesign projects, we review existing content, URLs, rankings, backlinks, and other relevant SEO assets before restructuring the website. Redirects and content preservation can be included where required."
  },
  {
    question: "What happens after the website launches?",
    answer: "We provide agreed handover guidance and can continue with maintenance, technical updates, performance checks, security work, and future improvements under a separate support scope."
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

        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-6 text-center">
          <p className="text-sm font-medium text-frame-muted-fg">
            Have a question about your tech stack or custom integration?{' '}
            <Link href="/contact" className="font-bold text-frame-accent underline hover:text-frame-fg">
              Talk directly with our engineering team &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
