import { SectionIntro } from '../../Kinetic'

const faqs = [
  {
    q: 'What exactly is a 360 marketing agency and how is it different from a digital agency?',
    a: 'A typical digital agency usually manages only one or two isolated channels, such as running Meta ads or posting regular designs on Facebook. A 360 marketing agency takes holistic ownership of your entire growth flywheel: strategic brand positioning, commercial video production, paid performance ads (Meta, Google, YouTube, LinkedIn), technical and local SEO, high-speed landing page architecture, and lifecycle CRM automations. Everything works together so your ad spend doesn’t leak out of a broken website or an unoptimized offer.',
  },
  {
    q: 'How much ad spend budget do we need to start a 360 marketing partnership?',
    a: 'Ad spend is paid directly to advertising platforms (Meta, Google) from your own credit/prepaid card so you retain full ownership and financial control. For Bangladesh local campaigns, we typically recommend a minimum starting ad spend of BDT 80,000 to BDT 250,000+ per month to allow for meaningful creative and audience testing. For international export campaigns (US, UK, UAE), budgets generally start from $1,500 to $5,000+ monthly.',
  },
  {
    q: 'How soon can we expect to see tangible return on investment (ROI)?',
    a: 'Paid media channels (Meta & Google Ads) and direct response landing pages typically begin producing qualified leads and direct sales within the first 14 to 21 days of campaign launch. Compounding channels like organic short-form reels, brand authority, and technical SEO typically ramp up and deliver exponential compound returns within 60 to 90 days as algorithm trust and keyword rankings mature.',
  },
  {
    q: 'We already have an in-house graphic designer or marketing manager. Can we still work with Frame Cipher?',
    a: 'Absolutely. Many of our clients have an internal designer or junior marketing coordinator. We collaborate seamlessly by acting as your senior growth leadership: providing high-level strategy, advanced media buying, 4K video filming, complex technical SEO, and conversion web development, while empowering your internal staff with clear creative briefs and workflows.',
  },
  {
    q: 'Who owns the creative assets, ad accounts, video raw footage, and website code?',
    a: 'You own 100% of everything, always. All ad campaigns are hosted inside your own Meta and Google Business Managers. All video footage, design source files, landing page code, and customer data belong exclusively to your business. If our partnership ever ends, your assets stay with you.',
  },
  {
    q: 'How does Frame Cipher handle video filming if our business is located outside Dhaka?',
    a: 'While our main production studio is located in Dhaka (Ecb Chattar, Matikata), our video crew travels nationwide for scheduled multi-day shoot sprints across Chittagong, Sylhet, Gazipur, and other industrial or corporate hubs. We also produce studio-based commercial shoots where clients ship their physical products directly to our Dhaka studio for macro, lifestyle, and tabletop filming.',
  },
  {
    q: 'Can we start with specific pillars first (e.g. Paid Ads + Landing Page) and scale to full 360 later?',
    a: 'Yes. Our "Growth Foundation Sprint" is specifically structured for brands that want to fix their tracking, launch a high-converting landing page, and test a batch of high-performing ad creatives before expanding into full organic video production and comprehensive SEO.',
  },
  {
    q: 'How do you measure success and keep us updated on progress?',
    a: 'We reject vanity metrics like "impressions" and "post likes" as primary indicators of success. We track bottom-line commercial metrics: Cost Per Acquisition (CAC), Return on Ad Spend (ROAS), Qualified Sales Opportunities, and Revenue Generated. You receive a live, 24/7 Looker Studio dashboard, weekly progress summaries via dedicated Slack/WhatsApp, and bi-weekly executive strategy reviews.',
  },
  {
    q: 'What contract length or commitment is required?',
    a: 'Our initial engagement is typically structured as a 3-month partnership. Month 1 focuses on audits, asset production, tracking setup, and campaign launch. Months 2 and 3 focus on iterative optimization, audience expansion, and aggressive scaling. Following the initial period, retainers transition to flexible month-to-month arrangements with a standard 30-day notice.',
  },
  {
    q: 'How do we get started with Frame Cipher?',
    a: 'The first step is requesting a Free 360 Growth Audit. We will analyze your current digital presence, review your ad account health, audit your website speed and search rankings, and jump on a 30-minute discovery call to share our findings and outline a tailored roadmap.',
  },
]

export default function FAQ() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-frame-bg text-frame-fg border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Questions &amp; Answers"
          title="Frequently Asked Questions About 360 Marketing."
        >
          Everything you need to know about our approach, pricing, ad budgets, video production,
          and performance accountability.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px md:grid-cols-2">
          {faqs.map((faq, index) => (
            <article
              key={faq.q}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-neutral-900/60"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                  Question 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold uppercase leading-snug tracking-tight text-frame-fg">
                  {faq.q}
                </h3>
                <p className="mt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {faq.a}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
