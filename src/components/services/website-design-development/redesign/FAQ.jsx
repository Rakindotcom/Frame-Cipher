const faqs = [
  {
    question: 'Will a redesign hurt my current Google rankings?',
    answer: 'A redesign can harm search visibility if executed without SEO precautions—such as changing URLs without 301 redirects, removing valuable content, or misconfiguring canonical tags. At Framecipher, we conduct a pre-redesign SEO inventory, preserve high-value ranking pages, map precise 1-to-1 redirects, and monitor Search Console post-launch to protect and enhance your rankings.',
  },
  {
    question: 'Do you only redesign business websites?',
    answer: 'No. We redesign business corporate sites, high-volume ecommerce stores (Shopify, WooCommerce, Magento), content publishing blogs, portfolios, membership portals, and custom SaaS platforms. Each project scope is tailored to the specific operational needs of that website type.',
  },
  {
    question: 'Do I need a full rebuild or just a visual refresh?',
    answer: 'It depends on what our diagnostic audit finds. If your underlying platform, database, and sitemap are sound, a visual refresh focusing on styling, fonts, and responsive layouts may be sufficient. If outdated code, slow plugins, or CMS bottlenecks are holding you back, a deeper technical rebuild or migration is recommended.',
  },
  {
    question: 'What assets should I keep from my existing website during a redesign?',
    answer: 'We review existing URLs, high-traffic organic landing pages, backlink equity, customer conversion data, product listings, and third-party integrations. We keep what works effectively and focus our development effort only on what needs fixing.',
  },
  {
    question: 'Can you redesign my website without changing the domain name?',
    answer: 'Yes. Redesigns are routinely performed without changing your existing domain name. Development and testing take place in a private staging environment, and we switch over DNS records seamlessly when you give final approval.',
  },
  {
    question: 'Will you preserve my existing URLs?',
    answer: 'Wherever practical, we keep your established URL structure intact. If URLs must change to improve sitemap hierarchy, we establish permanent 301 redirects so both visitors and search engines transition without seeing 404 errors.',
  },
  {
    question: 'Can you redesign only part of my website?',
    answer: 'Yes. If our diagnostic audit reveals that only specific high-priority sections—such as your homepage, product pages, pricing tiers, or checkout funnel—need improvement, we can scope a targeted redesign without touching the rest of the site.',
  },
  {
    question: 'Can you redesign my website without changing the CMS?',
    answer: 'Yes, as long as your existing platform can support modern responsive layouts, security standards, and performance goals. We only recommend replatforming when your current CMS is the bottleneck.',
  },
  {
    question: 'How long does a website redesign typically take?',
    answer: 'Most redesigns take between 2 and 14 weeks. A focused visual refresh takes ~2–3 weeks, a standard redesign takes ~4–6 weeks, while large ecommerce replatforming or custom application redesigns take ~8–14+ weeks.',
  },
  {
    question: 'Do you work with businesses outside Bangladesh?',
    answer: 'Yes. Framecipher redesigns websites for domestic companies in Bangladesh as well as international brands across the US, UK, Australia, Canada, and the UAE.',
  },
  {
    question: 'How do you ensure zero downtime during launch?',
    answer: 'The entire redesign is built and thoroughly tested on a secure staging URL. Once approved, we synchronize the latest database content and update DNS pointers, resulting in an instant, zero-downtime cutover.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 md:mb-20 max-w-3xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Common questions regarding website redesigns, SEO preservation, platform migrations, and turnaround times.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 md:p-8 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg marker:content-none select-none">
                <span className="pr-4">{faq.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 sm:p-7 md:p-8 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

