import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "Why choose custom WordPress development over a pre-built theme?",
    "answer": "A pre-built theme can be faster to launch, but it may include unnecessary functionality and limit design or structural flexibility. Custom WordPress development allows the theme and website architecture to be built around your actual content, brand, and functionality requirements."
  },
  {
    "question": "Do you use Elementor or Gutenberg?",
    "answer": "Yes. We can work with Gutenberg, Elementor, or other suitable page-building approaches based on your editing workflow, design requirements, performance needs, and long-term maintenance plans."
  },
  {
    "question": "Can you build custom WordPress plugins?",
    "answer": "Yes. We can develop custom plugins and functionality for business workflows, APIs, admin tools, custom blocks, structured content, and other requirements that existing plugins cannot handle effectively."
  },
  {
    "question": "Can you build WooCommerce websites?",
    "answer": "Yes. We build WooCommerce stores with product catalogs, variations, checkout, payment integration, inventory, order management, product SEO, and custom functionality based on the project scope."
  },
  {
    "question": "Can you migrate our existing website to WordPress?",
    "answer": "Yes. We can migrate websites from platforms such as Wix, Webflow, Joomla, Drupal, or older WordPress installations. Depending on the project, migration can include content, media, URLs, metadata, redirects, and SEO preservation."
  },
  {
    "question": "Can you optimize an existing slow WordPress website?",
    "answer": "Yes. We can review caching, images, plugins, scripts, database performance, hosting configuration, and other technical factors that may affect WordPress speed and usability."
  },
  {
    "question": "Will my WordPress website be SEO-ready?",
    "answer": "We build important technical and structural SEO foundations into the development process, including website architecture, URLs, headings, metadata, schema, sitemap considerations, internal linking, and mobile usability. Ongoing SEO is a separate service unless included in the project scope."
  },
  {
    "question": "Can you build membership, directory, or LMS websites?",
    "answer": "Yes. WordPress can support membership, directory, education, and other specialized website models when the required plugin architecture and custom functionality are properly planned."
  },
  {
    "question": "Will I have WordPress admin access after launch?",
    "answer": "Yes. Access and ownership terms are defined in the project agreement. We can also provide editorial handover and training so your team can manage supported content after launch."
  },
  {
    "question": "Do you provide ongoing WordPress maintenance?",
    "answer": "Yes. WordPress updates, security checks, backups, technical fixes, performance work, and future improvements can be provided through an ongoing maintenance scope."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "Yes. We work with businesses across Bangladesh as well as international clients, including projects serving markets in the UAE, US, UK, Australia, Canada, and other regions."
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
