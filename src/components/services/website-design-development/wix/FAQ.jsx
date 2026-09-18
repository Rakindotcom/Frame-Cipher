import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "Is Wix a good choice for my business, or should I go with WordPress?",
    "answer": "It depends on your business goals and website requirements. Wix is a good fit for businesses that want a fast launch, simple content management, and an easy-to-edit website. WordPress may be better for businesses that need greater content flexibility, extensive integrations, or more complex custom functionality. We recommend the platform based on your actual requirements."
  },
  {
    "question": "Can I edit the site myself after you build it?",
    "answer": "Yes. Wix is designed for self-editing, so you can update text, images, pages, and other content without relying on a developer for every change. We also provide the agreed handover and basic guidance so you can manage the website confidently."
  },
  {
    "question": "Does Wix work well for SEO?",
    "answer": "Yes. Wix supports the core SEO features needed for many business websites. We configure the available technical SEO elements, including metadata, heading structure, URLs, image optimization, and other relevant settings. Where the platform has limitations, we explain them clearly before development so you can choose the right solution for your goals."
  },
  {
    "question": "Can you build a Wix ecommerce website?",
    "answer": "Yes. We can build Wix ecommerce websites with product catalogs, product pages, checkout, payments, shipping, inventory, and other supported store functionality based on your business requirements and target market."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "Yes. We build Wix websites for businesses in Bangladesh and international clients, including businesses in the US, UK, Australia, Canada, and UAE."
  },
  {
    "question": "Can you build with Wix Studio instead of the standard Wix Editor?",
    "answer": "Yes. We use Wix Studio when a project requires more advanced responsive control, design flexibility, or development functionality beyond a standard Wix setup."
  },
  {
    "question": "Can you build dynamic pages with Wix CMS?",
    "answer": "Yes. Wix CMS can be used to organize structured content and create dynamic page templates for services, projects, listings, locations, profiles, and other content types."
  },
  {
    "question": "Can you add custom functionality with Velo?",
    "answer": "Yes. When standard Wix features are not enough, we can use Velo, supported APIs, and custom development where appropriate to add more advanced functionality."
  },
  {
    "question": "Can you connect Wix with third-party tools?",
    "answer": "Yes. We can configure supported apps, APIs, and third-party services based on your integration requirements, such as forms, CRM systems, analytics, marketing tools, and other business platforms."
  },
  {
    "question": "Can you redesign an existing Wix website?",
    "answer": "Yes. We can redesign an existing Wix website to improve its visual design, structure, user experience, mobile responsiveness, and conversion flow. When appropriate, we can also rebuild it using Wix Studio."
  },
  {
    "question": "Can you migrate my website from WordPress or another platform to Wix?",
    "answer": "Yes. We can migrate your website from WordPress or another platform to Wix based on the project scope. Migration may include content, media, page structure, metadata, redirects, analytics, and required functionality."
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
