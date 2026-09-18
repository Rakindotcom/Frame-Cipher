const faqs = [
  {
    question: 'Why choose custom WordPress development over a pre-built theme?',
    answer: 'A pre-built theme can be faster to launch, but it often includes unnecessary bloat, rigid layouts, and vulnerability risks. Custom WordPress development ensures the code, theme, and architecture are built around your actual content, brand, and performance requirements.',
  },
  {
    question: 'Do you use Elementor or Gutenberg?',
    answer: 'Yes. We work with Gutenberg, Elementor, or other suitable page-building approaches based on your editing workflow, design requirements, performance needs, and maintenance plans.',
  },
  {
    question: 'Can you build custom WordPress plugins?',
    answer: 'Yes. We develop custom plugins and functionality for business workflows, REST APIs, admin tools, custom blocks, and structured content that off-the-shelf plugins cannot handle effectively.',
  },
  {
    question: 'Can you build WooCommerce websites?',
    answer: 'Yes. We build WooCommerce stores with product catalogs, variations, checkout, local/international payment gateways (bKash, Nagad, Stripe, PayPal), inventory, order management, and custom checkout logic.',
  },
  {
    question: 'Can you migrate our existing website to WordPress?',
    answer: 'Yes. We can migrate websites from platforms such as Wix, Webflow, Joomla, Drupal, or older WordPress installations, including content, media, URLs, metadata, 301 redirects, and SEO preservation.',
  },
  {
    question: 'Can you optimize an existing slow WordPress website?',
    answer: 'Yes. We audit caching, images, plugins, scripts, database performance, hosting configurations, and other technical factors to dramatically improve speed and Core Web Vitals.',
  },
  {
    question: 'Will my WordPress website be SEO-ready?',
    answer: 'We build important technical and structural SEO foundations into development, including website architecture, URLs, schema markup, XML sitemaps, internal linking, and mobile usability.',
  },
  {
    question: 'Can you build membership, directory, or LMS websites?',
    answer: 'Yes. WordPress can support membership, directory, education, and subscription business models when the required plugin architecture and custom code are properly structured.',
  },
  {
    question: 'Will I have WordPress admin access after launch?',
    answer: 'Yes. You receive full administrator access, ownership of all assets, and editorial handover guidance so your team can manage content independently.',
  },
  {
    question: 'Do you provide ongoing WordPress maintenance?',
    answer: 'Yes. WordPress updates, security checks, backups, technical fixes, performance monitoring, and feature improvements can be provided through an ongoing maintenance scope.',
  },
  {
    question: 'Do you work with clients outside Bangladesh?',
    answer: 'Yes. We work with businesses across Bangladesh as well as international clients in the UAE, US, UK, Australia, Canada, and other global markets.',
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
            Common questions about custom WordPress themes, page builders, WooCommerce, and website migrations.
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
