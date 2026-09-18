const faqs = [
  {
    question: 'Is Wix a good choice for my business, or should I go with WordPress?',
    answer: 'It depends on your business goals and website requirements. Wix is a good fit for businesses that want a fast launch, simple content management, and an easy-to-edit website without technical hosting management. WordPress may be better for businesses that need a broader plugin ecosystem, deeper content flexibility, or complex custom functionality. We recommend the platform based on your actual requirements.',
  },
  {
    question: 'Can I edit the site myself after you build it?',
    answer: 'Yes. Wix is designed specifically for self-editing, so you can update text, images, pages, services, and forms without relying on a developer for every routine change. We also provide full administrative handover and basic guidance so you can manage the website confidently.',
  },
  {
    question: 'Does Wix work well for SEO?',
    answer: 'Yes. Wix supports the core SEO features needed for many business websites. We configure all technical SEO elements including metadata, heading structure, URLs, image compression, structured data schema, and sitemap indexing. Where the platform has inherent constraints, we explain them clearly before development.',
  },
  {
    question: 'Can you build a Wix ecommerce website?',
    answer: 'Yes. We can build Wix ecommerce websites with product catalogs, collections, product pages, checkout, payments, shipping rules, inventory tracking, and discount codes based on your business requirements.',
  },
  {
    question: 'Do you work with clients outside Bangladesh?',
    answer: 'Yes. We build Wix websites for businesses in Bangladesh and international clients across the US, UK, Australia, Canada, UAE, and European markets.',
  },
  {
    question: 'Can you build with Wix Studio instead of the standard Wix Editor?',
    answer: 'Yes. We use Wix Studio when a project requires more advanced responsive control, custom breakpoints, fluid layouts, reusable design components, or custom CSS beyond a standard Wix setup.',
  },
  {
    question: 'Can you build dynamic pages with Wix CMS?',
    answer: 'Yes. Wix CMS separates design from content, allowing structured collections and dynamic page templates for services, project portfolios, team directories, property listings, and case studies.',
  },
  {
    question: 'Can you add custom functionality with Velo?',
    answer: 'Yes. When standard Wix features are not enough, we use Velo by Wix, supported APIs, and custom JavaScript to build advanced workflows, custom databases, calculations, and integrations.',
  },
  {
    question: 'Can you connect Wix with third-party tools?',
    answer: 'Yes. We configure supported apps, webhooks, and APIs for CRM systems, email marketing, appointment booking, Google Analytics, Facebook Pixel, and payment gateways.',
  },
  {
    question: 'Can you redesign an existing Wix website?',
    answer: 'Yes. We can redesign an existing Wix website to improve its visual appeal, layout structure, mobile responsiveness, and conversion flow. Where appropriate, we can also upgrade your site to Wix Studio.',
  },
  {
    question: 'Can you migrate my website from WordPress or another platform to Wix?',
    answer: 'Yes. We migrate websites from WordPress, Squarespace, Webflow, or custom platforms to Wix, handling content, media, page structure, metadata, redirects, analytics, and SEO preservation.',
  },
  {
    question: 'Do you provide ongoing Wix maintenance?',
    answer: 'Yes. After launch, we offer monthly maintenance covering content updates, layout adjustments, app compatibility checks, performance audits, and continuous improvements.',
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
            Common questions about Wix development, Wix Studio, Velo customization, and ongoing website management.
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
                <span>{faq.question}</span>
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
